import React from "react";
import AdvantageCards from "../components/AdvantageCards";
import KeyStrength from "../components/KeyStrength";
import KeyProducts from "../components/KeyProducts";
import OurQuality from "../components/OurQuality";
import GlobalPartner from "../components/GlobalPartner";
import Products from "../components/CoreProducts";
import fish1 from "../assets/images/fish1.jpeg"
import fish2 from "../assets/images/fish2.jpeg"
import fish3 from "../assets/images/fish3.jpeg"
import fish4 from "../assets/images/fish4.jpg"
import Card from "../components/Card";
import Slider from "../components/Slider";

const Home = () => {
  
  const cardData = [
  {
    id: 1,
    image: fish1,
    title: "Leader",
  },
  {
    id: 2,
    image: fish2,
    title: "Partner",
  },
  {
    id: 3,
    image: fish3,
    title: "Product",
  },
  {
    id: 4,
    image: fish4,
    title: "Quality",
  },
];

  
  return (
    <>
      <Slider />;
      <div className="card-grid">
        {cardData.map((card) => (
          <Card key={card.id} title={card.title} image={card.image} />
        ))}
      </div>
      <AdvantageCards />
      <KeyStrength />
      <Products />
      <KeyProducts />
      <OurQuality />
      <GlobalPartner />
    </>
  );
};

export default Home;
