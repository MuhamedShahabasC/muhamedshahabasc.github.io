import "./contact.css";

const Contact = () => {

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Let's connect</span>

      <div className="contact__container container">
        <div className="contact__cards">
          <div className="contact__card">
            <i className="bx bx-mail-send contact__card-icon"></i>
            <h3 className="contact__card-title">Email</h3>
            <span className="contact__card-data">
              muhamedshahabasc@gmail.com
            </span>
            <a
              href="mailto:muhamedshahabasc@gmail.com"
              className="contact__button"
            >
              Write me{" "}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>

          <div className="contact__card">
            <i className="bx bx-phone-call contact__card-icon"></i>
            <h3 className="contact__card-title">Mobile</h3>
            <span className="contact__card-data">+91 9495728746</span>
            <a href="tel:+919495728746" className="contact__button">
              Call me{" "}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>

          <div className="contact__card">
            <i className="bx bx-building-house contact__card-icon"></i>
            <h3 className="contact__card-title">Location</h3>
            <span className="contact__card-data">Bangalore, Karnataka</span>
            <a
              href="https://maps.app.goo.gl/GcJaPenh7mTaT4Ph6"
              target="_blank"
              className="contact__button"
            >
              Reach me{" "}
              <i className="bx bx-right-arrow-alt contact__button-icon"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Form commented out - can be re-enabled later
      <div className="contact__content">
        <h3 className="contact__title">Write me your project</h3>
        <form className="contact__form" onSubmit={handleFormOnSubmit}>
          ...form fields...
        </form>
      </div>
      */}
    </section>
  );
};

export default Contact;
