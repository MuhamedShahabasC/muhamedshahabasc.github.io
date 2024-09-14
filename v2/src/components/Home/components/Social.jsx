const Social = () => {
  return (
    <div className="home__social">
      <a
        href="mailto:muhamedshahabasc@gmail.com"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-envelope-alt"></i>
      </a>
      <a href="tel:+919061991972" target="_blank" className="home__social-icon">
        <i className="uil uil-mobile-android"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/MuhamedShahabasC"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>
      <a
        href="https://wa.me/9061991972"
        target="_blank"
        className="home__social-icon"
      >
        <i class="uil uil-whatsapp"></i>
      </a>
      {/* <a
        href="https://github.com/MuhamedShahabasC"
        target="_blank"
        className="home__social-icon"
      >
        <i className="uil uil-github"></i>
      </a> */}
    </div>
  );
};

export default Social;
