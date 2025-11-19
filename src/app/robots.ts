
import { MetadataRoute } from 'next';

const APP_URL = "https://pickuplinesultra.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/download/', '/_offline'],
      },
    ],
    sitemap: `${APP_URL}/sitemap.xml`,
  };
}
