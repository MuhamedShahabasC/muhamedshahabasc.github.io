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
          <a href="mailto:muhamedshahabasc@gmail.com" target="_blank" className="footer__social-icon">
            <i className="uil uil-envelope-alt"></i>
          </a>
          <a href="tel:+919495728746" target="_blank" className="footer__social-icon">
            <i className="uil uil-mobile-android"></i>
          </a>
          <a href="https://medium.com/@muhamedshahabasc" target="_blank" className="footer__social-icon">
            <i className="uil uil-medium-m"></i>
          </a>
          <a href="https://www.linkedin.com/in/MuhamedShahabasC" target="_blank" className="footer__social-icon">
            <i className="uil uil-linkedin-alt"></i>
          </a>
          <a href="https://wa.me/919495728746" target="_blank" className="footer__social-icon">
            <i className="uil uil-whatsapp"></i>
          </a>
          <a href="https://github.com/MuhamedShahabasC" target="_blank" className="footer__social-icon">
            <i className="uil uil-github"></i>
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
