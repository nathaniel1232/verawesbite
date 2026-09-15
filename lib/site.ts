/**
 * Where this build thinks it lives.
 *
 * WHY THIS IS DEFENSIVE RATHER THAN TWO `??` EXPRESSIONS: it was two `??`
 * expressions, and a Vercel build died with
 *
 *     Failed to collect configuration for /_not-found
 *     cause: TypeError: Invalid URL
 *
 * because `NEXT_PUBLIC_SITE_URL` was set in the dashboard but left EMPTY.
 * `??` only falls back on null and undefined — an empty string is a perfectly
 * good value as far as it is concerned — so `new URL('')` threw, and it threw
 * during metadata collection, which is why the error named a route nobody
 * wrote. An env var that exists but is blank is the normal state of a
 * dashboard field somebody has half-filled in, so it has to be handled rather
 * than assumed away.
 */

/* DECLARED BEFORE THE EXPORTS THAT USE IT, and that is not style.
   `const` does not hoist: it sits in the temporal dead zone until its own line
   runs. With this below `export const SITE_URL = resolveSiteUrl()`, the
   fallback path — the one taken when the env var is missing, which is the
   DEFAULT path — threw `ReferenceError: Cannot access 'FALLBACK' before
   initialization` at module-evaluation time. A fallback that only fails when
   it is needed is worse than no fallback. Caught by building against every
   value a dashboard field might hold, not by reading it. */
/* WWW, NOT THE APEX, AND IT WAS MEASURED RATHER THAN CHOSEN.
   `curl -sI https://optimallyapp.com/` answers `HTTP/2 308` with
   `location: https://www.optimallyapp.com/`, and deep paths keep their path.
   Vercel's domain settings already decided the canonical host; this constant
   was the one place still disagreeing with them, so the sitemap submitted a
   URL per page that permanently redirected somewhere else. */
const FALLBACK = 'https://www.optimallyapp.com'

/**
 * Where every page's `<link rel="canonical">` points, ON EVERY DEPLOYMENT.
 *
 * Deliberately not SITE_URL. The GitHub Pages build sets SITE_URL to
 * github.io and a basePath of /verawesbite, and it exists only so the shipped
 * app's Privacy, Terms and Support links keep resolving. It is a full mirror
 * of the site, so without this every guide would exist twice to a search
 * engine and compete with itself. The first version of the guides built their
 * canonical from SITE_URL and forgot the basePath too, which on the mirror
 * produced a canonical pointing at a URL that 404s.
 */
export const CANONICAL_ORIGIN = FALLBACK

/** The deployment's origin, always a valid absolute URL. */
export const SITE_URL = resolveSiteUrl()

/** '' at a domain root (Vercel, custom domain); '/repo' on a GitHub project page. */
export const BASE_PATH = resolveBasePath()

function resolveSiteUrl(): string {
  const raw = (process.env.NEXT_PUBLIC_SITE_URL ?? '').trim()
  if (!raw) return FALLBACK
  // A dashboard field is where somebody types "optimallyapp.com" without a
  // scheme, which is not a URL and would throw exactly as an empty one does.
  const withScheme = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`
  try {
    return new URL(withScheme).origin
  } catch {
    console.warn(
      `[site] NEXT_PUBLIC_SITE_URL is not a URL (${JSON.stringify(raw)}); ` +
        `falling back to ${FALLBACK}`,
    )
    return FALLBACK
  }
}

function resolveBasePath(): string {
  const raw = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').trim()
  if (!raw || raw === '/') return ''
  const withSlash = raw.startsWith('/') ? raw : `/${raw}`
  return withSlash.replace(/\/+$/, '')
}
