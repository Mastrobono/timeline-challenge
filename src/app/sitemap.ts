import type { MetadataRoute } from 'next';

const SITE_URL = 'https://woki-challenge.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/timeline`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
