import React from 'react';
import './SimplePage.css';

const Vastu = () => {
  return (
    <section className="simple-page">
      <div className="simple-container" data-aos="fade-up">
        <span className="simple-tag">✦ HARMONY & PROSPERITY ✦</span>
        <h1 className="simple-title">Vastu Consultations</h1>
        <p className="simple-desc">
          Ensure a positive flow of energy in your living and working spaces. Our certified Vastu experts guide you through scientifically-backed architectural layouts and corrections.
        </p>
        <img 
          src="https://images.unsplash.com/photo-1510526083074-ce4621cfffce" 
          alt="Vastu Consultation" 
          className="simple-img"
        />
      </div>
    </section>
  );
};

export default Vastu;
