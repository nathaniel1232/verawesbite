import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { SiteHeader, SiteFooter, AppStoreButton } from '@/components/site'
import {
  GUIDES,
  GUIDE_TOPICS,
  guideBySlug,
  guideModifiedISO,
  guideReadMinutes,
  type Guide,
} from '@/lib/guides'
import { PRODUCTS, BAND_LABEL, productByCode } from '@/lib/products'
import { CANONICAL_ORIGIN } from '@/lib/site'

export function generateStaticParams() {
  return GUIDES.map((guide) => ({ slug: guide.slug }))
}
export const dynamicParams = false

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const guide = guideBySlug(slug)
  if (!guide) return { title: 'Guide not found' }
  const url = `${CANONICAL_ORIGIN}/guides/${guide.slug}/`
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: url },
    openGraph: {
      title: guide.title,
      description: guide.description,
      type: 'article',
      url,
      modifiedTime: guideModifiedISO(guide),
      images: [
        {
          url: `${CANONICAL_ORIGIN}/appicon.png`,
          alt: 'Optimally food scanner',
        },
      ],
    },
    twitter: {
      card: 'summary',
      title: guide.title,
      description: guide.description,
      images: [`${CANONICAL_ORIGIN}/appicon.png`],
    },
  }
}

function Body({ lines }: { lines: string[] }) {
  const blocks: { bullets: boolean; items: string[] }[] = []
  for (const line of lines) {
    const bullet = line.startsWith('- ')
    const text = bullet ? line.slice(2) : line
    const last = blocks[blocks.length - 1]
    if (last && last.bullets === bullet) last.items.push(text)
    else blocks.push({ bullets: bullet, items: [text] })
  }
  return (
    <>
      {blocks.map((block, index) =>
        block.bullets ? (
          <ul key={index}>
            {block.items.map((text) => (
              <li key={text}>{text}</li>
            ))}
          </ul>
        ) : (
          block.items.map((text) => <p key={text}>{text}</p>)
        ),
      )}
    </>
  )
}

