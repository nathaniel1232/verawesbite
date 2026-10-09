import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/site'
import { GuideLibrary } from '@/components/guide-library'
import { GUIDES, guideBySlug } from '@/lib/guides'
import { CANONICAL_ORIGIN } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Food scanner guides: Primal, Ray Peat & whole foods',
  description:
    'Explore Optimally’s guides to Primal and Ray Peat inspired eating, food scanning, ingredients, and nourishing everyday foods. Practical answers with sources.',
  alternates: { canonical: `${CANONICAL_ORIGIN}/guides/` },
  openGraph: {
    title: 'The Optimally food guide library',
    description:
      'Good food starts with better questions. Explore food, ingredients, and a clearer way to eat.',
    url: `${CANONICAL_ORIGIN}/guides/`,
    type: 'website',
  },
}

const featured = [
  'primal-food-scanning-app',
  'ray-peat-food-scanning-app',
  'best-food-scanner-apps',
]

export default function GuidesIndex() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Optimally food guide library',
    url: `${CANONICAL_ORIGIN}/guides/`,
    description: metadata.description,
    mainEntity: {
      '@type': 'ItemList',
      numberOfItems: GUIDES.length,
      itemListElement: GUIDES.map((guide, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: guide.heading,
        url: `${CANONICAL_ORIGIN}/guides/${guide.slug}/`,
      })),
    },
  }
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="guides-hub">
        <div className="guide-shell">
          <header className="library-hero">
            <div>
              <span className="eyebrow">The Optimally library</span>
              <h1>
                Good food starts with <em>better questions.</em>
              </h1>
              <p>
                From Primal and Ray Peat ideas to the label in your hand. Find
                useful answers, understand our approach, and make your next food
                choice a little clearer.
              </p>
            </div>
            <a href="#library" className="library-count">
              <strong>{GUIDES.length}</strong>
              <span>
                guides to explore <span aria-hidden="true">↓</span>
              </span>
            </a>
          </header>
          <section className="featured-guides" aria-labelledby="start-heading">
            <div className="library-heading">
              <span className="eyebrow">A good place to start</span>
              <h2 id="start-heading">Find your approach.</h2>
            </div>
            <div className="featured-grid">
              {featured.map((slug, index) => {
                const guide = guideBySlug(slug)
                if (!guide) return null
                return (
                  <Link
                    className="featured-guide"
                    key={slug}
                    href={`/guides/${slug}/`}
                  >
                    <span className="featured-number">
                      0{index + 1} <span aria-hidden="true">↗</span>
                    </span>
                    <h3>{guide.heading}</h3>
                    <p>{guide.question}</p>
                    <span className="featured-read">Explore the guide</span>
                  </Link>
                )
              })}
            </div>
          </section>
          <GuideLibrary
            guides={GUIDES.map(
              ({
                slug,
                title,
                heading,
                description,
                question,
                answer,
                topic,
              }) => ({
                slug,
                title,
                heading,
                description,
                question,
                answer,
                topic,
              }),
            )}
          />
          <aside className="library-about">
            <span className="eyebrow">Written by Optimally</span>
            <h2>Useful ideas. Clear sources.</h2>
            <p>
              These guides explain the app we build and the food ideas behind
              it. Author perspectives, nutrition research, and our product
              choices are identified separately, so you can explore the
              reasoning for yourself.
            </p>
            <Link href="/#approach">
              Meet the Optimally approach <span aria-hidden="true">↗</span>
            </Link>
          </aside>
        </div>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(ld).replace(/</g, '\u003c'),
        }}
      />
    </>
  )
}
