import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader, SiteFooter, AppStoreButton } from '@/components/site'
import { GUIDES, KIND_LABEL, guideBySlug, type GuideSection } from '@/lib/guides'
import { PRODUCTS, BAND_LABEL, productByCode } from '@/lib/products'
import { CANONICAL_ORIGIN } from '@/lib/site'

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const g = guideBySlug(slug)
  if (!g) return { title: 'Not found' }
  return {
    title: g.title,
    description: g.description,
    alternates: { canonical: `${CANONICAL_ORIGIN}/guides/${g.slug}/` },
    openGraph: { title: g.title, description: g.description, type: 'article' },
  }
}

/**
 * Body paragraphs, where a leading "- " means a bullet.
 *
 * Consecutive bullets have to be collected into ONE list rather than emitted
 * as a run of single-item lists: a screen reader announces "list, one item"
 * for each of those, which turns a five-point list into five lists.
 */
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
      {blocks.map((b, i) =>
        b.bullets ? (
          <ul key={i}>
            {b.items.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        ) : (
          b.items.map((t) => <p key={t}>{t}</p>)
        ),
      )}
    </>
  )
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const g = guideBySlug(slug)
  if (!g) return null

  const scans = (g.scans ?? [])
    .map(productByCode)
    .filter((p): p is (typeof PRODUCTS)[number] => Boolean(p))
  const related = (g.related ?? []).map(guideBySlug).filter(Boolean)

  /* Structured data. The FAQ block is what produces an expandable result in
     Google, and both blocks are the machine-readable version of the thing the
     page already says in words, which is increasingly how an answer gets
     quoted by an assistant rather than a search engine. Never put a claim in
     here that is not also on the page. */
  const ld: Record<string, unknown>[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: g.heading,
      description: g.description,
      dateModified: '2026-09-14',
      mainEntityOfPage: `${CANONICAL_ORIGIN}/guides/${g.slug}/`,
      publisher: { '@type': 'Organization', name: 'Optimally' },
    },
  ]
  if (g.faq?.length) {
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: g.faq.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }

  return (
    <>
      <SiteHeader />
      <main className="guide">
        <div className="gwrap">
          <Link className="backlink" href="/guides/">
            All guides
          </Link>

          <span className="eyebrow">{KIND_LABEL[g.kind]}</span>
          <h1>{g.heading}</h1>
          <p className="gquestion">{g.question}</p>

          {/* THE ANSWER, FIRST, UNDER 100 WORDS.
              Nobody scrolls past an introduction to find out whether the page
              answers the question they typed. It is also the block most likely
              to be lifted verbatim by an assistant, which is the point. */}
          <div className="answer">
            <h2>The short answer</h2>
            <p>{g.answer}</p>
          </div>

          {/* And the ask goes AFTER it, never before. A download button above
              the answer is the thing that makes a page feel like an advert
              that has not earned anything yet. */}
          <div className="ginline">
            <p>{g.cta}</p>
            <AppStoreButton />
          </div>

          {g.sections.map((s: GuideSection) => (
            <section key={s.h}>
              <h2>{s.h}</h2>
              <Body lines={s.p} />
            </section>
          ))}

          {scans.length ? (
            <section>
              <h2>Worked examples</h2>
              <p>
                Real products, scored by the app itself, with every reason the
                engine gave.
              </p>
              <ul className="gscans">
                {scans.map((p) => (
                  <li key={p.code}>
                    <Link href={`/scan/${p.code}/`}>
                      <span className="gs-name">{p.name}</span>
                      <span className="gs-brand">{p.brand}</span>
                      <b className={p.band}>{p.score}</b>
                      <span className="gs-band">{BAND_LABEL[p.band]}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {g.faq?.length ? (
            <section>
              <h2>Common questions</h2>
              <dl className="gfaq">
                {g.faq.map((f) => (
                  <div key={f.q}>
                    <dt>{f.q}</dt>
                    <dd>{f.a}</dd>
                  </div>
                ))}
              </dl>
            </section>
          ) : null}

          <p className="gupdated">Last reviewed {g.updated}.</p>

          {related.length ? (
            <nav className="grelated">
              <h2>Related</h2>
              <ul>
                {related.map((r) => (
                  <li key={r!.slug}>
                    <Link href={`/guides/${r!.slug}/`}>{r!.title}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          ) : null}
        </div>
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }}
      />
    </>
  )
}
