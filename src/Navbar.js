import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav">
      <div className="left">
        <img
          className="imgz"
          src="https://cpng.pikpng.com/pngl/s/286-2863405_original-png-clip-art-file-profile-icon-svg.png"
          alt=""
        ></img>
        <div className="title">
          <span className="main">Financial Law LLC</span>
          <span className="sub">
            Persuasiveness, Persistance, Professionalism
          </span>
        </div>
      </div>
      <div className="right">
        <span className="items">
          <a href="#home">Home</a>
        </span>
        <span>|</span>
        <span className="items">
          <a href="#about">About Us</a>
        </span>
        <span>|</span>
        <span className="items">
          <a href="#approach">Our Approach</a>
        </span>
        <span>|</span>
        <span className="items">
          <a href="#contact">Contact Us</a>
        </span>
      </div>
      <div className="resp-nav">
        <span className="items">
          <a href="#home">Home</a>
        </span>
        <span>|</span>
        <span className="items">
          <a href="#about">About Us</a>
        </span>
        <span>|</span>
        <span className="items">
          <a href="#approach">Our Approach</a>
        </span>
        <span>|</span>
        <span className="items">
          <a href="#contact">Contact Us</a>
        </span>
      </div>
    </div>
  );
}

export default Navbar;
