import Backend from "./Components/Backend";
import Frontend from "./Components/Frontend";
import Tools from "./Components/Tools";
import "./skills.css";

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical expertise</span>

      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Tools />
      </div>
    </section>
  );
};

export default Skills;
