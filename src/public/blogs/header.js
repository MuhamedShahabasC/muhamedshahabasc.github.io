document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector(".nav__menu");
  const toggle = document.querySelector(".nav__toggle");
  const close = document.querySelector(".nav__close");
  const header = document.querySelector(".header");

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
