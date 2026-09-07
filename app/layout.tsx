import type { Metadata, Viewport } from 'next'
import { asset } from '@/lib/asset'
import './globals.css'

import { SITE_URL } from '@/lib/site'
import { StoreLinkLocaliser } from '@/components/store-link'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Optimally — Know what's really in your food",
    template: '%s — Optimally',
  },
  description:
    'Optimally scans any barcode and returns a 0–100 ingredient score. Deterministic, cited, private. A paid subscription app with no ads and no brand money.',
  icons: {
    icon: asset('/veramark.png'),
    apple: asset('/appicon.png'),
  },
  openGraph: {
    title: "Optimally — Know what's really in your food",
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
      <body>
        {children}
        <StoreLinkLocaliser />
      </body>
    </html>
  )
}
