import React from "react";
import "./currentPlaceBox.css";

const CurrentPlaceBox = ({city, country}) => (
    <div className="current-place-box">
        <i className="fa-solid fa-location-dot location-icon"></i>
        <span title="Place">{city}, {country}</span>
    </div>
);

export default CurrentPlaceBox;