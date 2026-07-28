import type { Metadata, Viewport } from 'next'
import { asset } from '@/lib/asset'
import './globals.css'

/**
 * Absolute base for Open Graph image URLs — a social crawler cannot resolve a
 * relative path. Set NEXT_PUBLIC_SITE_URL in CI to the real origin; the
 * fallback keeps local builds warning-free.
 */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? 'https://nathaniel1232.github.io'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Vera — Know what's really in your food",
    template: '%s — Vera',
  },
  description:
    'Vera scans any barcode and returns a 0–100 ingredient score. Deterministic, cited, private. A paid subscription app with no ads and no brand money.',
  icons: {
    icon: asset('/veramark.png'),
    apple: asset('/appicon.png'),
  },
  openGraph: {
    title: "Vera — Know what's really in your food",
    description:
      'An honest, cited food scanner. Same ingredient, same rating — every time.',
    images: [asset('/appicon.png')],
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F4EFE6',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
