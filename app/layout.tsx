import type { Metadata, Viewport } from 'next'
import { asset } from '@/lib/asset'
import './globals.css'

import { SITE_URL } from '@/lib/site'
import { StoreLinkLocaliser } from '@/components/store-link'
import { Reveal } from '@/components/reveal'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  /* NO EM DASHES, INCLUDING HERE. These are user-visible: the title shows in
     the browser tab and the og: pair is what every link preview renders. The
     house rule applies to them like any other copy. */
  title: {
    default: "Optimally: know what's really in your food",
    template: '%s · Optimally',
  },
  description:
    'Scan a barcode and get a score out of 100, built from the ingredient list. The same ingredient gets the same rating every time, and every flag links the study behind it.',
  icons: {
    icon: asset('/veramark.png'),
    apple: asset('/appicon.png'),
  },
  openGraph: {
    title: "Optimally: know what's really in your food",
    description: 'Same ingredient, same rating, every time.',
    images: [asset('/appicon.png')],
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#F6F6F8',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        {/* Through asset(), because Next leaves url() in CSS alone and a bare
            /fonts/… 404s on the project-page deployment. Preloaded because it
            is the face every heading is set in and swap-in is visible. */}
        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href={asset('/fonts/Satoshi-Variable.woff2')}
          crossOrigin="anonymous"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `@font-face{font-family:"Satoshi";src:url("${asset(
              '/fonts/Satoshi-Variable.woff2',
            )}") format("woff2-variations");font-weight:300 900;font-style:normal;font-display:swap}`,
          }}
        />
        {/* THIS HAS TO RUN BEFORE THE FIRST PAINT, WHICH IS WHY IT IS HERE AND
            NOT IN THE EFFECT THAT DOES THE REST OF THE WORK.

            The reveal's starting state is guarded on html[data-reveal]. Set
            that from a useEffect and the browser has already painted the
            sections at full opacity by the time it lands, so every section
            visibly pops out and then fades back in. Setting it from a blocking
            inline script in the head means the attribute is present before
            anything is drawn.

            It stays a script rather than a hardcoded attribute for the reason
            in components/reveal.tsx: if scripting is off the attribute is
            never set, and nothing on the page is hidden by a mechanism that is
            not running. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(!matchMedia('(prefers-reduced-motion: reduce)').matches&&'IntersectionObserver' in window){document.documentElement.setAttribute('data-reveal','')}}catch(e){}",
          }}
        />
      </head>
      <body>
        {children}
        <StoreLinkLocaliser />
        <Reveal />
      </body>
    </html>
  )
}
