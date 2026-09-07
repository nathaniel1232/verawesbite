/**
 * REAL PRODUCTS, AND EVERY FIGURE IS THE APP'S OWN OUTPUT.
 *
 * Regenerated 7 Sep 2026 after `ScoringEngine.labelCeiling` was added: the
 * olive oil used to read 100 and now reads 92, because an ingredient list is
 * not evidence that a food could not have been better. Nothing else moved.
 *
 * Captured with `-productAudit <barcodes> GB` (ProductAudit.swift in the app
 * project), which does a LIVE Open Food Facts lookup and runs the shipping
 * scoring engine over the result. Names, brands, scores, the summary sentence,
 * ReasonEngine's lines and the per-ingredient ratings are all pasted from that
 * run unedited, including where a brand field reads oddly
 * ("COCA-COLA SERVICES SA/NV"): that is what Open Food Facts holds and what
 * the app shows, and quietly tidying it would make this page a nicer-looking
 * lie.
 *
 * Re-run the audit after any scoring change, or these numbers become a claim
 * the app no longer makes. See [tools] in the app project.
 *
 * PHOTOGRAPHS come from Open Food Facts contributors and are used under
 * CC BY-SA 3.0. Each row links back to its source page, which is both the
 * attribution and the way a reader checks the data for themselves.
 */
export type Tone = 'good' | 'bad'
export type Band = 'excellent' | 'good' | 'poor' | 'bad'

export interface Product {
  code: string
  name: string
  brand: string
  category: string
  score: number
  band: Band
  summary: string
  img: string
  off: string
  reasons: { tone: Tone; text: string }[]
  ingredients: { name: string; rating: string }[]
}

export const BAND_LABEL: Record<Band, string> = {
  excellent: 'Very optimal',
  good: 'Good',
  poor: 'Poor',
  bad: 'Very bad',
}

