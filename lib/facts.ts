/**
 * THE FACTS ON THE HOME PAGE, AND THE RULES THEY LIVE UNDER.
 *
 * These replaced the ledger of ten scanned products. Every one is a real
 * finding from a real paper, and every DOI below was resolved against
 * doi.org and checked for author, journal, year and title before it was
 * written down. Not one was typed from memory. On a page whose entire
 * argument is "check our work", a wrong DOI is worse than no citation.
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
 * credibility. Six strong citations beat seven with a soft one in the middle.
 */

/** Mirrors Study.Kind in ResearchLibrary.swift, including the caveat text. */
export type Evidence = 'trial' | 'cohort' | 'survey' | 'authority' | 'umbrella'

export const EVIDENCE_LABEL: Record<Evidence, string> = {
  trial: 'Randomised trial',
  cohort: 'Cohort study',
  survey: 'National survey',
  authority: 'Regulatory review',
  umbrella: 'Umbrella review',
}

/**
 * Printed under the figure whenever it exists. The app renders the same
 * sentence on the same kinds of study and the two must not disagree.
 */
export const EVIDENCE_CAVEAT: Partial<Record<Evidence, string>> = {
  cohort: 'Observational. An association, not proof of cause.',
  umbrella: 'Pools observational work. Associations, not proof of cause.',
  survey: 'A measurement of intake, not of outcomes.',
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
   written here. */
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
    figure: '57%',
    headline: 'of American calories',
    detail:
      'The share of energy in the average adult diet coming from ultra-processed food. For under-19s the figure is 67%, measured separately. Nothing else you could change touches that much of what you eat.',
    evidence: 'survey',
    cite: 'Martínez Steele et al., BMJ Open, 2016',
    doi: 'https://doi.org/10.1136/bmjopen-2015-009892',
  },
  {
    figure: '1.62×',
    headline: 'the risk of dying during the study',
    detail:
      'Following 19,899 adults, the group eating more than four ultra-processed servings a day had a 1.62× all-cause mortality hazard against the group eating under two. That is a hazard ratio between two groups. It is not a statement about any individual.',
    evidence: 'cohort',
    cite: 'Rico-Campà et al., BMJ, 2019',
    doi: 'https://doi.org/10.1136/bmj.l1949',
  },
  {
    figure: '12%',
    headline: 'more cardiovascular disease',
    detail:
      'For every 10% more of the diet given to ultra-processed food, across 105,159 adults followed for five years. It moves with the dose, which is the part worth knowing: a dose that can go up can come back down.',
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
    figure: '3.5×',
    headline: 'more linoleic acid than a century ago',
    detail:
      'Linoleic acid, the dominant fat in refined seed oils, has more than tripled its share of the American diet across the twentieth century. This is a measurement of how much the food supply changed. It is not by itself evidence of harm, and the best trial data suggests the benefit claimed for that switch was overstated rather than that the oils are toxic.',
    evidence: 'survey',
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
