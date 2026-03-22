import { useState } from "react";
import "./WhoWeAre.css";

const WhoWeAre = () => {
  const [openVideo, setOpenVideo] = useState(false);

  return (
    <>
      <section className="who-section">
        <div className="container who-grid">

          {/* LEFT CONTENT */}
          <div
            className="who-content"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            <span
              className="who-subtitle"
              data-aos="fade-up"
              data-aos-delay="50"
            >
              ✦ WHO WE ARE
            </span>

            <h2
              className="who-title"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Trusted builders delivering<br />
              modern construction &<br />
              interior excellence
            </h2>

            <p
              className="who-desc"
              data-aos="fade-up"
              data-aos-delay="150"
            >
              We are a full-service construction and interior firm specializing in
              residential and commercial projects. From vastu-compliant planning
              to elegant interiors, we build spaces that last generations.
            </p>

            <ul className="who-list">
              {[
                "End-to-end Construction Solutions",
                "Premium Interior Design & Execution",
                "Vastu-based Architectural Planning",
                "Transparent Process & Quality Materials",
              ].map((item, i) => (
                <li
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={200 + i * 60}
                >
                  ✔ {item}
                </li>
              ))}
            </ul>

            <div
              className="who-exp"
              data-aos="zoom-in"
              data-aos-delay="450"
            >
              <h1>15+</h1>
              <p>Years Of Experience</p>
            </div>
          </div>

          {/* RIGHT IMAGES */}
          <div
            className="who-images"
            data-aos="fade-left"
            data-aos-duration="700"
          >
            {/* BIG IMAGE */}
            <div
              className="img-large-box"
              data-aos="zoom-in"
              data-aos-delay="120"
            >
              <img
                src="https://images.unsplash.com/photo-1501183638710-841dd1904471"
                alt="High Rise Building"
              />
              <p className="img-caption">
                Building future-ready spaces with precision and trust.
              </p>
            </div>

            {/* VIDEO THUMB */}
            <div
              className="video-thumb img-small"
              data-aos="zoom-in"
              data-aos-delay="200"
              onClick={() => setOpenVideo(true)}
            >
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
                alt="Project Video"
              />
              <div className="play-btn">▶</div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= VIDEO MODAL ================= */}
      {openVideo && (
        <div className="video-modal" onClick={() => setOpenVideo(false)}>
          <div
            className="video-modal-content"
            onClick={(e) => e.stopPropagation()}
            data-aos="zoom-in"
            data-aos-duration="400"
          >
            <button
              className="video-close"
              onClick={() => setOpenVideo(false)}
            >
              ✕
            </button>

            <iframe
              src="https://www.youtube.com/embed/VIDEO_ID?autoplay=1"
              title="YouTube video"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </>
  );
};

export default WhoWeAre;
