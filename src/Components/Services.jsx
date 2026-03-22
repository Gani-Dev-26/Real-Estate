import "./Services.css";

const services = [
  {
    title: "Smart Home System",
    icon: "bi-house-door",
    bg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
  },
  {
    title: "Solar Energy Panels",
    icon: "bi-gear",
    bg: "https://images.unsplash.com/photo-1509395176047-4a66953fd231",
  },
  {
    title: "Central Air Conditioning",
    icon: "bi-rulers",
    bg: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc",
  },
  {
    title: "Investment Consulting",
    icon: "bi-buildings",
    bg: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    title: "Reasonable Price",
    icon: "bi-cash-stack",
    bg: "https://images.unsplash.com/photo-1521540216272-a50305cd4421",
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <div className="services-grid">
          {services.map((item, i) => (
            <div
              key={i}
              className="service-card"
              style={{ "--service-bg": `url(${item.bg})` }}
              data-aos="zoom-in-up"
              data-aos-duration="700"
              data-aos-delay={i * 80}     // 🔥 fast stagger
            >
              <div className="service-overlay"></div>

              <div
                className="service-icon"
                data-aos="zoom-in"
                data-aos-delay={i * 80 + 120}
              >
                <i className={`bi ${item.icon}`}></i>
              </div>

              <h3
                data-aos="fade-up"
                data-aos-delay={i * 80 + 180}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
