export default function robots() {
    return {
      rules: {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/', '/_vercel/'],
      },
      sitemap: 'https://visit-ngaoundere.vercel.app/sitemap.xml',
      host: 'https://visit-ngaoundere.vercel.app',
    }
  }