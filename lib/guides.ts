/**
 * THE GUIDES, AND THE RESEARCH THAT PICKED THEM.
 *
 * These are not topics somebody thought sounded good. On 14 September 2026,
 * 976 one- and two-star reviews were pulled from the public iTunes review
 * feeds of fifteen competing food-scanner apps (Yuka, Bobby Approved,
 * Fooducate, Olive, Seed Oil Scout, Fig, Ivy, Exposr, Trash Panda, OneLabel,
 * EWG, OnFork, Nutron, Clean Food Scanner, Processed) across four English
 * storefronts, and clustered. What people actually complain about:
 *
 *     37%  paywall or forced subscription
 *      7%  crashes and bugs
 *      6%  barcode not found / database too small
 *      6%  forced account, login or email
 *      4%  advertising
 *      3%  bias, sponsorship, fearmongering
 *      3%  inconsistent or nonsensical ratings
 *      2%  "it's just AI" / made-up answers
 *
 * A complaint that recurs is a query somebody types. The pages below are
 * written against those clusters and nothing else.
 *
 * THE ONE WE CANNOT SELL AGAINST, AND WHY IT IS NOT IN HERE.
 * The largest cluster by a factor of five is the paywall, and Optimally has
 * one. The free tier in the app project is not in the shipped build (see
 * OFFER_SHORT in lib/app.ts). Writing "the alternative without the paywall"
 * today would be false, would read as exactly the bait those 363 reviewers
 * are angry about, and would earn the same reviews. The clusters this site
 * can honestly answer are the ratings ones: inconsistency, bias and "it's
 * just AI" are the three things a deterministic, cited rule table actually
 * fixes, and they are what these pages lead on.
 *
 * FORMAT RULES, from the brief:
 *   · `answer` is the first thing on the page and is under 100 words. Nobody
 *     scrolls past a 600-word introduction to find the answer, and a direct
 *     answer near the top is also what gets a page quoted by an AI assistant,
 *     which is a second source of traffic.
 *   · The download comes AFTER the answer, never before it.
 *   · Every claim about a competitor comes from that competitor's own App
 *     Store listing, or from a figure anyone can look up. No invented feature
 *     lists, and no quoting of the reviews themselves: those were read to find
 *     the language people use, not to be republished on a rival's website.
 */

export type GuideKind = 'problem' | 'alternative' | 'comparison' | 'usecase'

export const KIND_LABEL: Record<GuideKind, string> = {
  problem: 'How to',
  alternative: 'Alternatives',
  comparison: 'Comparison',
  usecase: 'Who it is for',
}

export interface GuideSection {
  h: string
  /** Paragraphs. A leading "- " makes the line a bullet. */
  p: string[]
}

export interface Guide {
  slug: string
  kind: GuideKind
  /** The <title>, written as the thing people type rather than as a headline. */
  title: string
  heading: string
  description: string
  /** The reader's question, in their words. Sits under the h1. */
  question: string
  /** THE ANSWER. Under 100 words, first block on the page. */
  answer: string
  sections: GuideSection[]
  /** One line on why Optimally is relevant to THIS page. Not a generic pitch. */
  cta: string
  faq?: { q: string; a: string }[]
  /** Barcodes, linked into the /scan/ pages as worked examples. */
  scans?: string[]
  related?: string[]
  updated: string
}

const UPDATED = '14 September 2026'

