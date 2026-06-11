"use client";

import WebsiteMockup from "./WebsiteMockup";

const VARIANTS = ["restaurant", "gym", "ecommerce", "trades", "booking"];

// Mobile counterpart to the desktop HeroWheel: a slow, edge-faded strip of
// website previews. Transform-only animation; falls back to a static row
// under prefers-reduced-motion (see globals.css).
export default function MockupMarquee() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none mt-12 select-none overflow-hidden sm:hidden"
      style={{
        maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div className="marquee-track gap-4 pr-4">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 gap-4">
            {VARIANTS.map((v) => (
              <div key={v} className="w-48 shrink-0">
                <WebsiteMockup variant={v} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
