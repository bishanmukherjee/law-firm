import React from "react";
import "./Footer.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import CallIcon from "@material-ui/icons/Call";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

const Footer = () => {
  return (
    <div className="footerzz">
      <div className="conte">
        <div className="first-row">
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
      </div>
      <div className="conte">
        <div className="second-row">
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
      <div className="conte">
        <div className="rowz">
          <hr style={{ color: "#fff" }}></hr>
          <div className="right">
            <div className="content2 foot">
              <CallIcon />
              (800) 1234 778 778(24 hours)
            </div>
            <span>|</span>
            <div className="content4 foot">
              <FacebookIcon />
              <TwitterIcon />
              <InstagramIcon />
            </div>
            <span>|</span>
            <div className="content3 foot">Mail Us: info@flllc.com</div>
          </div>
          <hr></hr>
        </div>
      </div>
      <div className="conte">
        Copyright 2021 © Financial Law LLC. All Righrs Reserved
      </div>
    </div>
  );
};
export default Footer;
