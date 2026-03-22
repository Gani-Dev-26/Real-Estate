import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* LEFT */}
        <div className="footer-left">
          <div className="footer-logo">
            <span className="logo-icon">⬢</span>
            <h3>Realest</h3>
          </div>

          <p className="footer-contact">+ (123) 456-7890</p>
          <p className="footer-email">domain@example.com</p>

          <div className="footer-social">
            <span><i className="bi bi-twitter"></i></span>
            <span><i className="bi bi-facebook"></i></span>
            <span><i className="bi bi-youtube"></i></span>
            <span><i className="bi bi-dribbble"></i></span>
          </div>
        </div>

        {/* CENTER IMAGE */}
        <div className="footer-center">
          <img
            src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb"
            alt="Real Estate"
          />
        </div>

        {/* RIGHT */}
        <div className="footer-right">
          <h4 className="footer-title">Get the latest inspiration & insights</h4>

          <div className="footer-links">
            <div>
              <h5>Quick Link</h5>
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
                <li>Our Portfolio</li>
                <li>Careers</li>
                <li>Contact Us</li>
              </ul>
            </div>

            <div>
              <h5>Our Works</h5>
              <ul>
                <li>Apartment Building</li>
                <li>Construction Management</li>
                <li>Investment & Capital</li>
                <li>Architecture & Design</li>
                <li>Projects Management</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© Copyright Reserved by Company.com</p>
        <div className="footer-policy">
          <span>Privacy Policy</span>
          <span>Term of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
