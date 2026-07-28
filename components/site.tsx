import Link from 'next/link'
import Image from 'next/image'
import type { ReactNode } from 'react'
import { asset } from '@/lib/asset'

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
          Vera
        </Link>
        <nav className="navlinks">
          <Link href="/#how">How it works</Link>
          <Link href="/#why">Why Vera</Link>
          <Link href="/#pricing">Pricing</Link>
          <Link href="/support/">Support</Link>
          <Link className="btn" href="/#get">
            Get Vera
          </Link>
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
            Vera
          </Link>
          <div className="links">
            <Link href="/support/">Support</Link>
            <Link href="/contact/">Contact</Link>
            <Link href="/privacy/">Privacy</Link>
            <Link href="/terms/">Terms</Link>
          </div>
        </div>
        <div className="copyright">
          © 2026 Vera. Product data from Open Food Facts, used under the ODbL.
        </div>
        <div className="disclaimer">
          Vera&rsquo;s scores are an information tool, not medical advice. Always
          check the physical packaging for allergen information — only the label
          in your hand is authoritative.
        </div>
      </div>
    </footer>
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
