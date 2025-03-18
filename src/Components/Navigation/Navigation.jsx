import React from "react";
import image03 from "../../Assets/HomePage/HeroSection/image03.jpeg";
import image04 from "../../Assets/HomePage/HeroSection/image04.jpeg";
import image05 from "../../Assets/HomePage/HeroSection/image05.jpeg";
import image06 from "../../Assets/HomePage/HeroSection/image06.jpeg";
const Navigation = () => {
  return (
    <div className="navigation">
      <div className="navigation-bar">
        <div className="navigation-left">
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Gallery</a>
        </div>
        <h1 className="tudio9-head">Studio9</h1>
        <div className="navigation-right">
          <a href="#">Diary</a>
          <a href="#">Contact</a>
          <a href="#">Shop</a>
        </div>
      </div>

      <h1 className="navigation-Heading">LET YOUR STORY <br/> LIVE ON FOREVER</h1>
      <div className="navigation-images">
        <img
          src={image03}
          height={"400px"}
          width={"319px"}
          style={{ borderRadius: "12px" }}
        ></img>
        <img
          src={image05}
          height={"700px"}
          width={"319px"}
          style={{ borderRadius: "12px" }}
        ></img>
        <div style={{display:"flex" , flexDirection:"column" , gap:"12px"}}>
          <img
            src={image04}
            height={"250px"}
            width={"319px"}
            style={{ borderRadius: "12px" }}
          ></img>
          <img
            src={image06}
            height={"300px"}
            width={"319px"}
            style={{ borderRadius: "12px" }}
          ></img>
        </div>
      </div>

      <div></div>
    </div>
  );
};

export default Navigation;
