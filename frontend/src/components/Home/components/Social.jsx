const Social = () => {
  return (
    <div className="home__social">
      <a
        href="mailto:muhamedshahabasc@gmail.com"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-envelope-alt"></i>
        <span className="home__social-label">muhamedshahabasc@gmail.com</span>
      </a>
      <a href="tel:+919495728746" target="_blank" className="home__social-icon">
        <i className="uil uil-mobile-android"></i>
        <span className="home__social-label">+91 9495728746</span>
      </a>
      <a
        href="https://medium.com/@muhamedshahabasc"
        target="_blank"
        className="home__social-icon"
      >
        <i className="uil uil-medium-m"></i>
        <span className="home__social-label">Medium Blog</span>
      </a>
      <a
        href="https://www.linkedin.com/in/MuhamedShahabasC"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-linkedin-alt"></i>
        <span className="home__social-label">LinkedIn</span>
      </a>
      <a
        href="https://wa.me/919495728746"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-whatsapp"></i>
        <span className="home__social-label">WhatsApp</span>
      </a>
      <a
        href="https://github.com/MuhamedShahabasC"
        target="_blank"
        className="home__social-icon"
      >
        <i className="uil uil-github"></i>
        <span className="home__social-label">GitHub</span>
      </a>
    </div>
  );
};

export default Social;
