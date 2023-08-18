import React from "react";
import bgImg from "../assets/images/about-hero.png";
import { Link } from "react-router-dom";

import "../assets/css/about.css";
export default function About() {
  return (
    <Link to="/">
      <div className="about-page-container">
        <img src={bgImg} className="about-hero-image" alt="About us" />
        <div className="about-page-content">
          <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
          <p>
            Our mission is to enliven your road trip with the perfect travel van
            rental. Our vans are recertified before each trip to ensure your
            travel plans can go off without a hitch. (Hitch costs extra )
          </p>
          <p>
            Our team is full of vanlife enthusiasts who know firsthand the magic
            of touring the world on 4 wheels.
          </p>
        </div>
      </div>
    </Link>
  );
}