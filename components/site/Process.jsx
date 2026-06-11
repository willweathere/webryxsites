"use client";

import { PROCESS_STEPS } from "../siteContent";
import { SectionHeading } from "./Pricing";

export default function Process() {
  return (
    <section id="process" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <SectionHeading
        title="From enquiry to live in four steps"
        sub="A simple, transparent process — you always know exactly where your project is."
      />

      <div className="relative mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {/* connecting line on large screens */}
        <div aria-hidden="true" className="absolute left-0 right-0 top-[2.35rem] hidden h-px bg-gradient-to-r from-transparent via-brand-500/40 to-transparent lg:block" />

        {PROCESS_STEPS.map((s, i) => (
          <div key={s.n} style={{ "--i": i }}
            className="stagger-item relative flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-400/40 hover:shadow-card-lift">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-500 to-iris-500 font-display text-base font-bold text-white shadow-glow-brand">
              {s.n}
            </span>
            <h3 className="mt-4 text-lg font-bold text-white">{s.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-400">{s.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
