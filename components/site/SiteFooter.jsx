import Link from "next/link";

const COLUMNS = [
  {
    heading: "Explore",
    links: [
      { href: "/#pricing", label: "Pricing" },
      { href: "/#capabilities", label: "What we build" },
      { href: "/#social", label: "Social media" },
      { href: "/#results", label: "Results" },
      { href: "/transformation", label: "Before & after" },
    ],
  },
  {
    heading: "Packages",
    links: [
      { href: "/packages/starter", label: "Starter — £99" },
      { href: "/packages/business", label: "Business — £249" },
      { href: "/packages/premium", label: "Premium — £499" },
      { href: "/social-media", label: "Social plans — from £50/mo" },
    ],
  },
  {
    heading: "Get started",
    links: [
      { href: "/#quote", label: "Build your site" },
      { href: "/#custom", label: "Custom request" },
      { href: "/#faq", label: "FAQ" },
      { href: "/cart", label: "Cart" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
        {/* Brand */}
        <div className="lg:col-span-2">
          <Link href="/" className="flex items-center gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/rune-logo.svg" alt="Rune Sites" className="h-9 w-9" />
            <span className="font-display text-lg font-bold tracking-tight text-white">
              Rune<span className="accent-text"> Sites</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
            Premium, conversion-focused websites and done-for-you social media
            for growing businesses. Designed, launched and looked after — from £99.
          </p>
          <Link href="/#quote" className="btn-primary mt-6 px-5 py-3 text-sm">
            Get a free quote
          </Link>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <p className="text-sm font-bold text-slate-400">{col.heading}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((l) => (
                <li key={l.href + l.label}>
                  <Link href={l.href} className="text-sm text-slate-300 transition-colors hover:text-brand-300">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-white/[0.06] py-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Rune Sites · Premium websites that win you customers
      </div>
    </footer>
  );
}
