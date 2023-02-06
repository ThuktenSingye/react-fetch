import { useState, useEffect } from "react";

const useFetch = (url)=>{
    const [data, setData] = useState(null)
    // setting the pending state using useState
    const [isPending, setIsPending] = useState(false)
    // handling error if there is any wrong with url. for that we can use try and catch method
    const [error, setError] = useState(null)
    useEffect(()=>{
        const fetchData = async ()=>{
            setIsPending(true) // going to fetch data 
            try{
                const res = await fetch(url)
                if (!res.ok){ // false error. ok will be true if there is no error
                    throw new Error(res.statusText) // custom error throwing
                }
                const jsonData = await res.json()
        
                setIsPending(false)
                setData(jsonData)
            } catch (err){
                setIsPending(false)
                setError('Could not fetch data ')
                console.log(err.message)
            }
          
            // done fetching so set the pending state to false
            
        }   
        fetchData();
    }, [url])

    return {data: data, isPending, error}
}

export default useFetch