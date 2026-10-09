import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { SiteHeader, SiteFooter, AppStoreButton } from '@/components/site'
import { AppTour } from '@/components/app-tour'
import { asset } from '@/lib/asset'
import { CANONICAL_ORIGIN } from '@/lib/site'
import './home.css'

export const metadata: Metadata = {
  title: { absolute: 'Optimally · Real food. A clearer way to eat.' },
  description:
    'Meet Optimally, the food guide built to make real, nourishing food easier to choose. Explore ingredients, whole-food meals, micronutrients, and the research behind our approach.',
  alternates: { canonical: `${CANONICAL_ORIGIN}/` },
  openGraph: {
    title: 'Optimally · Real food. A clearer way to eat.',
    description:
      'Understand your food. Find your everyday staples. Build a way of eating that makes sense.',
  },
}

const foundations = [
  {
    n: '01',
    title: 'Start with real food.',
    text: 'Make familiar, minimally processed foods the foundation. Eggs, fish, meat, fruit, tolerated dairy, and roots are a good place to start.',
  },
  {
    n: '02',
    title: 'Look beyond macros.',
    text: 'Protein and energy matter. So do the vitamins and minerals your food contributes. Optimally helps bring them into the picture.',
  },
  {
    n: '03',
    title: 'Make room for you.',
    text: 'Choose foods you enjoy and tolerate. Your allergies, preferences, appetite, and daily life still matter.',
  },
]

const questions = [
  {
    q: 'What is Optimally?',
    a: 'Optimally is an iPhone food guide. Scan products, understand ingredients, explore whole-food meal ideas, and keep a food log. It brings food quality and nutrition into one place so everyday choices are easier to understand.',
  },
  {
    q: 'Is this a strict Primal or Ray Peat diet?',
    a: 'Optimally draws inspiration from Aajonus Vonderplanitz’s Primal Diet and Ray Peat’s separate writings, especially attention to food quality, animal foods, fruit, and dairy when tolerated. It combines those interests with evidence from other dietary patterns and safe food preparation. There is one Optimally approach, with room for your personal exclusions.',
  },
  {
    q: 'Do I need to count every calorie?',
    a: 'You can start by understanding what is in your food and finding a few meals you enjoy. The food log and nutrition tracking are there when you want more detail; the approach starts with food quality.',
  },
  {
    q: 'What does a food score actually mean?',
    a: 'A score summarises how a food fits Optimally’s criteria using the available ingredient and nutrition information. Being minimally processed does not automatically earn the highest score: fruit can be a useful snack while contributing less protein and a narrower range of vitamins and minerals than our most nourishing staples. The score is a guide, not a diagnosis or a complete judgement of your diet. Missing information and portion size matter.',
  },
  {
    q: 'How does it handle allergies and intolerances?',
    a: 'Your personal exclusions help shape suggestions and alerts. A database or photo can be incomplete, so always read the physical package and follow your own allergy guidance. A high food score never makes an allergen safe for you.',
  },
]

