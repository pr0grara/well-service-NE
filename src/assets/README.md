# Assets

Source images, re-optimized at build by `astro:assets` (large source files are fine).

```
assets/
├─ hero/          # full-bleed hero backgrounds (CSS background-image, optimized to WebP)
├─ services/      # one photo per service (slug-named); used on cards + service pages
├─ real_photos/   # real job photos (optional extras)
└─ maps/          # static map art if you ever drop the live embeds
```

## ⚠️ These are PLACEHOLDERS

The current images are flat solid-color PNGs generated so the build resolves. **Replace them
with real job photos before launch** — real local proof is load-bearing for this kind of site
(see SPEC §2). Keep the same filenames (or update the `import`s) so nothing breaks.

### Where each image is referenced

| File | Used by |
|---|---|
| `hero/hero.png` | site-wide default hero (`src/lib/images.ts` → `defaultHero`) |
| `services/well-repair.png` | `well-repair` service (hub) |
| `services/well-pump-repair.png` | `well-pump-repair` service |
| `services/pressure-tank-replacement.png` | `pressure-tank-replacement` service |
| `services/well-water-testing.png` | `well-water-testing` service |
| `services/frozen-line-thaw.png` | `frozen-line-thaw` service |
| `real_photos/*` | optional extras (not wired by default) |

Service photos are imported at the top of `src/config/services.ts`. Per-city overrides go in
`city.serviceImages` / `city.heroImage` in `src/config/cities.ts`.

### Favicons

Favicons live in `public/` (`favicon.ico`, `favicon.png`, `favicon-32.png`,
`apple-touch-icon.png`) and are also placeholders — swap them for the real brand mark.
