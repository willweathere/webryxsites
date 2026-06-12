"use client";

import { SectionHeading } from "./Pricing";

const REASONS = [
  {
    title: "Built to convert, not just to look nice",
    body: "Clear calls to action, click-to-call buttons and booking forms on every page — so visitors don't have to hunt for a way to contact you.",
  },
  {
    title: "Loads instantly, even on mobile data",
    body: "Most local searches happen on a phone. A slow site loses customers before they even see what you offer — ours load in under a second.",
  },
  {
    title: "Built to be found on Google",
    body: "Proper structure, fast pages and local SEO basics from day one, so you show up when people search for what you do nearby.",
  },
  {
    title: "Easy for you to keep up to date",
    body: "Update prices, photos and opening hours yourself in minutes — no developer needed, no waiting around for changes.",
  },
];

export default function Growth() {
  return (
    <section id="results" className="border-y border-white/5 bg-ink-900/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
        <SectionHeading
          title="A website that works as hard as you do"
          sub="A great site isn't just a digital business card — it's there to turn visitors into enquiries, bookings and sales, around the clock."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {REASONS.map((r, i) => (
            <div
              key={r.title}
              style={{ "--i": i }}
              className="stagger-item rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-400/40"
            >
              <h3 className="font-display text-lg font-bold text-white">{r.title}</h3>
              <p className="mt-2 text-sm text-slate-400">{r.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <a href="#quote" className="btn-primary group">
            Get your free quote
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
