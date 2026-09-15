import type { Metadata } from 'next'
import Link from 'next/link'
import { SiteHeader, SiteFooter } from '@/components/site'
import { GUIDES, KIND_LABEL, type GuideKind } from '@/lib/guides'
import { CANONICAL_ORIGIN } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Guides',
  description:
    'Plain answers on seed oils, ultra-processing, food labels and the scanner apps that read them. Sources named, comparisons dated.',
  alternates: { canonical: `${CANONICAL_ORIGIN}/guides/` },
}

/* The order the index runs in, which is deliberately not the order they were
   written. Problem pages first because they answer a question somebody has
   already decided they want answered; the pages naming other apps sit lower,
   because leading a guides index with competitor comparisons reads as a sales
   funnel rather than as a reference. */
const ORDER: GuideKind[] = ['problem', 'usecase', 'alternative', 'comparison']

export default function GuidesIndex() {
  return (
    <>
      <SiteHeader />
      <main className="guide">
        <div className="gwrap">
          <span className="eyebrow">Guides</span>
          <h1>Reading a label, and the apps that read it for you.</h1>
          <p className="gquestion">
            Written against the questions people actually ask, with the evidence named
            and the weak parts of it said out loud.
          </p>

          {ORDER.map((kind) => {
            const items = GUIDES.filter((g) => g.kind === kind)
            if (!items.length) return null
            return (
              <section key={kind}>
                <h2>{KIND_LABEL[kind]}</h2>
                <ul className="gindex">
                  {items.map((g) => (
                    <li key={g.slug}>
                      <Link href={`/guides/${g.slug}/`}>
                        <h3>{g.title}</h3>
                        <p>{g.question}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            )
          })}
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
