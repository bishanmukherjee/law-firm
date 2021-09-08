import React from "react";
import "./About.css";
function About() {
  return (
    <div className="parallax" id="about">
      <img
        src="https://www.jisuniversity.ac.in/images/law-info.jpg"
        alt="img"
        className="about"
      />
      <div className="content">
        <div className="upper">
          <span className="abt">About Us</span>
          <span className="subz">Who We Are</span>
        </div>
        <div className="context">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>
        <button className="btnyt" type="button">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;
