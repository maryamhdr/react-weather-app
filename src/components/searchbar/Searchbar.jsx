import React, {useEffect, useState} from "react";
import axios from "axios";
import "./searchbar.css";

const Searchbar = ({onDataReady}) => {
    const [city, setCity] = useState("New York");
    const apiKey = '99b8f9330a1bfba3a85e523fd3c2e528';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    useEffect(() => {
        axios.get(apiUrl).then((response) => {
            if(onDataReady) {
                onDataReady(response.data);
            }
        })
    }, []);

    return (
        <form className="flex-container">
            <div className="search-input-container">
                <i className="fa-solid fa-magnifying-glass search-icon"></i>
                <input className="search-input"
                       type="search"
                       placeholder="Search for places..."
                       name="search"
                       id="search-input"
                       autoFocus="on"/>
            </div>
            <button type="submit" className="search-btn" id="search-btn">
                <i className="fa-solid fa-location-dot"></i>
            </button>
        </form>
    );
};

export default Searchbar;