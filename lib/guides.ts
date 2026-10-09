import { APPROACH_GUIDES } from './guides-approaches'
import { FOOD_GUIDES } from './guides-foods'
import { SCANNING_GUIDES } from './guides-scanning'
import { LEGACY_GUIDES } from './guides-legacy'

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

export type GuideTopic = 'approach' | 'food' | 'scanning' | 'comparison'

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
  updatedISO?: string
  topic?: GuideTopic
  sources?: { title: string; url: string; note?: string }[]
}

export { GUIDE_TOPICS } from './guide-topics'

export const GUIDES: Guide[] = [
  ...APPROACH_GUIDES,
  ...FOOD_GUIDES,
  ...SCANNING_GUIDES,
  ...LEGACY_GUIDES,
]

export function guideBySlug(slug: string) {
  return GUIDES.find((g) => g.slug === slug)
}

export function guidesByKind(kind: GuideKind) {
  return GUIDES.filter((g) => g.kind === kind)
}

export function guideReadMinutes(guide: Guide) {
  const text = [
    guide.answer,
    ...guide.sections.flatMap((s) => [s.h, ...s.p]),
    ...(guide.faq ?? []).flatMap((f) => [f.q, f.a]),
  ].join(' ')
  return Math.max(2, Math.ceil(text.trim().split(/\s+/).length / 220))
}

export function guideModifiedISO(guide: Guide) {
  return guide.updatedISO ?? '2026-09-14'
}
