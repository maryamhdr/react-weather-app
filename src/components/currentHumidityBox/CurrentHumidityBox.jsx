import React from "react";
import "./currentHumidityBox.css";

const CurrentHumidityBox = () => {
    return (
        <div className="current-humidity-box">
            <i className="fa-solid fa-water water-icon"></i>
            <span id="current-humidity" title="humidity">
        23%
      </span>
        </div>
    );
};

export default CurrentHumidityBox;