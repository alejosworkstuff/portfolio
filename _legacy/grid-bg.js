(() => {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.getElementById("bg-grid");
  const fallback = document.querySelector(".bg-grid-fallback");

  if (reducedMotion) {
    if (canvas) canvas.remove();
    if (fallback) fallback.classList.add("is-visible");
  } else if (canvas) {
    initGrid(canvas, fallback);
  }

  initReveals(reducedMotion);
})();

function initGrid(canvas, fallback) {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    if (fallback) fallback.classList.add("is-visible");
    return;
  }

  if (fallback) fallback.classList.remove("is-visible");

  const CELL = 48;
  const WARP_RADIUS = 140;
  const WARP_STRENGTH = 14;
  const GLOW_RADIUS = 220;

  let width = 0;
  let height = 0;
  let raf = 0;
  let pointerActive = false;
  let targetX = 0;
  let targetY = 0;
  let glowX = 0;
  let glowY = 0;
  let idlePhase = 0;
  let lastTs = 0;

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    if (!pointerActive) {
      glowX = width * 0.5;
      glowY = height * 0.32;
      targetX = glowX;
      targetY = glowY;
    }
  }

  function warpOffset(x, y, px, py) {
    const dx = x - px;
    const dy = y - py;
    const dist = Math.hypot(dx, dy);
    if (dist >= WARP_RADIUS || dist < 0.001) return { x: 0, y: 0 };
    const t = 1 - dist / WARP_RADIUS;
    const falloff = t * t * (3 - 2 * t);
    const push = WARP_STRENGTH * falloff;
    return { x: (dx / dist) * push, y: (dy / dist) * push };
  }

  function lineAlpha(x, y, px, py, base) {
    const dist = Math.hypot(x - px, y - py);
    if (dist >= GLOW_RADIUS) return base;
    const t = 1 - dist / GLOW_RADIUS;
    return Math.min(0.28, base + t * t * 0.22);
  }

  function draw(ts) {
    const dt = lastTs ? Math.min(0.05, (ts - lastTs) / 1000) : 0.016;
    lastTs = ts;

    glowX += (targetX - glowX) * Math.min(1, dt * 10);
    glowY += (targetY - glowY) * Math.min(1, dt * 10);

    if (!pointerActive) {
      idlePhase += dt * 0.7;
      const idleX = width * 0.5 + Math.sin(idlePhase * 0.6) * Math.min(120, width * 0.08);
      const idleY = height * 0.35 + Math.cos(idlePhase * 0.45) * Math.min(80, height * 0.06);
      targetX = idleX;
      targetY = idleY;
    }

    ctx.clearRect(0, 0, width, height);

    const cols = Math.ceil(width / CELL) + 2;
    const rows = Math.ceil(height / CELL) + 2;
    const baseAlpha = 0.035;

    // Vertical lines
    for (let i = 0; i <= cols; i += 1) {
      const x0 = i * CELL;
      ctx.beginPath();
      for (let j = 0; j <= rows; j += 1) {
        const y0 = j * CELL;
        const w = warpOffset(x0, y0, glowX, glowY);
        const x = x0 + w.x;
        const y = y0 + w.y;
        if (j === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const midY = Math.min(height, Math.max(0, glowY));
      ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha(x0, midY, glowX, glowY, baseAlpha)})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Horizontal lines
    for (let j = 0; j <= rows; j += 1) {
      const y0 = j * CELL;
      ctx.beginPath();
      for (let i = 0; i <= cols; i += 1) {
        const x0 = i * CELL;
        const w = warpOffset(x0, y0, glowX, glowY);
        const x = x0 + w.x;
        const y = y0 + w.y;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const midX = Math.min(width, Math.max(0, glowX));
      ctx.strokeStyle = `rgba(255, 255, 255, ${lineAlpha(midX, y0, glowX, glowY, baseAlpha)})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Cursor glow wash
    const glow = ctx.createRadialGradient(glowX, glowY, 0, glowX, glowY, GLOW_RADIUS);
    glow.addColorStop(0, "rgba(255, 106, 61, 0.14)");
    glow.addColorStop(0.35, "rgba(255, 105, 180, 0.07)");
    glow.addColorStop(0.65, "rgba(0, 123, 255, 0.05)");
    glow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = glow;
    ctx.fillRect(0, 0, width, height);

    // Soft ring near pointer
    if (pointerActive) {
      ctx.beginPath();
      ctx.arc(glowX, glowY, 18, 0, Math.PI * 2);
      ctx.strokeStyle = "rgba(255, 106, 61, 0.35)";
      ctx.lineWidth = 1.5;
      ctx.stroke();
    }

    raf = requestAnimationFrame(draw);
  }

  function onPointerMove(e) {
    pointerActive = true;
    targetX = e.clientX;
    targetY = e.clientY;
  }

  function onPointerLeave() {
    pointerActive = false;
  }

  resize();
  raf = requestAnimationFrame(draw);
  window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", onPointerMove, { passive: true });
  document.documentElement.addEventListener("mouseleave", onPointerLeave);

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      lastTs = 0;
    } else {
      raf = requestAnimationFrame(draw);
    }
  });
}

function initReveals(reducedMotion) {
  const targets = document.querySelectorAll(
    "main > section, .case-study-section, .card, .case-study-link-card"
  );
  if (!targets.length) return;

  if (reducedMotion) {
    targets.forEach((el) => el.classList.add("is-revealed"));
    return;
  }

  targets.forEach((el) => el.classList.add("reveal"));

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-revealed");
        io.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
  );

  targets.forEach((el) => io.observe(el));
}
