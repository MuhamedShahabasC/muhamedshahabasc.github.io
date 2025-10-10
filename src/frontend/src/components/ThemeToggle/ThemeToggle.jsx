import { useEffect, useState } from "react";
import "./themetoggle.css";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.body.classList.add("dark-theme");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    document.body.classList.toggle("dark-theme");
    const newTheme = document.body.classList.contains("dark-theme");
    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      <i className={isDark ? "uil uil-sun" : "uil uil-moon"}></i>
    </div>
  );
};

export default ThemeToggle;
