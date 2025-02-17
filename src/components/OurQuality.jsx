import React from 'react'
import img1 from "../assets/images/qualityimg1.png"
import img2 from "../assets/images/qualityimg2.jpg"
import img3 from "../assets/images/qualityimg3.png"
import '../css/OurQuality.css'

const OurQuality = () => {
    const ourQuality = [
      {id: 1, name: "Seafood Quality", image: img1, desc: "Sourced with care, delivered with excellence.",},
      {id: 2, name: " Frozen Freshness", image: img2, desc:"Ensuring freshness from ocean to plate."},
      {id: 3, name: "Quality Control", image: img3, desc:"Stringent quality standards in every product."}
    ];
  return (
    <>
    <h1>Our Quality</h1>
      <h4>
        Consumers today demand high-quality seafood year-round, and we ensure
        this at every step with sustainable methods aimed at a better tomorrow.
        ASMAK is extremely cautious about hygiene and the meticulous processing
        of marine products. Every item undergoes strict quality control, so our
        customers enjoy only the finest, whether fresh or frozen. All products
        from our facility are handled with care and transported under optimal
        conditions to clients across the globe.
      </h4>
      <div className="ourquality-container">
        <div className="ourquality-grid">
          {ourQuality.map((ourQuality) => {
            return (
              <div className="ourquality-card" key={ourQuality.id}>
                <img
                  className="ourquality-image"
                  src={ourQuality.image}
                  alt={ourQuality.name}
                />
                <h2 className="ourquality-name">{ourQuality.name}</h2>
                <h2 className="ourquality-desc">{ourQuality.desc}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default OurQuality