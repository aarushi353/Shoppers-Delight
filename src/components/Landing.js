import React from "react";
import "./Landing.css";
import image from "../assets/images/landing.png";
function LandingPage() {
  return (
    <div className="Landing">
      <center>
        <strong>
          <p>Your Online Shopping Destination</p>
        </strong>
      </center>
      <center>
        <img src={image} alt="img" />
      </center>
    </div>
  );
}
export default LandingPage;
