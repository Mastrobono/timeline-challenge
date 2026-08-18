import type { MetadataRoute } from 'next';

const SITE_URL = 'https://woki-challenge.vercel.app';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Seed generation is a demo endpoint, not content.
      disallow: '/api/',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
