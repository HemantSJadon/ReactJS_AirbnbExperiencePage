import React from "react";
import heroPic from "../images/photo-grid.png";

export default function Hero(){
    return (
        <section className="hero">
            <img className="hero--gridphoto" src={heroPic} alt="hero--gridphoto"></img>
            <h1 className="hero--title">Online Experiences</h1>
            <p className="hero--desciption">Join unique interactive activities led by<br/>one-of-a-kind hosts—all without leaving<br/>home</p>
        </section>
    )
}