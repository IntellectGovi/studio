import React from "react";
import image07 from "../../Assets/HomePage/HeroSection/image07.jpg";
import image08 from "../../Assets/HomePage/HeroSection/image08.jpg";
import image09 from "../../Assets/HomePage/HeroSection/image09.jpg";
import image06 from "../../Assets/HomePage/HeroSection/image06.jpeg";
import image10 from "../../Assets/HomePage/HeroSection/image10.jpg";
import image11 from "../../Assets/HomePage/HeroSection/image11.jpg";
import image12 from "../../Assets/HomePage/HeroSection/image12.jpg";
import image14 from "../../Assets/HomePage/HeroSection/image14.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Main = () => {
  const data = [
    {
      text: "‘Shashwat has delivered above and beyond, we couldn't be happier’",
      author: "Random Human",
      img: image06,
    },
    {
      text: "‘Shashwat's ability to find the perfect balance between breathtaking imagery and capturing our candid moments is truly remarkable.’",
      author: "Another Person",
      img: image09,
    },
    {
      text: "‘Shashwat's ability to find the perfect balance between breathtaking imagery and capturing our candid moments is truly remarkable.’",
      author: "Another Person",
      img: image08,
    },
    {
      text: "‘Shashwat's ability to find the perfect balance between breathtaking imagery and capturing our candid moments is truly remarkable.’",
      author: "Another Person",
      img: image07,
    },
  ];
  return (
    <div className="main-section">
      <div className="main-text">
        <h1>WE ARE STUDIO 9</h1>
        <h1>Capturing memories one moment at a time</h1>
      </div>
      <div className="main-images-container">
        <img src={image07} />
        <img src={image08} />
        <img src={image09} />
      </div>
      <div className="Lovenotes">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="Lovenotes">
                <div className="lovenotes-text">
                  <h1>Love Notes</h1>
                  <h1>{item.text}</h1>
                  <h1>
                    <span style={{ fontWeight: "bold", marginLeft: "120px" }}>
                      - {item.author}
                    </span>
                  </h1>
                </div>
                <div className="love-image-container">
                  <img
                    src={item.img}
                    alt={`Love Note ${index + 1}`}
                    className="love-image"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="diary">
        <h1>
          DIVE INTO THE <br /> DIARY ENTRIES
        </h1>
        <div className="diary-images">
          <img src={image10} />
          <img src={image11} />
          <img src={image12} />
        </div>
      </div>
      <div className="main-Gallery">
        <img src={image14} className="diary-images" />
        <h1 className="main-Gallery-text01">
          'This night is sparkling, don't you let it go, I'm wonderstruck,
          blushing all the way home, I'll spend forever wondering if you knew'
        </h1>
        <h1 className="main-Gallery-text02">
          IN THE <br /> GALLERY
        </h1>
        <div className="main-Gallery-whiteBg">
          <img src={image12} className="" />
        </div>
        <div>
          <h1 className="main-Gallery-text03">
            'To live fiercely is to live unapologetically'
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Main;
