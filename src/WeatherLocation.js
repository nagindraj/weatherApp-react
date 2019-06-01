import React from 'react';

const Location = (props) => {
    return ( 
        <div>
            <span>Weather in</span>  
            <span> {props.city}</span>
            <span>, </span>
            <span>{props.country}</span>
        </div>   
    );
} 
export default Location;