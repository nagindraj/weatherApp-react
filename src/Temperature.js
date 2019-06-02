import React from 'react';
import './temp.css';

const Temp = (props) => {
    const kelvinConversion = 273.15;
    const roundtemp = Math.round((props.temp - kelvinConversion), 2);
    const iconUrl = 'http://openweathermap.org/img/w/' + props.icon +'.png';
    
    return ( 
        <div className="temp">
            <img className="img" src={iconUrl} alt=""></img>
            <span>{roundtemp}°C</span>
        </div>   
    );
} 
export default Temp;