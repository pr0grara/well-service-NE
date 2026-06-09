# Pine State Well & Pump — Lead-Gen Site

A static, config-driven, SEO-first lead-gen website for **well & pump repair across Central Maine**.
Built from [`../SPEC.md`](../SPEC.md) (the single source of truth) using Astro 5 — no database, no
server runtime, no client framework. Output is plain static HTML/CSS for a CDN.

> **Status:** placeholder business identity + placeholder images. It builds clean and is ready to
> rebrand by editing config and swapping assets — **do not edit `src/pages`, `src/layouts`,
> `src/components`, or `src/lib` to launch.** The answer is almost always in `src/config/`.

---

## Verified build

Built and verified with a real production build (Node 22):

- **38 HTML pages** + `robots.txt` + sitemap — matches the SPEC §6 formula:
  - 1 home + 5 service hubs + **24** service×city combos + 6 city hubs + privacy + terms.
- JSON-LD per page type: home → `LocalBusiness`; service hubs → `LocalBusiness + Breadcrumb +
  Service + FAQPage`; combos → localized 3-level breadcrumbs; city hubs → 2-level breadcrumb + FAQ.
- Canonicals, `og:` tags, `theme-color`, hero `<link rel=preload fetchpriority=high>`,
  **CSS fully inlined** (0 render-blocking stylesheets), self-hosted Inter.
- `robots.txt` emits an absolute sitemap URL; sitemap **excludes** `/privacy` + `/terms`, which are
  `noindex`.
- Call-only form renders "Call us instead" (submit disabled), with honeypot + validation already
  wired for when a backend is connected.

---

## Configuration (current decisions)

| Setting | Value |
|---|---|
| Company | *Pine State Well & Pump* (placeholder) |
| Region | Central Maine |
| Cities (6) | Augusta, Waterville, Brunswick, Bath, Rockland, Belfast |
| Services (5) | `well-repair` (hubOnly) + `well-pump-repair`, `pressure-tank-replacement`, `well-water-testing`, `frozen-line-thaw` (emergency) |
| Matrix services | 4 (→ 24 combo pages) |
| Form backend | **Call-only** (`formEndpoint=""`) — ready to point at a Cloudflare Worker later |
| Phone / email / domain | Placeholders — replace before launch |

---

## Build & run

The default `node` on this machine is **v15** (too old for Astro 5). Build with **Node 22**:

```bash
nvm use 22          # .nvmrc pins 22; v22.14.0 is installed and builds clean
npm install
npm run dev         # local dev server
npm run build       # static output → dist/
npm run preview     # preview the built site
npm run deploy      # astro build && npx wrangler deploy (Cloudflare Workers Static Assets)
```

`SITE_URL` overrides the production domain at build/deploy time (the only env var read).

---

## Where to edit for a rebrand (config-only)

1. **[`src/config/site.ts`](src/config/site.ts)** — drives most titles, descriptions, headings, and
   schema. **Replace the placeholders:** `company`, `phone` / `phoneDisplay`, `email`, `url`. Comments
   in the file show exactly where to point a **Cloudflare Worker** (`formEndpoint`), or switch to
   Web3Forms / Formspree.
2. **[`src/config/services.ts`](src/config/services.ts)** — the services offered (keep ~1 `hubOnly`).
3. **[`src/config/cities.ts`](src/config/cities.ts)** — the towns served, with genuinely local copy.
   `nearby` slugs must reference existing cities.
4. **Assets** — see [`src/assets/README.md`](src/assets/README.md). Also keep `astro.config.mjs`
   `site`, `wrangler.jsonc` `name`, and `package.json` `name` in sync.

---

## ⚠️ Before launch

1. **Replace placeholder business details** in `src/config/site.ts` (real company, phone, email,
   domain) — and keep `astro.config.mjs` `site` in sync.
2. **Swap the placeholder images & favicons** for real local job photos and the real brand mark.
   The current images are flat solid-color PNGs generated only so the build resolves; real local
   proof is load-bearing for this kind of site (SPEC §2). See [`src/assets/README.md`](src/assets/README.md).
3. **Replace the testimonials** in `src/components/Reviews.astro` with real, verifiable reviews, and
   set true `ratingValue` / `reviewCount` in `site.ts` (fake counts/awards are a "scammy" signal).
4. **Connect the lead form** by setting `formEndpoint` (Cloudflare Worker / Web3Forms / Formspree).

---

## Repo map

```
well-repair-NE/
├─ astro.config.mjs         # site URL, sitemap (excludes legal), inline CSS
├─ wrangler.jsonc           # Cloudflare deploy (assets.directory = ./dist)
├─ tsconfig.json            # strict + @config/@components/@layouts aliases
├─ package.json             # 3 deps, scripts
├─ .nvmrc                   # 22
├─ public/                  # _headers, .assetsignore, favicons (placeholder)
└─ src/
   ├─ config/               # ◀ EDIT HERE — site.ts, services.ts, cities.ts
   ├─ lib/                  # urls.ts, schema.ts, images.ts
   ├─ layouts/              # BaseLayout.astro (head, SEO, schema, header+footer)
   ├─ components/           # 12 reusable sections
   ├─ pages/                # routing (index, [service]/, [service]/[city], service-area/[city], legal, robots)
   ├─ styles/global.css     # design system (wabi-sabi: warm paper + pine-iron bands + muted green, light-only)
   └─ assets/               # hero/ services/ real_photos/ maps/ (placeholders)
```
