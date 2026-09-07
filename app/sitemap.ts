import type { MetadataRoute } from 'next'

/**
 * Absolute URLs, because a sitemap with relative ones is ignored — so this has
 * to know the real origin AND the basePath. Both come from CI:
 *
 *   NEXT_PUBLIC_SITE_URL   https://optimallyapp.com   (no trailing slash)
 *   NEXT_PUBLIC_BASE_PATH  ''  on a custom domain, '/verawesbite' on the
 *                          github.io project page
 *
 * The fallbacks below describe the project-page deployment, so a build with
 * neither variable set still produces a sitemap that is correct rather than
 * one that is confidently wrong.
 *
 * `/studio/` is deliberately absent: it is an internal tool, and robots.txt
 * disallows it.
 */
/* REQUIRED BY `output: 'export'`. Without it the build fails outright with
   "export const dynamic = force-static not configured on route /sitemap.xml" —
   a static export has no server to regenerate a sitemap on. */
export const dynamic = 'force-static'

const origin = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nathaniel1232.github.io'
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? ''

const PAGES = ['/', '/support/', '/contact/', '/privacy/', '/terms/']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return PAGES.map((path) => ({
    url: `${origin}${base}${path}`,
    lastModified: now,
    changeFrequency: path === '/' ? 'monthly' : 'yearly',
    priority: path === '/' ? 1 : 0.6,
  }))
}
