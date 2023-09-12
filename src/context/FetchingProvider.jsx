'use client'
import { getSimilar } from "../fetch/getSimilar";
import {getOrigin} from "../fetch/getOrigin";
import { createContext , useState, useEffect} from "react"

const FetchingContext = createContext()

const FetchingProvider = ({children}) => {
    const [pagination, setPagination] = useState(1);
    const [origin, setOrigin] = useState('');
    const [similar, setSimilar] = useState('');
    const [similarData, setSimilarData] = useState({});
    const [originData, setOriginData] = useState({});
    const [status, setStatus] = useState('default');

    const getData = async (funct, table, otherOption) =>{
        let currentData = await funct(table,otherOption);
        currentData.then((data) => {
            if(table==='o'){
                setOriginData(data);
            }else{
                setSimilarData(data);
            }
        });
    }

    useEffect(() => {
        if (similar.length > 0) {
            getData(getSimilar, similar, pagination);
        }
    }, [similar, pagination]);

    useEffect(() => {
        if (similarData.id_origin) {
            getData(getOrigin, origin, similarData.id_origin);
        }
    }, [origin, similarData]);

    useEffect(() => {
        const storedPagination = window.localStorage.getItem("pagination");
        const storedOrigin = window.localStorage.getItem("origin");
        const storedSimilar = window.localStorage.getItem("similar");
        if (storedPagination && storedOrigin && storedSimilar) {
            setPagination(parseInt(storedPagination));
            setOrigin(storedOrigin);
            setSimilar(storedSimilar);
        }
    }, []);

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
        setPagination(1);
    },[origin,similar])

    useEffect(()=>{
        
    },[status])

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
        }}
    >
        {children}
    </FetchingContext.Provider>
  )
}

export { FetchingProvider}

export default FetchingContext