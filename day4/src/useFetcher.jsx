import { useState, useEffect } from "react";

const useFetcher = (url) => {
    const[data, setdata] = useState([])
    useEffect(() => {
        const getdata = async() => {
            const res = await fetch(url)
            const resParse = await res.json()
            setdata(resParse)
        }
        
        },[]
    )
    return data;
}
export default useFetcher;