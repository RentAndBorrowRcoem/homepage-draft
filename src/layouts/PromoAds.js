import React from "react";
import { BsArrowRight } from "react-icons/bs";
import "../styles/PromoAds.css"; // Import the corresponding CSS file

const PromoAds = () => {
  return (
    <div className="promotions-container">
      <div className="promotions-left">
        <p className="small-text">promotions</p>
        <p className="promo-ads">PromoAds</p>
      </div>
      <div className="promotions-right">
        <p className="check-all">
          Check all ads <BsArrowRight className="arrow-icon" />
        </p>
      </div>
    </div>
  );
};

export default PromoAds;
