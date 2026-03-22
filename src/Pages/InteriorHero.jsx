import { useEffect, useState } from "react";
import "./InteriorHero.css";
// import "./ServicesSection.css";

const bgImages = [
  "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
];

const services = [
  {
    number: "01",
    title: "Residential Interior Design",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    number: "02",
    title: "Outdoor & Landscape Design",
    image:
      "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    number: "03",
    title: "Interior Design Consultation",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
  },
  {
    number: "04",
    title: "Commercial Interior Design",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
  },
];

const InteriorHero = () => {
  const [animate, setAnimate] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);
  const [activeImage, setActiveImage] = useState(services[0].image);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 150);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % bgImages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="interior-hero">
        {bgImages.map((img, i) => (
          <div
            key={i}
            className={`hero-bg ${i === bgIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="hero-overlay" />

        <div className={`hero-container ${animate ? "show" : ""}`}>
          <div className="hero-left">
            <span className="hero-tag">✦ FAST AND RELIABLE</span>

            <h1 className="hero-title">
              Find Your Inspired <br /> Interior Design
            </h1>

            <p className="hero-desc">
              Whether it’s your home, office, or a commercial project,
              we are dedicated to bringing your vision to life with
              precision and elegance.
            </p>
          </div>

          <div className="hero-right">
            <div className="stats-card">
              <h2>
                <span>360</span>+
              </h2>
              <p>Successful Projects And Counting</p>
              <ul>
                <li>✔ Tech Specifications</li>
                <li>✔ Design Project</li>
                <li>✔ 3D Visualisation</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="scroll-indicator">
          <span />
        </div>
      </section>

      {/* ================= SERVICES (BELOW HERO) ================= */}
        <section className="services-section">
      <div className="services-container">
        {/* ================= TOP CENTER CONTENT ================= */}
        <div className="services-content">
          <span className="services-tag">• OUR SERVICES</span>

          <h2 className="services-title">
            Explore Our <span>Comprehensive</span> <br />
            Interior Design Services
          </h2>

          <p className="services-desc">
            We specialize in transforming visions into reality through
            thoughtful architectural and interior design solutions.
          </p>
        </div>

        {/* ================= IMAGE + SERVICES LIST ================= */}
        <div className="services-bottom">
          {/* LEFT IMAGE */}
          <div className="services-image">
            <img src={activeImage} alt="Service Preview" />
          </div>

          {/* RIGHT LIST */}
          <div className="services-list">
            {services.map((service, i) => (
              <div
                key={i}
                className="service-item"
                onMouseEnter={() => setActiveImage(service.image)}
              >
                <span className="service-number">{service.number}</span>
                <span className="service-name">{service.title}</span>
                <span className="service-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* ================= BIG POSTER ================= */}
<section className="poster-section">
  <img
    src="/assets/interior.png"
    alt="Interior Architecture Overview"
  />
    <div className="process-header">
      <span className="process-tag">• HOW WE WORK</span>

      <h2 className="process-title">
        Description <span>Architecture</span> <br />
        Process For Exceptional Results.
      </h2>

      <p className="process-desc">
        Our process is alive – adapting, refining, and growing with your vision.
        Like artists with a blank canvas, we transform rooms into living works of art.
      </p>
    </div>

</section>

{/* ================= PROCESS SECTION ================= */}
<section className="process-section">
  <div className="process-container">
 

    {/* CARDS */}
    <div className="process-grid">
      <div className="process-card">
        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d" />
        <h4><span>01.</span> Initial Consultation</h4>
        <p>We begin by understanding your vision, goals, and needs.</p>
      </div>

      <div className="process-card">
        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e" />
        <h4><span>02.</span> Design & Planning</h4>
        <p>Our team creates detailed designs that reflect your requirements.</p>
      </div>

      <div className="process-card">
        <img src="https://images.unsplash.com/photo-1505691938895-1758d7feb511" />
        <h4><span>03.</span> Implementation</h4>
        <p>With carefully selected contractors, we manage every phase.</p>
      </div>

      <div className="process-card">
        <img src="https://images.unsplash.com/photo-1497366811353-6870744d04b2" />
        <h4><span>04.</span> Project Handover</h4>
        <p>Final review and handover ensuring every detail is perfect.</p>
      </div>
    </div>
  </div>
</section>



    </>
  );
};

export default InteriorHero;
