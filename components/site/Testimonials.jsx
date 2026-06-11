"use client";

import { TESTIMONIALS } from "../siteContent";
import { SectionHeading } from "./Pricing";

export default function Testimonials() {
  return (
    <section id="testimonials" className="border-y border-white/5 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <SectionHeading
          title="Trusted by business owners like you"
          sub="Real businesses, real growth — here's what working with us feels like."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure
              key={t.name}
              className="relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-7 transition-colors duration-200 hover:border-brand-400/40"
            >
              {/* Quote mark */}
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8" style={{ color: t.accent }} aria-hidden="true">
                <path d="M10 7H6a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7a4 4 0 0 0-1-2.5M21 7h-4a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3h2a3 3 0 0 0 3-3v-7a4 4 0 0 0-1-2.5" opacity="0.9" />
              </svg>

              <blockquote className="mt-4 flex-1 text-base leading-relaxed text-slate-200">
                {t.quote}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3">
                <span
                  className="flex h-10 w-10 items-center justify-center rounded-full font-display text-sm font-bold text-ink-950"
                  style={{ background: `linear-gradient(135deg, ${t.accent}, ${t.accent}99)` }}
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-bold text-white">{t.name}</p>
                  <p className="text-xs text-slate-400">{t.role}</p>
                </div>
                <span className="ml-auto flex gap-0.5 text-gold-400" aria-label="5 out of 5 stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5" aria-hidden="true">
                      <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
                    </svg>
                  ))}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
