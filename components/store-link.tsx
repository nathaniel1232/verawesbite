'use client'

import { useEffect, useRef } from 'react'
import { localisedAppStoreUrl } from '@/lib/app'

/**
 * Rewrites every App Store link on the page to the visitor's own storefront.
 *
 * WHY THIS EXISTS: a country-less apps.apple.com URL 301s to `/us/` whenever
 * Apple cannot infer a storefront, and a US product URL opened by the App
 * Store app on a Norwegian account is exactly the "an error occurred" that was
 * reported. The server cannot know the visitor — this is a static export — so
 * the correction happens in the browser, once, on mount.
 *
 * It is PROGRESSIVE, not load-bearing. The HTML already contains a working
 * country-less link, so a visitor with JavaScript off, or a crawler, or anyone
 * this guesses wrong for, is exactly where they were before. That is the only
 * reason it is acceptable to do this client-side at all.
 */
export function StoreLinkLocaliser() {
  const done = useRef(false)
  useEffect(() => {
    if (done.current) return
    done.current = true
    const locales = navigator.languages?.length
      ? navigator.languages
      : [navigator.language]
    const url = localisedAppStoreUrl(locales)
    document
      .querySelectorAll<HTMLAnchorElement>('a[href*="apps.apple.com"]')
      .forEach((a) => {
        a.href = url
      })
  }, [])
  return null
}
