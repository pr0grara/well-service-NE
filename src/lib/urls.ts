/**
 * urls.ts — canonical URL builders. Accept a `{ slug }` object OR a raw slug string.
 * Reuse these everywhere; do not hand-build paths.
 */
type SlugLike = string | { slug: string };

const toSlug = (x: SlugLike): string => (typeof x === 'string' ? x : x.slug);

/** Service hub: /{service}/ */
export const serviceUrl = (service: SlugLike): string => `/${toSlug(service)}/`;

/** Service × city combo: /{service}/{city}/ */
export const cityServiceUrl = (service: SlugLike, city: SlugLike): string =>
  `/${toSlug(service)}/${toSlug(city)}/`;

/** City hub: /service-area/{city}/ */
export const cityUrl = (city: SlugLike): string => `/service-area/${toSlug(city)}/`;
