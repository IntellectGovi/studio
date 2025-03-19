import React from "react";
import img01 from "../../Assets/FooterImages/img01.png";
import img02 from "../../Assets/FooterImages/img02.png";
import img03 from "../../Assets/FooterImages/img03.png";
import img04 from "../../Assets/FooterImages/img04.png";
import image13 from "../../Assets/HomePage/HeroSection/image13.jpg" 
import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <div className="footer-style">
      <div style={{ display: "flex", alignItems: "center" , flexDirection: "column"}}>
        <img src={image13} alt="footerImages" className="footer-image" />
        <div className="footer-btn">
          <h1 className="footerMainHead">INQUIRE NOW</h1>
          <h1 className="footerMainHead01">READY TO TELL <br/>IT ALL?</h1>
          <h1 className="footerMainHead">BOOK TODAY</h1>
        </div>
      </div>
      <div className="footer-images">
        <img src={img01} alt="footerImages" height={"100vh"} width={"100vw"} />
        <img src={img02} alt="footerImages" height={"100vh"} width={"100vw"} />
        <img src={img03} alt="footerImages" height={"100vh"} width={"100vw"} />
        <img src={img04} alt="footerImages" height={"100vh"} width={"100vw"} />
      </div>
      <div className="footer-icons">
        <a>
          <FaInstagram />
        </a>
        <a>
          <FaFacebook />
        </a>
        <a>
          <FaPinterest />
        </a>
        <a>
          <FaXTwitter />
        </a>
      </div>
      <div className="footer-group">
        <div className="footer-group-left">
          <h1>
            <a>ABOUT</a>
          </h1>
          <h1>
            <a>SERVICES</a>
          </h1>
          <h1>
            <a>GALLERY</a>
          </h1>
        </div>
        <h1 className="footerMainHead">Studio9</h1>
        <div className="footer-group-right">
          <h1>
            <a>DIARY</a>
          </h1>
          <h1>
            <a>CONTACT</a>
          </h1>
          <h1>
            <a>SHOP</a>
          </h1>
        </div>
      </div>
      <div className="footer-copyright">
        <div>
        <h1>©2025 Studio@9. </h1>
        {/* <h1>All rights reserved.</h1> */}
        </div>
        <h1>Made with ❤️ by Govind</h1>
      </div>
    </div>
  );
};

export default Footer;
