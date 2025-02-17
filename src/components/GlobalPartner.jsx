import React from 'react'
import flagimg1 from "../assets/images/flag1.png"
import flagimg2 from "../assets/images/flag2.png"
import flagimg3 from "../assets/images/flag3.png"
import flagimg4 from "../assets/images/flag4.jpg"
import flagimg5 from "../assets/images/flag5.png"
import flagimg6 from '../assets/images/flag6.png'
import flagimg7 from '../assets/images/flag7.png'
import flagimg8 from '../assets/images/flag8.png'
import flagimg9 from '../assets/images/flag9.png'
import flagimg10 from '../assets/images/flag10.png'
import flagimg11 from '../assets/images/flag11.png'
import flagimg12 from '../assets/images/flag12.png'
import flagimg13 from '../assets/images/flag13.png'
import flagimg14 from '../assets/images/flag14.webp'
import flagimg15 from '../assets/images/flag15.png'
import flagimg16 from '../assets/images/flag16.png'
import flagimg17 from '../assets/images/flag17.png'
import flagimg18 from '../assets/images/flag18.png'
import flagimg19 from '../assets/images/flag19.png'
import flagimg20 from '../assets/images/flag20.png'
import flagimg21 from "../assets/images/flag21.png"
import flagimg22 from '../assets/images/flag22.png'
import '../css/GlobalPartner.css'

const GlobalPartner = () => {
     const flag = [
       { id: 1, img: flagimg1, title: "Oman" },
       { id: 2, img: flagimg2, title: "UAE" },
       { id: 3, img: flagimg3, title: "Qatar" },
       { id: 4, img: flagimg4, title: "Bahrain" },
       { id: 5, img: flagimg5, title: "Iraq" },
       { id: 6, img: flagimg6, title: "Egypt" },
       { id: 7, img: flagimg7, title: "India" },
       { id: 8, img: flagimg8, title: "Bangladesh" },
       { id: 9, img: flagimg9, title: "Thailand" },
       { id: 10, img: flagimg10, title: "Malaysia" },
       { id: 11, img: flagimg11, title: "Ghana" },
       { id: 12, img: flagimg12, title: "Benin" },
       { id: 13, img: flagimg13, title: "Togo" },
       { id: 14, img: flagimg14, title: "Cote d'Ivoire" },
       { id: 15, img: flagimg15, title: "Senegal" },
       { id: 16, img: flagimg16, title: "Mozambiq" },
       { id: 17, img: flagimg17, title: "Haiti" },
       { id: 18, img: flagimg18, title: "Cameroon" },
       { id: 19, img: flagimg19, title: "Guinea" },
       { id: 20, img: flagimg20, title: "Congo" },
       { id: 21, img: flagimg21, title: "Liberia" },
       { id: 22, img: flagimg22, title: "South Africa" },
     ];
  return (
    <>
      <h1 className="partners-heading">Our Global Partners</h1>
      <div className="partners-container">
        {flag.map((flag) => {
          return (
            <div key={flag.id} className="partner-item">
              <img src={flag.img} alt={flag.title} className="partner-flag" />
              <p className="partner-title">{flag.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default GlobalPartner