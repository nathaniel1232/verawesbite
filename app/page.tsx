import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader, SiteFooter, Phone, Check, AppStoreButton } from '@/components/site'
import { asset } from '@/lib/asset'
import { FACTS, EVIDENCE_LABEL, EVIDENCE_CAVEAT } from '@/lib/facts'


/* A caption each. These were titles alone, two words under a phone, and
   `.shot p` has been styled in globals.css since the beginning without a
   single page rendering one. Each line adds something the title does not
   already say, per the house rule about subtitles that restate their heading;
   two of them are the app's own sentences, read off the screenshot above. */
const SHOTS = [
  {
    src: '/shots/scan.jpg',
    alt: 'Optimally home screen: scan button, product search, barcode entry, and recent scans each showing their score',
    title: 'Scan or search',
    desc: 'Point the camera at a barcode, or type a name in.',
  },
  {
    src: '/shots/verdict.jpg',
    alt: 'Optimally verdict screen scoring Sour Cream Potato Chips 19 out of 100, very bad, flagged ultra-processed and contains seed oils',
    title: 'Read the verdict',
    desc: 'The number, the band, and every line that moved it.',
  },
  {
    src: '/shots/research.jpg',
    alt: 'Optimally research screen listing seed oils, ultra-processing, added sugar and refined grain',
    title: 'Check our work',
    desc: 'Every flag traces to a published paper.',
  },
  {
    src: '/shots/progress.jpg',
    alt: 'Optimally Today screen: a weighted score of 36 for four things logged, calories and macros, and what share of the day was industrially formulated',
    title: 'See the pattern',
    desc: 'What you ate today, weighted by how much of each.',
  },
]

/* The four bands, which are four equal quarters of the 0 to 100 range. The
   figures are ScoreBand's own thresholds and BAND_LABEL's own names. */
