import React from "react";
import airbnblogo from "../images/airbnb-logo.png";

export default function Navbar(){
    return (
        <nav className="navbar">
            <img className="navbar--logo" src={airbnblogo} alt="airbnb logo"></img>
        </nav>
    )
}