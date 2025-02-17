import React from 'react'
import img1 from '../assets/images/img1.jpg'
import img2 from '../assets/images/img2.jpg'
import img3 from '../assets/images/img3.png'
import img4 from '../assets/images/img4.png'
import img5 from '../assets/images/aboutimg1.jpg'
import img6 from '../assets/images/aboutimg2.jpg'
import img7 from '../assets/images/aboutimg3.jpg'
import img8 from '../assets/images/aboutimg4.jpg'
import AdvantageCards from "../components/AdvantageCards";
import KeyStrength from "../components/KeyStrength";
import '../css/AboutUs.css'

const AboutUs = () => {

  return (
    <>
      <div className="about-us">
        <h1 className="about-us__title">Asmak Muscat Int'l LLC</h1>
        <div className="about-us__images">
          <img className="about-us__image" src={img1} alt="Seafood product 1" />
          <img className="about-us__image" src={img2} alt="Seafood product 2" />
          <img className="about-us__image" src={img3} alt="Seafood product 3" />
          <img className="about-us__image" src={img4} alt="Seafood product 4" />
        </div>
        <p className="about-us__description">
          Established in 2018, Asmak Muscat Int'l LLC is led by a founder with
          over 22 years of experience in the seafood industry. Operating from
          the pristine waters of Oman in the Indian Ocean (FAO51), we specialize
          in sourcing high-quality seafood products while maintaining
          sustainable and eco-friendly practices.
        </p>
        <p className="about-us__description">
          Our commitment extends beyond sourcing premium quality fish. We aim to
          develop long-term relationships with our clients across Oman, UAE,
          Qatar, Bahrain, Iraq, Egypt, India, Bangladesh, Thailand, Malaysia,
          Ghana, Benin, Togo, Côte d'Ivoire, Senegal, Mozambique, Haiti,
          Cameroon, Guinea, Congo, Liberia, South Africa, and numerous other
          countries by supplying high-quality products tailored to their needs.
        </p>
        <p className="about-us__description">
          With a wide range of seafood, including pelagic fish, we cater to
          global demands while ensuring our products meet the highest quality
          standards.
        </p>
        <h1 className="about-us__subtitle">Our Advantages</h1>
        <div className="about-us__images">
          <img className="about-us__image" src={img5} alt="Advantage 1" />
          <img className="about-us__image" src={img6} alt="Advantage 2" />
          <img className="about-us__image" src={img7} alt="Advantage 3" />
          <img className="about-us__image" src={img8} alt="Advantage 4" />
        </div>
      </div>
      {/* <AdvantageCards/> */}
      <KeyStrength/>
    </>
  );
}

export default AboutUs