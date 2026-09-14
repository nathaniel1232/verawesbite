'use client'

import { useEffect } from 'react'

/**
 * Section-entry motion, added from the client and never required.
 *
 * THE ORDER MATTERS AND IT IS THE WHOLE SAFETY ARGUMENT. The hidden starting
 * state lives behind `html[data-reveal]`, and only this component ever sets
 * that attribute. So:
 *
 *   - no JavaScript, or a bundle that fails to load: the attribute is never
 *     set, the initial state never applies, and every section renders exactly
 *     as it does today. Nothing can be hidden by a script that did not run.
 *   - `prefers-reduced-motion: reduce`: the attribute is not set either, so
 *     there is no transition to interrupt and nothing to fade.
 *   - no IntersectionObserver: same, we bail before touching the DOM.
 *
 * The common failure with this pattern is opacity:0 in the stylesheet and the
 * reveal in a script, which turns one bad network request into a blank page.
 */
export function Reveal() {
  useEffect(() => {
    /* The attribute itself is set by the inline script in app/layout.tsx,
       before the first paint. If it is not there, that script decided this
       browser should not do any of this, and neither should we. */
    if (!document.documentElement.hasAttribute('data-reveal')) return

    const targets = Array.from(
      document.querySelectorAll<HTMLElement>('[data-r]'),
    )
    if (!targets.length) {
      document.documentElement.removeAttribute('data-reveal')
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.setAttribute('data-shown', '')
          io.unobserve(e.target)
        }
      },
      /* A little before the element reaches the bottom edge, so the motion has
         finished by the time it is properly in view rather than starting as
         the reader arrives at it. */
      { rootMargin: '0px 0px -12% 0px', threshold: 0.01 },
    )

    for (const t of targets) io.observe(t)

    /* A LAST RESORT, AND THE REASON IT EXISTS: everything with `data-r` is
       hidden until the observer says otherwise, so any world where the
       observer never fires is a world where part of the page never appears.
       Two seconds in, show whatever is still waiting. */
    const failsafe = window.setTimeout(() => {
      for (const t of targets) t.setAttribute('data-shown', '')
    }, 2000)

    return () => {
      window.clearTimeout(failsafe)
      io.disconnect()
    }
  }, [])

  return null
}
