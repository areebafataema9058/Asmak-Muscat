import React from 'react'
import '../css/KeyProducts.css'
import img1 from "../assets/images/keypimg1.jpg"
import img2 from "../assets/images/keypimg2.jpg"
import img3 from "../assets/images/keypimg3.jpg"
import img4 from "../assets/images/keypimg4.jpg"
import img5 from "../assets/images/keypimg5.jpg"
import img6 from "../assets/images/keypimg6.jpg"
import img7 from '../assets/images/keypimg7.jpg'
import img8 from '../assets/images/keypimg8.jpg'
import img9 from '../assets/images/keypimg9.jpg'
import img10 from '../assets/images/keypimg10.jpg'

const KeyProducts = () => {
    const keyproducts = [
      { id: 1, name: "Yellow Fine Tuna", image: img1 },
      { id: 2, name: "Kawa Kawa Tuna", image: img2 },
      { id: 3, name: "Bonito Tuna", image: img3 },
      { id: 4, name: "Emperor", image: img4 },
      { id: 5, name: "Arabian Pandora", image: img5 },
      { id: 6, name: "Red Seabream", image: img6 },
      { id: 7, name: "Trevally", image: img7 },
      { id: 8, name: "Koffer", image: img8 },
      { id: 9, name: "Threadfin Bream", image: img9 },
      { id: 10, name: "Blue Line Snapper", image: img10 },
    ];

  return (
    <>
      <div className="keyproducts-container">
        <h1 className="keyproducts-title">Discover Our Products</h1>
        <div className="keyproducts-grid">
          {keyproducts.map((keyproducts) => {
            return (
              <div className="keyproduct-card" key={keyproducts.id}>
                <img
                  className="keyproduct-image"
                  src={keyproducts.image}
                  alt={keyproducts.name}
                />
                <h2 className="keyproduct-name">{keyproducts.name}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default KeyProducts