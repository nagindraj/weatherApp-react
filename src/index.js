import React from 'react';
import ReactDOM from 'react-dom';
import Location from './WeatherLocation';
import Temp from  './Temperature';
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

    render() {
        const weather = this.state.weather;

        if(weather !== undefined) {
            const location = this.renderLocation(weather);
            const temp = this.renderTemp(weather);
            return (
                <>
                    {location}
                    {temp}
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