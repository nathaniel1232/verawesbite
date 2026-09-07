import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader, SiteFooter, AppStoreButton } from '@/components/site'
import { asset } from '@/lib/asset'
import { PRODUCTS, BAND_LABEL, productByCode } from '@/lib/products'

/* One page per product, generated at build time. `output: 'export'` has no
   server to render an unknown code on demand, so this list IS the routing
   table: a code that is not here 404s, which is the correct answer for it. */
export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ code: p.code }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>
}): Promise<Metadata> {
  const { code } = await params
  const p = productByCode(code)
  if (!p) return { title: 'Not found' }
  return {
    title: `${p.name} scores ${p.score}`,
    description: p.summary,
  }
}

export default async function ScanPage({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params
  const p = productByCode(code)
  if (!p) return null

  return (
    <>
      <SiteHeader />
      <main className="wrap verdict">
        <Link className="backlink" href="/#scans">
          All scans
        </Link>

        <div className="vhead">
          <div className="vpack">
            <Image
              src={asset(`/real/${p.img}`)}
              alt=""
              width={460}
              height={460}
            />
          </div>
          <div>
            <h1>{p.name}</h1>
            <div className="vbrand">
              {p.brand} · {p.category}
            </div>
            <div className="vscore">
              <b className={p.band}>{p.score}</b>
              <span className={p.band}>{BAND_LABEL[p.band]}</span>
            </div>
            <div className="vbar">
              <i className={p.band} style={{ width: `${p.score}%` }} />
            </div>
            <p className="vsummary">{p.summary}</p>
          </div>
        </div>

        <div className="vcols">
          <section>
            <h2>Why it scores {p.score}</h2>
            <ul className="vreasons">
              {p.reasons.map((r) => (
                <li key={r.text} className={r.tone}>
                  {r.text}
                </li>
              ))}
            </ul>
          </section>

          {p.ingredients.length ? (
            <section>
              <h2>Ingredients it rated</h2>
              <ul className="vings">
                {p.ingredients.map((i) => (
                  <li key={i.name}>
                    <span>{i.name}</span>
                    <b className={ratingClass(i.rating)}>{i.rating}</b>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}
        </div>

        <div className="vfoot">
          <AppStoreButton />
          <p>
            Scanned {p.brand ? `${p.brand} ` : ''}barcode {p.code}. Product data
            and photograph from{' '}
            <a href={p.off}>Open Food Facts</a>, used under the ODbL and
            CC BY-SA 3.0.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

/** The app's own ingredient ratings, mapped onto the four band colours. */
function ratingClass(rating: string) {
  const r = rating.toLowerCase()
  if (r.startsWith('very bad')) return 'bad'
  if (r.startsWith('bad')) return 'poor'
  if (r.startsWith('good')) return 'excellent'
  if (r.startsWith('very good')) return 'excellent'
  return 'neutral'
}
