import React from "react";
import image07 from "../../Assets/HomePage/HeroSection/image07.jpg";
import image08 from "../../Assets/HomePage/HeroSection/image08.jpg";
import image09 from "../../Assets/HomePage/HeroSection/image09.jpg";
import image06 from "../../Assets/HomePage/HeroSection/image06.jpeg";
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
      img: image06,
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
                    <span style={{ fontWeight: "bold" , marginLeft: "120px"}}>- {item.author}</span>
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
    </div>
  );
};

export default Main;
