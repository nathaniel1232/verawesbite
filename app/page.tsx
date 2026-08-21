import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader, SiteFooter, Phone, Check } from '@/components/site'
import { asset } from '@/lib/asset'

const SHOTS = [
  {
    src: '/shots/scan.jpg',
    alt: 'Optimally home screen: scan a product, search, and recent scans with scores',
    title: 'Scan or search',
    body: 'Point at a barcode, photograph a label, or type a product name. Recent scans keep their scores.',
  },
  {
    src: '/shots/verdict.jpg',
    alt: 'Optimally verdict screen showing a score of 22 with ultra-processed and seed oil flags',
    title: 'Read the verdict',
    body: 'A 0–100 score, the flags that drove it, and every key ingredient rated with a reason.',
  },
  {
    src: '/shots/research.jpg',
    alt: 'Optimally research screen listing seed oils, ultra-processing, added sugar and refined grain',
    title: 'Check our work',
    body: 'Each rule links the paper behind it, and shows how many of your own scans it touched.',
  },
  {
    src: '/shots/progress.jpg',
    alt: 'Optimally progress screen showing ultra-processed share and a Clean Score trend',
    title: 'See the pattern',
    body: 'What share of your scans are ultra-processed, and whether your Clean Score is moving.',
  },
]

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main>
        {/* ---------------- hero ---------------- */}
        <section className="hero wrap">
          <div className="hero-grid">
            <div>
              <span className="eyebrow">Seed-oil &amp; ultra-processed scanner</span>
              <h1>Know what&rsquo;s really in your food.</h1>
              <p className="lede muted">
                Scan any barcode for a 0–100 score built from the ingredient
                list. Every rating is deterministic and cited — the same
                ingredient gets the same verdict, every time. No AI guesswork,
                no brand money.
              </p>
              <div className="cta-row" id="get">
                {/* WHEN THE APP IS LIVE: swap this <span> for
                    <a className="appstore" href="https://apps.apple.com/app/idYOURAPPID">
                    and change .l1 to "Download on the". */}
                <span
                  className="appstore"
                  aria-label="Optimally is coming soon to the App Store"
                >
                  <svg viewBox="0 0 24 24" fill="#fff" aria-hidden="true">
                    <path d="M16.365 1.43c.09 1.02-.32 2.02-.98 2.74-.7.77-1.85 1.37-2.96 1.28-.11-1 .38-2.03 1.02-2.7.7-.75 1.94-1.32 2.92-1.32zM20.5 17.05c-.55 1.27-.81 1.84-1.52 2.96-.99 1.57-2.39 3.53-4.12 3.55-1.54.01-1.94-1-4.03-.99-2.09.01-2.52 1.01-4.06.99-1.73-.02-3.05-1.78-4.04-3.35C-.36 16.9-.65 11.7 1.02 8.94c1.16-1.93 2.98-3.06 4.7-3.06 1.75 0 2.85 1 4.29 1 1.4 0 2.25-1 4.28-1 1.53 0 3.16.83 4.32 2.27-3.8 2.08-3.18 7.5.89 8.9z" />
                  </svg>
                  <span>
                    <span className="l1">Coming soon to the</span>
                    <br />
                    <span className="l2">App Store</span>
                  </span>
                </span>
                <span className="paidnote">
                  Paid subscription. Price and trial shown before you pay.
                </span>
              </div>
            </div>

            <Phone
              src="/shots/verdict.jpg"
              alt="Optimally scoring a bag of potato chips 22 out of 100, flagged ultra-processed and contains seed oils"
              tilt
              priority
            />
          </div>
        </section>

        {/* ---------------- why ---------------- */}
        <section className="band wrap" id="why">
          <div className="section-head">
            <span className="eyebrow">Why Optimally</span>
            <h2>Other scanners guess. Optimally shows its work.</h2>
            <p>
              Most food scanners send your product to an AI that will happily
              give you a different answer if you ask twice. Optimally runs a fixed
              set of published rules — so the score means something, and you can
              audit it.
            </p>
          </div>
          <div className="pillars">
            <div className="pcard">
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 12l2 2 4-4" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h3>Deterministic</h3>
              <p>
                Same ingredient, same rating — every time, on every phone. Fixed
                rules, not a model that contradicts itself between scans.
              </p>
            </div>
            <div className="pcard">
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4 5h11M4 10h11M4 15h7" />
                  <path d="M17.5 13.5l2 2 3-3.5" />
                </svg>
              </div>
              <h3>Cited</h3>
              <p>
                Every flag traces to a published paper you can open and read.
                Where the evidence is thin, the app says so instead of
                pretending.
              </p>
            </div>
            <div className="pcard">
              <div className="ic">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
                </svg>
              </div>
              <h3>Private</h3>
              <p>
                No account, no email, no ads. Your scans, profile and lists stay
                on your device — and we never sell your data.
              </p>
            </div>
          </div>
        </section>

        {/* ---------------- how / shelf ---------------- */}
        <section className="band alt" id="how">
          <div className="wrap split">
            <div className="split-photo">
              <Image
                src={asset('/photos/shelf.jpg')}
                alt="Holding a phone up to a chilled supermarket shelf"
                width={1000}
                height={1250}
              />
            </div>
            <div>
              <span className="eyebrow">How it works</span>
              <h2>Built for the ten seconds you have in the aisle.</h2>
              <p>
                You&rsquo;re standing in front of forty products and the front of
                every box is marketing. Optimally reads the back instead.
              </p>
              <ul className="checks">
                <li>
                  <Check />
                  <span>
                    <strong>Scan the barcode.</strong> No barcode, or it
                    won&rsquo;t read? Photograph the ingredients — the text is
                    processed on your device.
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <strong>Read the verdict.</strong> A score out of 100, the
                    flags behind it, and every key ingredient rated with a
                    one-line reason.
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    <strong>Find something better.</strong> See cleaner
                    alternatives in the same category and build a shopping list
                    from them.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ---------------- screenshots ---------------- */}
        <section className="band wrap">
          <div className="section-head">
            <span className="eyebrow">Inside the app</span>
            <h2>Four screens, no dashboard theatre.</h2>
            <p>
              Real screenshots from the app. The products shown are Optimally&rsquo;s
              own demo items, so nothing here is a brand we were paid to
              flatter.
            </p>
          </div>
          <div className="shots">
            {SHOTS.map((s) => (
              <div className="shot" key={s.src}>
                <Phone src={s.src} alt={s.alt} />
                <h3>{s.title}</h3>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- the difference ---------------- */}
        <section className="band alt">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">What it&rsquo;s looking for</span>
              <h2>Two bars in the same aisle. Not the same food.</h2>
              <p>
                Both are sold as protein. Optimally doesn&rsquo;t care what the front
                of the pack calls it — it reads the ingredient list and the
                degree of processing.
              </p>
            </div>
            <div className="compare">
              <div className="cmp">
                <div className="cmp-photo">
                  <Image
                    src={asset('/photos/clean-bar.jpg')}
                    alt="A minimally packaged protein bar with three named ingredients"
                    width={1000}
                    height={750}
                  />
                </div>
                <div className="cmp-body">
                  <h3>Three ingredients you can name</h3>
                  <div className="brandline">Illustration</div>
                  <div className="cmp-tags">
                    <span className="tagpill ok">WHOLE-FOOD BASE</span>
                    <span className="tagpill ok">NO SEED OILS</span>
                  </div>
                  <p>
                    A short list of recognisable foods, minimally processed.
                    Optimally has very little to flag, and the score reflects that.
                  </p>
                </div>
              </div>
              <div className="cmp">
                <div className="cmp-photo">
                  <Image
                    src={asset('/photos/processed-bar.jpg')}
                    alt="A brightly packaged cereal bar on a supermarket shelf"
                    width={1000}
                    height={750}
                  />
                </div>
                <div className="cmp-body">
                  <h3>A long list, mostly not food</h3>
                  <div className="brandline">Illustration</div>
                  <div className="cmp-tags">
                    <span className="tagpill no">ULTRA-PROCESSED</span>
                    <span className="tagpill no">REFINED SYRUPS</span>
                  </div>
                  <p>
                    Refined syrups, industrial oils and additives that only
                    exist to survive a warehouse. Optimally names each one and links
                    the evidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- research ---------------- */}
        <section className="band wrap">
          <div className="split">
            <div>
              <span className="eyebrow">Receipts</span>
              <h2>Every rule has a paper behind it.</h2>
              <p>
                Optimally&rsquo;s Research tab is not a blog. Each article states the
                claim, links the evidence, and shows the exact rule it drives —
                read straight out of the scoring engine, so the explanation can
                never drift from what actually scored your food.
              </p>
              <ul className="checks">
                <li>
                  <Check />
                  <span>
                    Peer-reviewed studies, plus EFSA and IARC assessments where
                    they exist.
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    Honest about weak evidence — animal-only findings are
                    labelled as such.
                  </span>
                </li>
                <li>
                  <Check />
                  <span>
                    Shows how many of <em>your</em> scans each rule actually
                    touched.
                  </span>
                </li>
              </ul>
            </div>
            <div className="split-photo">
              <Image
                src={asset('/photos/wholefoods.jpg')}
                alt="Eggs, butter, milk, honey, sardines and blueberries on a sunlit counter"
                width={1000}
                height={1250}
              />
            </div>
          </div>
        </section>

        {/* ---------------- pricing (honest) ---------------- */}
        <section className="band alt" id="pricing">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">Pricing</span>
              <h2>Optimally is a paid app. That&rsquo;s the whole business model.</h2>
              <p>
                There is no free tier and no ad-supported version. Subscribers
                are the only people Optimally answers to — which is exactly why no
                brand can buy a better score.
              </p>
            </div>
            <div className="pricecard">
              <h3>Optimally Pro</h3>
              <div className="sub">
                A subscription, sold through the App Store. You&rsquo;ll see the
                exact price in your own currency — and the length of any free
                trial you&rsquo;re eligible for — inside the app, before
                anything is charged.
              </div>
              <ul>
                <li>
                  <Check />
                  <span>Unlimited barcode, photo and search scans</span>
                </li>
                <li>
                  <Check />
                  <span>
                    The full 0–100 score, flags and ingredient-by-ingredient
                    breakdown
                  </span>
                </li>
                <li>
                  <Check />
                  <span>Cleaner alternatives, and a shopping list</span>
                </li>
                <li>
                  <Check />
                  <span>The cited research behind every rule</span>
                </li>
                <li>
                  <Check />
                  <span>
                    Your Clean Score trend and ultra-processed share over time
                  </span>
                </li>
              </ul>
              <div className="finewarn">
                <strong>The honest version:</strong> after the intro questions,
                Optimally asks you to subscribe before you can scan anything. If a
                free trial is offered to you, cancelling before it ends costs
                you nothing. Subscriptions renew automatically until you cancel,
                which you do in iOS Settings — not in the app.{' '}
                <Link href="/support/#cancel">Here&rsquo;s how</Link>.
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- trust ---------------- */}
        <section className="band wrap">
          <div className="trust">
            <span className="eyebrow" style={{ color: '#9FD3B0' }}>
              Independent by design
            </span>
            <h2>No brand can pay for a better score. Ever.</h2>
            <p>
              Optimally earns money one way: people paying for it. No ads, no
              sponsored placements, no affiliate deals on the swaps, and no data
              sold to anyone. That is what keeps the scores worth reading.
            </p>
            <div className="row">
              <span className="chip">No ads</span>
              <span className="chip">No brand money</span>
              <span className="chip">No data selling</span>
              <span className="chip">Cited &amp; deterministic</span>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
