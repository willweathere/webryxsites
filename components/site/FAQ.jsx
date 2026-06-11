"use client";

import { useState } from "react";
import { FAQS } from "../siteContent";
import { SectionHeading } from "./Pricing";

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <SectionHeading
        title="Frequently asked questions"
        sub="Everything you need to know before getting started. Still unsure? Just send us a message."
      />

      <div className="mt-10 space-y-3">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div
              key={f.q}
              className={`overflow-hidden rounded-2xl border transition-colors duration-200
                ${isOpen ? "border-brand-400/50 bg-brand-500/[0.05]" : "border-white/10 bg-white/[0.03] hover:border-white/25"}`}
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? -1 : i)}
                aria-expanded={isOpen}
                className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-400/50"
              >
                <span className="font-semibold text-white">{f.q}</span>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className={`h-5 w-5 flex-shrink-0 text-brand-300 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              {/* Always rendered; grid-rows animates the height smoothly */}
              <div
                aria-hidden={!isOpen}
                className="grid"
                style={{
                  gridTemplateRows: isOpen ? "1fr" : "0fr",
                  transition: "grid-template-rows 0.35s var(--ease-out-quart)",
                }}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm leading-relaxed text-slate-300">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
