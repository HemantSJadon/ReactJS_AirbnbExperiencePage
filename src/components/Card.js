import React from "react";
import katiePic from "../images/katie.png";
import star from "../images/star.png";

export default function Card(){
    return (
        <section className="card">
            <img className="card--image" src={katiePic} alt="katie pic"></img>
            <section className="card--stats">
                <img className="card--stats--star" src={star} alt="star"></img>
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </section>
            <p>Life Lessons With Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person </p>
        </section>
    )
}