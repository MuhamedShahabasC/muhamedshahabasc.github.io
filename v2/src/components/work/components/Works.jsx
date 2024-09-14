import { useState } from "react";
import { portfolioData, portfolioNav } from "../../../constants/works";
import WorkCard from "./WorkCard";
import { useEffect } from "react";

const Works = () => {
  const [nav, setNav] = useState({ title: "all" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (nav.title === "all") {
      setProjects(portfolioData);
    } else {
      setProjects(portfolioData.filter((item) => item.category === nav.title));
    }
  }, [nav]);

  return (
    <>
      <div className="work__filters">
        {portfolioNav.map((item, i) => (
          <span
            key={i}
            className={`work__item ${
              nav.title === item.title && "active-work"
            }`}
            onClick={() => setNav(item)}
          >
            {item.title}
          </span>
        ))}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkCard item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Works;
