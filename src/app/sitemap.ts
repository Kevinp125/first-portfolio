// app/sitemap.ts
import type { MetadataRoute } from 'next'

// hard-coded routes for a portfolio; add or remove whenever you add a page
const pages = ['', '/about', '/projects', '/experience', '/skills']

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://kpereda.dev/'        // ← change to prod URL

  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date().toISOString(),     // optional but nice
    priority: 0.7                               // optional; 0–1
  }))
}
