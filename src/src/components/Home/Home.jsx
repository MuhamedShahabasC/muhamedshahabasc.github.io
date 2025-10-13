import Data from "./components/Data";
import ScrollDown from "./components/ScrollDown";
import Social from "./components/Social";
import heroImage from "../../assets/Shahabas_SDE.jpg";
import "./home.css";

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <Social />

          <img 
            src={heroImage}
            alt="Muhamed Shahabas - Software Developer"
            width="300"
            height="300"
            fetchpriority="high"
            className="home__img"
          />

          <Data />
        </div>
        <ScrollDown />
      </div>
    </section>
  );
};

export default Home;
