import React from "react";
import "../css/KeyStrength.css"

const KeyStrength = () => {
  const strengths = [
    {
      title: "Fishing Zone FAO51",
      description: "Best Seafood from Sultanate of Oman, caught in FAO51 zone.",
    },
    {
      title: "2 Hours Trucking",
      description:
        "Our products are transported to the factory within 2 hours.",
    },
    {
      title: "90 Minutes Freezing",
      description:
        "Processed and quality checked within 90 minutes of arrival.",
    },
    {
      title: "8 Hours Freezing",
      description:
        "Seafood is frozen within 8 hours of arrival at our factory.",
    },
    {
      title: "30 Minutes Packing",
      description:
        "Seafood is packed and stored within 30 minutes of processing.",
    },
  ];

  return (
    <div className="container">
      <h2 className="heading">Our Key Strengths</h2>
      <div className="grid">
        {strengths.map((strength, index) => (
          <div key={index} className="card">
            <h3 className="title">{strength.title}</h3>
            <p className="description">{strength.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};



export default KeyStrength;
