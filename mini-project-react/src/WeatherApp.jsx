import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox"
import { useState } from "react";

export default function WeatherApp(){

    const [weatherInfo,setWeatherInfo]=useState({
        city: "Hyderabad",
        temp: 25.05,
        feelsLike: 24.42,
        humidity: 84,
        tempMin: 20.34,
        tempMax: 27.76,
        Weather: "Drizzle"
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>WEATHER APP</h1>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}