document.addEventListener("alpine:init", () => {
  Alpine.data("siteShell", () => ({
    dark: localStorage.getItem("theme") === "dark",
    menuOpen: false,
    mobile: window.matchMedia("(max-width: 768px)").matches,
    activeSection: "home",
    scrolled: false,
    showScrollUp: false,

    init() {
      this.applyTheme();
      this.updateScroll();

      const mobileQuery = window.matchMedia("(max-width: 768px)");
      mobileQuery.addEventListener("change", (event) => {
        this.mobile = event.matches;
        if (!this.mobile) this.menuOpen = false;
      });

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

    applyTheme() {
      document.body.classList.toggle("dark-theme", this.dark);
      document.documentElement.style.colorScheme = this.dark ? "dark" : "light";
      window.dispatchEvent(
        new CustomEvent("themechange", {
          detail: { theme: this.dark ? "dark" : "light" },
        }),
      );
    },

    toggleTheme() {
      this.dark = !this.dark;
      localStorage.setItem("theme", this.dark ? "dark" : "light");
      this.applyTheme();
    },
  }));
});