function Arrow() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
      className="arrow-icon"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <main id="main" className="home">
        <section
          className="intro-section home-wrap"
          aria-labelledby="intro-heading"
        >
          <div className="intro-copy">
            <span className="home-kicker">
              <span className="live-dot" /> Your everyday food guide
            </span>
            <h1 id="intro-heading">
              Real food.
              <br />A clearer way
              <br />
              to <span className="serif-word">eat.</span>
            </h1>
            <p className="intro-lede">
              Understand what&rsquo;s in your food.
              <br className="desktop-break" /> Discover what nourishes you.
              <br className="desktop-break" /> Make better choices, one meal at
              a time.
            </p>
            <div className="intro-actions">
              <AppStoreButton />
              <a className="home-text-link" href="#app">
                Meet the app <Arrow />
              </a>
            </div>
            <p className="intro-note">Thoughtfully built for iPhone.</p>
          </div>
          <div className="intro-visual">
            <div className="food-photo">
              <Image
                src={asset('/photos/wholefoods.jpg')}
                alt="Eggs, pasteurized milk, blueberries and sardines on a sunlit kitchen counter"
                width={562}
                height={1000}
                priority
                sizes="(max-width: 760px) 90vw, 44vw"
              />
            </div>
            <div
              className="hero-device"
              aria-label="A food result in the Optimally app"
            >
              <Image
                src={asset('/shots/apple-calibrated.jpg')}
                alt="Optimally showing an apple rated 86 with its food quality explanation"
                width={600}
                height={1304}
                priority
                sizes="(max-width: 760px) 45vw, 260px"
              />
            </div>
            <div className="visual-note">
              <span className="note-leaf" aria-hidden="true">
                ↗
              </span>
              <div>
                <strong>Food, understood.</strong>
                <span>A little clarity goes a long way.</span>
              </div>
            </div>
          </div>
        </section>
        <div className="belief-strip">
          <div className="home-wrap">
            <span>Whole foods first</span>
            <span className="strip-star" aria-hidden="true">
              ✳
            </span>
            <span>Micronutrients matter</span>
            <span className="strip-star" aria-hidden="true">
              ✳
            </span>
            <span>Evidence you can explore</span>
          </div>
        </div>
        <section
          id="app"
          className="home-section home-wrap"
          aria-labelledby="app-heading"
        >
          <div className="section-intro" data-r>
            <span className="home-kicker">A little help, every day</span>
            <h2 id="app-heading">
              From &ldquo;is this good?&rdquo;
              <br />
              to <span className="serif-word">understanding why.</span>
            </h2>
            <p>
              At the shop, in the kitchen, or planning your next meal. Optimally
              turns food information into something you can actually use.
            </p>
          </div>
          <AppTour />
        </section>
        <section
          id="approach"
          className="approach-section"
          aria-labelledby="approach-heading"
        >
          <div className="home-wrap approach-grid">
            <div className="approach-heading" data-r>
              <span className="home-kicker">The Optimally approach</span>
              <h2 id="approach-heading">
                Nourishment
                <br />
                comes <span className="serif-word">first.</span>
              </h2>
              <p>
                A practical way to eat, inspired by Aajonus
                Vonderplanitz&rsquo;s focus on animal foods and Ray Peat&rsquo;s
                interest in nutrition, and informed by research across dietary
                patterns.
              </p>
              <a className="home-text-link" href="#evidence">
                Explore the thinking <Arrow />
              </a>
            </div>
            <ol className="foundation-list" data-r>
              {foundations.map((f) => (
                <li key={f.n}>
                  <span>{f.n}</span>
                  <div>
                    <h3>{f.title}</h3>
                    <p>{f.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="home-wrap food-pair" data-r>
            <figure>
              <Image
                src={asset('/photos/yogurt-berries.jpg')}
                alt="A bowl of plain yogurt with berries"
                width={800}
                height={800}
                sizes="(max-width: 600px) 90vw, 45vw"
              />
              <figcaption>
                <strong>Simple everyday staples</strong>
                <span>Fruit, eggs, fish, and dairy you tolerate.</span>
              </figcaption>
            </figure>
            <figure>
              <Image
                src={asset('/photos/salmon-potatoes.jpg')}
                alt="Cooked salmon with potatoes and carrots"
                width={900}
                height={600}
                sizes="(max-width: 600px) 90vw, 45vw"
              />
              <figcaption>
                <strong>Meals you want to come back to</strong>
                <span>Protein, satisfying roots, and variety.</span>
              </figcaption>
            </figure>
          </div>
        </section>
        <section
          id="story"
          className="home-section home-wrap story-grid"
          aria-labelledby="story-heading"
        >
          <div className="story-label">
            <Image src={asset('/veramark.png')} alt="" width={60} height={60} />
            <span className="home-kicker">Why I built Optimally</span>
            <span className="story-line" />
          </div>
          <div className="story-copy" data-r>
            <h2 id="story-heading">
              Eating well should
              <br />
              be easier to <span className="serif-word">understand.</span>
            </h2>
            <blockquote>
              &ldquo;I want to help people eat real, healthy food. Too often, we
              don&rsquo;t realise what&rsquo;s in the modern foods we eat every
              day.&rdquo;
            </blockquote>
            <p>
              That is the reason behind Optimally. Food packaging makes
              promises. Diet advice pulls in different directions. A simple
              question like &ldquo;what should I eat?&rdquo; can become
              unnecessarily complicated.
            </p>
            <p>
              I built Optimally to make the ingredients clearer, bring
              nourishing foods back into focus, and give people a useful place
              to start.
            </p>
            <div className="founder-signoff">
              <span aria-hidden="true">O</span>
              <div>
                <strong>From the founder</strong>
                <span>The idea behind Optimally</span>
              </div>
            </div>
          </div>
        </section>
        <section
          id="evidence"
          className="evidence-section"
          aria-labelledby="evidence-heading"
        >
          <div className="home-wrap">
            <div className="evidence-intro" data-r>
              <div>
                <span className="home-kicker">Curious by nature</span>
                <h2 id="evidence-heading">
                  Inspired by ideas.
                  <br />
                  <span className="serif-word">Informed by evidence.</span>
                </h2>
              </div>
              <p>
                Different diets ask useful questions. We take those questions
                seriously, then look at what the research can actually tell us.
              </p>
            </div>
            <div className="evidence-grid" data-r>
              <article>
                <span className="evidence-type perspective">
                  Author perspective
                </span>
                <h3>Primal Diet</h3>
                <p>
                  Aajonus Vonderplanitz&rsquo;s approach centres on raw animal
                  foods. It inspires our attention to animal foods and food
                  quality; Optimally uses safe preparation rather than adopting
                  his raw-food protocol.
                </p>
                <a href="https://aajonus.net/interview-on-talksportnet">
                  Aajonus in his own words <Arrow />
                </a>
              </article>
              <article>
                <span className="evidence-type perspective">
                  Author perspective
                </span>
                <h3>Ray Peat</h3>
                <p>
                  His interest in fruit, dairy, energy, and nutrient adequacy
                  helps shape our food ideas. His essays are inspiration; they
                  do not establish that a Peat-style diet improves health.
                </p>
                <a href="https://raypeat.com/articles/articles/milk.shtml">
                  Read Peat&rsquo;s milk essay <Arrow />
                </a>
              </article>
              <article>
                <span className="evidence-type">Human trial</span>
                <h3>Mediterranean</h3>
                <p>
                  The reanalysed PREDIMED trial found fewer major cardiovascular
                  events in older, high-risk adults assigned a Mediterranean
                  pattern with olive oil or nuts.
                </p>
                <a href="https://pubmed.ncbi.nlm.nih.gov/29897866/">
                  PREDIMED · NEJM, 2018 <Arrow />
                </a>
              </article>
              <article>
                <span className="evidence-type">Human trials</span>
                <h3>DASH</h3>
                <p>
                  DASH trials support a varied pattern rich in fruit,
                  vegetables, and low-fat dairy for lowering blood pressure.
                  That reinforces looking at the whole pattern and its
                  nutrients.
                </p>
                <a href="https://www.nhlbi.nih.gov/health/dash/health-benefits">
                  The research · NHLBI <Arrow />
                </a>
              </article>
            </div>
            <details className="evidence-detail">
              <summary>
                How we decide what belongs in the approach{' '}
                <span aria-hidden="true">+</span>
              </summary>
              <div>
                <p>
                  Aajonus Vonderplanitz and Ray Peat offered distinct ideas.
                  Their writing helps explain our inspirations, but does not
                  prove this combined approach improves health. Our everyday
                  foundation is properly cooked meat and eggs, and pasteurised
                  dairy: raw animal foods can carry harmful germs.{' '}
                  <a href="https://www.cdc.gov/food-safety/foods/safer-food-choices.html">
                    Read CDC&rsquo;s food preparation guidance.
                  </a>
                </p>
                <p>
                  We favour practical ideas that fit the human evidence. In
                  Hall&rsquo;s controlled 2019 trial, 20 adults ate more and
                  gained weight on the ultra-processed menu than on the
                  minimally processed menu over two weeks each. It supports the
                  food-first direction; it does not show that all packaged food
                  is harmful.{' '}
                  <a href="https://www.nih.gov/news-events/news-releases/nih-study-finds-heavily-processed-foods-cause-overeating-weight-gain">
                    Read the NIH study summary.
                  </a>
                </p>
                <p>
                  We favour whole fruit over making juice or added sugar a daily
                  foundation. Unsaturated fats remain part of a varied diet.
                  Peat&rsquo;s views on sugar and polyunsaturated fats are not a
                  reason to override human evidence.{' '}
                  <a href="https://www.who.int/news-room/fact-sheets/detail/healthy-diet">
                    Read WHO&rsquo;s healthy diet guidance.
                  </a>
                </p>
                <p>
                  These studies tested their own dietary patterns, not
                  Optimally. Our approach is a product philosophy informed by
                  research, and has not been clinically shown to be the best
                  diet. Food scores use the app&rsquo;s own criteria; source
                  links let you examine the reasoning.
                </p>
              </div>
            </details>
            <p className="evidence-footnote">
              The full diet matters more than a single food. Your needs and
              tolerances matter too.
            </p>
          </div>
        </section>
        <section
          id="questions"
          className="home-section home-wrap questions-grid"
          aria-labelledby="questions-heading"
        >
          <div>
            <span className="home-kicker">A few things you might wonder</span>
            <h2 id="questions-heading">
              Let&rsquo;s make it
              <br />
              <span className="serif-word">clear.</span>
            </h2>
            <Link className="home-text-link" href="/support/">
              More help <Arrow />
            </Link>
          </div>
          <div className="questions-list">
            {questions.map((q) => (
              <details key={q.q}>
                <summary>
                  {q.q}
                  <span aria-hidden="true">+</span>
                </summary>
                <p>{q.a}</p>
              </details>
            ))}
          </div>
        </section>
        <section
          className="closing-section home-wrap"
          aria-labelledby="closing-heading"
        >
          <div className="closing-card" data-r>
            <Image src={asset('/veramark.png')} alt="" width={58} height={58} />
            <span className="home-kicker">One meal at a time</span>
            <h2 id="closing-heading">
              A little more clarity.
              <br />A little more{' '}
              <span className="serif-word">nourishment.</span>
            </h2>
            <p>Meet your everyday companion for understanding food.</p>
            <AppStoreButton />
            <span className="closing-note">Optimally for iPhone</span>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
