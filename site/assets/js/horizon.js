const stage = document.querySelector(".hero-stage");

const updateDepth = () => {
  const travel = Math.max(1, stage.offsetHeight - window.innerHeight);
  const progress = Math.min(1, Math.max(0, -stage.getBoundingClientRect().top / travel));
  stage.style.setProperty("--depth", (progress * 0.68).toFixed(4));
};

document.addEventListener("scroll", updateDepth, { passive: true });
window.addEventListener("resize", updateDepth);
updateDepth();
