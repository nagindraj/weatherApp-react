import React from 'react';
import mainTable from './MainTable.css'


const MainTB = (props) => {
    const sunriseHours = new Date(props.sunrise * 1000).getHours();
    const sunriseMins = new Date(props.sunrise * 1000).getMinutes();
    const sunsetHours =new Date(props.sunset * 1000).getHours();
    const sunsetMins =new Date(props.sunset * 1000).getMinutes();
    return ( 
        <div className="size">
            <table className="table table-striped table-bordered">
                <tbody>
                    <tr>
                        <td>Wind </td>
                        <td>{props.windSpeed} m/s</td>
                    </tr>
                    <tr>
                        <td>Pressure</td>
                        <td>{props.pressure} hpa</td>
                    </tr>
                    <tr>
                        <td>Humidity</td>
                        <td>{props.humidity} %</td>
                    </tr>
                    <tr>
                        <td>Sunrise</td>
                        <td>{sunriseHours}:{sunriseMins}</td>
                    </tr>
                    <tr>
                        <td>Sunset</td>
                        <td>{sunsetHours}:{sunsetMins}</td>
                    </tr>
                    <tr>
                    <td>Geo coords</td>
                    <td>[{props.coordlon} ,{props.coordlat}]</td>
                </tr>
                </tbody>
            </table>
           
        </div>   
    );
} 
export default MainTB;