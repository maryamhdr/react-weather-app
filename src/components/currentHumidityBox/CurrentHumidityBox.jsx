import React from "react";
import "./currentHumidityBox.css";

const CurrentHumidityBox = ({humidity}) => (
    <div className="current-humidity-box">
        <i className="fa-solid fa-water water-icon"></i>
        <span title="Humidity">{humidity}%</span>
    </div>
);

export default CurrentHumidityBox;