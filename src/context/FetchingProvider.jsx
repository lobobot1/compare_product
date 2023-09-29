"use client";
import { getSimilar, getTotalSimilar } from "../fetch/getSimilar";
import { updateSimilar} from "../fetch/updateSimilar";
import { getOrigin } from "../fetch/getOrigin";
import { createContext, useState, useEffect, useCallback } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FetchingContext = createContext();

const FetchingProvider = ({ children }) => {
  const [pagination, setPagination] = useState(1);
  const [origin, setOrigin] = useState("");
  const [similar, setSimilar] = useState("");
  const [similarData, setSimilarData] = useState({});
  const [originData, setOriginData] = useState({});
  const [status, setStatus] = useState();
  const [totalProducts, setTotalProducts] = useState(0);
  const [message, setMessage] = useState('Product still needs to be matched');

  const getData = async (funct, table, otherOption) => {
    const currentData = await funct(table, otherOption);
    if(currentData.ok){
      let data = await currentData.json();
      if (table.slice(-1) === "o") {
        setOriginData(data.data);
      } else {
        const currentStatus = data.data.status;
        setSimilarData(data.data);
        setStatus(currentStatus);
        setMessage(currentStatus === 0 ? 'Product still needs to be matched' : currentStatus === 1 ? 'Product Matched' : 'Product not matched');
      }
    }
  };

  const getTotal = useCallback( async () => {
    if(similar.length > 0){
      const total = await getTotalSimilar(similar);
      if(total.ok){
        let data = await total.json();
        setTotalProducts(data.data);
      }
    }
  }, [similar])

  const updateStatus = useCallback(async () => {
     await updateSimilar(similarData.id_similar,status, similar);
  },[similarData.id_similar, status, similar])

  useEffect(() => {
    const storedPagination = window.localStorage.getItem("pagination");
    const storedOrigin = window.localStorage.getItem("origin");
    const storedSimilar = window.localStorage.getItem("similar");
    const storedTotalProducts = window.localStorage.getItem("totalProducts");
    if (storedPagination && storedOrigin && storedSimilar && storedTotalProducts) {
      setPagination(parseInt(storedPagination));
      setOrigin(storedOrigin);
      setSimilar(storedSimilar);
      setTotalProducts(parseInt(storedTotalProducts));
    }
  }, []);

  useEffect(() => {
    getTotal();
    setPagination(1);
  }, [getTotal,origin, similar]);
  
  useEffect(() => {
    if (similar.length > 0) {
      getData(getSimilar, similar, pagination);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [similar, pagination]);

  useEffect(() => {
    if (similarData.id_origin) {
      getData(getOrigin, origin, similarData.id_origin);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [origin, similarData.id_origin]);
  
  useEffect(() => {
    if(similarData.status!==undefined){
      setStatus(similarData.status);
    }
  }, [similarData.status]);
  
  useEffect(() => {
    if(similarData?.status!==undefined && Number.isFinite(status) && similarData.status !== status){
      const updateData = async () => {
        await updateStatus();
        similarData.status = status;
      }
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
      setMessage(status === 0 ? 'Product still needs to be matched' : status === 1 ? 'Product Matched' : 'Product not matched');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

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

  },['y','n','p','ArrowLeft','ArrowRight']);

  useEffect(() => {
    window.localStorage.setItem("pagination", pagination);
  }, [pagination]);

  useEffect(() => {
    window.localStorage.setItem("origin", origin);
  }, [origin]);

  useEffect(() => {
    window.localStorage.setItem("similar", similar);
  }, [similar]);

  useEffect(() => {
    window.localStorage.setItem("totalProducts", totalProducts);
  },[totalProducts]);

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
        message
      }}
    >
      {children}
      <ToastContainer />
    </FetchingContext.Provider>
  );
};

export { FetchingProvider };

export default FetchingContext;
