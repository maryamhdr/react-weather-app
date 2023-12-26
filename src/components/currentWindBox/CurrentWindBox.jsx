import React from "react";
import "./currentWindBox.css";

const CurrentWindBox = () => {
    return (
        <div className="current-wind-box">
            <i className="fa-solid fa-wind wind-icon"></i>
            <span id="current-wind" title="wind-speed">
        6.08 Km/H
      </span>
        </div>
    );
};

export default CurrentWindBox;