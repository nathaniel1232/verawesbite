import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { asset } from '@/lib/asset'
import { APP_STORE_URL } from '@/lib/app'

export const CONTACT_EMAIL = 'nathanielfiska@gmail.com'
export const EFFECTIVE_DATE = '28 July 2026'

/** Apple's standard EULA, incorporated by reference in our own Terms. */
export const APPLE_EULA =
  'https://www.apple.com/legal/internet-services/itunes/dev/stdeula/'

export function SiteHeader() {
  return (
    <header className="header">
      <div className="wrap bar">
        <Link className="brand" href="/">
          <Image src={asset('/veramark.png')} alt="" width={30} height={30} priority />
          Optimally
        </Link>
        <nav className="navlinks">
          <Link href="/#how">How it works</Link>
          <Link href="/#why">Why Optimally</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/support/">Support</Link>
          {/* Straight to the store, not to an anchor that scrolls to a
              button that goes to the store. The header CTA is the most-clicked
              thing on the page and it had one hop too many in it. */}
          <a className="btn" href={APP_STORE_URL}>
            Get Optimally
          </a>
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="foot">
          <Link className="brand" href="/" style={{ textDecoration: 'none' }}>
            <Image src={asset('/veramark.png')} alt="" width={26} height={26} />
            Optimally
          </Link>
          <div className="links">
            <a href={APP_STORE_URL}>Download</a>
            <Link href="/support/">Support</Link>
            <Link href="/contact/">Contact</Link>
            <Link href="/privacy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
          </div>
        </div>
        <div className="copyright">
          © 2026 Optimally. Product data from Open Food Facts, used under the ODbL.
        </div>
        <div className="disclaimer">
          Optimally&rsquo;s scores are an information tool, not medical advice. Always
          check the physical packaging for allergen information — only the label
          in your hand is authoritative.
        </div>
      </div>
    </footer>
  )
}

/**
 * The App Store badge, and it is a LINK now.
 *
 * It was a `<span>` reading "Coming soon to the App Store" with the real URL
 * sitting in a code comment next to it. The app shipped on 4 September 2026;
 * the site did not notice.
 */
export function AppStoreButton({ label }: { label?: string }) {
  return (
    <a className="appstore" href={APP_STORE_URL}>
      <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
        <path d="M16.365 1.43c.09 1.02-.32 2.02-.98 2.74-.7.77-1.85 1.37-2.96 1.28-.11-1 .38-2.03 1.02-2.7.7-.75 1.94-1.32 2.92-1.32zM20.5 17.05c-.55 1.27-.81 1.84-1.52 2.96-.99 1.57-2.39 3.53-4.12 3.55-1.54.01-1.94-1-4.03-.99-2.09.01-2.52 1.01-4.06.99-1.73-.02-3.05-1.78-4.04-3.35C-.36 16.9-.65 11.7 1.02 8.94c1.16-1.93 2.98-3.06 4.7-3.06 1.75 0 2.85 1 4.29 1 1.4 0 2.25-1 4.28-1 1.53 0 3.16.83 4.32 2.27-3.8 2.08-3.18 7.5.89 8.9z" />
      </svg>
      <span>
        <span className="l1">{label ?? 'Download on the'}</span>
        <br />
        <span className="l2">App Store</span>
      </span>
    </a>
  )
}

/** Shared shell for the four prose pages. */
export function Prose({
  title,
  effective,
  children,
}: {
  title: string
  effective?: boolean
  children: ReactNode
}) {
  return (
    <>
      <SiteHeader />
      <main className="prose">
        <h1>{title}</h1>
        {effective ? (
          <div className="eff">Effective date: {EFFECTIVE_DATE}</div>
        ) : null}
        {children}
      </main>
      <SiteFooter />
    </>
  )
}

export function Check() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12l5 5 9-10" />
    </svg>
  )
}

/** A screenshot in a device frame. */
export function Phone({
  src,
  alt,
  tilt = false,
  priority = false,
}: {
  src: string
  alt: string
  tilt?: boolean
  priority?: boolean
}) {
  return (
    <div className={tilt ? 'phone tilt' : 'phone'}>
      <div className="phone-inner">
        <Image
          src={asset(src)}
          alt={alt}
          width={700}
          height={1521}
          priority={priority}
        />
      </div>
    </div>
  )
}
