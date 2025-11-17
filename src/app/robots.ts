import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://rhinopanelbeaters.co.za'; // Replace with your actual production domain

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