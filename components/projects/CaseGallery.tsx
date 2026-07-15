"use client";

import { useCallback, useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { useI18n } from "@/lib/i18n";
import type { GallerySlide } from "@/lib/caseStudies";

type Props = {
  slides: GallerySlide[];
};

export function CaseGallery({ slides }: Props) {
  const { t } = useI18n();
  const titleId = useId();
  const [index, setIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const go = useCallback(
    (delta: number) => {
      setIndex((i) => (i + delta + slides.length) % slides.length);
    },
    [slides.length],
  );

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (slides.length < 2 || lightboxOpen) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(id);
  }, [slides.length, lightboxOpen]);

  useEffect(() => {
    if (!lightboxOpen) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeLightbox();
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [lightboxOpen, go, closeLightbox]);

  const slide = slides[index];

  const lightbox =
    lightboxOpen && mounted
      ? createPortal(
          <div
            className="case-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <button
              type="button"
              className="case-lightbox-backdrop"
              aria-label={t("galleryClose")}
              onClick={closeLightbox}
            />
            <div className="case-lightbox-panel">
              <div className="case-lightbox-toolbar">
                <p id={titleId} className="case-lightbox-title">
                  {t(slide.capKey)}
                </p>
                <button
                  type="button"
                  className="btn btn-ghost btn-small case-lightbox-close"
                  onClick={closeLightbox}
                  aria-label={t("galleryClose")}
                >
                  ✕
                </button>
              </div>
              <div className="case-lightbox-media">
                <Image
                  src={slide.src}
                  alt={t(slide.altKey)}
                  width={1920}
                  height={1080}
                  sizes="100vw"
                  quality={95}
                  className="case-lightbox-img"
                  priority
                />
              </div>
              {slides.length > 1 ? (
                <div className="case-lightbox-nav">
                  <button
                    type="button"
                    className="btn btn-ghost btn-small"
                    onClick={() => go(-1)}
                    aria-label={t("galleryPrev")}
                  >
                    ‹
                  </button>
                  <span>
                    {index + 1} / {slides.length}
                  </span>
                  <button
                    type="button"
                    className="btn btn-ghost btn-small"
                    onClick={() => go(1)}
                    aria-label={t("galleryNext")}
                  >
                    ›
                  </button>
                </div>
              ) : null}
            </div>
          </div>,
          document.body,
        )
      : null;

  return (
    <div className="case-gallery" aria-label={t("galleryLabel")}>
      <div className="case-gallery-frame">
        {slides.map((s, i) => (
          <Image
            key={s.src}
            src={s.src}
            alt={t(s.altKey)}
            width={1920}
            height={1080}
            sizes="(max-width: 720px) 100vw, min(920px, 92vw)"
            quality={92}
            priority={i === 0}
            className={
              i === index ? "case-gallery-img is-active" : "case-gallery-img"
            }
          />
        ))}
        <button
          type="button"
          className="case-gallery-hit"
          onClick={() => setLightboxOpen(true)}
          aria-label={t("galleryExpand")}
        />
        <span className="case-gallery-zoom" aria-hidden>
          +
        </span>
        <p className="case-gallery-cap">{t(slide.capKey)}</p>
      </div>

      {slides.length > 1 ? (
        <div className="case-gallery-controls">
          <button
            type="button"
            className="btn btn-ghost btn-small"
            onClick={() => go(-1)}
            aria-label={t("galleryPrev")}
          >
            ‹
          </button>
          <div className="case-gallery-dots">
            {slides.map((s, i) => (
              <button
                key={s.src}
                type="button"
                className={i === index ? "dot is-active" : "dot"}
                aria-label={`${t("galleryGoTo")} ${i + 1}`}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button
            type="button"
            className="btn btn-ghost btn-small"
            onClick={() => go(1)}
            aria-label={t("galleryNext")}
          >
            ›
          </button>
        </div>
      ) : null}

      {lightbox}
    </div>
  );
}
