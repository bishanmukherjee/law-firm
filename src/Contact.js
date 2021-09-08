import { TextField } from "@material-ui/core";
import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="formz" id="contact">
      <div className="cbody">
        <div className="titleCase">
          <span className="txt1">Get in Touch</span>
          <span className="txt2">Contact Us Today</span>
          <span className="txt1">
            Fill out the form below to schedule a consultant
          </span>
        </div>
        <div className="form_main">
          <div className="rowy">
            <TextField id="fname" label="" />
            <TextField id="lname" label="" />
          </div>
          <div className="rowy">
            <TextField id="phone" label="" />
            <TextField id="email" type="email" label="" />
          </div>
          <div className="rowt">
            <TextField className="widthx" id="Case Summary" label="" />
          </div>
          <button className="btn btn-primary" type="button">
            SUBMIT NOW
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
