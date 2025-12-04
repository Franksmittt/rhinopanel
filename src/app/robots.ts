import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://rhinopanelbeaters.co.za';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/api/',      // Hide API routes
        '/admin/',    // Hide admin routes (if you add them later)
        '/private/',  // Hide private folders
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}