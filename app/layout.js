import "./globals.css";
import Script from "next/script";
import { Manrope, Sora } from "next/font/google";
import { CartProvider } from "@/components/cart/CartProvider";
import ScrollUI from "@/components/site/ScrollUI";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const SITE_URL = "https://runewebsites.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Rune Sites — Premium Websites That Grow Your Business",
  description:
    "Premium, lightning-fast, conversion-focused websites for growing businesses. Clear pricing from £99. Get a free quote in under 3 minutes.",
  keywords: ["web design", "website agency", "small business websites", "SEO", "social media management"],
  openGraph: {
    title: "Rune Sites — Premium Websites That Grow Your Business",
    description:
      "Premium, lightning-fast, conversion-focused websites for growing businesses. Clear pricing from £99.",
    url: SITE_URL,
    siteName: "Rune Sites",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Rune Sites — Premium Websites That Grow Your Business",
    description: "Premium, conversion-focused websites from £99. Free quote in under 3 minutes.",
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#06070D",
};

// Structured data so Google understands the business.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Rune Sites",
  description:
    "Premium, conversion-focused websites and done-for-you social media for growing businesses.",
  url: SITE_URL,
  priceRange: "££",
  areaServed: "GB",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body>
        {/* GSAP + ScrollTrigger (CDN). Loaded before hydration so client
            components can use window.gsap / window.ScrollTrigger in effects. */}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/gsap.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.13.0/ScrollTrigger.min.js"
          strategy="beforeInteractive"
        />
        <Script id="gsap-register" strategy="beforeInteractive">
          {`if (window.gsap && window.ScrollTrigger) { window.gsap.registerPlugin(window.ScrollTrigger); }`}
        </Script>
        {/* Three.js (CDN global, r147) for WebGL 3D. Exposes window.THREE.
            Addons below attach to THREE.* (OrbitControls, GLTFLoader, RGBELoader). */}
        <Script
          src="https://unpkg.com/three@0.147.0/build/three.min.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/three@0.147.0/examples/js/controls/OrbitControls.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/three@0.147.0/examples/js/loaders/GLTFLoader.js"
          strategy="beforeInteractive"
        />
        <Script
          src="https://unpkg.com/three@0.147.0/examples/js/loaders/RGBELoader.js"
          strategy="beforeInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Ambient aurora glow behind everything (sits over the near-black bg) */}
        <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-40 left-[6%] h-[30rem] w-[30rem] rounded-full bg-brand-500/[0.07] blur-[130px]" />
          <div className="absolute top-[28%] right-[-8%] h-[28rem] w-[28rem] rounded-full bg-iris-500/[0.07] blur-[130px]" />
          <div className="absolute top-[58%] left-[-8%] h-[28rem] w-[28rem] rounded-full bg-brand-600/[0.06] blur-[130px]" />
          <div className="absolute bottom-[-12%] right-[16%] h-[28rem] w-[28rem] rounded-full bg-gold-400/[0.04] blur-[130px]" />
        </div>
        {/* Film grain texture over the whole page */}
        <div aria-hidden="true" className="grain-overlay" />
        <ScrollUI />
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
