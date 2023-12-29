import {useState} from "react";
import Header from "./components/header/Header";
import Searchbar from "./components/searchbar/Searchbar";
import WeatherDataView from "./components/weatherDataView/WeatherDataView";
import ForecastList from "./components/forecastList/ForecastList";
import EmptyState from "./components/emptyState/EmptyState";
import Footer from "./components/footer/Footer";

export default function App() {
    const [weatherData, setWeatherData] = useState({isDataReady: false});

    const onDataReady = (data) => {
        setWeatherData({
            isDataReady: true,
            wind: data.wind.speed,
            humidity: data.main.humidity,
            city: data.name,
            country: data.sys.country,
            iconUrl: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
            description: data.weather[0].description,
            temperature: Math.round(data.main.temp),
            date: new Date()
        })
    }

    return (
        <div className="App">
            <div className="container">
                <Header/>
                <Searchbar onDataReady={onDataReady}/>
                {weatherData.isDataReady && <>
                    <WeatherDataView weatherData={weatherData}/>
                    {/*<ForecastList/>*/}
                </>}
                {!weatherData.isDataReady && <EmptyState/>}
                <Footer/>
            </div>
        </div>
    );
}