import React from 'react';
import './SimplePage.css';

const TempleDesigns = () => {
  return (
    <section className="simple-page">
      <div className="simple-container" data-aos="fade-up">
        <span className="simple-tag">✦ SACRED SPACES ✦</span>
        <h1 className="simple-title">Temple Designs</h1>
        <p className="simple-desc">
          We craft divine spaces radiating peace and spirituality. Our temple designs balance traditional architecture with modern precision, creating an aura of devotion in your home or community.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1598256333246-1c056d6874e4" 
          alt="Temple Design" 
          className="simple-img"
        />
      </div>
    </section>
  );
};

export default TempleDesigns;
