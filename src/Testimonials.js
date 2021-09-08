import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <div className="bodyT">
      <div className="tastyTR">
        <span className="main">Testimonials</span>
        <span className="sub">Our Happy Clients</span>
      </div>
      <div className="services">
        <div className="services__card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="services__content">
            <h2>01</h2>
            <h3>Joy Cham</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </p>
          </div>
        </div>
        <div className="services__card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="services__content">
            <h2>02</h2>
            <h3>Subway Franchise Distributor</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugits
            </p>
          </div>
        </div>
        <div className="services__card">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <div className="services__content">
            <h2>03</h2>
            <h3>Geraldine Lawrence</h3>
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit
            </p>
          </div>
        </div>
      </div>
      <button className="read-more" type="button">
        READ ALL
      </button>
    </div>
  );
}

export default Testimonials;
