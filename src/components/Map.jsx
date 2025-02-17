import React from "react";
import '../css/Map.css'
const Map = () => {
  return (
    <>
      <div className="container">
        <div className="map-section">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3188.8348536733015!2d58.20521437703546!3d23.630806323965952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e8de3d980d34189%3A0x7b3adde6aae03e63!2sAsmak%20Muscat%20Int&#39;l%20LLC%20Fish%20Exporter!5e1!3m2!1sen!2sin!4v1735207104549!5m2!1sen!2sin"></iframe>
        </div>
        <div className="contact-section">
          <h2>Contact Details</h2>
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
            <strong>Email:</strong> info@asmkmct.com
          </p>
        </div>
      </div>
    </>
  );
};

export default Map;
