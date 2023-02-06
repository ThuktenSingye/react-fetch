import { useState, useEffect } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null)
    useEffect(()=>{
        const fetchData = async ()=>{
            const res = await fetch(url)
            const jsonData = await res.json()
            setData(jsonData)
        }   
        fetchData();
    }, [url])

    return {data: data}
}

export default useFetch