(() => {
  const AUTO_MS = 5500;
  const SWIPE_THRESHOLD = 48;

  function prefersReducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function initGallery(root) {
    const slides = Array.from(root.querySelectorAll(".case-study-gallery__slide"));
    if (slides.length < 2) return;

    const track = root.querySelector(".case-study-gallery__track");
    const viewport = root.querySelector(".case-study-gallery__viewport");
    const prevBtn = root.querySelector(".case-study-gallery__prev");
    const nextBtn = root.querySelector(".case-study-gallery__next");
    const dotsWrap = root.querySelector(".case-study-gallery__dots");
    const progress = root.querySelector(".case-study-gallery__progress-bar");
    const live = root.querySelector(".case-study-gallery__live");

    let index = slides.findIndex((slide) => slide.classList.contains("is-active"));
    if (index < 0) index = 0;

    let timer = null;
    let progressRaf = null;
    let progressStartedAt = 0;
    let touchStartX = null;

    const dots = slides.map((_, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "case-study-gallery__dot";
      btn.setAttribute("aria-label", `${window.getI18nString?.("galleryGoTo") || "Go to slide"} ${i + 1}`);
      btn.addEventListener("click", () => goTo(i, { user: true }));
      dotsWrap.appendChild(btn);
      return btn;
    });

    function announce(i) {
      if (!live) return;
      const caption = slides[i].querySelector("figcaption");
      const label = caption?.textContent?.trim() || `Slide ${i + 1}`;
      live.textContent = `${label} (${i + 1}/${slides.length})`;
    }

    function setActive(i, { animate = true } = {}) {
      slides.forEach((slide, slideIndex) => {
        const active = slideIndex === i;
        slide.classList.toggle("is-active", active);
        slide.classList.toggle("is-entering", active && animate);
        slide.setAttribute("aria-hidden", active ? "false" : "true");
        if (active && animate) {
          slide.addEventListener(
            "animationend",
            () => slide.classList.remove("is-entering"),
            { once: true }
          );
        }
      });
      dots.forEach((dot, dotIndex) => {
        const active = dotIndex === i;
        dot.classList.toggle("is-active", active);
        dot.setAttribute("aria-current", active ? "true" : "false");
      });
      if (track) track.style.setProperty("--gallery-index", String(i));
      announce(i);
    }

    function stopAutoplay() {
      if (timer) {
        window.clearInterval(timer);
        timer = null;
      }
      if (progressRaf) {
        window.cancelAnimationFrame(progressRaf);
        progressRaf = null;
      }
      if (progress) progress.style.transform = "scaleX(0)";
    }

    function tickProgress() {
      if (!progress || !timer) return;
      const elapsed = Date.now() - progressStartedAt;
      const ratio = Math.min(1, elapsed / AUTO_MS);
      progress.style.transform = `scaleX(${ratio})`;
      if (ratio < 1) progressRaf = window.requestAnimationFrame(tickProgress);
    }

    function startAutoplay() {
      stopAutoplay();
      if (prefersReducedMotion() || root.matches(":hover") || root.contains(document.activeElement)) {
        return;
      }
      progressStartedAt = Date.now();
      progressRaf = window.requestAnimationFrame(tickProgress);
      timer = window.setInterval(() => goTo(index + 1), AUTO_MS);
    }

    function goTo(next, { user = false } = {}) {
      const total = slides.length;
      index = ((next % total) + total) % total;
      setActive(index, { animate: !prefersReducedMotion() });
      if (user) startAutoplay();
      else {
        progressStartedAt = Date.now();
        if (progress) progress.style.transform = "scaleX(0)";
      }
    }

    prevBtn?.addEventListener("click", () => goTo(index - 1, { user: true }));
    nextBtn?.addEventListener("click", () => goTo(index + 1, { user: true }));

    root.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goTo(index - 1, { user: true });
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goTo(index + 1, { user: true });
      }
    });

    root.addEventListener("mouseenter", stopAutoplay);
    root.addEventListener("mouseleave", startAutoplay);
    root.addEventListener("focusin", stopAutoplay);
    root.addEventListener("focusout", (event) => {
      if (!root.contains(event.relatedTarget)) startAutoplay();
    });

    viewport?.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.changedTouches[0]?.clientX ?? null;
        stopAutoplay();
      },
      { passive: true }
    );

    viewport?.addEventListener(
      "touchend",
      (event) => {
        if (touchStartX == null) return;
        const dx = (event.changedTouches[0]?.clientX ?? touchStartX) - touchStartX;
        touchStartX = null;
        if (Math.abs(dx) >= SWIPE_THRESHOLD) {
          goTo(index + (dx < 0 ? 1 : -1), { user: true });
        } else {
          startAutoplay();
        }
      },
      { passive: true }
    );

    document.addEventListener("visibilitychange", () => {
      if (document.hidden) stopAutoplay();
      else startAutoplay();
    });

    setActive(index, { animate: false });
    startAutoplay();
  }

  function boot() {
    document.querySelectorAll("[data-gallery]").forEach(initGallery);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