export const GUIDES: Guide[] = [
  /* ----------------------------------------------------------------- problem */
  {
    slug: 'how-to-spot-seed-oils-on-a-label',
    kind: 'problem',
    title: 'How to spot seed oils on a label',
    heading: 'How to spot seed oils on a label',
    description:
      'Every name industrial seed oils appear under on an ingredient list, what the group name "vegetable oil" does and does not hide, and what the evidence actually supports.',
    question: 'What are seed oils called on ingredient lists?',
    answer:
      'Look for sunflower, safflower, soybean, corn, canola, rapeseed, cottonseed, grapeseed and rice bran oil. Then read the brackets after "vegetable oil" or "vegetable fat": in the US and the EU the individual oils have to be named there. What those rules still allow is flexibility. A US label can list oils a product might contain using "and/or", and EU and UK labels can add "in varying proportions", so the mix in your pack can change between batches. An oil in the first three ingredients is a major part of the product.',
    sections: [
      {
        h: 'The full list of names',
        p: [
          'Industrial seed oils are extracted at high temperature, usually with a solvent, and refined, bleached and deodorised before they reach a product. On an ingredient list they appear as any of these:',
          '- Sunflower oil, high oleic sunflower oil',
          '- Safflower oil',
          '- Soybean oil, soya oil',
          '- Corn oil, maize oil',
          '- Canola oil, rapeseed oil, low erucic acid rapeseed oil',
          '- Cottonseed oil',
          '- Grapeseed oil',
          '- Rice bran oil',
          '- The group names: vegetable oil, vegetable oils, vegetable fat. The specific oils should follow in brackets.',
          'Hydrogenated versions of all of the above count too.',
        ],
      },
      {
        h: 'What “vegetable oil” does and does not hide',
        p: [
          'Both US and EU rules let refined oils be declared together under a group name, but the individual oils still have to be named straight after it. So "vegetable oils (rapeseed, sunflower, palm)" is a normal compliant label, and "vegetable oil" with nothing after it is not. In the EU a group of oils takes its place in the ingredient list by their combined weight.',
          'What the rules do allow is flexibility. In the US, a manufacturer that cannot keep a blend constant may list oils the product might contain, marked "and/or" or "contains one or more of the following", for oils that are not the main ingredient. EU and UK labels can add "in varying proportions". Either way the label tells you which oils are possible, not which one is in the pack in your hand, or how much of each.',
          'If you do see "vegetable oil" with nothing after it, either the label is incomplete or the database you are reading dropped the brackets when the product was entered. Either way, turn the pack over and read it.',
        ],
      },
      {
        h: 'Where they turn up when you are not expecting them',
        p: [
          'Nobody is surprised to find seed oil in crisps. The places people miss are bread and wraps, tinned fish, hummus and dips, pesto and jarred sauces, most mayonnaise and salad dressing, protein and cereal bars, roasted nuts, and a lot of takeaway fried food.',
          'The pattern is that the oil is there as a cheap fat with a neutral taste and a long shelf life, so it shows up wherever a product needs one of those three things.',
        ],
      },
      {
        h: 'What the evidence actually says, including the part that cuts the other way',
        p: [
          'This is worth being straight about, because the seed oil argument online usually is not. The strongest single piece of evidence is a recovered-data analysis of the Minnesota Coronary Experiment, published in the BMJ in 2016. Replacing saturated fat with linoleic acid did lower serum cholesterol, and it did not reduce death from coronary heart disease or from any cause.',
          'That is a finding about an overstated benefit. It is not a demonstration that seed oils are toxic, and anyone telling you it is has not read it. The honest position is that the case for replacing other fats with these oils is weaker than it was presented, and that the products they are most common in are usually ultra-processed for other reasons as well.',
          'Optimally scores them accordingly. The seed-oil penalty is real and it is deliberately lighter than the ones applied to ultra-processing and to sugar, because the evidence behind it is weaker. Rating them as the worst thing on a label would be easier to market and harder to defend.',
        ],
      },
    ],
    cta: 'Optimally flags each of those oils by name, including when they sit inside a group name, and rates every other ingredient on the label as well.',
    faq: [
      {
        q: 'Is olive oil a seed oil?',
        a: 'No. Olive and avocado oil are pressed from the fruit rather than the seed, and extra virgin olive oil is not refined at all. Optimally does not flag olive oil as a seed oil.',
      },
      {
        q: 'Does "high oleic" make a difference?',
        a: 'High oleic sunflower and safflower oils are bred to contain more oleic acid and less linoleic acid, so they are more stable at heat. They are still refined seed oils and still declared as such.',
      },
      {
        q: 'Is "vegetable oil" always a seed oil?',
        a: 'Not necessarily. Palm and coconut oil count as vegetable oils too. The specific oils should be named in brackets after the group name, so read those. What the label may not tell you is which of the listed oils is in your pack, or how much of each.',
      },
    ],
    scans: ['8076809513692', '7622210449283'],
    related: ['how-to-tell-if-a-food-is-ultra-processed', 'seed-oil-scanner-app'],
    updated: UPDATED,
  },

  {
    slug: 'how-to-tell-if-a-food-is-ultra-processed',
    kind: 'problem',
    title: 'How to tell if a food is ultra-processed',
    heading: 'How to tell if a food is ultra-processed',
    description:
      'The one-line NOVA test, the marker ingredients that decide it, and why the number of ingredients matters less than the type.',
    question: 'How do I know if something is ultra-processed?',
    answer:
      'Read the ingredient list and look for anything you could not buy and cook with at home. Protein isolates, modified starch, maltodextrin, invert or glucose-fructose syrup, hydrogenated or interesterified oils, emulsifiers, thickeners, "natural flavour", added colours, non-sugar sweeteners, anti-caking and firming agents. One of those is enough: under the NOVA classification the food is group 4, ultra-processed. The length of the list is a weaker signal than what is on it. A five-ingredient bar with an emulsifier is ultra-processed, and a twelve-ingredient soup may not be.',
    sections: [
      {
        h: 'The test in one sentence',
        p: [
          'NOVA, the classification behind every ultra-processed food study cited on this site, sorts food by what was done to it rather than by its nutrition. Group 1 is unprocessed or minimally processed. Group 2 is culinary ingredients such as oil, butter, sugar and salt. Group 3 is the two combined into products such as cheese, tinned vegetables and fresh bread. Group 4 is everything containing at least one substance that exists only as an industrial input.',
          'That last clause is the whole test. Not "is it processed", which describes bread and cheese and yoghurt, but "does it contain something no kitchen has".',
        ],
      },
      {
        h: 'The marker ingredients',
        p: [
          'These are the ones that move a product into group 4 on their own:',
          '- Protein isolates and hydrolysates, including whey, soy and pea protein isolate',
          '- Modified starch, maltodextrin, glucose syrup, glucose-fructose syrup, invert sugar',
          '- Hydrogenated, interesterified or fractionated oils',
          '- Emulsifiers: lecithins, mono- and diglycerides, polysorbates, carboxymethylcellulose',
          '- Thickeners and stabilisers: carrageenan, xanthan, guar and gellan gum',
          '- Flavourings: "natural flavour", "artificial flavour", flavour enhancers',
          '- Colours, whether synthetic or extracted',
          '- Non-sugar sweeteners: aspartame, sucralose, acesulfame K, steviol glycosides',
          '- Bulking, anti-caking, firming, glazing and humectant agents',
        ],
      },
      {
        h: 'What the classification is not',
        p: [
          'NOVA is not a health score and it is not a safety judgement about any single additive. A wholemeal loaf with an emulsifier in it is group 4. So is a sugar-free drink. The classification is describing an industrial process, and its usefulness comes from the fact that the process, rather than any one ingredient, is what the research tracks.',
          'It also has a real weakness worth knowing: it puts a supermarket sandwich and a can of cola in the same group. The category is broad, and treating everything in it as equivalent is not supported.',
        ],
      },
      {
        h: 'Why it is worth the trouble',
        p: [
          'Most nutrition findings are observational, which means the healthier group might simply be healthier people. Ultra-processing is the rare case with a proper randomised trial in humans.',
          'In 2019 a team at the US National Institutes of Health housed twenty adults and fed them ultra-processed and unprocessed diets for two weeks each, matched for the calories presented and for sugar, fat, sodium and fibre. Same numbers on the label. People ate about 500 kcal a day more on the ultra-processed diet and gained weight.',
          'That isolates the processing itself. It was not the sugar and it was not the fat, because those were matched. Something about the form of the food drove the overeating. It is the strongest single result in this field and it is the reason the classification is worth applying at the shelf.',
        ],
      },
    ],
    cta: 'Optimally applies NOVA group 4 as a hard cap rather than a deduction. An ultra-processed product cannot rate as Good however good its nutrition panel looks.',
    faq: [
      {
        q: 'Is all processed food ultra-processed?',
        a: 'No. Tinned tomatoes, plain yoghurt, cheese, dried pasta and frozen vegetables are processed and are not group 4. The distinction is industrial-only ingredients, not processing as such.',
      },
      {
        q: 'Does a long ingredient list mean ultra-processed?',
        a: 'Not by itself, though the two correlate. One marker ingredient decides it. Optimally applies an additional deduction past fifteen ingredients, separately from the cap.',
      },
    ],
    scans: ['5053827110679', '5000157024671'],
    related: ['how-to-spot-seed-oils-on-a-label', 'best-food-scanner-apps'],
    updated: UPDATED,
  },

  {
    slug: 'food-scanner-cannot-find-barcode',
    kind: 'problem',
    title: 'What to do when a food scanner cannot find your barcode',
    heading: 'When the scanner cannot find your barcode',
    description:
      'Why food scanner apps miss products, how regional barcodes play into it, and the three things that actually work when a scan comes back empty.',
    question: 'Why is my product not in the food scanner app?',
    answer:
      'Usually it means nobody has added that product to the database yet, not that the app is broken. Many scanners, Optimally included, read Open Food Facts, which is crowd-sourced, so coverage follows whoever has been contributing in your country. Three things work. Check you are not hitting a regional barcode difference, because the same product can carry different codes in different markets. Photograph the ingredient panel instead, if the app can read one. Add the product yourself, so it resolves next time for everybody.',
    sections: [
      {
        h: 'Why it happens',
        p: [
          'It is one of the most common complaints in the one- and two-star reviews of food scanner apps, and it is largely structural rather than a fault in any one of them. Open Food Facts, the database behind many scanners, is built by volunteers, and its coverage is strongest in France, where it started, and much thinner in smaller markets.',
          'The gaps tend to be in the same places: supermarket own-brand lines, anything launched in the last few months, regional and local products, and deli items with a store-printed code.',
        ],
      },
      {
        h: 'The regional barcode trap',
        p: [
          'A product sold in several countries can carry a different barcode in each, when it has been registered separately for each market. So the same jar in a British and a German supermarket can be two separate records, one of them well filled in and the other empty.',
          'If an app lets you pick a country, that setting changes which record it prefers, and switching it is worth trying before concluding the product is missing.',
        ],
      },
      {
        h: 'Photograph the panel instead',
        p: [
          'A barcode is a lookup key. The ingredient list on the back of the pack is the actual information, and an app that can read a photograph of it does not need the database entry at all.',
          'This is the reliable answer for own-brand and newly launched products, and it is the only answer for anything without a barcode. It also works for imported products where the local record does not exist.',
        ],
      },
      {
        h: 'Add it, so it exists next time',
        p: [
          'Open Food Facts is a non-profit, open-data project, and adding a product means photographing the front, the ingredients and the nutrition panel in their app or on their site.',
          'That entry is then available to every app that reads Open Food Facts. It is the only one of these three steps that fixes the problem for anyone other than you.',
        ],
      },
    ],
    cta: 'Optimally reads the panel on the pack when the barcode is missing or the record has no ingredient list, and falls back to reading it on your device when there is no connection.',
    faq: [
      {
        q: 'Do food scanner apps work offline?',
        a: 'A barcode lookup normally needs a connection, because the product record lives on a server, though some apps keep popular products cached for offline use. Reading a photographed ingredient panel can be done on the device, which is how Optimally still returns a result with no network.',
      },
      {
        q: 'Why do two apps give different results for the same barcode?',
        a: 'They may be reading different databases, or the same record at different times. They are also applying different rules to it, which is a separate question from coverage.',
      },
    ],
    related: ['best-food-scanner-apps', 'how-to-tell-if-a-food-is-ultra-processed'],
    updated: UPDATED,
  },

  /* ------------------------------------------------------------- alternative */
  {
    slug: 'yuka-alternatives',
    kind: 'alternative',
    title: 'Yuka alternatives worth trying',
    heading: 'Yuka alternatives',
    description:
      'Five apps people move to from Yuka, what each one actually rates, and which complaint about Yuka each of them does and does not fix.',
    question: 'What is a good alternative to Yuka?',
    answer:
      'It depends which part you want to replace. If the problem is the premium gate on search and offline use, Bobby Approved and Open Food Facts are free and ungated. If the problem is the rating method, Yuka puts 60% of its score on nutrition and Optimally reads the ingredient list first, with the study behind each of its main rules linked. If you want food logging as well, Fooducate does both. Yuka states 85 million users and 4 million food products, so test any alternative against what you actually buy before you commit to it.',
    sections: [
      {
        h: 'Start with which complaint you are actually trying to fix',
        p: [
          'People leave Yuka for three different reasons, and the right alternative is different for each.',
          '- The premium gate. Searching by name rather than scanning, and using the app without a connection, sit behind Yuka’s paid tier.',
          '- The method. Yuka’s own listing describes three criteria: nutritional quality, presence of additives, and whether the product is organic. If you think a nutrition-weighted score is the wrong lens, a different score is what you want, not a different app with the same one.',
          '- The scope. Yuka covers cosmetics as well as food, which some people want and some find dilutes it.',
        ],
      },
      {
        h: 'Bobby Approved',
        p: [
          'A blacklist rather than a score. The app checks a list of more than a hundred ingredients its creator considers harmful and tells you whether the product passes, highlighting the failing ingredients in red. Free, with 160,000 US ratings at 4.9.',
          'The strength is that it is unambiguous and quick. The weakness is that it is one person’s list, and that a pass or fail cannot express the difference between a product that scraped through and one that is genuinely good.',
        ],
      },
      {
        h: 'Open Food Facts',
        p: [
          'The non-profit open database that a number of scanners, Optimally included, are built on, with its own free app. No paid tier, no advertising, no account needed to look things up, and you can download the whole dataset.',
          'It gives you Nutri-Score and the NOVA processing group rather than an opinionated verdict, so it suits someone who wants the underlying data and is happy to interpret it themselves.',
        ],
      },
      {
        h: 'Fooducate',
        p: [
          'Running since 2010, and the one on this list that is really a food diary with a grading feature attached. If you want to log what you eat as well as check it, that combination is the reason to pick it. 77,000 US ratings at 4.6, free with a premium tier.',
        ],
      },
      {
        h: 'Optimally',
        p: [
          'Ours, so read this with that in mind. It reads the ingredient list first rather than the nutrition panel, applies a fixed rule table, and links the published study behind each of its main rules. The same ingredient gets the same rating every time, which is the specific thing an AI-generated verdict cannot promise.',
          'It is also the newest app here, it has no ratings to speak of yet, and unlike the others on this list it needs a subscription. If the reason you are leaving Yuka is its paywall, this is not the app that fixes that.',
        ],
      },
    ],
    cta: 'If the part you want fixed is the method rather than the price, Optimally publishes its rule table and the study behind each rule.',
    faq: [
      {
        q: 'Is Yuka free?',
        a: 'The app is free to download and scanning is free. Searching products by name and using it offline are part of its paid tier.',
      },
      {
        q: 'Which of these has the most products?',
        a: 'Yuka states 4 million food products and 2 million cosmetics. Fooducate describes its database as hundreds of thousands of products, and Bobby Approved gives no figure in its listing. Test any of them against what you actually buy.',
      },
    ],
    related: ['optimally-vs-yuka', 'best-food-scanner-apps'],
    updated: UPDATED,
  },

  {
    slug: 'optimally-vs-yuka',
    kind: 'alternative',
    title: 'Optimally vs Yuka',
    heading: 'Optimally vs Yuka',
    description:
      'A straight comparison of two food scanners that disagree about what a score should measure, including where Yuka is plainly ahead.',
    question: 'How is Optimally different from Yuka?',
    answer:
      'Yuka scores a product 60% on nutrition, using Nutri-Score, 30% on additives and 10% on whether it is organic. Optimally scores it on the ingredient list, caps anything ultra-processed, and links the study behind each of its main rules. The real difference is what the number measures: degree of processing is not one of Yuka’s criteria. Yuka is far bigger, with a stated 85 million users and 4 million food products, and it is free to scan with, which Optimally is not. Pick Optimally if processing matters most to you, and Yuka for coverage and price.',
    sections: [
      {
        h: 'What each score is actually measuring',
        p: [
          'Yuka’s own help pages give the weighting: 60% nutritional quality, calculated with Nutri-Score, 30% additives, and 10% a bonus for an official organic label. There is also a hard limit: if Yuka considers an additive high-risk, the product cannot score above 49. So the score follows energy, sugar, salt, saturated fat, fibre, protein and fruit and vegetable content closely, and a risky additive can override all of it.',
          'Optimally starts from the ingredient list. Each ingredient is matched against a fixed table and given a rating, then rules are applied for industrial seed oils, degree of processing and flagged additives, and the nutrition panel is used last rather than first.',
          'The practical consequence is that the two disagree most on engineered products with good macros and no additive Yuka rates high-risk. A protein bar built to hit a nutrition target can score well on a nutrition-led method and still be capped by a processing-led one.',
        ],
      },
      {
        h: 'Consistency',
        p: [
          'Optimally’s rules are fixed, so the same ingredient scores the same for you and for everybody else, every time it is scanned. Every rating can be opened to see why, and its main rules link the published study behind them.',
          'To be fair to Yuka, its score is a published formula too, so this is not a difference between these two apps. It is a difference from scanners that ask a model for a verdict on every scan, where the same product can come back scored differently. A fixed table can still be wrong, but it is wrong visibly and in the same direction for everyone.',
        ],
      },
      {
        h: 'Where Yuka is ahead, plainly',
        p: [
          '- Scale. A stated 85 million users and 4 million food products.',
          '- Price. Yuka scans free. Optimally needs a subscription, and a paywall is the most common complaint in the one- and two-star reviews of apps like these, so it is a real cost and not a footnote.',
          '- Track record. 99,000 US ratings at 4.8, against effectively none. Optimally has been on the App Store since 18 August 2026.',
          '- Cosmetics. Yuka rates personal care products too. Optimally does not.',
        ],
      },
      {
        h: 'Where Optimally is different',
        p: [
          '- Degree of processing is part of the score. It is not among Yuka’s three published criteria, and in Optimally an ultra-processed product is capped at 49 however good its nutrition panel looks.',
          '- Oil type counts. Industrial seed oils are flagged by name, with the honest note that the evidence behind that flag is weaker than the evidence behind the processing one.',
          '- Its main rules link the published study they came from, inside the app.',
        ],
      },
      {
        h: 'Where they are the same',
        p: [
          'Both score with a fixed formula rather than asking a model on every scan, both publish how the score is built, and both say no brand can pay for placement or for a better score. Yuka makes that last promise in its own App Store listing.',
        ],
      },
    ],
    cta: 'If degree of processing matters more to you than the size of the database, that is the trade Optimally is making.',
    scans: ['3017620422003', '5031021679253'],
    related: ['yuka-alternatives', 'best-food-scanner-apps'],
    updated: UPDATED,
  },

  /* -------------------------------------------------------------- comparison */
  {
    slug: 'best-food-scanner-apps',
    kind: 'comparison',
    title: 'The best food scanner apps',
    heading: 'The best food scanner apps',
    description:
      'Five food scanner apps ranked on coverage, method and cost, with our own app placed where the evidence puts it rather than at the top.',
    question: 'Which food scanner app is best?',
    answer:
      'For most people it is Yuka, on coverage: a stated 4 million food products and 85 million users. Bobby Approved is the simplest if you want a straight pass or fail. Fooducate is the pick if you also want a food diary. Open Food Facts is the free, open-data option. Optimally, which we make, is the one built around degree of processing, with the study behind each of its main rules linked, and it is also the newest and the only one here that needs a subscription.',
    sections: [
      {
        h: 'A note on this page before the list',
        p: [
          'This is a ranking on a website belonging to one of the apps in it, so the ordering is worth explaining. We have put Optimally fifth. It launched on 18 August 2026, it has close to no ratings, and four of the apps below are free to scan with where it is not. Ranking ourselves first would be the normal thing to do here and it would not survive thirty seconds of checking.',
          'Rating counts come from each app’s US App Store listing on 14 September 2026. Yuka’s scoring weights come from Yuka’s own help pages.',
        ],
      },
      {
        h: '1. Yuka',
        p: [
          '99,347 ratings at 4.8. Free to scan, with a paid tier covering search and offline use.',
          'Scores food 60% on nutritional quality using Nutri-Score, 30% on additives and 10% on organic status, and covers cosmetics as well. Scale is the reason it ranks first: a stated 4 million food and 2 million cosmetic products. If your priority is that the app finds what you scanned, start here.',
          'The main objection to it is the method. Degree of processing is not one of its criteria, so an engineered product that hits good macros can score well, unless it contains an additive Yuka rates high-risk, which caps it at 49.',
        ],
      },
      {
        h: '2. Bobby Approved',
        p: [
          '160,584 ratings at 4.9. Free.',
          'Checks products against a list of more than a hundred ingredients its creator considers harmful, and highlights the failures in red. Fast and unambiguous in a shop.',
          'It is one person’s list, presented as a verdict. That is a strength if you share the premise and a weakness if you want to see the reasoning, and a binary result cannot tell you how close a product came.',
        ],
      },
      {
        h: '3. Fooducate',
        p: [
          '77,542 ratings at 4.6. Free, with a premium tier. Running since 2010.',
          'Really a food diary with grading attached. If you want to track intake as well as check products, it is the one on this list built to do both. If you only want to check a label, it is more app than you need.',
        ],
      },
      {
        h: '4. Open Food Facts',
        p: [
          'The non-profit open database that a number of scanners, Optimally included, are built on, with its own free app. No paid tier, no advertising, no account needed to look things up, and the whole dataset is downloadable.',
          'It gives you Nutri-Score and the NOVA group rather than a single verdict, so more of the interpreting is left to you.',
        ],
      },
      {
        h: '5. Optimally',
        p: [
          'Ours. Effectively no ratings, live since 18 August 2026, and it requires a subscription where four of the five above do not.',
          'What it does differently: degree of processing decides the score rather than informing it, so an ultra-processed product is capped at 49 however good its macros, and its main rules link the published study behind them inside the app.',
          'That is a narrow advantage and it matters to a narrow group: people who think degree of processing is what a score should be measuring. If you are not in that group, one of the four above is a better app for you today.',
        ],
      },
    ],
    cta: 'If you want a score built around degree of processing, with the study behind each main rule a tap away, that is what Optimally is for.',
    faq: [
      {
        q: 'Which food scanner app is free?',
        a: 'Bobby Approved and Open Food Facts are free to use. Yuka and Fooducate are free to scan with and charge for some features. Optimally requires a subscription.',
      },
      {
        q: 'Which has the largest database?',
        a: 'Yuka states 4 million food products and 2 million cosmetics. Fooducate describes its database as hundreds of thousands of products, and Bobby Approved gives no figure in its listing.',
      },
      {
        q: 'Do they agree with each other?',
        a: 'Often not, because they are measuring different things. A nutrition-led score and a processing-led score will disagree hardest on engineered products with good macros.',
      },
    ],
    related: ['optimally-vs-yuka', 'yuka-alternatives'],
    updated: UPDATED,
  },

  /* ----------------------------------------------------------------- usecase */
  {
    slug: 'seed-oil-scanner-app',
    kind: 'usecase',
    title: 'A seed oil scanner app',
    heading: 'Scanning for seed oils',
    description:
      'What a seed oil scanner should actually check, why group names like "vegetable oils" are the hard part, and an honest read of the evidence.',
    question: 'Is there an app that checks for seed oils?',
    answer:
      'Several, and what separates them is whether they read the whole oil declaration. Matching "sunflower oil" is easy. The harder part is a group name like "vegetable oils" followed by a bracketed list, or a US label marked "and/or", where every oil named has to be checked. A scanner worth using should also show where in the ingredient list the oil sits, since an oil listed second is a major component and one listed last is a trace. Optimally reads the group names, and weights the penalty below ultra-processing on purpose.',
    sections: [
      {
        h: 'What a scanner has to catch',
        p: [
          'Nine named oils, their high oleic and hydrogenated variants, and the group names they are declared under. The group names are where a simple checker fails: "vegetable oils (rapeseed, sunflower)" has to be read into its parts, and a US list marked "and/or" names oils the product may or may not contain.',
          'The second thing is position. Ingredient lists are ordered by weight, so the same oil means something different at position two than at position eleven.',
        ],
      },
      {
        h: 'The honest version of the evidence',
        p: [
          'Most of what is written about seed oils online overstates the case, and an app that does the same is asking to be believed rather than checked.',
          'The strongest evidence is the 2016 BMJ re-analysis of the Minnesota Coronary Experiment: replacing saturated fat with linoleic acid lowered cholesterol and did not lower death from heart disease or from any cause. Separately, linoleic acid went from between 2.2% and 2.8% of the calories available in the American food supply in 1909, depending on how that year’s diet is modelled, to 7.2% in 1999, mostly from soybean oil. That measures what the food supply contained, not what anyone ate, and not harm.',
          'Put together, that supports treating the change as unproven and worth avoiding, not as established toxicity. Optimally penalises seed oils less than it penalises ultra-processing, and says so, because that is what the difference in evidence justifies.',
        ],
      },
      {
        h: 'Why the products usually fail anyway',
        p: [
          'In practice a product high in industrial seed oil is often ultra-processed as well, and the processing rule is the heavier one. The oil is frequently a marker for the kind of product rather than the sole problem with it.',
          'That is worth knowing because it means avoiding seed oils and avoiding ultra-processed food push you towards mostly the same shelf, and the second is the one with a randomised trial behind it.',
        ],
      },
    ],
    cta: 'Optimally flags each seed oil by name, including inside group names, and links the study behind the rule.',
    scans: ['8076809513692', '3017620422003'],
    related: ['how-to-spot-seed-oils-on-a-label', 'best-food-scanner-apps'],
    updated: UPDATED,
  },

  {
    slug: 'food-scanner-app-for-parents',
    kind: 'usecase',
    title: 'A food scanner for parents',
    heading: 'Checking food labels as a parent',
    description:
      'What to look for on packaging aimed at children, the one figure worth knowing, and how to check a label in the few seconds a supermarket trip allows.',
    question: 'How do I check what is in the food I buy for my kids?',
    answer:
      'Turn the pack over and read the first three ingredients, because those are usually most of what is in it by weight. On products marketed to children the front of the pack is where the health claims are and the back is where the answer is. Two thirds of the calories eaten by American children and teenagers now come from ultra-processed food, measured across twenty years of national survey data, so the useful question at the shelf is usually the processing one rather than the sugar one.',
    sections: [
      {
        h: 'The figure worth carrying around',
        p: [
          'A JAMA analysis of US national survey data from 1999 to 2018 found that the share of calories from ultra-processed food among 2 to 19 year olds rose from 61.4% to 67.0%.',
          'That is a measurement of intake rather than of harm, and it is worth stating plainly as such. What it tells you is where the volume is. A change applied to two thirds of what a child eats has more room to matter than one applied to the margins.',
        ],
      },
      {
        h: 'What front-of-pack claims are allowed to mean',
        p: [
          'The claims that appear most on children’s food are the ones with the least legal content behind them. "Natural" has never been formally defined by the US Food and Drug Administration. "No artificial colours" says nothing about the sweeteners, the emulsifiers or the processing.',
          'The regulated claims are the nutrition ones, and even those are chosen by the manufacturer from whichever number flatters the product. A cereal can be high in fibre and still be group 4.',
        ],
      },
      {
        h: 'A workable habit in a supermarket',
        p: [
          '- Read the first three ingredients. They are usually the bulk of the product.',
          '- Look for one marker of ultra-processing rather than trying to assess everything: a flavouring, an emulsifier, a colour, a non-sugar sweetener, a protein isolate.',
          '- Treat the front of the pack as advertising, because that is what it is.',
          '- Compare within a shelf rather than in the abstract. The useful question is which of these four cereals, not whether cereal is good.',
        ],
      },
      {
        h: 'On fear, and where this site stops',
        p: [
          'The evidence on ultra-processed food is strong enough that it does not need inflating, and most of it is observational, which means association rather than proof. One randomised trial in twenty adults is the piece that isolates cause, and it measured calorie intake and weight over two weeks on each diet, not childhood outcomes over decades.',
          'Nothing here is medical advice, and a score on a phone is not a judgement about a meal, a household or a parent. Allergen information in particular should always be read from the physical packaging, because only the label in your hand is authoritative.',
        ],
      },
    ],
    cta: 'Optimally gives one score out of 100 and the reasons behind it, which is about as long as a supermarket aisle allows.',
    related: ['how-to-tell-if-a-food-is-ultra-processed', 'best-food-scanner-apps'],
    updated: UPDATED,
  },
]

export function guideBySlug(slug: string) {
  return GUIDES.find((g) => g.slug === slug)
}

export function guidesByKind(kind: GuideKind) {
  return GUIDES.filter((g) => g.kind === kind)
}
