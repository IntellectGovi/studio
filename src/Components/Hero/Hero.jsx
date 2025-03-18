import image01 from "../../Assets/HomePage/HeroSection/image01.JPG";
import StudioLogo from "../../Assets/Logo/StudioLogo.png";

const Hero = () => {
  return (
    <div className="hero">
      <img src={image01} className="hero-image" />
      <div className="hero-text">
        <img src={StudioLogo} className="studio-Logo" />
        <h1 className="studio9-head">STUDIO9</h1>
        <h1 className="for-love">for the one who dares to love boldy</h1>
      </div>
    </div>
  );
};

export default Hero;
