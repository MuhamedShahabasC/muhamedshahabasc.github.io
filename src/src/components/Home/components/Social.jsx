import icons from '../../../utils/iconMap';

const Social = () => {
  const EnvelopeIcon = icons.envelope;
  const MobileIcon = icons.mobile;
  const MediumIcon = icons.medium;
  const LinkedinIcon = icons.linkedin;
  const WhatsappIcon = icons.whatsapp;
  const GithubIcon = icons.github;

  return (
    <div className="home__social">
      <a
        href="mailto:muhamedshahabasc@gmail.com"
        target="_blank"
        className="home__social-icon"
      >
        <EnvelopeIcon />
        <span className="home__social-label">muhamedshahabasc@gmail.com</span>
      </a>
      <a href="tel:+919495728746" target="_blank" className="home__social-icon">
        <MobileIcon />
        <span className="home__social-label">+91 9495728746</span>
      </a>
      <a
        href="https://medium.com/@muhamedshahabasc"
        target="_blank"
        className="home__social-icon"
      >
        <MediumIcon />
        <span className="home__social-label">Medium Blog</span>
      </a>
      <a
        href="https://www.linkedin.com/in/MuhamedShahabasC"
        target="_blank"
        className="home__social-icon"
      >
        <LinkedinIcon />
        <span className="home__social-label">LinkedIn</span>
      </a>
      <a
        href="https://wa.me/919495728746"
        target="_blank"
        className="home__social-icon"
      >
        <WhatsappIcon />
        <span className="home__social-label">WhatsApp</span>
      </a>
      <a
        href="https://github.com/MuhamedShahabasC"
        target="_blank"
        className="home__social-icon"
      >
        <GithubIcon />
        <span className="home__social-label">GitHub</span>
      </a>
    </div>
  );
};

export default Social;
