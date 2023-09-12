'use client'
import { useContext } from "react"
import FetchingContext from "../context/FetchingProvider"

const useFetching = () => {
    return useContext(FetchingContext)
}

export default useFetching