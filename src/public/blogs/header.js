document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav__menu");
  const toggle = document.querySelector(".nav__toggle");
  const close = document.querySelector(".nav__close");
  const header = document.querySelector(".header");
  const themeToggle = document.querySelector(".theme-toggle");
  const themeIcon = themeToggle?.querySelector("i");

  const applyTheme = (theme) => {
    const isDark = theme === "dark";

    document.body.classList.toggle("dark-theme", isDark);
    themeIcon?.classList.toggle("uil-sun", isDark);
    themeIcon?.classList.toggle("uil-moon", !isDark);

    if (themeToggle) {
      themeToggle.setAttribute(
        "aria-label",
        isDark ? "Switch to light theme" : "Switch to dark theme",
      );
    }

    window.dispatchEvent(
      new CustomEvent("themechange", { detail: { theme } }),
    );
  };

  applyTheme(localStorage.getItem("theme") === "dark" ? "dark" : "light");

  themeToggle?.addEventListener("click", () => {
    const theme = document.body.classList.contains("dark-theme")
      ? "light"
      : "dark";

    localStorage.setItem("theme", theme);
    applyTheme(theme);
  });

  toggle?.addEventListener("click", () => menu?.classList.add("show-menu"));
  close?.addEventListener("click", () => menu?.classList.remove("show-menu"));

  document.querySelectorAll(".nav__link").forEach((link) => {
    link.addEventListener("click", () => menu?.classList.remove("show-menu"));
  });

  const updateHeader = () => {
    header?.classList.toggle("scroll-header", window.scrollY >= 80);
  };

  window.addEventListener("scroll", updateHeader, { passive: true });
  updateHeader();
});
