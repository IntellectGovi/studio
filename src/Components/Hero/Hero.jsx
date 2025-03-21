import { useState } from "react";
import image01 from "../../Assets/HomePage/HeroSection/image01.JPG";
import StudioLogo from "../../Assets/Logo/StudioLogo.png";

const Hero = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="hero">
      <div className="navigation">
      {/* Hamburger Button */}
      {
         (
          <div className="hamburger" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
         )
      }

      {/* Navigation Menu */}
      <div className={`navigation-menu ${isOpen ? "active" : ""}`}>
        <div className="navigation-left" onClick={toggleMenu}>
          <a href="#">About</a>
          <a href="#">Service</a>
          <a href="#">Gallery</a>
        </div>
        <div className="navigation-right" onClick={toggleMenu}>
          <a href="#">Diary</a>
          <a href="#">Contact</a>
          <a href="#">Shop</a>
        </div>
      </div>
    </div>
      <img src={image01} className="hero-image" />
      <div className="hero-text">
        <img src={StudioLogo} className="studio-Logo" />
        <div className="hero-text-container">
          <h1 className="studio9-head">STUDIO9</h1>
          <h1 className="for-love">for the one who dares to love boldy</h1>
        </div>
      </div>
    </div>

  );
};

export default Hero;
