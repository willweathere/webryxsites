"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "../cart/CartProvider";

const LINKS = [
  { href: "/#pricing", label: "Pricing" },
  { href: "/#capabilities", label: "What we build" },
  { href: "/#social", label: "Social media" },
  { href: "/#results", label: "Results" },
  { href: "/#faq", label: "FAQ" },
];

export default function Nav() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink-950/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5">
        <Link href="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/webryx-logo.svg" alt="Webryx Sites" className="h-9 w-9" />
          <span className="font-display text-lg font-bold tracking-tight text-white">
            Webryx<span className="grad-text"> Sites</span>
          </span>
        </Link>

        <div className="hidden items-center gap-7 lg:flex">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-brand-300">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link href="/cart" aria-label={`Cart, ${count} item${count === 1 ? "" : "s"}`}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-white transition-colors hover:border-brand-400/60">
            <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
              <path d="M3 4h2l2.4 12.3a1 1 0 0 0 1 .7h8.7a1 1 0 0 0 1-.8L21 8H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="20" r="1.4" fill="currentColor" />
              <circle cx="18" cy="20" r="1.4" fill="currentColor" />
            </svg>
            {count > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-gold-400 px-1 text-[11px] font-bold text-ink-950 shadow-glow-gold">
                {count}
              </span>
            )}
          </Link>
          <Link href="/#quote" className="btn-primary hidden px-4 py-2.5 text-sm sm:inline-flex">
            Start your site
          </Link>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/[0.03] text-white transition-colors hover:border-brand-400/60 lg:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5" aria-hidden="true">
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open && (
        <div className="border-t border-white/10 bg-ink-950/95 px-4 py-4 backdrop-blur-md lg:hidden animate-fade-in">
          <div className="flex flex-col gap-1">
            {LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-3 text-base font-medium text-slate-200 transition-colors hover:bg-white/[0.05] hover:text-brand-300">
                {l.label}
              </Link>
            ))}
            <Link href="/#quote" onClick={() => setOpen(false)} className="btn-primary mt-2 w-full">
              Start your site
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
