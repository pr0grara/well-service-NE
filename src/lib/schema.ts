/**
 * schema.ts — JSON-LD builders. Return plain objects; BaseLayout serializes them.
 * localBusiness() is injected on every page; pages add breadcrumb/faqPage/serviceSchema
 * via the `jsonLd` prop.
 */
import { SITE } from '@config/site';
import { CITIES } from '@config/cities';

/** Strip a trailing slash so we can build clean absolute URLs. */
const base = (siteUrl: string): string => siteUrl.replace(/\/$/, '');

export function localBusiness(siteUrl: string = SITE.url): Record<string, unknown> {
  const root = base(siteUrl);
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${root}/#business`,
    name: SITE.company,
    description: `${SITE.company} — ${SITE.tagline} in ${SITE.region}.`,
    url: `${root}/`,
    image: `${root}/og.jpg`,
    logo: `${root}/favicon.svg`,
    telephone: SITE.phone,
    email: SITE.email,
    priceRange: SITE.priceRange,
    areaServed: CITIES.map((c) => ({
      '@type': 'City',
      name: c.state ? `${c.name}, ${c.state}` : c.name,
    })),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: SITE.ratingValue,
      reviewCount: SITE.reviewCount,
    },
  };
}

export interface Crumb {
  name: string;
  url: string;
}

export function breadcrumb(items: Crumb[], siteUrl: string = SITE.url): Record<string, unknown> {
  const root = base(siteUrl);
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${root}${item.url}`,
    })),
  };
}

export function faqPage(
  faqs: { q: string; a: string }[]
): Record<string, unknown> | null {
  if (!faqs.length) return null;
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function serviceSchema({
  name,
  description,
  areaName,
}: {
  name: string;
  description: string;
  areaName: string;
}): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: name,
    provider: { '@type': 'LocalBusiness', name: SITE.company, telephone: SITE.phone },
    areaServed: { '@type': 'Place', name: areaName },
  };
}
