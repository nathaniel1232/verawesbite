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
    body: 'Everything you logged today, weighted by how much of each you ate, with the share that was industrially formulated and which items brought seed oils.',
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
                Scan a barcode and get a score out of 100, built from the
                ingredient list. The same ingredient gets the same rating
                every time, and every rule links the study behind it.
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



        {/* ---------------- what it says about real products ---------------- */}
        <section className="band wrap">
          <div className="section-head">
            <span className="eyebrow">Real scans</span>
            <h2>Six things from one shelf.</h2>
            <p>
              These scores and these sentences came out of the app itself,
              unedited.
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
            The packs are Optimally&rsquo;s own demo products, which is why we can
            show you their packaging. A real one goes through the same rules.
          </p>
        </section>

        {/* ---------------- how the number is made ---------------- */}
        <section className="band wrap" id="method">
          <div className="section-head">
            <span className="eyebrow">The method</span>
            <h2>How the number is made.</h2>
            <p>Four steps, and the same four every time.</p>
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
                frozen, so the same ingredient scores the same for you, for
                everyone else, and next year.
              </p>
            </li>
            <li>
              <h3>Apply the rules</h3>
              <p>
                Industrial seed oils, degree of processing, flagged additives,
                and what the nutrition panel says. Every rule links the study
                behind it, and counts how many of your own scans it touched.
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

        {/* ---------------- screenshots ---------------- */}
        <section className="band wrap">
          <div className="section-head">
            <span className="eyebrow">Inside the app</span>
            <h2>The four screens you will actually use.</h2>
            <p>Screenshots from the current version.</p>
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
              <h2>Two protein bars, eighty-two points apart.</h2>
              <p>
                Optimally ignores the front of the pack and reads the
                ingredient list.
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
              <h2>Every rule has a study behind it.</h2>
              <p>
                Each article states the claim, links the evidence, and prints
                the exact rule it drives, read straight out of the scoring
                engine. The explanation cannot drift from what scored your
                food.
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
                    Animal-only findings are labelled as such, rather than
                    quoted as if they were human trials.
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


      </main>

      <SiteFooter />
    </>
  )
}
