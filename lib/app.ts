/**
 * The App Store facts, in one place.
 *
 * WHY A FILE FOR FOUR CONSTANTS: the site shipped for weeks with a hard-coded
 * "Coming soon to the App Store" span and a placeholder
 * `apps.apple.com/app/idYOURAPPID` in a comment beside it. Optimally went live
 * on 4 September 2026 and the official website still had no way to download
 * it — the one thing every visitor is there to do. A constant that is imported
 * everywhere is a constant somebody notices is wrong.
 *
 * Verified against the iTunes lookup API, not typed from memory:
 *   curl "https://itunes.apple.com/lookup?bundleId=com.nathanielfiskaa.vera"
 */
export const APP_STORE_ID = '6794813704'

/**
 * The listing link, with the app's slug and NO country segment.
 *
 * WHY THE SLUG. `apps.apple.com/app/id<id>` and the slug form both 301 to
 * `/us/…` when Apple cannot work out a storefront from the request — measured,
 * not assumed. Landing a non-US visitor on a US product URL is what produces
 * "an error occurred" when the App Store app opens it against their own
 * account. The slug form is what Apple's own Copy Link produces and is the one
 * their geo-redirect handles best; `localised()` below improves on it further
 * when the browser will tell us where it is.
 *
 * VERIFIED AVAILABLE in us, no, gb, de, se and dk storefronts, so a wrong
 * storefront is the only thing that can be erroring.
 */
export const APP_STORE_URL =
  `https://apps.apple.com/app/optimally-food-scanner/id${APP_STORE_ID}`

/**
 * The same listing in a specific storefront.
 *
 * `navigator.language` is often just `"nb"` with no region — measured on the
 * machine this was written on — so splitting on the hyphen finds nothing and
 * a naive version of this silently did nothing at all. `Intl.Locale.maximize()`
 * is the right tool: it applies CLDR's likely-subtags, so `nb` -> `NO`,
 * `sv` -> `SE`, `de` -> `DE`, `en` -> `US`. An explicit region in
 * `navigator.languages` still wins over the guess.
 *
 * Anything unresolvable returns the country-less URL and Apple decides, which
 * is exactly where we started — so this can only improve on the default.
 */
export function localisedAppStoreUrl(locales: readonly string[]): string {
  const region = resolveRegion(locales)
  if (!region) return APP_STORE_URL
  return `https://apps.apple.com/${region.toLowerCase()}/app/optimally-food-scanner/id${APP_STORE_ID}`
}

function resolveRegion(locales: readonly string[]): string | null {
  for (const l of locales) {
    const explicit = l.split('-')[1]
    if (explicit && /^[A-Za-z]{2}$/.test(explicit)) return explicit
  }
  for (const l of locales) {
    try {
      const r = new Intl.Locale(l).maximize().region
      if (r && /^[A-Za-z]{2}$/.test(r)) return r
    } catch {
      // an unparseable tag is not worth a thrown error on a marketing page
    }
  }
  return null
}

/** Exactly as it reads on the store listing, capital S and all. */
export const APP_STORE_NAME = 'Optimally: Food Scanner'

/** Bundle id, for anyone cross-checking against the app project. */
export const BUNDLE_ID = 'com.nathanielfiskaa.vera'