export const PRODUCTS: Product[] = [
  {
    code: '5031021679253',
    name: 'Extra Virgin Olive Oil',
    brand: 'Tesco',
    category: 'Product',
    score: 92,
    band: 'excellent',
    summary: 'An excellent choice. It features quality ingredients like extra virgin olive oil and a short 1-ingredient label with nothing concerning on the label.',
    img: '5031021679253.jpg',
    off: 'https://world.openfoodfacts.org/product/5031021679253',
    reasons: [
      { tone: 'good', text: 'Natural fat in a whole food, not penalized' },
      { tone: 'good', text: 'Minimally processed, no seed oils' },
      { tone: 'good', text: 'No additives' },
      { tone: 'good', text: 'Short label: 1 ingredient' },
    ],
    ingredients: [
      { name: 'Extra virgin olive oil', rating: 'Very Good' },
    ],
  },
  {
    code: '3068320123264',
    name: 'La salvetat',
    brand: 'La Salvetat',
    category: 'Sparkling water',
    score: 92,
    band: 'excellent',
    summary: 'An excellent choice. It features quality ingredients like natural mineral water, but ultra-processing limits its score.',
    img: '3068320123264.jpg',
    off: 'https://world.openfoodfacts.org/product/3068320123264',
    reasons: [
      { tone: 'bad', text: 'Ultra-processed (NOVA 4)' },
      { tone: 'bad', text: 'Preservatives: E290' },
      { tone: 'good', text: 'Short label: 1 ingredient' },
      { tone: 'good', text: 'Low sugar and salt' },
    ],
    ingredients: [
      { name: 'Natural mineral water', rating: 'Good' },
    ],
  },
  {
    code: '9310645356686',
    name: 'Rolled Oats',
    brand: 'Coles',
    category: 'Cereal',
    score: 63,
    band: 'good',
    summary: 'A solid choice. It features minimal processing and a short 1-ingredient label with nothing concerning on the label.',
    img: '9310645356686.jpg',
    off: 'https://world.openfoodfacts.org/product/9310645356686',
    reasons: [
      { tone: 'bad', text: 'Oat flakes is the main ingredient' },
      { tone: 'good', text: 'Natural fat in a whole food, not penalized' },
      { tone: 'good', text: 'Whole, unprocessed food' },
      { tone: 'good', text: 'High fiber: 11g per 100g' },
    ],
    ingredients: [
      { name: 'Oat flakes', rating: 'Neutral' },
    ],
  },
  {
    code: '5202178080463',
    name: 'Authentic greek yogurt',
    brand: 'Olympus',
    category: 'Yogurt',
    score: 62,
    band: 'good',
    summary: 'A solid choice. It features quality ingredients like lactic ferments and minimal processing with nothing concerning on the label.',
    img: '5202178080463.jpg',
    off: 'https://world.openfoodfacts.org/product/5202178080463',
    reasons: [
      { tone: 'good', text: 'Whole, unprocessed food' },
      { tone: 'good', text: 'Fermented, live cultures' },
      { tone: 'good', text: 'Good protein: 10g per 100g' },
      { tone: 'good', text: 'No additives' },
    ],
    ingredients: [
      { name: 'Lactic ferments', rating: 'Good' },
      { name: 'Pasteurized skimmed milk', rating: 'Neutral' },
      { name: 'Lactobacillus bulgaricus', rating: 'Neutral' },
      { name: 'Streptococcus thermophilus', rating: 'Neutral' },
    ],
  },
  {
    code: '5000157024671',
    name: 'Beanz in a rich tomato sauce',
    brand: 'Heinz',
    category: 'Sauce',
    score: 49,
    band: 'poor',
    summary: 'A below-average choice. It features quality ingredients like beans, but ultra-processing, flagged ingredients like sugar and modified corn flour limit its score.',
    img: '5000157024671.jpg',
    off: 'https://world.openfoodfacts.org/product/5000157024671',
    reasons: [
      { tone: 'bad', text: 'Ultra-processed (NOVA 4)' },
      { tone: 'good', text: 'No additives' },
    ],
    ingredients: [
      { name: 'Sugar', rating: 'Bad' },
      { name: 'Modified corn flour', rating: 'Bad' },
      { name: 'Beans', rating: 'Good' },
      { name: 'Spice extract', rating: 'Good' },
    ],
  },
  {
    code: '5053827110679',
    name: 'Froot Loops',
    brand: 'Kellogg\'s',
    category: 'Cereal',
    score: 33,
    band: 'poor',
    summary: 'A below-average choice. The score is held down by high sugar, flagged ingredients like corn and sugar.',
    img: '5053827110679.jpg',
    off: 'https://world.openfoodfacts.org/product/5053827110679',
    reasons: [
      { tone: 'bad', text: 'Very high sugar: 25g per 100g' },
      { tone: 'bad', text: 'Long ingredient list: 22 ingredients' },
      { tone: 'bad', text: 'High sodium: 452mg per 100g' },
      { tone: 'good', text: 'Good protein: 8.3g per 100g' },
    ],
    ingredients: [
      { name: 'Corn', rating: 'Bad' },
      { name: 'Sugar', rating: 'Bad' },
      { name: 'Glucose syrup', rating: 'Bad' },
      { name: 'Colour', rating: 'Bad' },
    ],
  },
  {
    code: '8076809513692',
    name: 'Napoletana',
    brand: 'Barilla',
    category: 'Sauce',
    score: 31,
    band: 'poor',
    summary: 'A below-average choice. It features quality ingredients like onion and carrot, but industrial seed oils, ultra-processing limit its score.',
    img: '8076809513692.jpg',
    off: 'https://world.openfoodfacts.org/product/8076809513692',
    reasons: [
      { tone: 'bad', text: 'Made with industrial seed oils' },
      { tone: 'bad', text: 'Ultra-processed (NOVA 4)' },
      { tone: 'good', text: 'No additives' },
    ],
    ingredients: [
      { name: 'Sunflower oil', rating: 'Very Bad' },
      { name: 'Sugar', rating: 'Bad' },
      { name: 'Flavouring', rating: 'Bad' },
      { name: 'Onion', rating: 'Good' },
    ],
  },
  {
    code: '5449000000996',
    name: 'Coca-Cola',
    brand: 'COCA-COLA SERVICES SA/NV',
    category: 'Soda',
    score: 27,
    band: 'poor',
    summary: 'A below-average choice. The score is held down by ultra-processing, flagged ingredients like sugar.',
    img: '5449000000996.jpg',
    off: 'https://world.openfoodfacts.org/product/5449000000996',
    reasons: [
      { tone: 'bad', text: 'Ultra-processed (NOVA 4)' },
      { tone: 'bad', text: 'Sulphite ammonia caramel, flagged additive' },
      { tone: 'good', text: 'Short label: 4 ingredients' },
    ],
    ingredients: [
      { name: 'Sugar', rating: 'Bad' },
      { name: 'Carbonated water', rating: 'Neutral' },
      { name: 'Natural flavouring', rating: 'Neutral' },
      { name: 'Caffeine', rating: 'Neutral' },
    ],
  },
  {
    code: '3017620422003',
    name: 'Nutella',
    brand: 'Nutella',
    category: 'Spread',
    score: 9,
    band: 'bad',
    summary: 'A poor choice. It features quality ingredients like hazelnut and fat reduced cocoa, but industrial seed oils, ultra-processing, high sugar limit its score.',
    img: '3017620422003.jpg',
    off: 'https://world.openfoodfacts.org/product/3017620422003',
    reasons: [
      { tone: 'bad', text: 'Made with industrial seed oils' },
      { tone: 'bad', text: 'Ultra-processed (NOVA 4)' },
      { tone: 'bad', text: 'Very high sugar: 56.3g per 100g' },
      { tone: 'bad', text: 'Sugar is the main ingredient' },
    ],
    ingredients: [
      { name: 'Sugar', rating: 'Bad' },
      { name: 'Palm oil', rating: 'Bad' },
      { name: 'Soya lecithin', rating: 'Bad' },
      { name: 'Hazelnut', rating: 'Good' },
    ],
  },
  {
    code: '7622210449283',
    name: 'Prince',
    brand: 'LU',
    category: 'Biscuit',
    score: 5,
    band: 'bad',
    summary: 'A poor choice. The score is held down by industrial seed oils, ultra-processing, high sugar.',
    img: '7622210449283.jpg',
    off: 'https://world.openfoodfacts.org/product/7622210449283',
    reasons: [
      { tone: 'bad', text: 'Made with industrial seed oils' },
      { tone: 'bad', text: 'Ultra-processed (NOVA 4)' },
      { tone: 'bad', text: 'Very high sugar: 32g per 100g' },
      { tone: 'bad', text: 'Long ingredient list: 17 ingredients' },
    ],
    ingredients: [
      { name: 'Vegetable oil', rating: 'Very Bad' },
      { name: 'Colza oil', rating: 'Very Bad' },
      { name: 'Wheat flour', rating: 'Bad' },
      { name: 'Sugar', rating: 'Bad' },
    ],
  },
]

export function productByCode(code: string) {
  return PRODUCTS.find((p) => p.code === code)
}

/**
 * The one reason a ledger row leads with.
 *
 * Prefers a finding that is NOT about sugar. This app's position is that sugar
 * is an energy source and whether it counts against a food depends on the
 * food, so it is not the line to put in front of somebody first. Nothing is
 * hidden by this: the product's own page lists every reason the engine gave,
 * sugar included. Choosing which of several true things to lead with is an
 * editorial call; deleting one would not be.
 */
export function leadReason(p: Product) {
  const notSugar = p.reasons.filter((r) => !/sugar/i.test(r.text))
  return notSugar.find((r) => r.tone === 'bad') ?? notSugar[0] ?? p.reasons[0]
}
