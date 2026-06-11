# Rune Sites

Premium agency landing page + lead-generation system built with Next.js 16, React 19 and Tailwind CSS.

## Features

- **Homepage** — hero with rotating mockup wheel, pricing (with side-by-side comparison), how-it-works process, done-for-you social media, before/after teaser, capabilities, feature grid, growth stats, testimonials, custom-request quick sender, 6-step "build your own site" lead form, FAQ.
- **Package pages** (`/packages/starter|business|premium`) — full tier detail with mockups and add-ons, addable to cart.
- **Service pages** (`/services/*`) — six capability deep-dives.
- **Social media plans** (`/social-media`) — monthly plans (£50/£100/£150), addable to cart.
- **Transformation** (`/transformation`) — draggable before/after website slider per industry.
- **Cart** (`/cart`) — localStorage cart with totals (checkout is an enquiry placeholder).
- **Lead pipeline** — `/api/submit` stores leads in Supabase and emails owner + customer; `/api/custom-request` emails the owner directly.

## Setup

```bash
npm install
cp .env.example .env.local   # fill in Supabase + email vars
npm run dev
```

Run `supabase/schema.sql` in the Supabase SQL editor to create the `leads` table (RLS, insert-only).

Email sending prefers Gmail (`GMAIL_USER` + `GMAIL_APP_PASSWORD`) and falls back to Resend (`RESEND_API_KEY` + `FROM_EMAIL`). `OWNER_EMAIL` receives lead notifications. Everything degrades gracefully if unconfigured.

## Deploy

Pushed to GitHub and auto-deployed by Netlify (site: `webryxsites`, custom domain runewebsites.com). Set the same env vars in Netlify → Site settings → Environment variables.
