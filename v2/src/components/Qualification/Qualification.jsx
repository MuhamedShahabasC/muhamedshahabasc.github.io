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
                <h3 className="qualification__title">MERN Bootcamp</h3>
                <span className="qualification__subtitle">
                  Brototype, Kozhikkode
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2022 - Jul 2023
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
                <h3 className="qualification__title">Mechanical Engg.</h3>
                <span className="qualification__subtitle">
                  Govt. Rajiv Gandhi Institute of Technology, Kottayam
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2017 - 2021
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Higher Secondary</h3>
                <span className="qualification__subtitle">
                  RHSS Ramanattukara, Calicut
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015 - 2017
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
                <h3 className="qualification__title">Secondary</h3>
                <span className="qualification__subtitle">
                  Floreat International School, Pulikkal
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2015
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
                <h3 className="qualification__title">Full Stack Dev</h3>
                <span className="qualification__subtitle">
                  The Capital Hub, Bengalore
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Aug 2023 - Present
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
                <h3 className="qualification__title">Tech. Co-ordinator</h3>
                <span className="qualification__subtitle">
                  Brocamp - Brototype, Calicut
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> Sep 2022 - Aug 2023
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Blogger</h3>
                <span className="qualification__subtitle">
                  Writing, Editing and Managing
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i> 2021 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            {/* <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
              <div>
                <h3 className="qualification__title">Web Development</h3>
                <span className="qualification__subtitle">
                  Spain - Institute
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - Present
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;
