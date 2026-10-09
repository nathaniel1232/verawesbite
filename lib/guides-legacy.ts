import type { Guide } from './guides'

const UPDATED = '9 October 2026'
const UPDATED_ISO = '2026-10-09'

/** Refreshed copies for the eight established guide URLs. */
export const LEGACY_GUIDES: Guide[] = [
  {
    slug: 'how-to-spot-seed-oils-on-a-label',
    kind: 'problem',
    topic: 'scanning',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'How to spot seed oils on a label',
    heading: 'How to spot seed oils on a label',
    description:
      'Find common seed-oil names and group declarations on ingredient lists, then put an oil flag in context with the broader nutrition evidence.',
    question: 'What are seed oils called on ingredient lists?',
    answer:
      'Look for sunflower, safflower, soybean, corn, canola or rapeseed, cottonseed, grapeseed and rice-bran oils, including hydrogenated versions. “Vegetable oil” may introduce a blend; read the bracketed names. Finding an oil identifies an ingredient, not whether the food causes harm. Evidence about dietary fats depends on what replaces what and the outcome measured. Optimally can scan a barcode or photograph a label and explain its food-quality rating without turning an ingredient flag into a clinical claim.',
    sections: [
      {
        h: 'Names to recognize',
        p: [
          'Common label names include sunflower oil, safflower oil, soybean or soya oil, corn or maize oil, canola or rapeseed oil, cottonseed oil, grapeseed oil and rice-bran oil. Some labels use “vegetable oil” or “vegetable oils” as a category and identify the individual oils nearby. In the United States, FDA guidance allows “and/or” declarations for certain non-predominant blends whose exact composition varies; the package may name possible oils without telling you which one is in a particular unit.',
          'Palm and coconut are also vegetable oils, but not seed oils. Read the named oils on the package.',
        ],
      },
      {
        h: 'A label flag is not a diagnosis',
        p: [
          'Ingredient order and the nutrition panel answer different questions. Ingredients are generally listed by weight, while a panel describes nutrients per stated serving. If you are comparing two sauces, for example, note which oils are listed and where, then check serving size and saturated fat on the panel. That gives you useful product information without assuming that the word “seed” proves the product is toxic.',
          'Evidence about replacing one type of fat with another must be read in context. The recovered-data analysis of the Minnesota Coronary Experiment found that replacing saturated fat with linoleic acid lowered cholesterol, while it did not demonstrate lower mortality in that trial. One historical study does not establish that all seed oils cause harm, nor does a change in a marker alone settle every health outcome.',
        ],
      },
      {
        h: 'Consider the whole pattern',
        p: [
          'The World Health Organization’s 2023 guidance says fat quality matters and recommends that dietary fat be primarily unsaturated, with limits for saturated and trans fats. That advice is broader than a single oil ingredient. It also shows why a blanket “all seed oils are harmful” message would overstate what ingredient detection can prove.',
          'A product also differs in nutrition, processing and portion size. One flag does not describe the whole food.',
        ],
      },
      {
        h: 'Use the scan as a starting point',
        p: [
          'Scan a barcode or photograph a label in Optimally to see a food-quality rating with reasons. Verify ingredients against the package. The rating is an editorial guide, not a clinical assessment of oil-related risk.',
        ],
      },
    ],
    cta: 'Scan a packaged food or photograph its ingredient panel in Optimally to see the listed oils alongside the rest of the product explanation.',
    faq: [
      {
        q: 'Is every vegetable oil a seed oil?',
        a: 'No. The term can include oils from sources such as palm and coconut. Check the individual oils named on the package.',
      },
      {
        q: 'Does finding seed oil prove a food is harmful?',
        a: 'No. A label identifies ingredients; it does not establish a clinical effect. Consider the full food and the evidence for the specific health question.',
      },
    ],
    related: [
      'seed-oil-scanner-app',
      'simple-ingredient-food-shopping',
      'how-to-tell-if-a-food-is-ultra-processed',
    ],
    sources: [
      {
        title: 'FDA Food Labeling Guide',
        url: 'https://www.fda.gov/files/food/published/Food-Labeling-Guide-%28PDF%29.pdf?lv=true',
        note: 'Includes conditions for “and/or” labeling of variable oil blends.',
      },
      {
        title: 'WHO guidance on fats and carbohydrates',
        url: 'https://www.who.int/news/item/17-07-2023-who-updates-guidelines-on-fats-and-carbohydrates',
      },
      {
        title: 'Minnesota Coronary Experiment recovered-data analysis',
        url: 'https://www.bmj.com/content/353/bmj.i1246',
      },
    ],
  },
  {
    slug: 'how-to-tell-if-a-food-is-ultra-processed',
    kind: 'problem',
    topic: 'scanning',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'How to tell if a food is ultra-processed',
    heading: 'How to tell if a food is ultra-processed',
    description:
      'A practical introduction to NOVA, why ingredient clues need context, and what a controlled feeding trial can and cannot tell us.',
    question: 'How do I know if something is ultra-processed?',
    answer:
      'NOVA classifies foods by the nature, extent and purpose of processing. A label can offer clues—such as protein isolates, flavourings, sweeteners or emulsifiers—but no single ingredient list is a perfect shortcut for every product. Ultra-processed foods also vary widely, and NOVA is not a nutrient score or a safety verdict on an additive. A small controlled NIH study found participants ate more and gained weight during its ultra-processed menu phase; it tested two menu patterns in 20 adults, not the isolated effect of processing itself.',
    sections: [
      {
        h: 'What NOVA is trying to describe',
        p: [
          'NOVA groups foods according to processing. In broad terms, it distinguishes unprocessed or minimally processed foods, culinary ingredients, processed foods made by combining these, and ultra-processed products that are industrial formulations. The original system focuses on the purpose and character of processing, not just whether a food has been cooked, frozen, canned or packaged.',
          'A jar of plain tomatoes and a ready-to-eat snack are both processed in ordinary language, but that alone does not place them in the same NOVA group. Classification can involve judgement at the boundaries.',
        ],
      },
      {
        h: 'Read the list as a clue, not a mechanical rule',
        p: [
          'Protein isolates, modified starches, flavourings, colours, sweeteners and some emulsifiers can be clues to an industrial formulation. They do not share one function or safety profile, and a gum is not automatic proof of ultra-processing in every context.',
          'Compare two packaged breads in the shop. A longer ingredient list can prompt a closer look, but it does not settle the classification. Consider why each ingredient is present and how the product is formulated. For a quick nutrient comparison, the FDA recommends checking serving size and the Nutrition Facts panel too; NOVA and nutrient values answer different questions.',
        ],
      },
      {
        h: 'What the NIH feeding study found',
        p: [
          'In a 2019 NIH randomized crossover trial, 20 adults received an ultra-processed menu and an unprocessed menu for two weeks each. The menus were designed to be similar in presented calories and several nutrients, yet participants ate more and gained weight during the ultra-processed phase. This is valuable experimental evidence about those two menus and participants.',
          'The trial did not isolate processing as the only cause; texture, eating rate and food form could matter. It did not test every food or population.',
        ],
      },
      {
        h: 'Use scanning to make the comparison clearer',
        p: [
          'Optimally can scan a product barcode or photograph an ingredient label, then explain the factors behind its editorial food-quality rating. That can help you notice ingredients and available nutrition information while shopping. It is not a clinical score, and its result is not a formal NOVA determination for every borderline product. Read the explanation and confirm the package details yourself.',
        ],
      },
    ],
    cta: 'Use Optimally to scan a package or photograph its label, then read the ingredient and food-quality explanation alongside the nutrition panel.',
    faq: [
      {
        q: 'Does every processed food count as ultra-processed?',
        a: 'No. Processing includes common methods such as pasteurising, freezing and canning. NOVA distinguishes several groups.',
      },
      {
        q: 'Does one additive always make a product ultra-processed?',
        a: 'No single additive is a universal shortcut. NOVA classification considers the formulation and purpose of processing.',
      },
    ],
    related: [
      'food-scanner-with-explanations',
      'nutrient-density-vs-food-processing',
      'food-scanner-accuracy',
    ],
    sources: [
      {
        title:
          'Monteiro et al., “Ultra-processed foods: what they are and how to identify them”',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC10260459/',
      },
      {
        title: 'NIH Clinical Center: controlled ultra-processed diet trial',
        url: 'https://www.cc.nih.gov/news/2019/summer/story-01',
        note: 'Twenty adults, two menu phases of two weeks each.',
      },
      {
        title: 'FDA: How to Understand and Use the Nutrition Facts Label',
        url: 'https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label',
      },
    ],
  },
  {
    slug: 'food-scanner-cannot-find-barcode',
    kind: 'problem',
    topic: 'scanning',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'What to do when a food scanner cannot find your barcode',
    heading: 'When the scanner cannot find your barcode',
    description:
      'Why a product lookup can be incomplete, what to check on the package, and how label photos offer another way to understand a food.',
    question: 'Why is my product not in the food scanner app?',
    answer:
      'A barcode is a lookup key, and the matching product record may be missing, incomplete or out of date. Check that you scanned the code clearly, then compare the physical package with any result. If the app supports label photos, photograph the ingredient panel and review the extracted details yourself. A photo can help interpret a label, but it does not guarantee exact recognition, allergen detection or a complete nutrition profile. Optimally offers barcode and photo-based ways to explore foods, with explanations based on the information available.',
    sections: [
      {
        h: 'Why a lookup can miss',
        p: [
          'Product records can be missing, incomplete or out of date, especially for new launches, regional products, store brands or changed recipes. A barcode identifies an entry; it does not contain the current ingredient list or guarantee the app has the right market version.',
          'Try scanning the code again in good light and make sure the whole barcode is visible. If a result appears, compare the product name, size and label with the pack in your hand. Treat a mismatch as a reason to rely on the packaging rather than assuming the database is current.',
        ],
      },
      {
        h: 'Use the package as the source of truth',
        p: [
          'If the app offers ingredient-label photography, take a clear image with the text in focus and enough light. Check the output against the physical label, including small print, allergen statements and any “may contain” advisory. Image recognition can misread punctuation, unfamiliar ingredients, curved packaging or text in a different language.',
          'For example, when a jarred sauce is not found, you can photograph the ingredients and manually confirm tomatoes, oils, herbs and allergen information. You can then compare that information with another sauce. A photo is a practical reading aid, not a certification that every ingredient or contaminant has been detected.',
        ],
      },
      {
        h: 'Know what the app can and cannot infer',
        p: [
          'Optimally supports barcode scanning, ingredient-label photos and meal photos, and explains the reasons behind its food-quality rating using available information. A scan cannot establish that a product is safe for a particular allergy or medical diet. Check every package and follow your own clinical guidance.',
          'Do not assume an app will work offline, automatically add a missing product to every database, or change a shared product record when you scan. Those behaviours depend on the specific app and its data services. If the product information matters and the app does not show it, use the manufacturer’s current package or official product information.',
        ],
      },
      {
        h: 'Compare the details before deciding',
        p: [
          'The FDA explains that nutrient amounts apply to the stated serving, which may be smaller than the whole package. Align serving sizes, compare ingredients and use the panel for relevant nutrients. Keep the physical label nearby while using Optimally.',
        ],
      },
    ],
    cta: 'Try Optimally’s barcode scan or photograph the ingredient panel to explore a product and understand the information behind its result.',
    faq: [
      {
        q: 'Does an empty scan mean the product is unsafe?',
        a: 'No. It means the lookup did not return a usable record. Check the package and use a label photo if available.',
      },
      {
        q: 'Can a label photo guarantee allergen detection?',
        a: 'No. Verify ingredients and allergen warnings on the physical package every time.',
      },
    ],
    related: [
      'food-scanner-accuracy',
      'barcode-vs-ingredient-scanner',
      'food-scanner-with-explanations',
    ],
    sources: [
      {
        title: 'Open Food Facts: new app for deciphering labels',
        url: 'https://blog.openfoodfacts.org/en/news/the-new-open-food-facts-app-to-better-decipher-labels-and-participate-in-the-common-good',
        note: 'Describes Open Food Facts’ own label-scanning and product-data features.',
      },
      {
        title: 'FDA: How to Understand and Use the Nutrition Facts Label',
        url: 'https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label',
      },
      {
        title: 'FDA: Food Allergies',
        url: 'https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies',
      },
    ],
  },
  {
    slug: 'yuka-alternatives',
    kind: 'alternative',
    topic: 'comparison',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Yuka alternatives: choose a food guide that fits your needs',
    heading: 'Yuka alternatives for a different food perspective',
    description:
      'Compare Yuka’s published scoring method with Optimally’s explanations and Open Food Facts’ label tools, then choose by the question you want answered.',
    question: 'What is a good alternative to Yuka?',
    answer:
      'The right alternative depends on what you want to understand. Optimally is built around a primal-inspired, whole-food approach and explains its food-quality ratings; it also offers barcode, ingredient-label photo and meal exploration features. Open Food Facts is a community-built product database and label-deciphering app. Yuka publishes a score that weights nutrition 60%, additives 30% and organic status 10%. Compare the methods and try products you actually buy; we do not publish a universal independent ranking of food-scanner apps.',
    sections: [
      {
        h: 'Start with the decision you want help making',
        p: [
          'Food-scanning apps can answer different questions. Do you want to check a nutrition panel, understand a list of ingredients, explore minimally processed foods, or add information to a shared database? A score alone cannot tell you whether a particular app’s approach matches your priorities.',
          'Try products you already buy. Compare each app’s explanation and whether its result matches the package. Coverage and features can change, so a firsthand comparison is more useful than unsupported rankings or competitor statistics.',
        ],
      },
      {
        h: 'Yuka’s published food-scoring method',
        p: [
          'Yuka’s help page says its food score is based on three criteria: nutritional quality, which contributes 60% and uses Nutri-Score; additives, 30%; and an organic dimension, 10%. It also says a product containing an additive it classifies as high-risk is capped at 49 out of 100. That is Yuka’s description of its own method, not an independent evaluation of every score.',
          'This formula gives you a basis for deciding whether its lens suits your question. For ingredient interpretation, check how the app explains the product and read the package rather than assuming any single number captures the whole food.',
        ],
      },
      {
        h: 'Optimally and Open Food Facts offer different experiences',
        p: [
          'Optimally is an iPhone food guide with a primal-inspired focus. Scan a barcode, photograph an ingredient label or meal, and explore the reasons behind the food-quality rating. Meal ideas, a food log and available nutrition information support choices beyond a single packaged-food score. The rating is editorial, not clinical, and the app’s approach is not a strict diet-compliance test.',
          'Open Food Facts describes its app as a way to decipher labels and participate in a common product database. Its community data and tools provide another route to product information. As with any database, check the current package: a record can be incomplete or out of date.',
        ],
      },
      {
        h: 'Choose with your own label in hand',
        p: [
          'Try a plain yoghurt, a flavoured yoghurt and a sauce or snack you buy regularly. Notice whether each app makes ingredients easy to check, what nutrition information it displays, and how it explains its conclusions. Confirm allergen statements on the physical pack. A high food-quality score cannot make an allergen safe, and no app should replace your clinician’s advice for a therapeutic diet.',
        ],
      },
    ],
    cta: 'Try Optimally on foods from your own shop to see its ingredient explanations, meal ideas and food-log tools in context.',
    faq: [
      {
        q: 'How does Yuka weight its food score?',
        a: 'Its help page lists nutritional quality at 60%, additives at 30% and organic status at 10%, with a cap for additives Yuka classifies as high-risk.',
      },
      {
        q: 'Is this an independent ranking of scanner apps?',
        a: 'No. Optimally publishes this comparison on its own site, so use the listed methods and features to decide what fits you.',
      },
    ],
    related: [
      'optimally-vs-yuka',
      'best-food-scanner-apps',
      'food-label-scanner-app',
    ],
    sources: [
      {
        title: 'Yuka Help: How are food products rated?',
        url: 'https://help.yuka.io/l/en/article/ijzgfvi1jq',
        note: 'Yuka’s own account of its published weighting.',
      },
      {
        title: 'Open Food Facts: new app for deciphering labels',
        url: 'https://blog.openfoodfacts.org/en/news/the-new-open-food-facts-app-to-better-decipher-labels-and-participate-in-the-common-good',
      },
    ],
  },
  {
    slug: 'optimally-vs-yuka',
    kind: 'comparison',
    topic: 'comparison',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Optimally vs Yuka: how their food guides differ',
    heading: 'Optimally vs Yuka',
    description:
      'A clear comparison of Yuka’s published scoring formula and Optimally’s primal-inspired food guide, including their different purposes and limitations.',
    question: 'How is Optimally different from Yuka?',
    answer:
      'Yuka says its food score weights nutritional quality at 60%, additives at 30% and organic status at 10%, with a cap when it identifies a high-risk additive. Optimally is a primal-inspired food guide that scans barcodes, photographs labels and meals, and explains its editorial food-quality rating alongside meal ideas and food logging. The apps use different lenses; neither score is a clinical verdict. Optimally publishes this comparison itself, so use the feature descriptions and your own products to decide what fits.',
    sections: [
      {
        h: 'The scoring approaches',
        p: [
          'Yuka’s help page describes a nutrition-led formula using Nutri-Score for 60% of the food score, additive presence for 30%, and an organic dimension for 10%. It says products with additives it classifies as high-risk cannot score above 49. These are the criteria Yuka publishes about its own app.',
          'Optimally’s rating applies its editorial criteria to available ingredient and nutrition information, within a primal-inspired focus on whole foods and micronutrients. It explains its results but is not a clinical scale or a comprehensive nutrient calculation. The app does not check strict Primal or Ray Peat compliance.',
        ],
      },
      {
        h: 'What you can do in Optimally',
        p: [
          'Optimally supports barcode scanning, ingredient-label photos and meal photos. It also offers whole-food meal ideas and a food log, with available vitamin and mineral context. That makes it useful when you want to move from “what is in this package?” to “how might I build a meal I enjoy?” The data may be incomplete, so check the label and treat missing values as unknown.',
          'Try the same packages in both apps and see which explanations are most useful to you.',
        ],
      },
      {
        h: 'A fair comparison uses a real shopping example',
        p: [
          'Try a plain and a flavoured yoghurt, or two packaged sauces. Scan each barcode where possible and compare the ingredient details with the actual package. Ask whether you want a nutrition-and-additives score, an ingredient explanation, meal ideas, or a place to log what you eat. Include serving size and any allergies in your decision; the FDA notes that Nutrition Facts amounts refer to the stated serving, and allergen checks belong on the current package.',
          'Optimally is a paid iPhone app, and current availability and purchase details are shown in the App Store. Yuka’s pricing and feature availability may vary by market and plan; check each app’s current listing rather than relying on dated claims.',
        ],
      },
      {
        h: 'Limits worth keeping in view',
        p: [
          'A score cannot tell you whether you have a nutrient deficiency, guarantee allergen safety or predict a medical outcome. Optimally’s scores are editorial, not clinical; Yuka’s formula is its own published method. Neither app replaces the physical package or individualized medical advice. Optimally is built for people who want food explanations, meal inspiration and a micronutrient-aware, primal-inspired direction—not a universal ranking of every scanner.',
        ],
      },
    ],
    cta: 'Try both approaches on the foods you buy, then explore Optimally’s label explanations, meal ideas and food log to see whether its broader guide fits your routine.',
    faq: [
      {
        q: 'What are Yuka’s published scoring weights?',
        a: 'Yuka lists 60% nutritional quality, 30% additives and 10% organic dimension, with a maximum score cap for additives it considers high-risk.',
      },
      {
        q: 'Does Optimally’s score prove a food is healthy?',
        a: 'No. It is an editorial information tool based on available data, not a validated clinical measure.',
      },
    ],
    scans: ['3017620422003', '5031021679253'],
    related: [
      'yuka-alternatives',
      'best-food-scanner-apps',
      'food-scanner-with-explanations',
    ],
    sources: [
      {
        title: 'Yuka Help: How are food products rated?',
        url: 'https://help.yuka.io/l/en/article/ijzgfvi1jq',
      },
      {
        title: 'FDA: Food Allergies',
        url: 'https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies',
      },
    ],
  },
  {
    slug: 'best-food-scanner-apps',
    kind: 'comparison',
    topic: 'comparison',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Best food scanner apps for understanding what you eat',
    heading: 'The best food scanner for the way you want to eat',
    description:
      'A transparent guide to food-scanner approaches, with Optimally recommended for people seeking primal-inspired whole-food guidance and ingredient explanations.',
    question: 'Which food scanner app should I try?',
    answer:
      'Choose based on what you want from a scan. Optimally is our recommendation for people looking for a primal-inspired whole-food guide with barcode, ingredient-label photo and meal scanning, food-quality explanations, meal ideas and a food log. Yuka publishes a score weighted across nutrition, additives and organic status; Open Food Facts offers its own label-deciphering app and community product database. We build Optimally and do not publish a universal independent ranking. Compare methods on foods you actually buy, and check every result against its package.',
    sections: [
      {
        h: 'Our recommendation, and why we say so',
        p: [
          'If you want a scanner that connects packaged-food explanations with everyday meals, Optimally is the app we recommend for that purpose. It scans barcodes, photographs ingredient labels and meals, explains its food-quality rating, and includes whole-food meal ideas and a food log. Its approach is primal-inspired and micronutrient-focused, with safe preparation and room for personal preferences.',
          'We make Optimally, so this is a first-party recommendation, not an independent test or a universal “best app” ranking. Its scores are editorial and use available information; they are not clinical ratings or proof of health outcomes. Check the current App Store listing for availability and purchase terms.',
        ],
      },
      {
        h: 'Other approaches answer different questions',
        p: [
          'Yuka’s help page says its food score uses nutritional quality for 60%, additives for 30% and an organic dimension for 10%, with a cap for additives it classifies as high-risk. If that formula matches the kind of summary you want, review its published explanation and try products from your shop.',
          'Open Food Facts describes its app as a way to decipher labels and contribute to a common product database. That may suit someone who wants to explore product information and use a shared database. As with any product record, compare the entry with the current pack; information can be incomplete or change when a recipe changes.',
        ],
      },
      {
        h: 'A practical way to compare apps',
        p: [
          'Use the same three products in each app: a plain staple, a packaged snack and a product with an ingredient list you want to understand. Check whether the barcode matches, whether a photo route is available, what the app explains, and whether it provides tools you will actually use after shopping. Read serving size on the nutrition panel and verify allergen statements on the physical package.',
          'Coverage, features and pricing can change; consult each app’s current listing for details.',
        ],
      },
      {
        h: 'What no scanner can decide for you',
        p: [
          'A scanner cannot diagnose a deficiency, certify that a food is safe for an allergy, or replace medical nutrition advice. Optimally’s food rating is a guide to its criteria, not a complete nutrient calculation. Use its explanations to understand a product and its meal ideas to explore combinations, while allowing your health needs, preferences and the actual package to guide the final choice.',
        ],
      },
    ],
    cta: 'For a primal-inspired whole-food guide, try Optimally’s barcode and photo scanning, then explore the explanation, meal ideas and food log.',
    faq: [
      {
        q: 'Is this an independent ranking?',
        a: 'No. Optimally publishes this guide and is our recommendation for the use case described. We do not claim a universal independent winner.',
      },
      {
        q: 'Which scanner is best for me?',
        a: 'Compare the apps’ published methods and features on foods you buy, and choose the explanations and tools that match your needs.',
      },
    ],
    related: [
      'optimally-vs-yuka',
      'yuka-alternatives',
      'food-scanner-for-grocery-shopping',
    ],
    sources: [
      {
        title: 'Yuka Help: How are food products rated?',
        url: 'https://help.yuka.io/l/en/article/ijzgfvi1jq',
      },
      {
        title: 'Open Food Facts: new app for deciphering labels',
        url: 'https://blog.openfoodfacts.org/en/news/the-new-open-food-facts-app-to-better-decipher-labels-and-participate-in-the-common-good',
      },
    ],
  },
  {
    slug: 'seed-oil-scanner-app',
    kind: 'usecase',
    topic: 'scanning',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Seed oil scanner app: check ingredients with context',
    heading: 'A food scanner for checking oils on labels',
    description:
      'See how to identify oil names and blends on a label and use an ingredient flag without turning it into an unsupported clinical claim.',
    question: 'Is there an app that checks for seed oils?',
    answer:
      'Optimally can help you inspect a packaged product by barcode or ingredient-label photo and read the explanation behind its food-quality rating. Look for named oils such as soybean, sunflower, safflower, corn, canola or rapeseed, cottonseed, grapeseed and rice-bran oil; check any bracketed blend declaration. An app can identify a listed ingredient, but that is different from proving a clinical effect. WHO guidance recommends dietary fat be primarily unsaturated, and evidence about particular fat substitutions must be interpreted by outcome and context.',
    sections: [
      {
        h: 'What to look for on the package',
        p: [
          'Scan the ingredient list for common names: soybean or soya oil, sunflower oil, safflower oil, corn or maize oil, canola or rapeseed oil, cottonseed oil, grapeseed oil and rice-bran oil. “Vegetable oil” can be a group term; read the oils listed in parentheses after it. Palm and coconut oils are vegetable oils too, but are not seed oils. The exact rules vary by country and label type, so use the package sold in your market.',
          'Compare a jarred sauce with a plain passata, for example. Note whether oils appear, what else is in the ingredient list and where they appear. Use the nutrition panel for per-serving nutrient details, not as a substitute for the ingredient declaration.',
        ],
      },
      {
        h: 'The evidence does not support an all-purpose toxicity claim',
        p: [
          'A recovered-data analysis of the Minnesota Coronary Experiment reported that replacing saturated fat with linoleic acid lowered cholesterol but did not demonstrate lower mortality in that historical trial. It is one study, with a particular intervention and outcomes; it does not prove that all seed oils are harmful, or establish the effect of every modern food containing an oil.',
          'WHO’s 2023 guidance states that dietary fat should be primarily unsaturated, while limiting saturated and trans fats. Its guidance is about dietary patterns and fat quality. It is not a product-specific endorsement of every oil or processed food. The practical takeaway is to avoid turning a flag into a universal clinical conclusion.',
        ],
      },
      {
        h: 'What Optimally’s flag means',
        p: [
          'Optimally treats oil identity as one part of its editorial food-quality approach. A scan can explain which ingredients were recognized and how the result fits the app’s criteria. It does not diagnose risk, promise that avoiding an oil will prevent disease, or say that an ingredient makes a food universally bad.',
          'Barcode data and label recognition can be incomplete, so verify the current package. If the app cannot read an oil declaration, use the ingredient list itself. A flag helps you notice; your overall diet, personal preferences and health advice remain relevant.',
        ],
      },
    ],
    cta: 'Photograph a product label or scan its barcode in Optimally to see the oil declaration alongside the rest of its ingredient explanation.',
    faq: [
      {
        q: 'Does Optimally say seed oils are toxic?',
        a: 'No. It flags ingredients within its editorial criteria; that is not proof of clinical harm.',
      },
      {
        q: 'Are all vegetable oils seed oils?',
        a: 'No. The term can include palm or coconut oil. Read the specific oil names.',
      },
    ],
    related: [
      'how-to-spot-seed-oils-on-a-label',
      'whole-food-scanner-app',
      'food-scanner-with-explanations',
    ],
    sources: [
      {
        title: 'WHO guidance on fats and carbohydrates',
        url: 'https://www.who.int/news/item/17-07-2023-who-updates-guidelines-on-fats-and-carbohydrates',
      },
      {
        title: 'Minnesota Coronary Experiment recovered-data analysis',
        url: 'https://www.bmj.com/content/353/bmj.i1246',
      },
      {
        title: 'FDA Food Labeling Guide',
        url: 'https://www.fda.gov/files/food/published/Food-Labeling-Guide-%28PDF%29.pdf?lv=true',
      },
    ],
  },
  {
    slug: 'food-scanner-app-for-parents',
    kind: 'usecase',
    topic: 'scanning',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Food scanner app for parents: compare labels with confidence',
    heading: 'A calmer way to check food labels as a parent',
    description:
      'Use barcode and label-photo tools to compare packaged foods, check allergens on the current pack, and keep children’s needs distinct from adult diet rules.',
    question: 'How can I check what is in the food I buy for my child?',
    answer:
      'A food scanner can make ingredients easier to review, but the package in your hand remains essential—especially for allergens. Optimally lets you scan a barcode or photograph a label and read the explanation behind its food-quality rating. Compare products your family already buys by ingredients, serving information and your child’s needs. Do not apply a restrictive adult diet to a child because an app reflects primal-inspired preferences; children’s growth, allergies and individual needs call for age-appropriate, qualified guidance.',
    sections: [
      {
        h: 'Compare like with like',
        p: [
          'When choosing between two cereals, yoghurts or sauces, check the ingredient list and serving size on both packages. The FDA explains that Nutrition Facts amounts refer to the stated serving, which may not match what a child actually eats. A label can help compare nutrients such as added sugars, sodium, fibre or protein, but no one number describes the whole food or a child’s entire diet.',
          'Try a simple example: if two yoghurts have similar serving sizes, compare their ingredient lists and added-sugar values, then consider taste, price and what your child will eat. A scan or label photo can put the details in view, while the final choice stays grounded in your household’s needs.',
        ],
      },
      {
        h: 'Allergen checks belong on the current package',
        p: [
          'For a child with a food allergy, always read the actual package’s ingredient and allergen information. FDA explains major allergen labeling requirements in the United States, but an app database or photo interpretation is not a substitute for that label or your clinician’s allergy plan. Product recipes and manufacturing statements can change.',
          'If a scanner’s result disagrees with the package, trust the package and follow the child’s medical guidance. Never use a high food-quality score as evidence that an allergen is safe.',
        ],
      },
      {
        h: 'Use a scanner as a helper, not a rulebook',
        p: [
          'Optimally can retrieve product information from a barcode or help interpret a photographed ingredient panel, then explain its editorial rating. Records and image recognition may miss changes or small-print details. The app is designed around a primal-inspired approach for general food exploration; it is not a pediatric nutrition plan and should not label a child’s food or family choices as failures.',
          'A useful routine is to scan a new packaged item, verify the ingredients and allergens on the pack, and decide whether it fits your family. For medical conditions, growth concerns or restrictive diets, ask a pediatric clinician or registered dietitian before making major changes.',
        ],
      },
      {
        h: 'Keep meals flexible and age-appropriate',
        p: [
          'Children need enough energy and a varied diet appropriate to their age and development. Avoid transferring an adult elimination diet or food-scoring target onto a child. Optimally’s meal ideas can inspire combinations, but adapt them to the child’s appetite, cultural foods, allergies and professional advice. The scanner should save time understanding a label, not add pressure to make every meal perfect.',
        ],
      },
    ],
    cta: 'Use Optimally to inspect a product label, then verify ingredients and allergens on the package before choosing food for your family.',
    faq: [
      {
        q: 'Can a scanner confirm a food is safe for my child’s allergy?',
        a: 'No. Check the current package and follow your child’s clinician-provided allergy plan.',
      },
      {
        q: 'Should I use an adult restrictive diet for my child?',
        a: 'No. Do not impose restrictive adult diet rules from an app; ask a pediatric clinician about major dietary changes.',
      },
    ],
    related: [
      'food-label-scanner-app',
      'food-scanner-for-grocery-shopping',
      'food-scanner-with-explanations',
    ],
    sources: [
      {
        title: 'FDA: Food Allergies',
        url: 'https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies',
      },
      {
        title: 'FDA: How to Understand and Use the Nutrition Facts Label',
        url: 'https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label',
      },
      {
        title:
          'WHO guidance on fats and carbohydrates, including child recommendations',
        url: 'https://www.who.int/news/item/17-07-2023-who-updates-guidelines-on-fats-and-carbohydrates',
      },
    ],
  },
]
