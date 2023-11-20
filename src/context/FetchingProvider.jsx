"use client";
import { updateSimilar } from "../fetch/updateSimilar";
import { createContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import isDeepEqual from "../app/utils/objectCompare";
import useFetch from "../hooks/useFetch";
import "react-toastify/dist/ReactToastify.css";
//import { useSWRConfig } from "swr";

const FetchingContext = createContext();

const FetchingProvider = ({ children }) => {
  //const { cache } = useSWRConfig();

  const [origin, setOrigin] = useState("");
  const [pagination, setPagination] = useState(
    Number( 1)
  );
  const [similar, setSimilar] = useState( null);
  const [similarData, setSimilarData] = useState({});
  const [originData, setOriginData] = useState({});
  const [status, setStatus] = useState();
  const [totalProducts, setTotalProducts] = useState(
    Number( 0)
  );
  const [message, setMessage] = useState("Product still needs to be matched");

  useEffect(() => {
    if (
      similarData?.status !== undefined &&
      Number.isFinite(status) &&
      similarData.status !== status
    ) {
      const updateData = async () => {
        await updateSimilar(similarData.id_similar, status, similar);
        similarData.status = status;
      };
      updateData();
      toast.info(`Status updated to ${status}`, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
      });
      setMessage(
        status === 0
          ? "Product still needs to be matched"
          : status === 1
          ? "Product Matched"
          : "Product not matched"
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

/*   useEffect(() => {
    cache.set("pagination", pagination);
  }, [pagination]);

  useEffect(() => {
    cache.set("origin", origin);
  }, [origin]);

  useEffect(() => {
    cache.set("similar", similar);
  }, [similar]);

  useEffect(() => {
    cache.set("totalProducts", totalProducts);
  }, [totalProducts]); */

  const resSimilar = useFetch(
    () =>
      !!similar &&
      `http://localhost:3000/api/similars?similar=${similar}&pagination=${pagination}`
  );

  if (
    !resSimilar.isError &&
    !resSimilar.isLoading &&
    !resSimilar.data?.error &&
    resSimilar.data &&
    resSimilar.data.data?.id_similar !== similarData.id_similar
  ) {
    setSimilarData(resSimilar.data.data);
    setStatus(resSimilar.data.data.status);
    setMessage(
      resSimilar.data.data.status === 0
        ? "Product still needs to be matched"
        : resSimilar.data.data.status === 1
        ? "Product Matched"
        : "Product not matched"
    );
  }

  const resTotal = useFetch(
    () =>
      !!similar && `http://localhost:3000/api/similars/total?similar=${similar}`
  );

  if (
    !resTotal.isError &&
    !resTotal.isLoading &&
    resTotal.data &&
    resTotal.data.data !== totalProducts
  ) {
    setTotalProducts(resTotal.data.data);
  }

  const resOrigin = useFetch(
    () =>
      !!origin &&
      !!similarData.id_origin &&
      `http://localhost:3000/api/origins?origin=${origin}&id_origin=${similarData.id_origin}`
  );

  if (
    !resOrigin.isError &&
    !resOrigin.isLoading &&
    resOrigin.data &&
    !isDeepEqual(resOrigin.data.data, originData)
  ) {
    setOriginData(resOrigin.data.data);
  }

  /* if(!resOrigin.isError &&
    resOrigin.isLoading && 
    !resOrigin.data &&
    !isLoading
    ){
      setIsLoading(true);
    } */

  /* 
  
  

  useEffect(() => {
    const handleKeyPress = (event) => {
      switch(event.key){
        case 'ArrowLeft':
          if(pagination > 1){
            setPagination(pagination - 1);
          }
          break;
        case 'ArrowRight':
          if(pagination < totalProducts){
            setPagination(pagination + 1);
          }
          break;
          case 'y':
          setStatus(1);
          break;
        case 'n':
          setStatus(2);
          break;
        case 'p':
          setStatus(0);
          break;
        default:
          break;
      }
    };

    const listener = document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', listener);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  },['y','n','p']);

   */

  return (
    <FetchingContext.Provider
      value={{
        setOrigin,
        setSimilar,
        setPagination,
        origin,
        similar,
        pagination,
        similarData,
        originData,
        status,
        setStatus,
        totalProducts,
        message,
      }}
    >
      {children}
      <ToastContainer />
    </FetchingContext.Provider>
  );
};

export { FetchingProvider };

export default FetchingContext;
