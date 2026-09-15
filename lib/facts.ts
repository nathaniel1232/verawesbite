/**
 * THE FACTS ON THE HOME PAGE, AND THE RULES THEY LIVE UNDER.
 *
 * These replaced the ledger of ten scanned products. Every one is a real
 * finding from a real paper, and every DOI below was resolved against
 * doi.org and checked for author, journal, year and title before it was
 * written down. No DOI was typed from memory. On a page whose entire
 * argument is "check our work", a wrong DOI is worse than no citation.
 *
 * A DOI THAT RESOLVES PROVES THE PAPER EXISTS. IT DOES NOT PROVE THE SENTENCE
 * BESIDE IT. All eight links checked out on 14 September and three cards were
 * still wrong, found on 15 September by reading each abstract before a push:
 *
 *   - Martinez Steele's 57.9% is everyone aged one and over. The card said
 *     "the average adult diet".
 *   - The Blasbalg card said linoleic acid had risen 3.5x in "the American
 *     diet". The abstract gives 2.23% or 2.79% of energy in 1909, depending on
 *     how that year is modelled, against 7.21% in 1999: 3.2x or 2.6x, and in
 *     the food SUPPLY rather than in anyone's diet. 3.5x matches neither. It
 *     was copied from the app's onboarding instead of read off the paper, and
 *     the app still says it.
 *   - A 67% for under-19s sat on a card whose only citation was another study.
 *
 * Read the abstract for every number, and cite the paper the number is in.
 *
 * THE HOUSE RULES, taken from the app's own ResearchLibrary.swift, which
 * states them as non-negotiable and is right to:
 *
 *   1. No study goes in that hasn't been read and linked. No "studies show".
 *   2. Observational work says so, on the card, in the reader's eyeline. A
 *      cohort is an association. It is not proof and must never be dressed
 *      as one.
 *   3. If the honest read is weaker than the scary read, print the honest
 *      one. Being trusted on the weak claims is what makes the strong ones
 *      land.
 *
 * WHAT IS DELIBERATELY NOT HERE
 * -----------------------------
 * The app's onboarding cites Wansink & Sobal (2007) for "226 food decisions
 * a day, people guess 14". It is the single most quotable figure available
 * and it is not on this website. Wansink's lab had multiple later papers
 * retracted for data handling; OnboardingView.swift flags it in a comment as
 * the weakest-provenance number the app cites anywhere. In the app it sits
 * behind a purchase. On a public page it would be the first thing a hostile
 * reader checks, and finding it would cost every other figure here its
 * credibility. Eight strong citations beat nine with a soft one in the middle.
 */

/**
 * Mirrors Study.Kind in ResearchLibrary.swift, including the caveat text, plus
 * `supply`: food-disappearance data measures what was available to eat, which
 * is neither a survey of intake nor an outcome, and needed a caveat of its own.
 */
export type Evidence = 'trial' | 'cohort' | 'survey' | 'authority' | 'umbrella' | 'supply'

export const EVIDENCE_LABEL: Record<Evidence, string> = {
  trial: 'Randomised trial',
  cohort: 'Cohort study',
  survey: 'National survey',
  authority: 'Regulatory review',
  umbrella: 'Umbrella review',
  supply: 'Food supply data',
}

/**
 * Printed under the figure whenever it exists. The app renders the same
 * sentence on the same kinds of study and the two must not disagree.
 */
export const EVIDENCE_CAVEAT: Partial<Record<Evidence, string>> = {
  cohort: 'Observational. An association, not proof of cause.',
  umbrella: 'Pools observational work. Associations, not proof of cause.',
  survey: 'A measurement of intake, not of outcomes.',
  supply: 'What was available to eat, not what anyone ate.',
}

export interface Fact {
  /** The figure itself, as large type. Keep it short enough to read at 56px. */
  figure: string
  /** What the figure IS. One line, no adjectives. */
  headline: string
  /** The finding, stated as the paper states it. */
  detail: string
  evidence: Evidence
  cite: string
  doi: string
}

