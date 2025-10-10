import { useState } from "react";
import "./qualification.css";

const Qualification = () => {
  const [toggleModal, setToggleModal] = useState(1);

  const handleTabToggle = (idx) => setToggleModal(idx);

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My personal journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={`qualification__button button--flex ${
              toggleModal === 1 && "qualification__active"
            }`}
            onClick={() => handleTabToggle(1)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>
            Experience
          </div>
          <div
            className={`qualification__button button--flex ${
              toggleModal === 2 && "qualification__active"
            }`}
            onClick={() => handleTabToggle(2)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>
            Education
          </div>
        </div>

        {/* Sections */}
        <div className="qualification__sections">
          <div
            className={`qualification__content ${
              toggleModal === 2 && "qualification__content-active"
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Bachelor of Computer Applications</h3>
                <span className="qualification__subtitle">
                  Indira Gandhi National Open University
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Aug 2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">MERN Stack Bootcamp</h3>
                <span className="qualification__subtitle">
                  Brototype, Calicut
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2022 - Aug 2023
                </div>
              </div>
            </div>
          </div>
          <div
            className={`qualification__content ${
              toggleModal === 1 && "qualification__content-active"
            }`}
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Junior Software Developer Engineer</h3>
                <span className="qualification__subtitle">
                  Autonomize AI, Bangalore
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Feb 2024 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Full Stack Developer</h3>
                <span className="qualification__subtitle">
                  The Capital Hub, Bangalore
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Aug 2023 - Feb 2024
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
