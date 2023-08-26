import React from 'react';

const HowItWorksImageWrapper = ({ imageSrc, text }) => {
  return (
    <div className="image-wrapper">
      <img src={imageSrc} alt="How It Works" />
      <p>{text}</p>
    </div>
  );
};

export default HowItWorksImageWrapper;
