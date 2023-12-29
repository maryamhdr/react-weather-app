import React from "react";
import "./currentWindBox.css";

const CurrentWindBox = ({wind}) => (
    <div className="current-wind-box">
        <i className="fa-solid fa-wind wind-icon"></i>
        <span title="Wind speed">{wind} km/h</span>
    </div>
);

export default CurrentWindBox;