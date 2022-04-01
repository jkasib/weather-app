import React, { useEffect, useState } from 'react'

const Card = ({
    temp,
    humidity,
    pressure,
    weatherMood,
    name,
    country,
    speed
}) => {

    const [weatherMoodClass, setWeatherMoodClass] = useState('');


    useEffect(() => {
        if(weatherMood){
            switch(weatherMood){
                case "Cloudy": 
                setWeatherMoodClass("fa-solid fa-clouds");
                break;
                case "Haze": 
                setWeatherMoodClass("fas fa-smog");
                break;
                case "Mist": 
                setWeatherMoodClass("fas fa-cloud-drizzle");
                break;
                case "Clear": 
                setWeatherMoodClass("fas fa-cloud");
                break;
                default: 
                setWeatherMoodClass("fa-solid fa-sun");
                break;
            }
    
        }
    }, [weatherMood])
    

    
  return (
    <>
        <div className="container">
                <div className="row1">
                    <div className="weatherMood">
                        <i className={weatherMoodClass}></i>
                    </div>
                </div>


                <div className="row2">
                    <div className="col1">
                        <p className="temp">{temp}&deg;</p>
                        <p className="situation">
                            {weatherMood} <br />
                            <span>{name}, {country}</span>
                        </p>
                    </div>
                    <div className="col2">
                    <p className="date">{new Date().toLocaleString()}</p>
                    </div>
                </div>

                <div className="row3">
                    <div className="colSituation">
                        <i className="fa-solid fa-cloud-sun iconSituation" />
                        <p className="sitPara">
                            15.26PM <br />
                            Sunset
                        </p>
                    </div>
                    <div className="colSituation">
                        <i className="fa-solid fa-temperature-full iconSituation" />
                        <p className="sitPara">
                            {humidity} <br />
                            Humidity
                        </p>
                    </div>
                    <div className="colSituation">
                        <i className="fa-solid fa-cloud-rain iconSituation" />
                        <p className="sitPara">
                            Pressure <br />
                            {pressure} MM
                        </p>
                    </div>
                    <div className="colSituation">
                        <i className="fa-solid fa-wind iconSituation" />
                        <p className="sitPara">
                            Wind <br />
                            {speed}
                        </p>
                    </div>
                </div>

            </div>

    </>
  )
}

export default Card