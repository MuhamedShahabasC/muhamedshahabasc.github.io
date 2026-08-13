document.addEventListener("alpine:init", () => {
  Alpine.data("siteShell", () => ({
    activeSection: "home",
    scrolled: false,
    showScrollUp: false,

    init() {
      localStorage.removeItem("theme");
      document.body.classList.remove("dark-theme");
      this.updateScroll();

      window.addEventListener("scroll", () => this.updateScroll(), {
        passive: true,
      });

      const sections = document.querySelectorAll("main section[id]");
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((entry) => entry.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

          if (visible) this.activeSection = visible.target.id;
        },
        { rootMargin: "-30% 0px -55%", threshold: [0.05, 0.25, 0.5] },
      );

      sections.forEach((section) => observer.observe(section));
    },

    updateScroll() {
      this.scrolled = window.scrollY >= 80;
      this.showScrollUp = window.scrollY >= 560;
    },

  }));
});
