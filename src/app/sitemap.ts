
import { MetadataRoute } from 'next';
import { categories } from '@/data';

const APP_URL = "https://pickuplines-ultra.web.app";

export default function sitemap(): MetadataRoute.Sitemap {
  
  // Static pages
  const staticRoutes = [
    '',
    '/bookmarks',
    '/more-apps',
    '/settings',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${APP_URL}${route}`,
    lastModified: new Date().toISOString(),
  }));

  // Dynamic category pages
  const categoryRoutes = categories.map((category) => ({
    url: `${APP_URL}/category/${category.slug}`,
    lastModified: new Date().toISOString(),
  }));

  return [...staticRoutes, ...categoryRoutes];
}
