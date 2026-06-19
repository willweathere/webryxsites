"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Site-wide scroll affordances:
 *  - a thin brand-gradient progress bar pinned to the top of the viewport
 *  - a back-to-top button that fades in once you've scrolled a screenful
 *
 * Progressive-enhancement & a11y: renders nothing until mounted on the client,
 * uses a passive rAF-throttled scroll listener, and honours prefers-reduced-motion
 * (instant scroll instead of smooth).
 */
export default function ScrollUI() {
  const [progress, setProgress] = useState(0);
  const [showTop, setShowTop] = useState(false);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const y = window.scrollY || doc.scrollTop || 0;
      setProgress(max > 0 ? Math.min(100, (y / max) * 100) : 0);
      setShowTop(y > window.innerHeight * 0.9);
      ticking.current = false;
    };
    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const toTop = () => {
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-brand-400 via-iris-400 to-brand-400"
        style={{ transform: `scaleX(${progress / 100})` }}
      />

      {/* Back to top */}
      <button
        type="button"
        onClick={toTop}
        aria-label="Back to top"
        className={`fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full
          border border-white/15 bg-ink-900/80 text-white shadow-glow-brand backdrop-blur-sm
          transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-400/60 hover:bg-ink-800
          focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/60
          ${showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"}`}
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
          <path
            d="M12 19V5M5 12l7-7 7 7"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </>
  );
}
