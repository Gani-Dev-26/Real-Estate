import "./MainServicesV2.css";

const mainServices = [
  {
    title: "Interior & Exterior Design",
    img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
    icon: "bi-house-door",
  },
  {
    title: "Vastu Consultancy",
    img: "https://images.unsplash.com/photo-1501183638710-841dd1904471",
    icon: "bi-compass",
  },
  {
    title: "Property Management",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    icon: "bi-buildings",
  },
];

const MainServicesV2 = () => {
  return (
    <section className="main-services-v2">
      <div className="container">
        <span
          className="msv2-tag"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          ✦ WHAT WE DO
        </span>

        <h2
          className="msv2-title"
          data-aos="fade-up"
          data-aos-delay="80"
          data-aos-duration="600"
        >
          Explore our services
        </h2>

        <div className="msv2-grid">
          {mainServices.map((item, i) => (
            <div
              key={i}
              className="msv2-card"
              data-aos="fade-up"          // bottom → top
              data-aos-delay={i * 120}   // one by one
              data-aos-duration="600"    // smooth
            >
              <div
                className="msv2-img-wrap"
                data-aos="zoom-in"
                data-aos-delay={i * 120 + 80}
                data-aos-duration="600"
              >
                <img src={item.img} alt={item.title} />
                <span className="msv2-icon">
                  <i className={`bi ${item.icon}`}></i>
                </span>
              </div>

              <div
                className="msv2-content"
                data-aos="fade-up"
                data-aos-delay={i * 120 + 160}
                data-aos-duration="500"
              >
                <h3>{item.title}</h3>

                <button
                  className="msv2-btn"
                  data-aos="fade-up"
                  data-aos-delay={i * 120 + 220}
                  onClick={() =>
                    window.open(
                      "https://wa.me/919876543210?text=Hello%20I%20am%20interested%20in%20your%20services",
                      "_blank"
                    )
                  }
                >
                  Contact Here
                  <span className="wa-icon">
                    <i className="bi bi-whatsapp"></i>
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainServicesV2;
