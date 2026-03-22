import React from 'react';
import './SimplePage.css';

const RealEstate = () => {
  return (
    <section className="simple-page">
      <div className="simple-container" data-aos="fade-up">
        <span className="simple-tag">✦ PREMIUM PROPERTIES ✦</span>
        <h1 className="simple-title">Real Estate</h1>
        <p className="simple-desc">
          Discover properties that match your lifestyle. From luxurious villas to commercial spaces, we provide end-to-end real estate solutions with complete transparency and trust.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750" 
          alt="Real Estate" 
          className="simple-img"
        />
      </div>
    </section>
  );
};

export default RealEstate;