/* EIGHT, NOT SIX, AND THE COUNT IS A LAYOUT DECISION AS WELL AS AN EDITORIAL
   ONE. The trial card spans two columns, so six facts left a single card alone
   on a third row. Eight fills three rows of three exactly. Both additions are
   citations the app already carries and both links were resolved before being
   written here. The app carrying a citation did not make its number right: see
   the header. */
export const FACTS: Fact[] = [
  {
    figure: '+500',
    headline: 'calories a day, without noticing',
    detail:
      'Twenty adults lived on a ward and ate ultra-processed and unprocessed diets for two weeks each, matched for presented calories, sugar, fat, sodium and fibre. Same numbers on the label. They ate about 500 kcal a day more on the ultra-processed one, and gained weight.',
    evidence: 'trial',
    cite: 'Hall et al., Cell Metabolism, 2019',
    doi: 'https://doi.org/10.1016/j.cmet.2019.05.008',
  },
  {
    figure: '57.9%',
    headline: 'of American calories',
    detail:
      'The share of energy in the American diet that comes from ultra-processed food, measured across 9,317 people aged one and over in the 2009 to 2010 national nutrition survey. Nothing else you could change touches that much of what you eat.',
    evidence: 'survey',
    cite: 'Martínez Steele et al., BMJ Open, 2016',
    doi: 'https://doi.org/10.1136/bmjopen-2015-009892',
  },
  {
    figure: '1.62×',
    headline: 'the risk of dying during the study',
    detail:
      'Following 19,899 adults, the quarter eating the most ultra-processed food, more than four servings a day, had a 1.62× all-cause mortality hazard against the quarter eating the least. That is a hazard ratio between two groups. It is not a statement about any individual.',
    evidence: 'cohort',
    cite: 'Rico-Campà et al., BMJ, 2019',
    doi: 'https://doi.org/10.1136/bmj.l1949',
  },
  {
    figure: '12%',
    headline: 'more cardiovascular disease',
    detail:
      'For every 10% more of the diet given to ultra-processed food, across 105,159 adults followed for a median of five years. The association rises with the dose rather than appearing only at the extreme.',
    evidence: 'cohort',
    cite: 'Srour et al., BMJ, 2019',
    doi: 'https://doi.org/10.1136/bmj.l1451',
  },
  {
    figure: '32',
    headline: 'health outcomes now linked to it',
    detail:
      'An umbrella review read 45 separate meta-analyses covering almost 10 million people and found ultra-processed food intake associated with 32 adverse outcomes, spanning heart disease, metabolic disease, mental health and mortality.',
    evidence: 'umbrella',
    cite: 'Lane et al., BMJ, 2024',
    doi: 'https://doi.org/10.1136/bmj-2023-077310',
  },
  {
    figure: 'Group 1',
    headline: 'processed meat, alongside tobacco',
    detail:
      'IARC places processed meat in Group 1, its highest confidence category for causing cancer in humans, for colorectal cancer. Group 1 is a statement about how certain the evidence is, not about how large the risk is. Bacon is not as dangerous as smoking. The classification says both effects are established, not that they are equal.',
    evidence: 'authority',
    cite: 'IARC Monographs, Volume 114, 2015',
    doi: 'https://publications.iarc.who.int/564',
  },
  {
    figure: '7.2%',
    headline: 'of US food-supply calories, as linoleic acid',
    detail:
      'That was the share by 1999, up from between 2.2% and 2.8% in 1909 depending on how that year’s diet is modelled: a rise of between 2.6 and 3.2 times. Most of it came from soybean oil, whose estimated consumption grew more than a thousandfold. This measures what the food supply contained, not what anyone ate, and it is not by itself evidence of harm.',
    evidence: 'supply',
    cite: 'Blasbalg et al., Am J Clin Nutr, 2011',
    doi: 'https://doi.org/10.3945/ajcn.110.006643',
  },
  {
    figure: 'E171',
    headline: 'no safe level could be set',
    detail:
      'Reassessing titanium dioxide, the whitener used in icing, sweets and sauces, EFSA could not rule out damage to DNA and could not establish a safe daily intake. It is no longer considered safe as a food additive in the EU. It remains legal elsewhere.',
    evidence: 'authority',
    cite: 'EFSA Journal, 2021',
    doi: 'https://doi.org/10.2903/j.efsa.2021.6585',
  },
]
