import React from 'react';
import ReactDOM from 'react-dom';
import Location from './WeatherLocation';
import Temp from  './Temperature';
import Desc from './WeatherDesc';
import MainTB from './MainTable';
import indexcss from  './index.css'
import axios from 'axios';



class App extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            weather: undefined
        };
    }
    componentDidMount() {
        this.fetchWeather();
    }

    fetchWeather() {
        var apiKey = '48f955f220282f00d92a5377d14fe605';
        const url = 'https://api.openweathermap.org/data/2.5/weather?q=berlin&appid=' + apiKey;

        axios.get(url)
        .then((response) => {
            console.log(response);
            this.setState({ weather: response.data });
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    renderMainTB(weather){
        const WindSpeed = weather.wind.speed;
        const Pressure = weather.main.pressure;
        const Humidity = weather.main.humidity;
        const Sunrise = weather.sys.sunrise;
        const Sunset = weather.sys.sunset;
        const CoordLat = weather.coord.lat;
        const CoordLon = weather.coord.lon;
        console.log(CoordLat);
        return (
            <div>
                <MainTB windSpeed={WindSpeed} pressure ={Pressure} humidity = {Humidity} sunrise ={Sunrise} sunset ={Sunset} coordlat ={CoordLat} coordlon ={CoordLon}/>
            </div>
        );
    }

    renderLocation(weather) {
        const city = weather.name;
        const country = weather.sys.country;
        return(
            <div>
                <Location city={city} country={country} />
            </div>
        );
    }
   
    renderTemp(weather) {
        const temp = weather.main.temp;
        const icon = weather.weather[0].icon;
        return (
            <Temp temp={temp} icon={icon}/>
        )
    }
    renderDesc(weather) {
        const desc = weather.weather[0].description;
        console.log(desc);
        return (
            <Desc desc={desc}/>
        )
    }

    render() {
        const weather = this.state.weather;

        if(weather !== undefined) {
            const location = this.renderLocation(weather);
            const temp = this.renderTemp(weather);
            const desc = this.renderDesc(weather);
            const mainWeatherTable = this.renderMainTB(weather);
            return (
                <>
                    <h3 className="headercolor">Current weather and forecasts in your city</h3>
                    {location}
                    {temp}
                    {desc}
                    {mainWeatherTable}
                </>
            );
        }
        return (
            <div>Loading !!!</div>
        )
    }
}
ReactDOM.render(
    <App/>,document.querySelector('#root')
);