import React from "react";
import Hero from "../Components/Hero/Hero";
import Footer from "../Components/Footer/Footer";
import Navigation from "../Components/Navigation/Navigation";
import Main from "../Components/MainSection/Main";
import MobileWarningMessage from "../Components/MobileMsgWarning";
const Home = () => {
  return (
    <div>
      <MobileWarningMessage />
      {/* Hero Section */}

      <Hero />

      {/* Navigation */}

      <Navigation />

      {/* Main Section */}

      <Main />

      {/* Footer Section */}

      <Footer />
    </div>
  );
};

export default Home;
