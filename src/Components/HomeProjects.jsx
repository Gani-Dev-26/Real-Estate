import { useNavigate } from "react-router-dom";
import "./HomeProjects.css";

const projects = [
  {
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    img: "https://images.unsplash.com/photo-1505691938895-1758d7feb511",
  },
  {
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    img: "https://images.unsplash.com/photo-1597047084897-51e81819a499",
  },
];

const HomeProjects = () => {
  const navigate = useNavigate();

  return (
    <section className="home-projects">
      {/* SECTION HEADING */}
      <div
        className="hp-heading"
        data-aos="fade-up"
        data-aos-duration="600"
      >
        <span
          className="hp-tag"
          data-aos="fade-up"
          data-aos-delay="60"
        >
          ✦ OUR PROJECTS
        </span>

        <h2
          data-aos="fade-up"
          data-aos-delay="120"
        >
          Showcasing our Projects
        </h2>
      </div>

      <div className="hp-grid">
        {projects.map((item, index) => (
          <div
            key={index}
            className="hp-card"
            onClick={() => navigate("/our-projects")}
            data-aos="fade-up"              // bottom → top
            data-aos-delay={index * 120}    // one by one
            data-aos-duration="600"
          >
            <img src={item.img} alt="Project" />

            {/* Hover Arrow */}
            <div className="hp-overlay">
              <span className="hp-arrow">
                <i className="bi bi-arrow-right"></i>
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProjects;
