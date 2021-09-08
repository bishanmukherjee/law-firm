import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Slider from "./Slider";
import FacebookIcon from "@material-ui/icons/Facebook";
import CallIcon from "@material-ui/icons/Call";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import About from "./About";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import WhyUs from "./WhyUs";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <div className="rown" id="home">
        <div className="left">
          <div className="content1">
            Welcome to <span className="bld">Financial Law LLC</span>
          </div>
        </div>
        <div className="right">
          <div className="content2">
            <CallIcon />
            (800) 1234 778 778(24 hours)
          </div>
          <span>|</span>
          <div className="content3">Get a free quote</div>
          <span>|</span>
          <div className="content4">
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
          </div>
        </div>
      </div>
      <Navbar />
      <Slider />
      <About />
      <WhyUs />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
