import React from "react";

const ScrollDown = () => {
  const svgStyles = {
    fillRule: "evenodd",
    clipRule: "evenodd",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeMiterlimit: "1.5",
    fill: "var(--title-color)",
  };

  const wheelPathStyles = {
    fill: "none",
    stroke: "var(--title-color)",
    strokeWidth: "20px",
  };

  const mousePathStyles = {
    fill: "none",
    stroke: "var(--title-color)",
    strokeWidth: "20px",
  };

  return (
    <div className="home__scroll">
      <a href="#about" className="home__scroll-button button--flex">
        <svg
          width="32px"
          height="32px"
          className="home__scroll-mouse"
          viewBox="0 0 247 390"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          style={svgStyles}
        >
          <path
            className="wheel"
            d="M123.359,79.775l0,72.843"
            style={wheelPathStyles}
          ></path>
          <path
            id="mouse"
            d="M236.717,123.359c0,-62.565 -50.794,-113.359 -113.358,-113.359c-62.565,0 -113.359,50.794 -113.359,113.359l0,143.237c0,62.565 50.794,113.359 113.359,113.359c62.564,0 113.358,-50.794 113.358,-113.359l0,-143.237Z"
            style={mousePathStyles}
          ></path>
        </svg>
        <span className="home__scroll-name">Scroll down</span>
        <i
          className="uil uil-arrow-down"
          style={{
            color: "var(--title-color)",
          }}
        ></i>
      </a>
    </div>
  );
};

export default ScrollDown;
