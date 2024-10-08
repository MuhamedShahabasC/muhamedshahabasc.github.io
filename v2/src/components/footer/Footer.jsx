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
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="" target="_blank" className="home__social-icon">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="" target="_blank" className="home__social-icon">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="" target="_blank" className="home__social-icon">
            <i className="bx bxl-facebook"></i>
          </a>
          <a href="" target="_blank" className="home__social-icon">
            <i className="bx bxl-facebook"></i>
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
