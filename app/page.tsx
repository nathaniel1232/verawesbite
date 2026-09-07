import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader, SiteFooter, Phone, Check, AppStoreButton } from '@/components/site'
import { asset } from '@/lib/asset'

/**
 * REAL OUTPUT, NOT WRITTEN FOR THIS PAGE.
 *
 * Every score and every `reason` string below was printed by the shipping
 * scoring engine via `-catalogDump` (CatalogDump.swift in the app project) and
 * pasted here unedited. Marketing may only print figures the engine really
 * produces; `tools/score_audit.py` is a PORT and has disagreed with the app
 * before, so it is not the source either.
 *
 * The products are the app's own fictional demo packs, which is the only
 * reason their artwork can appear here at all.
 *
 * Ordered best to worst on purpose: the story is the SPREAD. Six things you
 * would find within a few metres of each other, and the app separates them by
 * eighty-two points.
 *
 * NOTE none of the chosen lines is about sugar. The engine does emit sugar
 * findings, but this app's position is that sugar is an energy source and
 * whether it counts against a food depends on the food — so a marketing page
 * does not lead with it.
 */
const EXAMPLES = [
  {
    slug: 'almond-bar',
    name: '3-Ingredient Almond Bar',
    brand: 'Bare Bar',
    score: 88,
    band: 'excellent',
    label: 'Very optimal',
    tone: 'good',
    reason: 'Whole, unprocessed food',
  },
  {
    slug: 'oat-clusters',
    name: 'No-Sugar-Added Oat Clusters',
    brand: 'Morning Co.',
    score: 65,
    band: 'good',
    label: 'Good',
    tone: 'good',
    reason: 'High fiber: 10g per 100g',
  },
  {
    slug: 'strawberry-yogurt',
    name: 'Strawberry Fruit Yogurt',
    brand: 'DairyDream',
    score: 37,
    band: 'poor',
    label: 'Poor',
    tone: 'warn',
    reason: 'Carmine, flagged additive',
  },
  {
    slug: 'sour-cream-chips',
    name: 'Sour Cream Potato Chips',
    brand: 'Crunchland',
    score: 19,
    band: 'bad',
    label: 'Very bad',
    tone: 'bad',
    reason: 'Very high sodium: 620mg per 100g',
  },
  {
    slug: 'classic-cola',
    name: 'Classic Cola',
    brand: 'FizzCo',
    score: 17,
    band: 'bad',
    label: 'Very bad',
    tone: 'warn',
    reason: 'Sulphite ammonia caramel, flagged additive',
  },
  {
    slug: 'choc-chip-protein-bar',
    name: 'Choc-Chip Protein Bar',
    brand: 'GymFuel',
    score: 6,
    band: 'bad',
    label: 'Very bad',
    tone: 'bad',
    reason: 'Made with industrial seed oils',
  },
]

const SHOTS = [
  {
    src: '/shots/scan.jpg',
    alt: 'Optimally home screen: scan button, product search, barcode entry, and recent scans each showing their score',
    title: 'Scan or search',
    body: 'Point at a barcode, photograph a label, or type a product name. Everything you have scanned keeps its score and stays one tap away.',
  },
  {
    src: '/shots/verdict.jpg',
    alt: 'Optimally verdict screen scoring Sour Cream Potato Chips 19 out of 100, very bad, flagged ultra-processed and contains seed oils',
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
    alt: 'Optimally Today screen: a weighted score of 36 for four things logged, calories and macros, and what share of the day was industrially formulated',
    title: 'See the pattern',
    body: 'Everything you logged today, weighted by how much of each you ate — with the share that was industrially formulated, and which items brought seed oils.',
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
                <AppStoreButton />
                <span className="paidnote">
                  Paid subscription. Price and trial shown before you pay.
                </span>
              </div>
            </div>

            <Phone
              src="/shots/verdict.jpg"
              alt="Optimally scoring a bag of potato chips 19 out of 100, flagged ultra-processed and contains seed oils"
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

        {/* ---------------- how the number is made ---------------- */}
        <section className="band wrap" id="method">
          <div className="section-head">
            <span className="eyebrow">The method</span>
            <h2>How the number is made.</h2>
            <p>
              Four steps, the same four every time. Nothing here is a model
              deciding how it feels about your yoghurt.
            </p>
          </div>

          <ol className="steps">
            <li>
              <h3>Read the label</h3>
              <p>
                The barcode goes to Open Food Facts and comes back with the
                ingredient list and the nutrition panel. No barcode, or it
                won&rsquo;t read? Photograph the ingredients instead.
              </p>
            </li>
            <li>
              <h3>Rate every ingredient</h3>
              <p>
                Each one is matched against a bundled taxonomy and given a
                rating. A rating is written <strong>once</strong> and then
                frozen — so the same ingredient scores the same for you, for
                everyone else, and next year.
              </p>
            </li>
            <li>
              <h3>Apply the rules</h3>
              <p>
                Industrial seed oils, degree of processing, flagged additives,
                and what the nutrition panel actually says. Every rule links
                the paper behind it, and tells you how many of your own scans
                it has touched.
              </p>
            </li>
            <li>
              <h3>Land on a number</h3>
              <p>
                Out of 100, and the band is fixed:{' '}
                <b className="excellent">75 and over</b> is very optimal,{' '}
                <b className="good">50–74</b> good, <b className="poor">25–49</b>{' '}
                poor, <b className="bad">under 25</b> very bad. No curve, no
                comparison to other users.
              </p>
            </li>
          </ol>
        </section>

        {/* ---------------- what it says about real products ---------------- */}
        <section className="band wrap">
          <div className="section-head">
            <span className="eyebrow">Six things off one shelf</span>
            <h2>The same aisle, six different answers.</h2>
            <p>
              Every number below came out of the app&rsquo;s own scoring engine, and
              the line under each one is the app&rsquo;s own wording — not a summary
              written for this page.
            </p>
          </div>

          <ol className="ledger">
            {EXAMPLES.map((e) => (
              <li key={e.slug} className="lrow">
                <div className="lpack">
                  <Image
                    src={asset(`/packs/${e.slug}.jpg`)}
                    alt=""
                    width={130}
                    height={130}
                  />
                </div>
                <div className="lbody">
                  <h3>{e.name}</h3>
                  <span className="lbrand">{e.brand}</span>
                  <p className={`lreason ${e.tone}`}>{e.reason}</p>
                </div>
                <div className="lscore">
                  <b className={e.band}>{e.score}</b>
                  <span>{e.label}</span>
                  <i>
                    <em
                      className={e.band}
                      style={{ width: `${e.score}%` }}
                    />
                  </i>
                </div>
              </li>
            ))}
          </ol>

          <p className="ledger-note">
            These are Optimally&rsquo;s own demo products, which is why we can show
            you their packaging. Scan a real one and the engine does exactly the
            same thing.
          </p>
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
                    A daily log of what you ate, weighted by how much of each
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
