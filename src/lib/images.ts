/**
 * images.ts — hero image helper.
 *
 * getHeroUrl() returns an optimized WebP URL for use as a CSS `background-image`.
 * The hero sits under a navy overlay and is the LCP element, so small + low-quality
 * is intentional. In-flow images (service photos) use <Image> from astro:assets directly.
 */
import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

import heroDefault from '../assets/hero/hero.png';

export const defaultHero: ImageMetadata = heroDefault;

export async function getHeroUrl(img: ImageMetadata = defaultHero): Promise<string> {
  const optimized = await getImage({ src: img, width: 1280, quality: 58, format: 'webp' });
  return optimized.src;
}
