import React from "react";
import image03 from "../../Assets/HomePage/HeroSection/image03.jpeg";
import image04 from "../../Assets/HomePage/HeroSection/image04.jpeg";
import image05 from "../../Assets/HomePage/HeroSection/image05.jpeg";
import image06 from "../../Assets/HomePage/HeroSection/image06.jpeg";
const Navigation = () => {
  return (
    <div className="navigation">
      <h1 className="navigation-Heading">LET YOUR STORY <br/> LIVE ON FOREVER</h1>
      <div className="navigation-images">
        <img
          className="navigation-image01"
          src={image03}
          height={"400px"}
          width={"319px"}
          style={{ borderRadius: "12px" }}
        ></img>
        <img
        className="navigation-image02"
          src={image05}
          height={"700px"}
          width={"319px"}
          style={{ borderRadius: "12px" }}
        ></img>
        <div style={{display:"flex" , flexDirection:"column" , gap:"12px"}}>
          <img
          className="navigation-image03"
            src={image04}
            height={"250px"}
            width={"319px"}
            style={{ borderRadius: "12px" }}
          ></img>
          <img
          className="navigation-image04"
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
