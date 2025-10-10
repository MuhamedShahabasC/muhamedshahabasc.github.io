import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Muhamed Shahabas C</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/MuhamedShahabasC" target="_blank" className="home__social-icon">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="https://github.com/MuhamedShahabasC" target="_blank" className="home__social-icon">
            <i className="bx bxl-github"></i>
          </a>
          <a href="mailto:muhamedshahabasc@gmail.com" target="_blank" className="home__social-icon">
            <i className="bx bx-envelope"></i>
          </a>
          <a href="https://wa.me/9061991972" target="_blank" className="home__social-icon">
            <i className="bx bxl-whatsapp"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Muhamed Shahabas C. All rigths reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
