import React, { useState } from 'react';
import axios from 'axios';
import './App.css'
import Weather from './components/Weather';

export default function App() {

  const [data,setData] = useState({});
  const [location,setLocation] = useState("");

  const apiKey = "428743829d5bc610e91509e6bcaaa623";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`;

  const searchLocation = (e)=>{
    if(e.key === "Enter"){
      axios.get(url).then((response)=>{
        setData(response.data);
        console.log(response.data);
      });
      setLocation("");
    }
  }

  return (
    <div className='w-full h-full relative max-w-screen-lg mx-auto'>
        <div className='text-center p-4'>
            <input type="text" value={location} onChange={(e)=> setLocation(e.target.value)} onKeyDownCapture={searchLocation} className='py-3 px-6 md:w-[700px] w-[360px] mx-auto text-lg rounded-full border-gray-200 placeholder:text-gray-400 focus:outline-none bg-white-600/100 shadow-md'  placeholder='Enter location'/>
        </div>

        <Weather weatherData={data}/>
    </div>
  )
}
