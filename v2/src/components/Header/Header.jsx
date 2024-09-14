import { useState } from "react";
import "./header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  // Change header bg
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  const handleNavLinkClick = (navItem) => {
    setActiveNav(navItem);
    setToggleMenu(false);
  };

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Muhamed Shahabas C
        </a>
        <div className={`nav__menu ${toggleMenu && "show-menu"}`}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => handleNavLinkClick("home")}
                className={`nav__link ${activeNav === "home" && "active-link"}`}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className={`nav__link ${
                  activeNav === "about" && "active-link"
                }`}
                onClick={() => handleNavLinkClick("about")}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className={`nav__link ${
                  activeNav === "skills" && "active-link"
                }`}
                onClick={() => handleNavLinkClick("skills")}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                className={`nav__link ${
                  activeNav === "services" && "active-link"
                }`}
                onClick={() => handleNavLinkClick("services")}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Services
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#portfolio"
                className={`nav__link ${
                  activeNav === "portfolio" && "active-link"
                }`}
                onClick={() => handleNavLinkClick("portfolio")}
              >
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#contact"
                className={`nav__link ${
                  activeNav === "contact" && "active-link"
                }`}
                onClick={() => handleNavLinkClick("contact")}
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => setToggleMenu(false)}
          ></i>
        </div>
        <div className="nav__toggle" onClick={() => setToggleMenu(true)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
