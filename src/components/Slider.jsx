import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is loaded
import slider1 from "../assets/images/slider1.jpeg";
import slider2 from "../assets/images/slider2.jpeg";
import slider3 from "../assets/images/slider3.jpeg";
import "../css/Slider.css";

const Slider = () => {
  const sliderData = [
    {
      id: 1,
      image: slider1,
      title: "Welcome To Asmak Muscat Int'l.",
      description: "",
    },
    {
      id: 2,
      image: slider2,
      title: "Quality Seafood Exports",
      description: `We specialize in processing and exporting, delivering 
                    top-quality products to wholesale customers worldwide.`,
    },
    {
      id: 3,
      image: slider3,
      title: "Building Long-Term Relationships",
      description: `Oman, UAE, Qatar, Bahrain, Iraq, Egypt, India, Bangladesh, Thailand,
                    Malaysia, Ghana, Benin, Togo, Cote d'Ivoire, Senegal, Mozambique,
                    Haiti, Cameroon, Guinea, Congo, Liberia, South Africa, and more.`,
    },
  ];

  return (
    <Carousel
      className="home-slider"
      interval={3000}
      controls={true}
      indicators={true}
      pause="hover"
    >
      {sliderData.map((slide) => (
        <Carousel.Item key={slide.id}>
          <img
            src={slide.image}
            alt={`Slide ${slide.id}`}
            className="slider-image"
          />
          <Carousel.Caption className="slider-caption">
            <h3>{slide.title}</h3>
            {slide.description && <p>{slide.description}</p>}
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Slider;
