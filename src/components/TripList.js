import React from 'react'
import {useState} from "react";
import "./TripList.css"
import useFetch from "../hooks/useFetch" // dont use curly
function TripList() {
    // we can create reusable custom react hook that we can use code below anytime like react hook
    // const [trips, setTrips] = useState([])
    const [url, setUrl] = useState("http://localhost:3000/trips");
    const {data:trips} = useFetch(url)
    // const fetchTrip = useCallback(async ()=>{  
    //     const response = await fetch(url)
    //     const json = await response.json()
    //     setTrips(json)
    // },[url])
    // // since useEffect is rendered everytime the dependcy array changes, below the function
    // // fetch trip changes, meaning the memory refererence is different Every time a component re-renders, its functions get recreated.
    // // hence to prevent function from recreation, we use useCallback hook. useCallback will create new version function when url dependency changes 
    // useEffect(()=>{
    //     fetchTrip() // we can use all fucntion definitation inside here to avoid useCallback
    // }, [fetchTrip])
    
    // useEffect(()=>{ // this function run once 
    //     fetch(url) // here url is dynamic hence we need to specifyc dependency value. hence whenever the url value has chanegd the useEffect function will run once again
    //     .then( response=> response.json())
    //     .then( data =>setTrips(data)) 
    // }, [url]) 
    
    // fetch("http://localhost:3000/trips") // use to fetch an resources asynchronously. it take path to resources as an argument. 
    // // it return promise that resolve with response object
    // // The Response object, in turn, does not directly contain the actual JSON 
    // // response body but is instead a representation of the entire HTTP response.
    // //  So, to extract the JSON body content from the Response object, we use the 
    // //  json() method, which returns a second promise that resolves with the result
    // //   of parsing the response body text as JSON.
    //     .then( response=> response.json())
    //     .then( data =>setTrips(data)) 
  return (
    <div className='triplist'>
        <h2>Trip List</h2>
        <ul>
            {trips && trips.map(trip =>(
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                </li>
            ))}
        </ul>
        <div className="filters">  
            <button onClick={()=>setUrl("http://localhost:3000/trips?loc=Europe")}>European trips</button>
            <button onClick={()=>setUrl("http://localhost:3000/trips?loc=America")}>American trips</button>
            <button onClick={()=>setUrl("http://localhost:3000/trips?loc=Bhutan")}>Bhutanese trips</button>
            <button onClick={()=>setUrl("http://localhost:3000/trips")}>All trips</button>
        </div>
    </div>
  )
}

export default TripList