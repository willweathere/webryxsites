"use client";

import { useState } from "react";
import Link from "next/link";
import { PACKAGES, PACKAGE_COMPARISON } from "../constants";

export default function Pricing() {
  const [showCompare, setShowCompare] = useState(false);

  return (
    <section id="pricing" className="mx-auto max-w-6xl px-4 py-16 sm:py-24">
      <SectionHeading
        eyebrow="Website packages"
        title="Simple, transparent pricing"
        sub="Three straightforward packages — tap any one to see exactly what it looks like and what's included. Want something bespoke instead? Build your own further down."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {PACKAGES.map((p) => (
          <Link
            key={p.value}
            href={`/packages/${p.value}`}
            className={`group relative flex flex-col rounded-3xl border p-6 transition-colors duration-200
              ${p.popular
                ? "border-brand-400/60 bg-brand-500/[0.06] shadow-glow-brand"
                : "border-white/10 bg-white/[0.03] hover:border-brand-400/50"}`}
          >
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gold-400 px-3 py-1 text-xs font-bold text-ink-950 shadow-glow-gold">
                {p.tagline}
              </span>
            )}

            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">{p.medal}</p>
            <h3 className="mt-1 font-display text-2xl font-bold text-white">{p.name}</h3>

            <div className="mt-4 flex items-end gap-1">
              <span className="font-display text-4xl font-bold text-white">£{p.setup}</span>
              <span className="mb-1 text-sm text-slate-400">setup</span>
            </div>
            <p className="mt-1 text-sm font-semibold text-brand-300">+ £{p.monthly}/month</p>

            <ul className="mt-6 flex-1 space-y-3">
              {p.perks.map((perk) => (
                <li key={perk} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <svg viewBox="0 0 24 24" fill="none" className="mt-0.5 h-4 w-4 flex-shrink-0 text-jade-400" aria-hidden="true">
                    <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {perk}
                </li>
              ))}
            </ul>

            <span className={`mt-7 w-full ${p.popular ? "btn-primary" : "btn-ghost"}`}>
              View {p.name}
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </Link>
        ))}
      </div>

      {/* Side-by-side comparison */}
      <div className="mt-8 text-center">
        <button
          type="button"
          onClick={() => setShowCompare((s) => !s)}
          aria-expanded={showCompare}
          className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-brand-300 transition-colors hover:text-white"
        >
          {showCompare ? "Hide full comparison" : "Compare everything side by side"}
          <svg viewBox="0 0 24 24" fill="none"
            className={`h-4 w-4 transition-transform duration-200 ${showCompare ? "rotate-180" : ""}`} aria-hidden="true">
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {showCompare && (
          <div className="card-surface mt-5 overflow-x-auto p-2 text-left animate-fade-in sm:p-4">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <thead>
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-400">Feature</th>
                  {PACKAGES.map((p) => (
                    <th key={p.value} className="px-4 py-3 text-center">
                      <span className="block font-display text-base font-bold text-white">{p.name}</span>
                      <span className="block text-xs font-medium text-brand-300">£{p.setup} + £{p.monthly}/mo</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {PACKAGE_COMPARISON.map((row) => (
                  <tr key={row.feature} className="border-t border-white/[0.06]">
                    <td className="px-4 py-3 font-medium text-slate-200">{row.feature}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="px-4 py-3 text-center">
                        {v === true ? (
                          <svg viewBox="0 0 24 24" fill="none" className="mx-auto h-5 w-5 text-jade-400" aria-label="Included">
                            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        ) : v === false ? (
                          <span className="text-slate-600" aria-label="Not included">—</span>
                        ) : (
                          <span className="font-semibold text-slate-200">{v}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-widest text-brand-300">{eyebrow}</p>
      )}
      <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {title}
      </h2>
      {sub && <p className="mt-3 text-slate-400">{sub}</p>}
    </div>
  );
}