function GuideContents({ guide }: { guide: Guide }) {
  return (
    <>
      <span className="eyebrow">In this guide</span>
      <a href="#answer">The short answer</a>
      {guide.sections.map((section, index) => (
        <a key={section.h} href={`#section-${index + 1}`}>
          {section.h}
        </a>
      ))}
      {guide.faq?.length ? <a href="#faq">Common questions</a> : null}
      {guide.sources?.length ? (
        <a href="#sources">Sources & further reading</a>
      ) : null}
    </>
  )
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const guide = guideBySlug(slug)
  if (!guide) notFound()
  const topic = GUIDE_TOPICS.find((item) => item.id === guide.topic)
  const url = `${CANONICAL_ORIGIN}/guides/${guide.slug}/`
  const scans = (guide.scans ?? [])
    .map(productByCode)
    .filter((product): product is (typeof PRODUCTS)[number] => Boolean(product))
  const related = (guide.related ?? [])
    .map(guideBySlug)
    .filter((item): item is NonNullable<typeof item> => Boolean(item))
  const ld = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      '@id': `${url}#article`,
      headline: guide.heading,
      description: guide.description,
      dateModified: guideModifiedISO(guide),
      mainEntityOfPage: url,
      image: `${CANONICAL_ORIGIN}/appicon.png`,
      inLanguage: 'en',
      author: {
        '@type': 'Organization',
        name: 'Optimally',
        url: CANONICAL_ORIGIN,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Optimally',
        url: CANONICAL_ORIGIN,
        logo: {
          '@type': 'ImageObject',
          url: `${CANONICAL_ORIGIN}/appicon.png`,
        },
      },
      citation: guide.sources?.map((source) => source.url),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: `${CANONICAL_ORIGIN}/`,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Guides',
          item: `${CANONICAL_ORIGIN}/guides/`,
        },
        { '@type': 'ListItem', position: 3, name: guide.heading, item: url },
      ],
    },
  ]
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="guide guide-article">
        <div className="guide-shell">
          <nav className="guide-breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span aria-hidden="true">/</span>
            <Link href="/guides/">Guides</Link>
            <span aria-hidden="true">/</span>
            <span>{topic?.label ?? 'Food guides'}</span>
          </nav>
          <header className="article-heading">
            <span className="eyebrow">
              {topic?.label ?? 'The Optimally library'}
            </span>
            <h1>{guide.heading}</h1>
            <p className="gquestion">{guide.question}</p>
            <div className="article-byline">
              <span>By Optimally</span>
              <span>{guideReadMinutes(guide)} min read</span>
              <time dateTime={guideModifiedISO(guide)}>
                Updated {guide.updated}
              </time>
              {guide.sources?.length ? (
                <a href="#sources">
                  View sources <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </header>
          <div className="article-grid">
            <aside className="article-sidebar">
              <nav className="desktop-toc" aria-label="On this page">
                <GuideContents guide={guide} />
              </nav>
              <details className="mobile-toc">
                <summary>In this guide</summary>
                <nav aria-label="On this page">
                  <GuideContents guide={guide} />
                </nav>
              </details>
              <Link className="sidebar-library" href="/guides/">
                Explore all {GUIDES.length} guides{' '}
                <span aria-hidden="true">↗</span>
              </Link>
            </aside>
            <article className="article-body" aria-label={guide.heading}>
              <div id="answer" className="answer">
                <h2>The short answer</h2>
                <p>{guide.answer}</p>
              </div>
              {guide.sections.map((section, index) => (
                <section id={`section-${index + 1}`} key={section.h}>
                  <h2>{section.h}</h2>
                  <Body lines={section.p} />
                </section>
              ))}
              {scans.length ? (
                <section>
                  <h2>Product examples</h2>
                  <p>
                    Saved examples of the app’s food-quality explanations. Check
                    the current pack when shopping; recipes and ratings can
                    change.
                  </p>
                  <ul className="gscans">
                    {scans.map((product) => (
                      <li key={product.code}>
                        <Link href={`/scan/${product.code}/`}>
                          <span className="gs-name">{product.name}</span>
                          <span className="gs-brand">{product.brand}</span>
                          <b className={product.band}>{product.score}</b>
                          <span className="gs-band">
                            {BAND_LABEL[product.band]}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
              {guide.faq?.length ? (
                <section id="faq">
                  <span className="eyebrow">A little more clarity</span>
                  <h2>Common questions</h2>
                  <div className="article-faq">
                    {guide.faq.map((item) => (
                      <details key={item.q}>
                        <summary>{item.q}</summary>
                        <p>{item.a}</p>
                      </details>
                    ))}
                  </div>
                </section>
              ) : null}
              {guide.sources?.length ? (
                <section id="sources" className="article-sources">
                  <span className="eyebrow">Follow the thinking</span>
                  <h2>Sources & further reading</h2>
                  <p>
                    Author perspectives describe their writers’ ideas. Research
                    and official guidance support the specific points discussed
                    above.
                  </p>
                  <ol>
                    {guide.sources.map((source) => (
                      <li key={source.url}>
                        <a
                          href={source.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {source.title}
                          <span aria-hidden="true"> ↗</span>
                        </a>
                        {source.note ? <p>{source.note}</p> : null}
                      </li>
                    ))}
                  </ol>
                </section>
              ) : null}
              <aside className="article-download">
                <span className="eyebrow">Bring it to your next shop</span>
                <h2>Food, a little clearer.</h2>
                <p>{guide.cta}</p>
                <AppStoreButton />
                <Link href="/#app">
                  See what’s inside Optimally <span aria-hidden="true">↗</span>
                </Link>
              </aside>
            </article>
          </div>
          {related.length ? (
            <nav
              id="related"
              className="article-related"
              aria-label="Related guides"
            >
              <span className="eyebrow">Keep exploring</span>
              <h2>Your next good question.</h2>
              <div>
                {related.map((item) => (
                  <Link key={item.slug} href={`/guides/${item.slug}/`}>
                    <span>
                      {
                        GUIDE_TOPICS.find((entry) => entry.id === item.topic)
                          ?.label
                      }
                    </span>
                    <h3>{item.heading}</h3>
                    <span className="related-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </Link>
                ))}
              </div>
            </nav>
          ) : null}
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
