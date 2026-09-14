import type { MetadataRoute } from 'next'
import { SITE_URL as origin, BASE_PATH as base } from '@/lib/site'
import { GUIDES } from '@/lib/guides'
import { PRODUCTS } from '@/lib/products'

/**
 * Absolute URLs, because a sitemap with relative ones is ignored — so this has
 * to know the real origin AND the basePath. Both come from CI:
 *
 *   NEXT_PUBLIC_SITE_URL   https://optimallyapp.com   (no trailing slash)
 *   NEXT_PUBLIC_BASE_PATH  ''  on a custom domain, '/verawesbite' on the
 *                          github.io project page
 *
 * Both are resolved in lib/site.ts, which tolerates a blank or scheme-less
 * value rather than throwing — see the note there.
 *
 * `/studio/` is deliberately absent: it is an internal tool, and robots.txt
 * disallows it.
 */
/* REQUIRED BY `output: 'export'`. Without it the build fails outright with
   "export const dynamic = force-static not configured on route /sitemap.xml" —
   a static export has no server to regenerate a sitemap on. */
export const dynamic = 'force-static'


/* THE GENERATED PAGES WERE NEVER IN HERE.
   `/scan/<barcode>/` has produced ten real pages since 7 September and not one
   of them was ever submitted: the list below was hand-typed and only ever held
   the five static routes. A page absent from the sitemap is not forbidden, but
   on a site with no inbound links it is the difference between being found and
   not. Both generated sets are now derived from the same data the pages are
   built from, so a new guide or a new product cannot be left out by hand. */
const STATIC = ['/', '/guides/', '/support/', '/contact/', '/privacy/', '/terms/']

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const statics = STATIC.map((path) => ({
    url: `${origin}${base}${path}`,
    lastModified: now,
    changeFrequency: (path === '/' ? 'monthly' : 'yearly') as 'monthly' | 'yearly',
    priority: path === '/' ? 1 : path === '/guides/' ? 0.9 : 0.6,
  }))

  const guides = GUIDES.map((g) => ({
    url: `${origin}${base}/guides/${g.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    /* Above the legal pages and below the two indexes. These are the pages
       this site is actually trying to rank. */
    priority: 0.8,
  }))

  const scans = PRODUCTS.map((p) => ({
    url: `${origin}${base}/scan/${p.code}/`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.5,
  }))

  return [...statics, ...guides, ...scans]
}