const BANDS = [
  { key: 'bad', name: 'Very bad', range: 'Under 25' },
  { key: 'poor', name: 'Poor', range: '25 to 49' },
  { key: 'good', name: 'Good', range: '50 to 74' },
  { key: 'excellent', name: 'Very optimal', range: '75 and over' },
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
              {/* The scale itself, before any number on the page uses it. */}
              <figure className="scale">
                <div className="scale-bar" aria-hidden="true">
                  {BANDS.map((b) => (
                    <span key={b.key} className={b.key} />
                  ))}
                </div>
                <ol className="scale-legend">
                  {BANDS.map((b) => (
                    <li key={b.key}>
                      <b className={b.key}>{b.name}</b>
                      <span>{b.range}</span>
                    </li>
                  ))}
                </ol>
              </figure>

              <div className="cta-row" id="get">
                <AppStoreButton />
              </div>
              <p className="purchase-note">
                Paid subscription required. Eligible Apple IDs see any free
                trial and the renewal price before purchase.
              </p>
            </div>

            <Phone
              src="/shots/verdict.jpg"
              alt="Optimally scoring a bag of potato chips 19 out of 100, flagged ultra-processed and contains seed oils"
              tilt
              priority
            />
          </div>
        </section>



        {/* ---------------- what the food supply actually looks like ----------
            THIS REPLACED THE LEDGER OF TEN SCANNED PRODUCTS, on instruction.

            What is here instead has to clear a higher bar than the thing it
            replaced, because "scary facts about processed food" is the exact
            shape of the content that is usually invented. Every figure is a
            named paper with a DOI that was resolved and checked before it was
            written down, every observational study says so on its own card,
            and the one genuinely quotable statistic with a shaky provenance
            was left out. See the header of lib/facts.ts. */}
        <section className="band wrap" id="why">
          <div className="section-head" data-r>
            <span className="eyebrow">Why this matters</span>
            <h2>The evidence on ultra-processed food.</h2>
            <p>
              Six findings, each one a paper you can open. Where a study is
              observational the card says so, because the difference between
              association and cause is the whole argument.
            </p>
          </div>

          <ol className="facts" data-r>
            {FACTS.map((f, i) => (
              <li key={f.doi} className={i === 0 ? 'fact lead' : 'fact'}>
                <b className="fig">{f.figure}</b>
                <h3>{f.headline}</h3>
                <p>{f.detail}</p>
                <div className="fmeta">
                  <span className="etag">{EVIDENCE_LABEL[f.evidence]}</span>
                  {EVIDENCE_CAVEAT[f.evidence] ? (
                    <span className="ecav">{EVIDENCE_CAVEAT[f.evidence]}</span>
                  ) : null}
                </div>
                <a className="fcite" href={f.doi} rel="nofollow">
                  {f.cite}
                </a>
              </li>
            ))}
          </ol>

          <p className="ledger-note">
            Ultra-processed here means NOVA group 4, the classification those
            papers use. Optimally applies it as a hard cap rather than a
            deduction: a NOVA-4 product cannot rate as Good however flattering
            its nutrition panel is.{' '}
            <Link href="/guides/">Read the guides</Link> for what that means
            at the shelf.
          </p>
        </section>

        {/* ---------------- how the number is made ---------------- */}
        <section className="band wrap" id="method">
          <div className="section-head" data-r>
            <span className="eyebrow">The method</span>
            <h2>How the number is made.</h2>
          </div>

          <ol className="steps" data-r>
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
                and what the nutrition panel says.
              </p>
            </li>
            <li>
              <h3>Land on a number</h3>
              <p>
                Out of 100, into one of the four fixed bands at the top of this
                page. The thresholds never move: no curve, no comparison to
                other users, and no adjusting for what is normal in the
                category.
              </p>
            </li>
          </ol>
        </section>

        {/* ---------------- screenshots ---------------- */}
        <section className="band wrap">
          <div className="section-head" data-r>
            <span className="eyebrow">Inside the app</span>
            <h2>The four screens you will actually use.</h2>
          </div>
          <div className="shots" data-r>
            {SHOTS.map((s) => (
              <div className="shot" key={s.src}>
                <Phone src={s.src} alt={s.alt} />
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ---------------- the difference ---------------- */}
        <section className="band alt">
          <div className="wrap">
            <div className="section-head">
              <span className="eyebrow">What it&rsquo;s looking for</span>
              {/* THIS SAID "Two protein bars, eighty-two points apart." AND
                  NOTHING UNDER IT SHOWED A SCORE. The eighty-two was the drop
                  across a ledger of six fictional demo packs, 88 down to 6,
                  that used to run above it; when that was replaced by the ten
                  real audited products the heading stayed behind, citing an
                  arithmetic nobody could check and two cards that render no
                  numbers at all. The spread is demonstrated properly by the
                  ledger now. This section's job is the smaller, true point
                  the two photographs actually make. */}
              <h2>Optimally reads the back of the pack.</h2>
              <p>
                Two bars off the same shelf, and their ingredient lists have
                almost nothing in common.
              </p>
            </div>
            <div className="compare" data-r>
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
                  {/* These two photographs are stock and always were; the
                      label saying so was dropped at some point. They sit right
                      under ten real products with real audited scores, and
                      without this a reader takes them for scans too. */}
                  <div className="brandline">Illustration</div>
                  <div className="cmp-tags">
                    <span className="tagpill ok">WHOLE-FOOD BASE</span>
                    <span className="tagpill ok">NO SEED OILS</span>
                  </div>
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
                the exact rule it drives, read out of the scoring engine
                itself.
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
            <div className="split-photo" data-r>
              <Image
                src={asset('/photos/wholefoods.jpg')}
                alt="Eggs, butter, milk, honey, sardines and blueberries on a sunlit counter"
                width={1000}
                height={1250}
              />
            </div>
          </div>
        </section>

        {/* ---------------- the ask ----------------
            The page used to end on a paragraph about research and run straight
            into the footer. A reader who got all the way down had read every
            argument the site makes and then had nothing to click: the only
            download button below the fold was the one on a product page they
            may never have opened. */}
        <section className="band wrap">
          <div className="trust cta-card" data-r>
            <h2>Scan the next thing you pick up.</h2>
            <p>
              The score, the ingredient ratings and the studies behind each
              rule, on whatever is in your hand in the shop.
            </p>
            <div className="row">
              <AppStoreButton />
            </div>
            <p className="finelink">
              Requires iOS. Paid subscription. Eligible Apple IDs see any free
              trial and the renewal price before purchase.
            </p>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  )
}
