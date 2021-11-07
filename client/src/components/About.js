import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import image from "../assets/images/landing.png";
import "../assets/css/Landing.css";

function About() {
  return (
    <div className="intro-section">
      <center>
        <img src={image} alt="img" />
      </center>
      <div>
        <center>
          <p class="intro-para">
            A Few clicks and your market is{" "}
            <span className="spanText">on the way.</span> That's all it takes.{" "}
            <Button
              type="submit"
              variant="contained"
              style={{ backgroundColor: "#DC3545", color: "white" }}
              component={Link}
              to="/products"
            >
              Shop Now
              <NavigateNextIcon />
            </Button>
          </p>
        </center>
      </div>
    </div>
  );
}

export default About;
