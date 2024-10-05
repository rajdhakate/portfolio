import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://raj.dhakate.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://raj.dhakate.com/#home',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://raj.dhakate.com/#about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
    {
      url: 'https://raj.dhakate.com/#projects',
      lastModified: new Date(),
      changeFrequency: 'monthly',
    },
  ]
}