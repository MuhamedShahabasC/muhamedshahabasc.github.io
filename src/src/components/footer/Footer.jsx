import "./footer.css";
import icons from '../../utils/iconMap';

const Footer = () => {
  const EnvelopeIcon = icons.envelope;
  const MobileIcon = icons.mobile;
  const MediumIcon = icons.medium;
  const LinkedinIcon = icons.linkedin;
  const WhatsappIcon = icons.whatsapp;
  const GithubIcon = icons.github;

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
            <EnvelopeIcon />
          </a>
          <a href="tel:+919495728746" target="_blank" className="footer__social-icon">
            <MobileIcon />
          </a>
          <a href="https://medium.com/@muhamedshahabasc" target="_blank" className="footer__social-icon">
            <MediumIcon />
          </a>
          <a href="https://www.linkedin.com/in/MuhamedShahabasC" target="_blank" className="footer__social-icon">
            <LinkedinIcon />
          </a>
          <a href="https://wa.me/919495728746" target="_blank" className="footer__social-icon">
            <WhatsappIcon />
          </a>
          <a href="https://github.com/MuhamedShahabasC" target="_blank" className="footer__social-icon">
            <GithubIcon />
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
