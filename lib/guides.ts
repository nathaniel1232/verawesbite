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
      'Every name industrial seed oils appear under on an ingredient list, why "vegetable oil" is the one that matters, and what the evidence actually supports.',
    question: 'What are seed oils called on ingredient lists?',
    answer:
      'Look for sunflower, safflower, soybean, corn, canola, rapeseed, cottonseed, grapeseed and rice bran oil. Then look for the catch-all terms, which are the ones that actually hide things: vegetable oil, vegetable fat, and blends listed as "vegetable oils (in varying proportions)". Those are legally allowed to be any of the above, so a label carrying only that is telling you it could be anything. Position matters too. An oil in the first three ingredients is a major part of the product, not a trace.',
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
          "- The catch-alls: vegetable oil, vegetable fat, plant oil, and any list that says “in varying proportions”",
          'Hydrogenated and interesterified versions of all of the above count too, and usually say so.',
        ],
      },
      {
        h: 'Why the catch-all is the important one',
        p: [
          'Food labelling rules in most markets let a manufacturer declare a generic "vegetable oil" and swap the actual oil depending on commodity prices, as long as the category is accurate. The practical effect is that the ingredient list stops being a description of the product and becomes a description of a range of possible products.',
          'It is also the reason a label can look cleaner than the food is. One line reading "vegetable oil" replaces what might be three named oils, and a short ingredient list reads as a simple product.',
        ],
      },
      {
        h: 'Where they turn up when you are not expecting them',
        p: [
          'Nobody is surprised to find seed oil in crisps. The places people miss are bread and wraps, tinned fish, hummus and dips, pesto and jarred sauces, most mayonnaise and salad dressing, protein and cereal bars, roasted nuts, and nearly all takeaway fried food.',
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
    cta: 'Optimally flags every name on that list, including the catch-alls, and tells you which position in the ingredient list it appeared at.',
    faq: [
      {
        q: 'Is olive oil a seed oil?',
        a: 'No. Olive and avocado oil are pressed from fruit rather than seed, and are not refined the same way. Optimally does not penalise them.',
      },
      {
        q: 'Does "high oleic" make a difference?',
        a: 'High oleic sunflower and safflower oils are bred to contain more oleic acid and less linoleic acid, so they are more stable at heat. They are still refined seed oils and still declared as such.',
      },
      {
        q: 'Is "vegetable oil" always a seed oil?',
        a: 'Not necessarily, but it can be, and the label does not tell you. Palm and coconut oil are also vegetable oils and are usually named because naming them is a selling point.',
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
          'NOVA, the classification used in nearly all the published research, sorts food by what was done to it rather than by its nutrition. Group 1 is unprocessed or minimally processed. Group 2 is culinary ingredients such as oil, butter, sugar and salt. Group 3 is those two combined, which is most traditional cooking. Group 4 is everything containing at least one substance that exists only as an industrial input.',
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
      'Why food scanner apps miss products, how regional barcodes cause it, and the three things that actually work when a scan comes back empty.',
    question: 'Why is my product not in the food scanner app?',
    answer:
      'Almost always it means nobody has added that product to the database yet, not that the app is broken. Most scanners read Open Food Facts, which is crowd-sourced, so coverage follows whoever has been contributing in your country. Three things work. Check you are not hitting a regional barcode difference, because the same product carries different codes per market. Photograph the ingredient panel instead, if the app can read one. Add the product yourself, which takes about a minute and means it resolves next time for everybody.',
    sections: [
      {
        h: 'Why it happens',
        p: [
          'This is the third most common complaint about food scanner apps, and it is largely structural rather than a fault in any one of them. The databases behind most scanners are contributed to by volunteers. Coverage is excellent in France, good in the UK, the US and Germany, and thin in smaller markets.',
          'The gaps are predictable. Supermarket own-brand lines, anything launched in the last few months, regional and local products, and bulk or deli items with a store-printed code are the four categories that come back empty most often.',
        ],
      },
      {
        h: 'The regional barcode trap',
        p: [
          'A product sold in several countries frequently carries a different EAN in each, because the barcode is assigned by the company registering it in that market. So the same jar in a British and a German supermarket can be two separate records, one of them well filled in and the other empty.',
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
          'Open Food Facts is a non-profit, open-data project, and adding a product means photographing the front, the ingredients and the nutrition panel in their app or on their site. It takes roughly a minute.',
          'That entry is then available to every app reading the database, including whichever one you are using. It is the only one of these three steps that fixes the problem for anyone other than you.',
        ],
      },
    ],
    cta: 'Optimally reads the panel on the pack when the barcode is missing or the record has no ingredient list, and falls back to reading it on your device when there is no connection.',
    faq: [
      {
        q: 'Do food scanner apps work offline?',
        a: 'Barcode lookups need a connection, because the product record lives on a server. Reading a photographed ingredient panel can be done on the device, which is how Optimally still returns a result with no network.',
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
      'It depends which part you want to replace. If the problem is the premium gate on search and offline use, Bobby Approved and Open Food Facts are free and ungated. If the problem is the rating method, Yuka weighs nutrition heavily and Optimally reads the ingredient list first and publishes a study behind every rule. If you want food logging as well, Fooducate does both. Yuka is the largest of these by a wide margin, at a stated 85 million users and 6 million products, so any alternative you pick will find fewer of your products.',
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
          'The non-profit open database that sits under a large part of this whole category, with its own free app. No paid tier, no advertising, no account required, and you can export everything.',
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
          'Ours, so read this with that in mind. It reads the ingredient list first rather than the nutrition panel, applies a fixed rule table, and links a published study behind each rule. The same ingredient gets the same rating every time, which is the specific thing an AI-generated verdict cannot promise.',
          'It is also the newest and smallest app here by a long way, it has no ratings to speak of yet, and unlike the others on this list it needs a subscription. If the reason you are leaving Yuka is its paywall, this is not the app that fixes that.',
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
        q: 'Which alternative has the most products?',
        a: 'Yuka states 6 million, of which 4 million are food. Nothing else in this list is close, and any alternative will miss more of your shopping.',
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
      'Yuka scores a product mostly on its nutrition panel, plus additives and whether it is organic. Optimally scores it on the ingredient list, caps anything ultra-processed, and links a published study behind every rule. That is the real difference: what the number is measuring. Yuka is far bigger, with a stated 85 million users and 6 million products against an app that launched in September 2026, and its free tier is more usable than ours. Pick Optimally if you want a rule you can audit. Pick Yuka if you want coverage and a free tier.',
    sections: [
      {
        h: 'What each score is actually measuring',
        p: [
          'Yuka’s listing describes three criteria: nutritional quality, presence of additives, and the organic aspect of the product. Nutrition carries the most weight. That produces a score which tracks fat, sugar, salt, fibre and protein closely.',
          'Optimally starts from the ingredient list. Each ingredient is matched against a fixed table and given a rating, then rules are applied for industrial seed oils, degree of processing and flagged additives, and the nutrition panel is used last rather than first.',
          'The practical consequence is that the two disagree most on engineered products with good macros. A protein bar built to hit a nutrition target scores well on a nutrition-led method and is capped by a processing-led one.',
        ],
      },
      {
        h: 'Consistency',
        p: [
          'Optimally writes an ingredient rating once and then freezes it, so the same ingredient scores the same for you, for everybody else, and next year. Every rating can be opened to see the rule and the paper behind it.',
          'This is worth dwelling on only because "the rating changed" and "it is just AI making it up" are recurring complaints across this category, including about apps that generate a verdict per scan. A fixed table cannot drift. It can be wrong, and if it is wrong it is wrong visibly and in the same direction for everyone, which is a better failure.',
        ],
      },
      {
        h: 'Where Yuka is ahead, plainly',
        p: [
          '- Coverage. 6 million products against a much smaller reach. You will hit fewer empty scans.',
          '- Price. Yuka scans free. Optimally needs a subscription, and this is the single most common complaint about apps in this category, so it is a real cost and not a footnote.',
          '- Track record. 99,000 US ratings at 4.8, against effectively none. Optimally has been on the App Store since 4 September 2026.',
          '- Cosmetics. Yuka rates personal care products too. Optimally does not and has no plans to.',
        ],
      },
      {
        h: 'Where Optimally is ahead',
        p: [
          '- The rule is published, and each one links the study it came from.',
          '- Ultra-processing is a cap rather than a deduction, so a flattering nutrition panel cannot lift a group 4 product into a good band.',
          '- Seed oils are flagged under every name including the catch-alls, with the honest note that the evidence behind that flag is weaker than the evidence behind the processing one.',
          '- No brand can pay for placement or for a better score.',
        ],
      },
    ],
    cta: 'If a number you can audit matters more to you than the size of the database, that is the trade Optimally is making.',
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
      'For most people it is Yuka, on coverage alone: a stated 6 million products and 85 million users means it answers more scans than anything else. Bobby Approved is the fastest if you want a straight pass or fail. Fooducate is the pick if you also want a food diary. Open Food Facts is the best free and open option. Optimally, which we make, is the only one that publishes its rule table with a study behind each rule, and it is also the newest, the smallest and the only one here that needs a subscription.',
    sections: [
      {
        h: 'A note on this page before the list',
        p: [
          'This is a ranking on a website belonging to one of the apps in it, so the ordering is worth explaining. We have put Optimally fifth. It launched on 4 September 2026, it has close to no ratings, and four of the apps below are free to scan with where it is not. Ranking ourselves first would be the normal thing to do here and it would not survive thirty seconds of checking.',
          'Every figure below comes from the App Store listing of the app in question, on 14 September 2026, in the US storefront.',
        ],
      },
      {
        h: '1. Yuka',
        p: [
          '99,347 ratings at 4.8. Free to scan, with a paid tier covering search and offline use.',
          'Scores food on nutritional quality, additives and organic status, and covers cosmetics as well. The database is the reason it wins: a stated 4 million food and 2 million cosmetic products. If your priority is that the app actually finds what you scanned, this is the answer.',
          'The main objection to it is the method. A nutrition-weighted score is generous to engineered products that hit good macros, and it is not published in enough detail to audit.',
        ],
      },
      {
        h: '2. Bobby Approved',
        p: [
          '160,584 ratings at 4.9, the highest count on this list. Free.',
          'Checks products against a list of more than a hundred ingredients its creator considers harmful, and highlights the failures in red. Fast and unambiguous in a shop.',
          'It is one person’s list, presented as a verdict. That is a strength if you share the premise and a weakness if you want to see the reasoning, and a binary result cannot tell you how close a product came.',
        ],
      },
      {
        h: '3. Fooducate',
        p: [
          '77,542 ratings at 4.6. Free, with a premium tier. Running since 2010, which is longer than everything else here combined.',
          'Really a food diary with grading attached. If you want to track intake as well as check products, it is the only one on this list that does both properly. If you only want to check a label, it is more app than you need.',
        ],
      },
      {
        h: '4. Open Food Facts',
        p: [
          'The non-profit open database a great deal of this category is built on, with its own free app. No paid tier, no advertising, no account, and the whole dataset is downloadable.',
          'It gives you Nutri-Score and the NOVA group rather than a verdict, so you do the interpreting. That is the right trade for some people and no help at all to someone standing in an aisle wanting an answer.',
        ],
      },
      {
        h: '5. Optimally',
        p: [
          'Ours. Effectively no ratings, live since 4 September 2026, and it requires a subscription where four of the five above do not.',
          'What it does that none of the others do: every ingredient rating is fixed rather than generated per scan, every rule links the published study behind it, and the band thresholds are printed on the website. Ultra-processing is applied as a hard cap, so a product cannot score well on macros alone.',
          'That is a narrow advantage and it matters to a narrow group: people who have stopped trusting a number they cannot check. If you are not in that group, one of the four above is a better app for you today.',
        ],
      },
    ],
    cta: 'If you want to see what a published rule table looks like in use, that is the thing Optimally is for.',
    faq: [
      {
        q: 'Which food scanner app is free?',
        a: 'Bobby Approved and Open Food Facts are free to use. Yuka and Fooducate are free to scan with and charge for some features. Optimally requires a subscription.',
      },
      {
        q: 'Which has the largest database?',
        a: 'Yuka, at a stated 6 million products including cosmetics.',
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
      'What a seed oil scanner should actually check, why the catch-all label names are the hard part, and an honest read of the evidence.',
    question: 'Is there an app that checks for seed oils?',
    answer:
      'Several, and the thing that separates them is whether they catch the generic names. Checking for "sunflower oil" is easy. Catching "vegetable oil", "vegetable fat" and blends declared "in varying proportions" is the part that matters, because that is where most of it sits. A scanner worth using should also tell you where in the ingredient list the oil appeared, since an oil listed second is a major component and one listed last is a trace. Optimally flags all of them, and weights the penalty below ultra-processing on purpose.',
    sections: [
      {
        h: 'What a scanner has to catch',
        p: [
          'Nine named oils, their high oleic and hydrogenated variants, and at least three catch-all phrases that are allowed to mean any of them. A checker that only matches the named ones will pass a product whose label says "vegetable oil" and miss the most common case.',
          'The second thing is position. Ingredient lists are ordered by weight, so the same oil means something different at position two than at position eleven.',
        ],
      },
      {
        h: 'The honest version of the evidence',
        p: [
          'Most of what is written about seed oils online overstates the case, and an app that does the same is asking to be believed rather than checked.',
          'The strongest evidence is the 2016 BMJ re-analysis of the Minnesota Coronary Experiment: replacing saturated fat with linoleic acid lowered cholesterol and did not lower death from heart disease or from any cause. Separately, linoleic acid in the American diet has more than tripled over the last century, which is a measurement of exposure rather than of harm.',
          'Put together, that supports treating the change as unproven and worth avoiding, not as established toxicity. Optimally penalises seed oils less than it penalises ultra-processing, and says so, because that is what the difference in evidence justifies.',
        ],
      },
      {
        h: 'Why the products usually fail anyway',
        p: [
          'In practice a product high in industrial seed oil is very often ultra-processed as well, and the processing rule is the heavier one. The oil is frequently a marker for the kind of product rather than the sole problem with it.',
          'That is worth knowing because it means avoiding seed oils and avoiding ultra-processed food push you towards mostly the same shelf, and the second is the one with a randomised trial behind it.',
        ],
      },
    ],
    cta: 'Optimally flags every seed oil name including the catch-alls, shows its position in the list, and links the study behind the rule.',
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
      'Turn the pack over and read the first three ingredients, because those are most of what is in it by weight. On products marketed to children the front of the pack is where the health claims are and the back is where the answer is. Two thirds of the calories eaten by American under-19s now come from ultra-processed food, measured across twenty years of national survey data, so the useful question at the shelf is usually the processing one rather than the sugar one.',
    sections: [
      {
        h: 'The figure worth carrying around',
        p: [
          'A JAMA analysis of US national survey data from 1999 to 2018 found that the share of calories from ultra-processed food among 2 to 19 year olds rose to about 67%. The equivalent adult figure is 57%.',
          'That is a measurement of intake rather than of harm, and it is worth stating plainly as such. What it tells you is where the volume is. A change applied to two thirds of what a child eats has more room to matter than one applied to the margins.',
        ],
      },
      {
        h: 'What front-of-pack claims are allowed to mean',
        p: [
          'The claims that appear most on children’s food are the ones with the least legal content behind them. "Natural" has never been formally defined by the US Food and Drug Administration. "Made with real fruit" sets no minimum. "No artificial colours" says nothing about the sweeteners, the emulsifiers or the processing.',
          'The regulated claims are the nutrition ones, and even those are chosen by the manufacturer from whichever number flatters the product. A cereal can be high in fibre and still be group 4.',
        ],
      },
      {
        h: 'A workable habit in a supermarket',
        p: [
          '- Read the first three ingredients only. They are the bulk of the product.',
          '- Look for one marker of ultra-processing rather than trying to assess everything: a flavouring, an emulsifier, a colour, a non-sugar sweetener, a protein isolate.',
          '- Treat the front of the pack as advertising, because that is what it is.',
          '- Compare within a shelf rather than in the abstract. The useful question is which of these four cereals, not whether cereal is good.',
        ],
      },
      {
        h: 'On fear, and where this site stops',
        p: [
          'The evidence on ultra-processed food is strong enough that it does not need inflating, and most of it is observational, which means association rather than proof. One randomised trial in twenty adults is the piece that isolates cause, and it measured calorie intake and weight over two weeks, not childhood outcomes over decades.',
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
