/**
 * site.ts — the business (singleton SITE).
 *
 * EDIT HERE to rebrand. `trade` and `region` are interpolated into titles,
 * descriptions, headings, and schema across the whole site — set them carefully.
 *
 * NOTE: This is a placeholder identity. Swap company / phone / email / url for the
 * real business before launch (see SPEC §11 rebrand checklist).
 */
export interface SiteConfig {
  company: string;
  tagline: string;
  /** What the business does, lowercase, for prose: "well repair" */
  trade: string;
  phone: string; // dialable, E.164
  phoneDisplay: string; // shown to visitors
  email: string;
  /** Service-area region name shown in headlines, e.g. "Central Maine" */
  region: string;
  /** Production URL — keep in sync with `site` in astro.config.mjs (or set SITE_URL). */
  url: string;
  /** External form handler (Formspree/Web3Forms/Worker). "" → call-only mode (submit disabled). */
  formEndpoint: string;
  /** Web3Forms access key, if using Web3Forms (otherwise leave ""). */
  formAccessKey: string;
  /** Unused by default — service-area renders two keyless county Google embeds. */
  mapEmbedSrc: string;
  priceRange: string; // e.g. "$$"  → schema
  ratingValue: string; // e.g. "4.9" → AggregateRating
  reviewCount: string; // e.g. "127" → AggregateRating
}

export const SITE: SiteConfig = {
  company: 'Pine State Well & Pump',
  tagline: 'Well & Pump Repair and Water Systems',
  trade: 'well repair',
  phone: '+12075550100', // PLACEHOLDER — replace with real dialable number
  phoneDisplay: '(207) 555-0100', // PLACEHOLDER
  email: 'service@pinestatewellpump.com', // PLACEHOLDER
  region: 'Central Maine',
  url: 'https://pinestatewellpump.com', // PLACEHOLDER — keep in sync with astro.config.mjs
  // Call-only for now: empty endpoint disables form submission and shows "call us instead".
  // To go live with a Cloudflare Worker later, set formEndpoint to the Worker URL
  // (it must accept a multipart/form-data POST and return 2xx). Leave formAccessKey "".
  // Or use Web3Forms (endpoint + key) / Formspree (endpoint only) — see SPEC §8.
  formEndpoint: '',
  formAccessKey: '',
  mapEmbedSrc: '',
  priceRange: '$$',
  ratingValue: '4.9',
  reviewCount: '63',
};

export const tel = (phone: string = SITE.phone): string => `tel:${phone}`;
