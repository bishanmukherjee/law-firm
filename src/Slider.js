import React from "react";
import "./Slider.css";

export default function CarouselComponent() {
  return (
    <div className="cont">
      <div
        class="carousel"
        data-flickity='{ "lazyLoad": true, "autoPlay": true }'
      >
        <div class="carousel-cell">
          <img
            class="carousel-cell-image"
            data-flickity-lazyload="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/grapes.jpg"
            alt="tulip"
          />
        </div>
        <div class="carousel-cell">
          <img
            class="carousel-cell-image"
            data-flickity-lazyload="https://www.investopedia.com/thmb/YFJ-FS8iqgmu621J3VKr65zqIjw=/1000x1000/smart/filters:no_upscale()/GettyImages-1058294748-9f8e02c780ba42d69bb02fd2c25a1ac5.jpg"
            alt="grapes"
          />
        </div>
        <div class="carousel-cell">
          <img
            class="carousel-cell-image"
            data-flickity-lazyload="https://s3-us-west-2.amazonaws.com/s.cdpn.io/82/leaf-droplets.jpg"
            alt="leaf droplets"
          />
        </div>
      </div>
      <div className="announce">
        <div className="left">
          <span className="topz">
            Sell Your Debts Today. Call Now (800) 625 - 5574
          </span>
          <span className="top">
            Our nationwide Collections have quickly become one of the most
            successful in USA
          </span>
        </div>
        <div className="right">
          <button className="pad" type="button">
            Get A Free Quote
          </button>
        </div>
        <div className="resp-btn">
          <button className="pds" type="button">
            <a href="#contact">Get A Free Quote</a>
          </button>
        </div>
      </div>
    </div>
  );
}
