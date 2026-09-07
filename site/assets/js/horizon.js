const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealItems = document.querySelectorAll(".reveal");

if (!reduceMotion && "Lenis" in window) {
  new window.Lenis({
    anchors: true,
    autoRaf: true,
    lerp: 0.085,
    smoothWheel: true,
    wheelMultiplier: 0.9,
  });
}

if (!reduceMotion) {
  let dotsFrame = 0;
  const updateDots = () => {
    const scrollY = window.scrollY;
    document.documentElement.style.setProperty("--dots-near-y", `${(scrollY * -0.115) % 109}px`);
    document.documentElement.style.setProperty("--dots-far-y", `${(scrollY * -0.052) % 163}px`);
    dotsFrame = 0;
  };

  window.addEventListener(
    "scroll",
    () => {
      if (dotsFrame) return;
      dotsFrame = window.requestAnimationFrame(updateDots);
    },
    { passive: true },
  );
}

if ("Konva" in window) {
  const cssColor = (name, alpha = 1) => {
    const [red, green, blue] = getComputedStyle(document.documentElement)
      .getPropertyValue(name)
      .trim()
      .split(/\s+/)
      .map(Number);
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  };

  const addPill = (layer, { fill, height, label, stroke, text, width, x, y }) => {
    layer.add(new window.Konva.Rect({ cornerRadius: height / 2, fill, height, listening: false, stroke, strokeWidth: 1, width, x, y }));
    layer.add(new window.Konva.Text({ align: "center", fill: text, fontFamily: "Syne, sans-serif", fontSize: Math.max(9, Math.min(13, width * 0.12)), height, listening: false, text: label, verticalAlign: "middle", width, x, y }));
  };

  const addSignal = (layer, { color, from, to }) => {
    layer.add(new window.Konva.Line({ dash: [5, 8], listening: false, points: [from.x, from.y, to.x, to.y], stroke: color, strokeWidth: 1 }));
    const particle = new window.Konva.Circle({ fill: color, listening: false, radius: 3 });
    layer.add(particle);
    return { from, particle, to };
  };

  const animateSignals = (layer, signals, duration = 2400) => new window.Konva.Animation((frame) => {
    const elapsed = frame?.time ?? 0;
    signals.forEach(({ from, particle, to }, index) => {
      const progress = ((elapsed / duration) + index / signals.length) % 1;
      particle.position({ x: from.x + (to.x - from.x) * progress, y: from.y + (to.y - from.y) * progress });
      particle.opacity(.35 + progress * .65);
    });
  }, layer);

  const mountPortfolioCanvas = (id, drawScene) => {
    const host = document.getElementById(id);
    if (!host) return;

    const stage = new window.Konva.Stage({ container: host, width: 1, height: 1 });
    const layer = new window.Konva.Layer({ listening: false });
    stage.add(layer);
    let animation;
    let visible = true;
    let pointerHandler = () => {};

    const syncAnimation = () => {
      if (!animation) return;
      if (!reduceMotion && visible) animation.start();
      else animation.stop();
    };

    const render = () => {
      const width = host.clientWidth;
      const height = host.clientHeight;
      if (!width || !height) return;
      animation?.stop();
      stage.size({ width, height });
      layer.destroyChildren();
      const scene = drawScene({ height, layer, text: cssColor("--portfolio-text-rgb"), line: cssColor("--portfolio-text-rgb", .3), panel: cssColor("--portfolio-base-rgb", .62), accent: cssColor("--portfolio-accent-rgb"), width });
      animation = scene.animation;
      pointerHandler = scene.pointerHandler ?? (() => {});
      layer.draw();
      syncAnimation();
    };

    host.addEventListener("pointermove", (event) => {
      const bounds = host.getBoundingClientRect();
      pointerHandler({ x: event.clientX - bounds.left, y: event.clientY - bounds.top });
    });
    host.addEventListener("pointerleave", () => pointerHandler());
    if ("ResizeObserver" in window) new ResizeObserver(render).observe(host);
    else window.addEventListener("resize", render);
    if ("IntersectionObserver" in window) new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? false;
      syncAnimation();
    }, { threshold: .05 }).observe(host);
    document.fonts.ready.then(render);
    render();
  };

  mountPortfolioCanvas("portfolio-platform-canvas", ({ accent, height, layer, line, panel, text, width }) => {
    const compact = width < 500;
    const margin = Math.max(16, width * .07);
    const gap = Math.max(22, Math.min(48, width * .09));
    const nodeWidth = Math.min(122, Math.max(66, width * .19));
    const nodeHeight = Math.max(46, Math.min(68, width * .14));
    const nodeY = height * .56;
    const nodesWidth = nodeWidth * 3 + gap * 2;
    const nodesLeft = Math.max(margin, (width - nodesWidth) / 2);
    const nodes = ["Agents", "Workflows", "Runtime"].map((label, index) => ({ label, x: nodesLeft + index * (nodeWidth + gap), y: nodeY }));
    const signals = [];
    const workflow = nodes[1];
    const halo = new window.Konva.Circle({ fill: accent, listening: false, opacity: .14, radius: Math.max(42, width * .12), x: workflow.x + nodeWidth / 2, y: nodeY + nodeHeight / 2 });
    layer.add(halo);

    nodes.forEach(({ label, x, y }, index) => {
      if (index) signals.push(addSignal(layer, { color: line, from: { x: x - gap + 2, y: y + nodeHeight / 2 }, to: { x: x - 2, y: y + nodeHeight / 2 } }));
      layer.add(new window.Konva.Rect({ cornerRadius: nodeHeight / 3, fill: panel, height: nodeHeight, listening: false, stroke: line, strokeWidth: 1, width: nodeWidth, x, y }));
      layer.add(new window.Konva.Text({ align: "center", fill: text, fontFamily: "Syne, sans-serif", fontSize: Math.max(11, Math.min(17, width * .03)), height: nodeHeight, listening: false, text: label, verticalAlign: "middle", width: nodeWidth, x, y }));
    });

    addPill(layer, { fill: panel, height: compact ? 22 : 26, label: "Durable", stroke: line, text, width: compact ? 62 : 74, x: workflow.x + (nodeWidth - (compact ? 62 : 74)) / 2, y: nodeY + nodeHeight + (compact ? 10 : 13) });

    const pillY = height - (compact ? 44 : 52);
    const pillGap = Math.max(7, width * .02);
    const pillHeight = compact ? 28 : 34;
    const libraryLabels = ["PydanticAI", "Temporal", "FastAPI"];
    const pillWidths = libraryLabels.map((label) => Math.max(compact ? 60 : 70, label.length * (compact ? 6.4 : 7.2) + (compact ? 24 : 30)));
    const librariesWidth = pillWidths.reduce((total, current) => total + current, 0) + pillGap * (libraryLabels.length - 1);
    let pillX = Math.max(margin, (width - librariesWidth) / 2);
    libraryLabels.forEach((label, index) => {
      addPill(layer, { fill: panel, height: pillHeight, label, stroke: line, text, width: pillWidths[index], x: pillX, y: pillY });
      pillX += pillWidths[index] + pillGap;
    });

    return {
      animation: animateSignals(layer, signals),
      pointerHandler: (point) => halo.position(point ?? { x: width * .5, y: height * .67 }),
    };
  });

  mountPortfolioCanvas("portfolio-prompt-canvas", ({ accent, height, layer, line, panel, text, width }) => {
    const isCompact = width < 500;
    const centerX = width / 2;
    const centerY = height * .7;
    const orbitX = width * .33;
    const orbitY = height * .12;
    const large = new window.Konva.Text({ fill: cssColor("--portfolio-base-rgb", .16), fontFamily: "Syne, sans-serif", fontSize: Math.max(44, width * .15), listening: false, text: "V03", x: width * .07, y: height * .5 });
    const ring = new window.Konva.Ellipse({ dash: [6, 9], listening: false, radiusX: orbitX, radiusY: orbitY, stroke: cssColor("--portfolio-base-rgb", .28), strokeWidth: 1, x: centerX, y: centerY });
    const pulse = new window.Konva.Circle({ fill: cssColor("--portfolio-base-rgb", .88), listening: false, radius: 4 });
    layer.add(large, ring);
    [
      { label: "Draft", x: centerX - orbitX, y: centerY },
      { label: "Review", x: centerX, y: centerY - orbitY },
      { label: "Promote", x: centerX + orbitX, y: centerY },
    ].forEach(({ label, x, y }) => {
      const size = isCompact ? 50 : 58;
      layer.add(new window.Konva.Circle({ fill: panel, listening: false, radius: size / 2, stroke: cssColor("--portfolio-base-rgb", .34), strokeWidth: 1, x, y }));
      layer.add(new window.Konva.Text({ align: "center", fill: text, fontFamily: "Syne, sans-serif", fontSize: Math.max(10, width * .026), height: size, listening: false, text: label, verticalAlign: "middle", width: size, x: x - size / 2, y: y - size / 2 }));
    });
    addPill(layer, { fill: cssColor("--portfolio-base-rgb", .17), height: 24, label: "EVALUATE + OPTIMIZE", stroke: cssColor("--portfolio-base-rgb", .28), text, width: Math.min(width * .62, 190), x: centerX - Math.min(width * .31, 95), y: height * .8 });
    layer.add(pulse);
    return {
      animation: new window.Konva.Animation((frame) => {
        const angle = ((frame?.time ?? 0) / 2100) * Math.PI * 2;
        pulse.position({ x: centerX + Math.cos(angle) * orbitX, y: centerY + Math.sin(angle) * orbitY });
        ring.rotation((frame?.time ?? 0) / 75);
      }, layer),
      pointerHandler: () => {},
    };
  });

  mountPortfolioCanvas("portfolio-tools-canvas", ({ accent, height, layer, line, panel, text, width }) => {
    const center = { x: width / 2, y: height * .72 };
    const hubRadius = Math.max(30, Math.min(44, width * .1));
    const ghost = new window.Konva.Text({ align: "center", fill: cssColor("--portfolio-accent-rgb", .17), fontFamily: "Syne, sans-serif", fontSize: Math.max(34, width * .11), fontStyle: "bold", listening: false, text: "AGENT\nTOOLS", width, x: 0, y: height * .5 });
    const halo = new window.Konva.Circle({ fill: accent, listening: false, opacity: .13, radius: hubRadius * 2.2, x: center.x, y: center.y });
    const endpoints = [
      { label: "APIs", x: width * .18, y: height * .65 },
      { label: "Data", x: width * .82, y: height * .65 },
      { label: "Storage", x: width * .18, y: height * .8 },
      { label: "Ops", x: width * .82, y: height * .8 },
    ];
    const signals = [];
    layer.add(ghost, halo);
    endpoints.forEach(({ label, x, y }) => {
      signals.push(addSignal(layer, { color: line, from: { x, y }, to: center }));
      addPill(layer, { fill: panel, height: 26, label, stroke: line, text, width: Math.min(72, width * .22), x: x - Math.min(72, width * .22) / 2, y: y - 13 });
    });
    layer.add(new window.Konva.Circle({ fill: panel, listening: false, radius: hubRadius, stroke: cssColor("--portfolio-accent-rgb", .72), strokeWidth: 1.5, x: center.x, y: center.y }));
    layer.add(new window.Konva.Text({ align: "center", fill: text, fontFamily: "Syne, sans-serif", fontSize: Math.max(10, width * .026), height: hubRadius * 2, listening: false, text: "Agent\ntools", verticalAlign: "middle", width: hubRadius * 2, x: center.x - hubRadius, y: center.y - hubRadius }));
    return {
      animation: animateSignals(layer, signals, 1900),
      pointerHandler: (point) => halo.position(point ?? center),
    };
  });

  mountPortfolioCanvas("portfolio-production-canvas", ({ accent, height, layer, line, panel, text, width }) => {
    const margin = Math.max(20, width * .08);
    const baseline = height * .8;
    const stages = [
      { label: "Build", x: width * .2, level: .23 },
      { label: "Ship", x: width * .5, level: .44 },
      { label: "Observe", x: width * .8, level: .67 },
    ].map((stage) => ({ ...stage, barHeight: height * (.1 + stage.level * .28) }));
    const status = new window.Konva.Text({ fill: cssColor("--portfolio-accent-rgb", .32), fontFamily: "Syne, sans-serif", fontSize: Math.max(36, width * .12), listening: false, text: "99.99", x: margin, y: height * .54 });
    const signals = [];
    layer.add(status);
    stages.forEach(({ barHeight, label, x }, index) => {
      layer.add(new window.Konva.Rect({ fill: cssColor("--portfolio-accent-rgb", .12 + index * .06), height: barHeight, listening: false, stroke: line, strokeWidth: 1, width: width * .16, x: x - width * .08, y: baseline - barHeight }));
      layer.add(new window.Konva.Text({ align: "center", fill: text, fontFamily: "Syne, sans-serif", fontSize: Math.max(9, width * .024), listening: false, text: label, width: width * .18, x: x - width * .09, y: baseline + 8 }));
      if (index) signals.push(addSignal(layer, { color: cssColor("--portfolio-accent-rgb", .8), from: { x: stages[index - 1].x + width * .08, y: baseline - stages[index - 1].barHeight }, to: { x: x - width * .08, y: baseline - barHeight } }));
    });
    layer.add(new window.Konva.Line({ listening: false, points: [margin, baseline, width - margin, baseline], stroke: line, strokeWidth: 1 }));
    return {
      animation: animateSignals(layer, signals, 2200),
      pointerHandler: () => {},
    };
  });
}

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("is-visible"));
} else {
  document.documentElement.classList.add("reveal-ready");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.08 },
  );

  revealItems.forEach((item) => observer.observe(item));
}

const sectionLinks = [...document.querySelectorAll('.masthead nav a[href^="#"]')];
const sections = sectionLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const current = entries.find((entry) => entry.isIntersecting);
      if (!current) return;

      sectionLinks.forEach((link) => {
        link.classList.toggle("active", link.hash === `#${current.target.id}`);
      });
    },
    { rootMargin: "-35% 0px -55%", threshold: 0 },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
