import { PACKAGES } from "@/components/constants";
import { CAPABILITIES } from "@/components/siteContent";

const BASE = "https://runewebsites.com";

export default function sitemap() {
  const now = new Date();
  return [
    { url: BASE, lastModified: now, priority: 1 },
    { url: `${BASE}/social-media`, lastModified: now, priority: 0.8 },
    { url: `${BASE}/transformation`, lastModified: now, priority: 0.7 },
    ...PACKAGES.map((p) => ({
      url: `${BASE}/packages/${p.value}`,
      lastModified: now,
      priority: 0.9,
    })),
    ...CAPABILITIES.map((c) => ({
      url: `${BASE}/services/${c.slug}`,
      lastModified: now,
      priority: 0.7,
    })),
  ];
}
