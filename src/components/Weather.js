import React, { useEffect, useState } from 'react'
import Card from './Card'
import './style.css'

const Weather = () => {

    const [inputData, setInputData] = useState('Dhaka');
    const [weatherObj, setWeatherObj] = useState({});



    const getWeather = async () => {
       

        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${inputData.toLowerCase()}&units=metric&appid=5ede7fff23903eb6b2de2f0f3744866f`;

            let res = await fetch(url);
            let data = await res.json();

            let { temp, humidity, pressure } = data.main;
            let { main:weatherMood } = data.weather[0];
            let { name } = data;
            let { country } = data.sys;
            let { speed } = data.wind;

            let weatherInfo = {
                temp,
                humidity,
                pressure,
                weatherMood,
                name,
                country,
                speed
            }
            
            setWeatherObj(weatherInfo);


        } catch (error) {
            console.log(error);
            
        }

    }

    useEffect(() => {
      getWeather();
    }, [])
    


  return (
    <>
        <div className="main-container">

            <div className="searchDiv">
                <input type="text" className="search" placeholder="Search..." value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <button className='submitBtn' onClick={getWeather}>Search</button>
            </div>

            <Card {...weatherObj} />

        </div>
    </>
  )
}

export default Weather