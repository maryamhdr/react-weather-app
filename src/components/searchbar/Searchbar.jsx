import React from "react";
import "./searchbar.css";

const Searchbar = () => {
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