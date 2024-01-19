import React, { useEffect } from "react";
import "./background.css";
// import parse from "html-react-parser";
type BackgroundProps = {
  children: React.ReactElement;
};

const Background: React.FC<BackgroundProps> = ({ children }) => {
  return (
    <div className="main">
      <div className="container">
        <div className="red-block-top"></div>
        <div className="red-block-bottom"></div>
        <div className="red-line"></div>
        <img
          src="https://masai-website-images.s3.ap-south-1.amazonaws.com/logo.png"
          alt=""
          className="background-logo"
        />
        {children}
      </div>
    </div>
  );
};
export default Background;
