import React from 'react';
import bg5 from "../assests/hiw-bg.jpg";
import HowItWorksImageWrapper from '../components/HowItWorksImageWrapper';
import bg1 from "../assests/hiw-1.png";
import bg2 from "../assests/hiw-2.png";
import bg3 from "../assests/hiw-3.png";
import bg4 from "../assests/hiw-4.png";
import { BsArrowRight } from 'react-icons/bs';
import "../styles/HowItWorks.css";

const HowItWorks = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${bg5})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100vh',
    position: 'relative',
  };

  const textContainerStyle = {
    color: 'black',
    fontFamily: 'Route159, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial, Noto Sans, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji', 
    padding: '2rem',
    position: 'absolute',
    left: '2rem',
    top: '15%',
    transform: 'translateY(-50%)',
  };

  const arrowStyle = {
    marginLeft: '0.5rem',
    verticalAlign: 'middle', // Vertically center the arrow
  };

  const imageWrapperStyle = {
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Add a shadow
    borderRadius: '10px',
    padding: '1rem',
    marginTop: '2rem', // Adjust as needed
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  return (
    <div className='How-it-works' style={backgroundImageStyle}>
      <div style={textContainerStyle}>
        <p>Get More Exposure</p>
        <h2>How It Works?</h2>
        <p>Register now <BsArrowRight style={arrowStyle} /></p>
      </div>
      <div className="how-it-works-image-wrapper" style={imageWrapperStyle}>
        <HowItWorksImageWrapper
          imageSrc={bg1}
          text="Register your account with us completely FREE"
        />
      </div>
      <div className="how-it-works-image-wrapper" style={imageWrapperStyle}>
        <HowItWorksImageWrapper
          imageSrc={bg2}
          text="Submit your product details and get listed"
        />
      </div>
      <div className="how-it-works-image-wrapper" style={imageWrapperStyle}>
        <HowItWorksImageWrapper
          imageSrc={bg3}
          text="Expand your reach to a larger audience"
        />
      </div>
      <div className="how-it-works-image-wrapper" style={imageWrapperStyle}>
        <HowItWorksImageWrapper
          imageSrc={bg4}
          text="Earn by renting out your products, Save by borrowing"
        />
      </div>
    </div>
  );
};

export default HowItWorks;
