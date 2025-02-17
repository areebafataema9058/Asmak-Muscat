import React from 'react'
import '../css/ContactUs.css'
import omanFlag from '../assets/images/Flag.png'

const ContactUs = () => {
  return (
    <div className="contact-us">
     
        <h2>Contact Us</h2>
        <p>Get in touch with us Today</p>
        <p>
          <strong>Mobile:</strong> +968 92850600
        </p>
        <p>
          <strong>Tel:</strong> +968 24050604
        </p>
        <p>
          <strong>Address:</strong> P.O.BOX 1741, POSTAL CODE 122, AL MABELA,
          SULTANATE OF OMAN, C.R.NO 1341511
        </p>
        <p>
          <strong>Email:</strong> info@asmakmct.com
        </p>
        <img src={omanFlag} alt="Oman Flag" className="oman-flag" />
      </div>

  );
}

export default ContactUs