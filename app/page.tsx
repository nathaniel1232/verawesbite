import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader, SiteFooter, Phone, Check, AppStoreButton } from '@/components/site'
import { asset } from '@/lib/asset'
import { PRODUCTS, BAND_LABEL, leadReason } from '@/lib/products'


const SHOTS = [
  {
    src: '/shots/scan.jpg',
    alt: 'Optimally home screen: scan button, product search, barcode entry, and recent scans each showing their score',
    title: 'Scan or search',
  },
  {
    src: '/shots/verdict.jpg',
    alt: 'Optimally verdict screen scoring Sour Cream Potato Chips 19 out of 100, very bad, flagged ultra-processed and contains seed oils',
    title: 'Read the verdict',
  },
  {
    src: '/shots/research.jpg',
    alt: 'Optimally research screen listing seed oils, ultra-processing, added sugar and refined grain',
    title: 'Check our work',
  },
  {
    src: '/shots/progress.jpg',
    alt: 'Optimally Today screen: a weighted score of 36 for four things logged, calories and macros, and what share of the day was industrially formulated',
    title: 'See the pattern',
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
            <h2>Ten things you can buy this afternoon.</h2>
            <p>Straight out of the app, unedited. Tap any one of them.</p>
          </div>

          <ol className="ledger" id="scans">
            {PRODUCTS.map((e) => (
              <li key={e.code}>
                {/* THE WHOLE ROW IS THE LINK. A "read more" at the end of a
                    row is a smaller target and one more word on a page that
                    just had a lot of words taken out of it. */}
                <Link className="lrow" href={`/scan/${e.code}/`}>
                  <div className="lpack">
                    <Image
                      src={asset(`/real/${e.img}`)}
                      alt=""
                      width={130}
                      height={130}
                    />
                  </div>
                  <div className="lbody">
                    <h3>{e.name}</h3>
                    <span className="lbrand">{e.brand}</span>
                    <p className={`lreason ${leadReason(e).tone}`}>
                      {leadReason(e).text}
                    </p>
                  </div>
                  <div className="lscore">
                    <b className={e.band}>{e.score}</b>
                    <span>{BAND_LABEL[e.band]}</span>
                    <i>
                      <em className={e.band} style={{ width: `${e.score}%` }} />
                    </i>
                  </div>
                </Link>
              </li>
            ))}
          </ol>

          <p className="ledger-note">
            Product data and photographs from Open Food Facts, used under the
            ODbL and CC BY-SA 3.0.
          </p>
        </section>

        {/* ---------------- how the number is made ---------------- */}
        <section className="band wrap" id="method">
          <div className="section-head">
            <span className="eyebrow">The method</span>
            <h2>How the number is made.</h2>
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
                and what the nutrition panel says.
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
          </div>
          <div className="shots">
            {SHOTS.map((s) => (
              <div className="shot" key={s.src}>
                <Phone src={s.src} alt={s.alt} />
                <h3>{s.title}</h3>
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
