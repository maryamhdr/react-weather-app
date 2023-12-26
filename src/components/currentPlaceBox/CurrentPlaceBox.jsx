import React from "react";
import "./currentPlaceBox.css";

const CurrentPlaceBox = () => {
    return (
        <div className="current-place-box">
            <i className="fa-solid fa-location-dot location-icon"></i>
            <span id="city-name">Abhar, Iran</span>
        </div>
    );
};

export default CurrentPlaceBox;