import { useEffect, useRef, useState } from "react";
import "./Hero.css";

const slides = [
  // {
  //   title: "INNOVATIVE ARCHITECTURAL DESIGNS",
  //   subtitle: "THAT BRING YOUR DREAM HOME ALIVE",
  // },
  // {
  //   title: "LUXURY INTERIORS & MODERN SPACES",
  //   subtitle: "DESIGNED FOR ELEGANT LIVING",
  // }
];

const statsData = [
  { value: 350, label: "Interior Projects", suffix: "+" },
  { value: 120, label: "Interior Spaces Designed", suffix: "+" },
  { value: 50, label: "Commercial Projects", suffix: "+" },
  { value: 10, label: "Years of Design Quality", suffix: "+" },
  { value: 98, label: "Client Satisfaction Rate", suffix: "%" }
];

const Hero = () => {
  const statsRef = useRef(null);
  const [counts, setCounts] = useState(statsData.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  /* ===== RUNNING NUMBERS ===== */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          statsData.forEach((item, index) => {
            let current = 0;
            const increment = Math.ceil(item.value / 80);

            const timer = setInterval(() => {
              current += increment;
              if (current >= item.value) {
                current = item.value;
                clearInterval(timer);
              }
              setCounts(prev => {
                const arr = [...prev];
                arr[index] = current;
                return arr;
              });
            }, 20);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <>
      {/* ================= HERO ================= */}
      <section className="hero-wrapper">
        {/* Background Carousel */}
        <div
          id="heroCarousel"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
          data-bs-interval="3500"
        >
          <div className="carousel-inner">
            <div className="carousel-item active hero-slide hero-img-1" />
            <div className="carousel-item hero-slide hero-img-2" />
          </div>
        </div>

        {/* Overlay Content */}
        <div className="hero-overlay">
          <div className="container">
            <div
              id="heroTextCarousel"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
              data-bs-interval="3500"
            >
              <div className="carousel-inner">
                {slides.map((slide, i) => (
                  <div
                    key={i}
                    className={`carousel-item ${i === 0 ? "active" : ""}`}
                  >
                    <h1
                      className="hero-title"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      {slide.title} <br /> {slide.subtitle}
                    </h1>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STATS BAR ================= */}
      <section
        className="hero-stats-bar"
        ref={statsRef}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="container">
          <div className="hero-stats">
            {statsData.map((item, i) => (
              <div
                key={i}
                className="stat-box"
                data-aos="zoom-in"
                data-aos-delay={i * 120}
              >
                <h2>
                  {counts[i]}
                  {item.suffix}
                </h2>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
