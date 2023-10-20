import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Headshot from "./headshot.jpg"; // Update the path accordingly

const About = () => {
  // User
  const user = {
    name: "Ty Carlton",
    imageSize: 300,
  };
  // Profile Image
  const userImage = (
    <img
      className="headshot"
      src={Headshot}
      alt={"Photo of " + user.name}
      style={{
        width: user.imageSize,
        height: user.imageSize,
        borderRadius: "50%",
      }}
    />
  );

  return (
    <div>
      <div className="image-container">
        {userImage}
        <div className="button">
          <Button variant="success">
            <Link to="/aboutme"> Say Hello here!</Link>
          </Button>{" "}
        </div>
        <div className="text-container">
          <h1>{user.name}</h1>
          <p>
            Welcome to my new website.
            <div>
              I have been learning how to program for the past few months now,
              and I am excited to continue my journey.
            </div>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;