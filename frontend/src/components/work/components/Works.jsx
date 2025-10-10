import { useState } from "react";
import { portfolioData, portfolioNav } from "../../../constants/works";
import WorkCard from "./WorkCard";
import { useEffect } from "react";

const Works = () => {
  const [nav, setNav] = useState({ title: "all" });
  const [projects, setProjects] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (nav.title === "all") {
      setProjects(portfolioData);
    } else {
      setProjects(portfolioData.filter((item) => item.category === nav.title));
    }
    setShowAll(false); // Reset when filter changes
  }, [nav]);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);
  const hasMore = projects.length > 6;

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
        {displayedProjects.map((item) => {
          return <WorkCard item={item} key={item.id} />;
        })}
      </div>
      {hasMore && (
        <div className="work__show-more">
          <button 
            className="button button--flex work__show-more-btn"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? "Show Less" : "Show More Projects"}
            <i className={`uil ${showAll ? 'uil-angle-up' : 'uil-angle-down'}`}></i>
          </button>
        </div>
      )}
    </>
  );
};

export default Works;
