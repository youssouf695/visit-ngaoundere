import sitesData from '@/data/sites.json'

export default async function sitemap() {
  const baseUrl = 'https://visit-ngaoundere.vercel.app'
  
  const routes = ['', '/sites', '/about', '/contact'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : 0.8,
  }))
  
  const siteRoutes = sitesData.sites.map((site) => ({
    url: `${baseUrl}/sites/${site.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9,
  }))
  
  return [...routes, ...siteRoutes]
}