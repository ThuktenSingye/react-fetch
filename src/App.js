
import { useState } from 'react';
import './App.css';
import TripList from './components/TripList';

function App() {
  const [showTrips, setShowTrips] = useState(true)
  return (
    <div className="app">
      {/* <button onClick={()=>setShowTrips(!showTrips)}>{showTrips ? "Hide":"Show"}</button> */}
      {/* when user click hiide button when data is fetching behind asuncrnouly, there we cant update state to the component because the component is unmounted from the dom . so
    we nned cleanup function which is function return  inside the useEffect hook. this cleanup function is fired whenever the component using useEffect component is unmounted from the DOM */}
      <button onClick={()=>setShowTrips(false)}>Hide</button>
      {showTrips &&  <TripList/>}
    </div>
  );
}

export default App;
