import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "David Smith",
    role: "Clients of Company",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
    text: "I cannot say enough good things about the team at Softeck.",
  },
  {
    name: "David Smith",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12",
    text: "Professional, creative and extremely reliable team.",
  },
  {
    name: "Tina Brown",
    role: "Designer",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
    text: "Amazing experience from start to finish.",
  },
  // {
  //   name: "John Carter",
  //   role: "Manager",
  //   img: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c",
  //   text: "Highly recommended for premium projects.",
  // },
];

const Testimonials = () => {
  const total = testimonials.length;

  // clone last & first
  const slides = [
    testimonials[total - 1],
    ...testimonials,
    testimonials[0],
  ];

  const [index, setIndex] = useState(1);
  const [slideWidth, setSlideWidth] = useState(50);
  const trackRef = useRef(null);
  const timerRef = useRef(null);
  const startX = useRef(0);

  useEffect(() => {
    const handleResize = () => setSlideWidth(window.innerWidth <= 900 ? 100 : 50);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ================= AUTO SLIDE ================= */
  useEffect(() => {
    startAuto();
    return stopAuto;
  }, []);

  const startAuto = () => {
    stopAuto();
    timerRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
  };

  const stopAuto = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  /* ================= LOOP FIX ================= */
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    track.style.transition = "transform 0.6s ease";

    if (index === slides.length - 1) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(1);
      }, 600);
    }

    if (index === 0) {
      setTimeout(() => {
        track.style.transition = "none";
        setIndex(total);
      }, 600);
    }
  }, [index, slides.length, total]);

  /* ================= SWIPE ================= */
  const onStart = (e) => {
    startX.current = e.touches ? e.touches[0].clientX : e.clientX;
    stopAuto();
  };

  const onEnd = (e) => {
    const endX = e.changedTouches
      ? e.changedTouches[0].clientX
      : e.clientX;

    if (startX.current - endX > 50) setIndex((i) => i + 1);
    if (endX - startX.current > 50) setIndex((i) => i - 1);

    startAuto();
  };

  return (
    <section className="testimonials">
      {/* HEADER */}
      <div className="test-head">
        <span className="test-tag">✦ CUSTOMER FEEDBACK</span>
        <h2>
          Hear What Others Say <br /> About Partnering With Us
        </h2>
      </div>

      {/* SLIDER */}
      <div
        className="test-slider"
        onMouseDown={onStart}
        onMouseUp={onEnd}
        onTouchStart={onStart}
        onTouchEnd={onEnd}
      >
        <div
          className="test-track"
          ref={trackRef}
          style={{
            transform: `translateX(-${index * slideWidth}%)`,
          }}
        >
          {slides.map((item, i) => (
            <div className="test-card" key={i}>
              <div className="test-img">
                <img src={item.img} alt={item.name} />
                <div className="stars">★★★★★</div>
              </div>

              <div className="test-content">
                <p>“ {item.text} ”</p>
                <hr />
                <h4>{item.name}</h4>
                <span>{item.role}</span>
              </div>

              <div className="quote">❝</div>
            </div>
          ))}
        </div>
      </div>

      {/* DOTS */}
      <div className="test-dots">
        {testimonials.map((_, i) => (
          <span
            key={i}
            className={i === (index - 1 + total) % total ? "active" : ""}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
