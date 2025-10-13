import { useState } from "react";
import "./header.css";
import icons from '../../utils/iconMap';

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  const HomeIcon = icons.home;
  const UserIcon = icons.user;
  const FileIcon = icons.file;
  const BriefcaseIcon = icons.briefcase;
  const SceneryIcon = icons.scenery;
  const MessageIcon = icons.message;
  const TimesIcon = icons.times;
  const AppsIcon = icons.apps;

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
                <HomeIcon className="nav__icon" /> Home
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
                <UserIcon className="nav__icon" /> About
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
                <FileIcon className="nav__icon" /> Skills
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
                <BriefcaseIcon className="nav__icon" /> Services
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
                <SceneryIcon className="nav__icon" /> Portfolio
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
                <MessageIcon className="nav__icon" /> Contact
              </a>
            </li>
          </ul>

          <TimesIcon
            className="nav__close"
            onClick={() => setToggleMenu(false)}
          />
        </div>
        <div className="nav__toggle" onClick={() => setToggleMenu(true)}>
          <AppsIcon />
        </div>
      </nav>
    </header>
  );
};

export default Header;
