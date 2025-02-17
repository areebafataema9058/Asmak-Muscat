import React from 'react'
import productsimg1 from '../assets/images/productimg1.jpg'
import productsimg2 from '../assets/images/productimg2.jpg'
import productsimg3 from '../assets/images/productimg3.jpg'
import productsimg4 from '../assets/images/productimg4.jpg'
import productsimg5 from '../assets/images/productimg5.png'
import productsimg6 from '../assets/images/productimg6.jpg'
import productsimg7 from '../assets/images/productimg7.png'
import productsimg8 from '../assets/images/productimg8.jpg'
import productsimg9 from '../assets/images/productimg9.jpg'
import productsimg10 from '../assets/images/productimg10.jpg'
import productsimg11 from '../assets/images/productimg11.jpg'
import productsimg12 from '../assets/images/productimg12.jpg'
import '../css/CoreProducts.css'

const CoreProducts = () => {
  const products = [
    { id: 1, name: "HORSE MACKEREL", image: productsimg1 },
    { id: 2, name: "CHUB MACKEREL", image: productsimg2 },
    { id: 3, name: "INDIAN MACKEREL", image: productsimg3 },
    { id: 4, name: "YELLOW TAIL SCAD", image: productsimg4 },
    { id: 5, name: "SARDINE", image: productsimg5 },
    { id: 6, name: "GREY MULLET", image: productsimg6 },
    { id: 7, name: "WHITE SHAD FISH (HILSA)", image: productsimg7 },
    { id: 8, name: "CROAKER", image: productsimg8 },
    { id: 9, name: "SKIPJACK TUNA", image: productsimg9 },
    { id: 10, name: "CAT FISH", image: productsimg10 },
    { id: 11, name: "BARRACUDA", image: productsimg11 },
    { id: 12, name: "SPOTTED GRUNT", image: productsimg12 },
  ];
return (
  <>
    <div className="products-container">
      <h1 className="products-title">Our Core Products</h1>
      <div className="products-grid">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <img
                className="product-image"
                src={product.image}
                alt={product.name}
              />
              <h2 className="product-name">{product.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
    
   
  </>
);
  
  

}

export default CoreProducts