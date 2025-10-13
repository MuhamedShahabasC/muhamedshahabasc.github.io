import { lazy, Suspense } from "react";
import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Qualification from "./components/Qualification/Qualification";
import ScrollUp from "./components/ScrollUp/ScrollUp";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";
import Footer from "./components/footer/Footer";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import Loader from "./components/Loader/Loader";

// Lazy load heavy components
const Work = lazy(() => import("./components/work/Work"));
const Testimonials = lazy(() => import("./components/Testimonials/Testimonials"));

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
        <Suspense fallback={<Loader />}>
          <Work />
        </Suspense>
        {/* <Suspense fallback={<Loader />}>
          <Testimonials />
        </Suspense> */}
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
      <ThemeToggle />
    </>
  );
}

export default App;
