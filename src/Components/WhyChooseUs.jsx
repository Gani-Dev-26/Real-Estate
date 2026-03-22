import "./WhyChooseUs.css";

const features = [
  {
    title: "Research & Planning",
    desc: "Develop high-quality, engaging content tailored to your audience. Post regularly, engage.",
    icon: "bi-lightbulb",
  },
  {
    title: "Design & Development Idea",
    desc: "Develop high-quality, engaging content tailored to your audience. Post regularly, engage.",
    icon: "bi-gear-wide-connected",
  },
  {
    title: "Testing & Quality Checking",
    desc: "Develop high-quality, engaging content tailored to your audience. Post regularly, engage.",
    icon: "bi-shield-check",
  },
  {
    title: "Project Delivered",
    desc: "Develop high-quality, engaging content tailored to your audience. Post regularly, engage.",
    icon: "bi-layers",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT IMAGE + BADGE */}
        <div
          className="why-image-box"
          data-aos="fade-right"
          data-aos-duration="700"
        >
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab"
            alt="Building"
          />

          {/* ROTATING BADGE */}
          <div
            className="rotating-badge"
            data-aos="zoom-in"
            data-aos-delay="150"
            data-aos-duration="600"
          >
            <svg viewBox="0 0 200 200">
              <defs>
                <path
                  id="circlePath"
                  d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0"
                />
              </defs>
              <text>
                <textPath href="#circlePath">
                  25 YEARS OF EXPERIENCE • 25 YEARS OF EXPERIENCE •
                </textPath>
              </text>
            </svg>

            <div className="badge-center">
              <i className="bi bi-buildings"></i>
            </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div
          className="why-content"
          data-aos="fade-up"
          data-aos-duration="700"
        >
          <span
            className="why-tag"
            data-aos="fade-up"
            data-aos-delay="60"
          >
            ✦ WHY CHOOSE US
          </span>

          <h2
            data-aos="fade-up"
            data-aos-delay="120"
          >
            What Makes Our Company Most Different
          </h2>

          <div className="why-list">
            {features.map((item, i) => (
              <div
                className="why-item"
                key={i}
                data-aos="fade-up"          // bottom → top
                data-aos-delay={180 + i * 90}
                data-aos-duration="600"
              >
                <div className="why-icon">
                  <i className={`bi ${item.icon}`}></i>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
