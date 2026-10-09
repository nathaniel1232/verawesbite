import type { Guide } from './guides'

/** Practical guides for choosing and using a food scanner in everyday settings. */
export const SCANNING_GUIDES: Guide[] = [
  {
    slug: 'food-label-scanner-app',
    kind: 'usecase',
    title: 'Food label scanner app: how to read a product before you buy it',
    heading: 'A food label scanner that helps you read the whole pack',
    description:
      'How to use a food label scanner to check ingredients, nutrition context, and personal exclusions without treating one score as a medical verdict.',
    question: 'What should a food label scanner tell me?',
    answer:
      'A useful food label scanner should help you inspect the ingredients, show what is known and where the information came from, and explain its rating in plain language. Use the pack in your hand as the final reference: product databases can be incomplete or out of date, and a score cannot confirm an allergen is safe for you. Optimally combines barcode lookup with label-photo scanning, then applies its stated food-quality criteria and shows why a product received its rating.',
    sections: [
      {
        h: 'Read the ingredients before the front-of-pack claims',
        p: [
          'Start with the ingredient list, not the marketing on the front. In the UK, ingredients are generally listed in descending order by weight, subject to exceptions. That makes the first few entries a useful clue to what makes up most of a packaged food, though it does not tell you the exact amount of each ingredient.',
          'Then check the nutrition panel for the questions that matter to you: serving size, protein, energy, or a particular nutrient. In the United States, FDA guidance says the Nutrition Facts information is usually based on one serving, and some containers also show per-package values. A serving is a reference amount, not advice about how much you personally should eat.',
        ],
      },
      {
        h: 'What a scanner can add',
        p: [
          'A barcode gives an app a route to a product record. If that record includes ingredients and nutrition values, you can review them without typing everything out. A label photo is useful when a barcode record is missing or does not include the ingredient panel. Optimally supports both routes and explains ingredient-level ratings, processing flags, and relevant food context rather than showing an unexplained pass/fail alone.',
          'For example, when choosing between two tubs of plain yogurt, look beyond a front label such as “high protein.” Compare the ingredient lists, check the serving basis of the nutrition panel, and see whether one includes extra sweeteners or thickeners. The app can organize that information; you still decide which trade-off fits your meal and preferences.',
        ],
      },
      {
        h: 'Where the number stops',
        p: [
          'Optimally’s score is an editorial guide based on the information available and the app’s stated criteria. It is not a clinically validated health scale or a complete measure of micronutrient density. A product can have missing nutrient fields; missing data must not be read as zero. A high score also does not mean a product is suitable for every person or every purpose.',
          'Open Food Facts is a community-maintained product database. Its own documentation cautions that user-contributed data may be inaccurate, incomplete, or unreliable. Product formulations and packaging can change. If the scanned record conflicts with the physical label, trust the current pack for its ingredients and allergens and report the discrepancy through the app when possible.',
        ],
      },
      {
        h: 'A careful label-checking routine',
        p: [
          '- Scan the barcode, then compare the listed product name and pack image with the item you are holding.',
          '- Open the ingredient list and look for the ingredients you care about, including any declared allergens.',
          '- Check the nutrition panel’s units and serving basis before comparing numbers.',
          '- Treat unclear, missing, or conflicting information as a prompt to inspect the package, not as reassurance.',
        ],
      },
    ],
    cta: 'Scan a packaged food in Optimally and open the ingredient breakdown to see how each part contributes to the app’s explanation.',
    faq: [
      {
        q: 'Can a scanner guarantee a product is allergen-free?',
        a: 'No. Database entries and photos may be incomplete or stale. Read the label on the exact pack and follow your allergy plan; an app score is not medical clearance.',
      },
      {
        q: 'Does a higher score mean a food has more of every micronutrient?',
        a: 'No. It reflects Optimally’s editorial criteria and available data, not a comprehensive micronutrient-density calculation or a clinical measure.',
      },
    ],
    related: [
      'barcode-vs-ingredient-scanner',
      'food-scanner-with-explanations',
      'food-scanner-accuracy',
    ],
    sources: [
      {
        title: 'FDA: Serving Size on the Nutrition Facts Label',
        url: 'https://www.fda.gov/food/nutrition-facts-label/serving-size-nutrition-facts-label',
        note: 'Serving basis and per-package context.',
      },
      {
        title: 'GOV.UK: Food labelling and packaging — ingredients list',
        url: 'https://www.gov.uk/food-labelling-and-packaging/ingredients-list',
        note: 'UK ingredient-list order and allergen emphasis.',
      },
      {
        title: 'Open Food Facts API overview',
        url: 'https://openfoodfacts.github.io/documentation/docs/Product-Opener/api/',
        note: 'Community contribution and data-quality caveat.',
      },
    ],
    topic: 'scanning',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
  },
  {
    slug: 'meal-photo-scanner-app',
    kind: 'usecase',
    title: 'Meal photo scanner app: what a picture can and cannot tell you',
    heading: 'Using a meal photo scanner with realistic expectations',
    description:
      'A practical guide to photo-based meal logging, estimated portions, and when to correct the result before saving it.',
    question: 'Can I use a photo to log a meal?',
    answer:
      'A meal photo scanner can identify likely foods and estimate portions, which makes a food log faster to start. A photograph cannot reveal exact ingredients, hidden oils, recipe quantities, or precise weight, so treat the result as an estimate and correct it when you know more. Optimally can turn a meal photo into editable food components and portion estimates, then place the meal in your food log with an explanation of the result.',
    sections: [
      {
        h: 'What the camera sees',
        p: [
          'A picture gives useful visual evidence: a fillet of salmon, potatoes, a side of carrots, or a bowl with yogurt and fruit may be distinguishable. The app can use those visible cues to suggest components and estimate edible portions. It cannot see what is under a sauce, whether the potatoes were cooked in butter or oil, or how much salt went into a recipe.',
          'That distinction matters because a photo is not a weighed food record. Perspective, plate size, occlusion, lighting, and the density of a food all affect how much can be inferred from pixels. A large-looking mound of leafy greens may weigh less than a smaller portion of dense meat. A model may also mistake similar-looking foods.',
        ],
      },
      {
        h: 'Make the estimate useful, not falsely precise',
        p: [
          'Imagine a plate with two eggs, a small potato, and berries. If the photo result identifies those foods but estimates a much larger potato than you ate, edit the portion before saving. If you cooked the eggs in butter and know roughly how much you used, add that detail where the app allows. If you do not know, leave the uncertainty visible rather than inventing a precise amount.',
          'Optimally’s meal flow presents component portions that can be adjusted. Its nutrition totals use reference values scaled to those portions, so changing a portion changes the estimate. That is more informative than a generic plate score, but it still inherits uncertainty from both the visual estimate and the underlying food-reference data.',
        ],
      },
      {
        h: 'Use photos for patterns over time',
        p: [
          'A food log can help you notice practical patterns: whether lunch usually includes a substantial protein source, which meals keep you satisfied, or which recipes you return to. The log is more useful when entries are consistent enough for your purpose. If you need clinical precision for a medical condition, a photo-based estimate is not a substitute for a clinician’s or dietitian’s guidance.',
          'For a packaged food, a photo of the ingredient panel is a different task from photographing a plated meal. Optimally’s photo flow can read a meal or a visible packaged-food label. For a pack, the app distinguishes information transcribed from the label from a recalled product formulation; that source distinction helps you understand how direct the evidence is.',
        ],
      },
      {
        h: 'A quick review before saving',
        p: [
          '- Check that each suggested component was actually on your plate.',
          '- Adjust portions that look clearly too large or too small.',
          '- Add known cooking fats, sauces, or ingredients if the log supports them.',
          '- Save the entry as an estimate when exact amounts are unknown, and use the food log to review broader habits rather than overread one meal.',
        ],
      },
    ],
    cta: 'Photograph a meal in Optimally, review its suggested components and portions, and save the corrected meal to your food log.',
    faq: [
      {
        q: 'Will a meal photo identify every ingredient?',
        a: 'No. A photo cannot reliably reveal hidden ingredients, cooking methods, or exact amounts. Review the suggested foods and add details you know.',
      },
      {
        q: 'Are the calories and nutrients exact?',
        a: 'No. They are estimates based on identified components, estimated portions, and food-reference values. Use them as approximate logging context.',
      },
    ],
    related: [
      'food-scanner-with-explanations',
      'food-scanner-accuracy',
      'food-scanner-for-home-cooking',
    ],
    sources: [
      {
        title: 'USDA FoodData Central: About the data',
        url: 'https://fdc.nal.usda.gov/about-us/',
        note: 'Food-composition datasets have distinct purposes and methods.',
      },
      {
        title: 'USDA FoodData Central: Download datasets',
        url: 'https://fdc.nal.usda.gov/download-datasets/',
        note: 'Data types, field definitions, and release information.',
      },
    ],
    topic: 'scanning',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
  },
  {
    slug: 'barcode-vs-ingredient-scanner',
    kind: 'comparison',
    title: 'Barcode scanner vs ingredient scanner: which should you use?',
    heading: 'Barcode lookup or ingredient scan? Choose the evidence you have',
    description:
      'Understand the difference between scanning a barcode and reading a product’s ingredient panel, including what to do when records disagree.',
    question: 'Is a barcode scan the same as an ingredient scan?',
    answer:
      'No. A barcode scan looks up a product record associated with that code; it does not itself read the current package’s ingredients. An ingredient scan reads a label image or text. Barcode lookup is quick when the record is complete and matches your pack. A label scan is useful when a record is missing or you want to check what is printed on the item in front of you. Optimally offers both paths and labels the source of photo-read ingredient information.',
    sections: [
      {
        h: 'A barcode is a lookup key',
        p: [
          'When you scan a barcode, an app sends the code to a product database and retrieves whatever record is available. That record may include the name, brand, package photo, ingredients, nutrition panel, or none of those fields. A successful lookup therefore means that some record matched; it does not prove every field is current or complete.',
          'Open Food Facts documents barcode-based product retrieval through its API and explains that its database is voluntarily populated. That collaborative model makes broad reuse possible, while also meaning data quality varies by record. A new product, local version, or changed recipe can be missing or stale.',
        ],
      },
      {
        h: 'An ingredient scan reads the pack itself',
        p: [
          'A photo of the ingredient panel gives the app a view of the printed information on the package you chose. The photo still has limits: glare, folds, tiny type, a cropped panel, or an unfamiliar language can affect recognition. A recognized string should be checked against the label if a word matters to you.',
          'Optimally’s product-photo flow can distinguish ingredients transcribed from a visible panel from a formulation recalled for a named product. That difference matters. The former is an attempt to read this package; the latter is not direct evidence from the item in your hand. If the scan shows a different formula or leaves an ingredient unclear, use the printed label.',
        ],
      },
      {
        h: 'Which route fits the moment?',
        p: [
          'At the grocery shelf, try the barcode first when you want a quick overview. Confirm the name and image match the package. If the record lacks ingredients or looks like a different regional version, photograph the label. For a product without a barcode, use a label photo if the app supports it. For a whole food such as an apple or a carrot, a packaged-food ingredient panel is not the relevant evidence; use a food or meal entry instead.',
          'For example, two jars with the same brand may have a “classic” and “reduced sugar” recipe. The barcode should distinguish the specific product if the database has separate records, but the visible ingredient and nutrition panels settle the question for the actual jar. Compare like with like: serving basis, package size, and recipe version.',
        ],
      },
      {
        h: 'Allergens and data conflicts',
        p: [
          'For allergies, the physical packaging is authoritative for the item you are about to eat. Regulations differ by country, and precautionary statements about cross-contact are not interchangeable with an ingredient list. Optimally can retain personal exclusions to shape suggestions, but a database match or high score does not provide medical clearance.',
          'If you find a mismatch, do not assume the scan is correct because it returned a result. Check the pack, and use the app’s data-reporting path where available so the underlying record can be reviewed. If it is a safety-critical uncertainty, put the product aside until you can verify it with the manufacturer or another reliable source.',
        ],
      },
    ],
    cta: 'Try the barcode lookup in Optimally, then use a clear photo of the ingredient panel when the record does not match the item you are holding.',
    faq: [
      {
        q: 'Does the barcode contain the ingredients?',
        a: 'A barcode functions as an identifier for a database lookup. The ingredient information comes from a product record or from reading the package label.',
      },
      {
        q: 'Which is more accurate?',
        a: 'For the exact package in front of you, a clearly readable current label is the best direct reference. A database lookup is faster when its record is complete and current.',
      },
    ],
    related: [
      'food-label-scanner-app',
      'food-scanner-accuracy',
      'food-scanner-for-grocery-shopping',
    ],
    sources: [
      {
        title: 'Open Food Facts: Get Product Data by barcode',
        url: 'https://openfoodfacts.github.io/documentation/docs/Product-Opener/v3/products/get-api-v3-product-code/',
        note: 'Barcode lookup retrieves a product record.',
      },
      {
        title: 'Open Food Facts API overview',
        url: 'https://openfoodfacts.github.io/documentation/docs/Product-Opener/api/',
        note: 'Voluntary contributions and completeness caveat.',
      },
      {
        title: 'GOV.UK: Food labelling and packaging — ingredients list',
        url: 'https://www.gov.uk/food-labelling-and-packaging/ingredients-list',
        note: 'Ingredients and allergen labelling.',
      },
    ],
    topic: 'scanning',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
  },
  {
    slug: 'food-scanner-with-explanations',
    kind: 'usecase',
    title: 'Food scanner with explanations: what a score should show you',
    heading: 'A food scanner should explain the result, not just give a number',
    description:
      'How to evaluate food-scanner explanations, separate evidence from editorial rules, and use an app score without turning it into a health diagnosis.',
    question: 'What makes a food scanner explanation useful?',
    answer:
      'A useful explanation shows which information the app used, what rule affected the result, and what the rating does not establish. Optimally combines a consistent ingredient-rating table with explanations for product scans, alongside meal ideas, staples, recipes, and a food log. Its score is an editorial guide informed by food composition and its stated approach; it is not a clinical outcome or a complete micronutrient-density calculation.',
    sections: [
      {
        h: 'Ask “why this result?”',
        p: [
          'A number without a reason is hard to use. If two products differ, you need to know whether the app noticed a different ingredient, a processing marker, missing nutrition information, or a different serving basis. Explanations help turn “this is better” into something you can examine and decide whether you agree with.',
          'A good breakdown distinguishes product facts from the app’s judgment. The printed ingredient list is a product fact. A score assigned under a particular set of food-quality rules is an editorial interpretation. A nutrient amount taken from a reference table is a third kind of information. Combining these without naming them makes a result sound more certain than it is.',
        ],
      },
      {
        h: 'Consistency helps you compare',
        p: [
          'Optimally uses a fixed ingredient-rating framework, so the same recognized ingredient is evaluated under the same rule rather than asking a generative model to invent a new verdict each time. The ingredient explanation can be opened to see the reasons behind a result. That makes a disagreement inspectable: you can question a rule, check the cited rationale, or report a product-data problem.',
          'Fixed rules are not automatically correct. They can be incomplete, and a database can supply the wrong ingredient list. The value is that the decision is repeatable and visible, not that it is beyond challenge. A consistent system still needs correction when its source data or editorial calibration is wrong.',
        ],
      },
      {
        h: 'Understand the score’s frame',
        p: [
          'Optimally’s approach is primal-inspired and micronutrient-focused, with attention to eggs, meat, fish, tolerated dairy, whole fruit, and selected roots. It is one app approach, not a selector for choosing between dietary identities. The product score reflects its editorial criteria; it has not been clinically validated as a measure of future health.',
          'Nor is the number a comprehensive measure of micronutrient density. Some product records contain more nutrient fields than others, and missing fields do not mean a food contains none. Whole-food status alone does not guarantee the highest rating: an apple can be a useful food while contributing less protein and a narrower spread of vitamins and minerals than some staple foods. The score is not a statement that the apple is harmful.',
        ],
      },
      {
        h: 'Use explanations to make a decision',
        p: [
          'Suppose you are comparing two canned fish products. One has fish and salt; the other adds a sauce and oil. Open the ingredient details, check whether the record matches the can, and read what influenced the score. If you need a nutrient quantity, inspect the label or the app’s specific nutrient values. If you prefer the taste or convenience of the lower-rated product, that can still be a reasonable choice.',
          'Then connect the scan to daily use: add a suitable item to your food log, browse a recipe that uses it, or keep a staple in mind for your next shop. A scanner is most useful when it helps build meals and routines, not when it turns every purchase into a test.',
        ],
      },
    ],
    cta: 'Open an Optimally scan’s ingredient explanations, then use the food log or a recipe to carry that understanding into a meal.',
    faq: [
      {
        q: 'Is the score a medical or clinical rating?',
        a: 'No. It is an editorial guide using Optimally’s food criteria and available product information, not a clinically validated health scale.',
      },
      {
        q: 'Can the same food get a different result?',
        a: 'The ingredient rules are consistent, but incomplete or incorrect product data can change what is evaluated. Check the pack when the record looks wrong.',
      },
    ],
    related: [
      'how-optimally-food-scores-work',
      'food-label-scanner-app',
      'food-scanner-accuracy',
    ],
    sources: [
      {
        title: 'Open Food Facts API overview',
        url: 'https://openfoodfacts.github.io/documentation/docs/Product-Opener/api/',
        note: 'Community-supplied data may be incomplete or unreliable.',
      },
      {
        title: 'USDA FoodData Central: About the data',
        url: 'https://fdc.nal.usda.gov/about-us/',
        note: 'Food-composition data uses multiple dataset types and methods.',
      },
    ],
    topic: 'scanning',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
  },
  {
    slug: 'food-scanner-for-home-cooking',
    kind: 'usecase',
    title: 'Food scanner for home cooking: build meals from ingredients',
    heading: 'A food scanner for the kitchen, not just the aisle',
    description:
      'Use food scanning, recipes, staple ideas, and a meal log to make home cooking easier to understand without pretending a photo reveals every recipe detail.',
    question: 'Can a food scanner help when I cook at home?',
    answer:
      'Yes. A food scanner can help you understand packaged ingredients, estimate a photographed meal, and connect food choices with recipes or staple ideas. For home cooking, the most reliable result comes from combining the app’s estimate with what you know went into the dish. Optimally pairs meal-photo logging with recipes and everyday staple suggestions, while leaving portions adjustable and keeping uncertainty visible.',
    sections: [
      {
        h: 'A photo is a starting point for a recipe',
        p: [
          'A plated meal photo may identify visible components such as eggs, potatoes, fish, or fruit. That can save time when adding a meal to a food log. But the image cannot reveal the recipe you followed: it cannot tell whether a pan held a spoonful of oil, whether the soup used stock, or how much salt was added.',
          'So treat the detected foods as a draft. If you cooked a salmon tray bake with potatoes and carrots, review each suggested component, adjust its portion, and include known cooking ingredients where the flow permits. If the app estimates 180 grams of fish but you served a smaller piece, correct it before relying on the nutrition summary.',
        ],
      },
      {
        h: 'Use recipes to reduce decision friction',
        p: [
          'A recipe library can bridge the gap between a scan and your next dinner. Choose a recipe based on what you enjoy, what you have, and what you tolerate. Optimally’s recipe collection includes familiar combinations such as eggs with fruit, chicken with sweet potato, salmon with potatoes, and other dishes across different ingredients. A recipe idea is a practical starting point, not a claim that one diet identity is required.',
          'The app’s primal-inspired perspective gives extra attention to animal foods, fruit, dairy when tolerated, and selected roots, while still making room for varied ingredients. You do not need to interpret that as a strict protocol or follow any author’s raw-food advice. Optimally’s recommendations use safe preparation, and food safety remains separate from a food-quality score.',
        ],
      },
      {
        h: 'Keep a short list of staples',
        p: [
          'Home cooking often gets easier when a few dependable foods are available. Eggs can become a quick meal; plain yogurt and fruit can make a simple breakfast; potatoes or carrots can round out a plate; fish or meat can anchor a larger meal. These are examples of options, not prescriptions. Allergies, preferences, budget, culture, and appetite all shape what works in your own kitchen.',
          'Optimally’s staple suggestions are there to make it easier to explore these categories. Its recipe and staple content does not tell you that every selected food is suitable for every person. Use personal exclusions and ingredient information to guide ideas, and seek qualified advice when managing a diagnosed condition.',
        ],
      },
      {
        h: 'Turn the log into a useful record',
        p: [
          'A food log is strongest when it answers a question you actually have: which breakfasts are satisfying, whether you usually include a protein source, or what ingredients appear in meals you enjoy. It need not be perfect to be useful for reflection. If you are tracking a medical diet or a nutrient target, use an appropriate professional’s guidance and remember that reference values and photo estimates have limits.',
          'When you scan a packaged ingredient used in a recipe, the barcode or label-photo flow can explain that product separately. For a recipe made from whole ingredients, the meal photo is an estimate of the plated result. These two kinds of scan provide different evidence, so keep the label check and the meal estimate distinct.',
        ],
      },
    ],
    cta: 'Choose an Optimally recipe, photograph the meal you make, adjust the suggested portions, and save it to your log.',
    faq: [
      {
        q: 'Can the app infer my full recipe from a meal photo?',
        a: 'No. It can suggest visible meal components and estimated portions, but it cannot reliably identify hidden ingredients or the amounts used in cooking.',
      },
      {
        q: 'Do I need to follow a strict Primal or Ray Peat diet?',
        a: 'No. Optimally presents one inspired approach and leaves room for your preferences and exclusions; it is not a diet-identity selector.',
      },
    ],
    related: [
      'meal-photo-scanner-app',
      'food-scanner-with-explanations',
      'food-scanner-for-grocery-shopping',
    ],
    sources: [
      {
        title: 'USDA FoodData Central: About the data',
        url: 'https://fdc.nal.usda.gov/about-us/',
        note: 'Reference composition values come from datasets with different methods.',
      },
      {
        title: 'USDA FoodData Central: Download datasets',
        url: 'https://fdc.nal.usda.gov/download-datasets/',
        note: 'Dataset definitions and field documentation.',
      },
    ],
    topic: 'scanning',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
  },
  {
    slug: 'food-scanner-for-grocery-shopping',
    kind: 'usecase',
    title: 'Food scanner for grocery shopping: a calmer aisle routine',
    heading: 'Use a food scanner to compare groceries in context',
    description:
      'A practical supermarket routine for checking labels, comparing similar products, and turning scans into useful food choices.',
    question: 'How can a food scanner make grocery shopping easier?',
    answer:
      'Use a food scanner to narrow a choice and understand why products differ, then check the package and decide what fits your needs. Compare similar items by their ingredient lists and nutrition panels rather than treating a single score as a shopping rule. Optimally supports barcode and label-photo scanning, explains its ingredient-based rating, and connects packaged foods with staple suggestions, recipes, and a food log.',
    sections: [
      {
        h: 'Compare within a shelf',
        p: [
          'A scanner is most useful when it answers a specific question. Instead of asking whether every cereal is “good,” compare two cereals you would actually buy. Look at the ingredient list, serving basis, and the features that matter to you. In the UK, ingredients are generally ordered by weight; US ingredients are also generally listed in descending order by weight, while details and exceptions vary by market. Compare products within their local labeling context.',
          'For example, if you are choosing between two plain yogurts, first check that both are plain and compare their ingredients. Then look at protein and serving information if that is relevant. If one tub has a database entry for a different flavor or market, do not assume the scan applies to the tub in your basket.',
        ],
      },
      {
        h: 'A three-step aisle routine',
        p: [
          '- Scan the barcode and verify the product name, image, and size against the package.',
          '- Read the ingredient explanation and identify the particular difference that matters for this purchase.',
          '- Check the printed label when the record is incomplete, when you see a mismatch, or when allergens matter.',
          'This keeps the app in its useful role: organizing information, not making the purchase on your behalf. A score is one summary of Optimally’s editorial criteria, not a clinically validated health measure. If your choice is driven by taste, budget, convenience, or a family preference, those are legitimate considerations too.',
        ],
      },
      {
        h: 'When the barcode is not enough',
        p: [
          'A product record might be missing ingredients or show a previous package. Open Food Facts, which Optimally uses for product data, is built through community contributions. Its public documentation warns that data can be incomplete or inaccurate. A label photo offers another way to work from the package in hand, provided the ingredient panel is visible and readable.',
          'If you are shopping for someone with an allergy, do not rely on a barcode result, a photo transcription, or a food score as clearance. UK government guidance explains allergen declarations on product labels. Check the package itself when making a choice. Ingredients and cross-contact information can change; check the exact package each time.',
        ],
      },
      {
        h: 'Make the scan lead to a meal',
        p: [
          'Shopping decisions are easier when they connect to what you will cook. Optimally includes suggestions around staples such as eggs, fish, meat, dairy when tolerated, fruit, and selected roots, plus recipes that make those foods concrete. If a scanned item seems useful, you can carry that idea into a recipe or a food-log entry instead of collecting scores without a plan.',
          'The app’s primal-inspired, micronutrient-focused direction is a single approach, not a promise that one aisle or dietary identity suits everyone. Keep your own exclusions and preferences in view. For everyday shopping, the goal is a practical meal you will enjoy and can prepare safely, with enough information to understand your choice.',
        ],
      },
    ],
    cta: 'Use Optimally on two products from the same shelf, inspect the reason for the difference, then browse a recipe or staple idea for your basket.',
    faq: [
      {
        q: 'Should I always buy the highest-scoring item?',
        a: 'No. The score summarizes Optimally’s criteria and available data. Taste, budget, allergies, preferences, and how the food fits your meal still matter.',
      },
      {
        q: 'What if the scan does not match the package?',
        a: 'Use the printed package as the reference, especially for ingredients and allergens. Try a label photo or report the record issue in the app.',
      },
    ],
    related: [
      'barcode-vs-ingredient-scanner',
      'food-label-scanner-app',
      'food-scanner-for-home-cooking',
    ],
    sources: [
      {
        title: 'GOV.UK: Food labelling and packaging — ingredients list',
        url: 'https://www.gov.uk/food-labelling-and-packaging/ingredients-list',
        note: 'Ingredients and allergen declarations.',
      },
      {
        title: 'GOV.UK: Understanding allergen labelling',
        url: 'https://www.gov.uk/understanding-food-labelling/allergen-labelling',
        note: 'Consumer advice and label checks.',
      },
      {
        title: 'Open Food Facts API overview',
        url: 'https://openfoodfacts.github.io/documentation/docs/Product-Opener/api/',
        note: 'Community data and its limitations.',
      },
    ],
    topic: 'scanning',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
  },
  {
    slug: 'food-scanner-accuracy',
    kind: 'problem',
    title:
      'Food scanner accuracy: where product data and photo estimates fall short',
    heading: 'Food scanner accuracy depends on what was actually scanned',
    description:
      'Understand accuracy limits in barcode databases, label recognition, photo-based meal estimates, and editorial scoring.',
    question: 'How accurate are food scanner apps?',
    answer:
      'Accuracy depends on the task. A barcode can retrieve an incomplete or outdated community record; a label photo can be hard to read; and a meal photo estimates foods and portions rather than weighing them. A score adds an app’s own editorial judgment on top. Optimally makes these distinctions visible through ingredient explanations and source cues, but you should check the package for current ingredients and allergens and treat meal-log quantities as estimates.',
    sections: [
      {
        h: 'Four different kinds of accuracy',
        p: [
          '“Accurate” can mean several things. Did the barcode find the correct product? Does the record match this market and recipe? Was the ingredient text transcribed correctly? Does the app’s scoring rule reflect a defensible editorial choice? These questions have different answers, and one successful scan cannot settle them all.',
          'Open Food Facts describes its records as voluntarily contributed and says users assume risk because information may not be accurate, complete, or reliable. That warning is especially important for local brands, new products, and recipes that changed after a database photo was uploaded.',
        ],
      },
      {
        h: 'Barcode data: fast lookup, variable completeness',
        p: [
          'A barcode is a key that retrieves a record. It does not independently verify the contents of your package. Check the product name, market, size, and pack image. If ingredients are blank or the record looks like another variant, inspect the actual package or use a photo of its label.',
          'Optimally’s product-photo flow can mark whether a pack’s ingredient information came from a visible label, was recalled for a named product, or was inferred from the product identity. Those sources are not equally direct. Use the pack itself to resolve an important discrepancy.',
        ],
      },
      {
        h: 'Photo estimates: useful approximation',
        p: [
          'A meal image can suggest visible foods and an estimated portion, but camera angle and hidden ingredients limit precision. A plate photo cannot show whether a vegetable was cooked in butter, how much oil was used, or the exact weight of a portion. A small correction to a dense food may change the nutrition estimate more than a larger visual adjustment to a light food.',
          'Optimally lets you review meal components and adjust portions before saving. Use that edit step. If exact amounts matter for a clinical reason, weigh or measure as appropriate and use professional guidance rather than relying on visual recognition alone.',
        ],
      },
      {
        h: 'The score is another layer',
        p: [
          'Even perfect transcription would not make a score an objective medical fact. Optimally applies a consistent editorial rule set informed by food composition and its stated primal-inspired direction. That is not a clinically validated health scale and does not calculate comprehensive micronutrient density from every available field. Missing nutrient data should be read as missing, not as zero.',
          'A repeatable score is useful for comparing similar products under the same framework, and its explanation makes the rule open to scrutiny. It does not guarantee that the recommendation fits your allergy, medical needs, culture, or preference. Product quality, personal compatibility, and food safety are separate questions.',
        ],
      },
      {
        h: 'A practical confidence check',
        p: [
          '- Verify product identity and variant against the package.',
          '- Read the ingredient panel when the app record is incomplete or safety matters.',
          '- Correct estimated portions and add known ingredients to meal logs.',
          '- Treat the score as an explained viewpoint, not as a diagnosis or guarantee.',
        ],
      },
    ],
    cta: 'Try a barcode scan and a meal photo in Optimally, then inspect the ingredient source or adjust the portion to see what each result depends on.',
    faq: [
      {
        q: 'Can an app scan be trusted for allergy decisions?',
        a: 'Use the package label and your own allergy guidance. A community record or photo reading can miss a change or a word and is not medical clearance.',
      },
      {
        q: 'Are photo-based nutrition numbers exact?',
        a: 'No. Food identification, portion size, cooking ingredients, and reference values introduce uncertainty. Treat them as estimates.',
      },
    ],
    related: [
      'barcode-vs-ingredient-scanner',
      'food-label-scanner-app',
      'meal-photo-scanner-app',
    ],
    sources: [
      {
        title: 'Open Food Facts API overview',
        url: 'https://openfoodfacts.github.io/documentation/docs/Product-Opener/api/',
        note: 'Official warning on voluntary data accuracy and completeness.',
      },
      {
        title: 'USDA FoodData Central: About the data',
        url: 'https://fdc.nal.usda.gov/about-us/',
        note: 'Food-composition data types use different approaches.',
      },
      {
        title: 'GOV.UK: Understanding allergen labelling',
        url: 'https://www.gov.uk/understanding-food-labelling/allergen-labelling',
        note: 'Consumer allergen information and checks.',
      },
    ],
    topic: 'scanning',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
  },
  {
    slug: 'how-optimally-food-scores-work',
    kind: 'problem',
    title: 'How Optimally food scores work: what the number means',
    heading: 'How Optimally food scores work',
    description:
      'A plain-language guide to Optimally’s ingredient-based food ratings, the data they use, and what a score cannot prove.',
    question: 'What does an Optimally food score mean?',
    answer:
      'An Optimally score is an editorial summary of how a food fits the app’s stated criteria using the ingredient and nutrition information available. Ingredient-level rules are consistent and the result includes explanations, but product data can be incomplete. The score is not a clinically validated health scale, diagnosis, or comprehensive micronutrient-density calculation. Use it to understand the app’s reasoning, then consider the label, your preferences, and how the food fits a meal.',
    sections: [
      {
        h: 'What goes into the rating',
        p: [
          'Optimally reads a product’s ingredient information first, applies fixed ingredient ratings and food-quality rules, and uses available nutrition information as additional context. Depending on the record, it can show what ingredients contributed and why. The same recognized ingredient follows the same underlying rule, making results more consistent and easier to question than an unexplained verdict.',
          'The score depends on the input. A barcode may return a community product record with missing fields, and a label photo may have recognition uncertainty. Check that the product and formulation match what you are holding. When the app identifies where the ingredient text came from, use that source cue to judge how direct it is.',
        ],
      },
      {
        h: 'What the score is designed to express',
        p: [
          'Optimally’s approach is primal-inspired and micronutrient-focused. It gives particular attention to foods such as eggs, meat, fish, dairy when tolerated, whole fruit, and selected roots, while considering processing and ingredient information. Whole-food status is not the only criterion: protein and broader vitamin/mineral contributions are part of why an apple, though a useful food, does not have to receive the same near-perfect rating as a richer staple.',
          'That calibration describes the app’s editorial priorities. It does not mean fruit is harmful or that one food must be avoided. A food score also does not rate your entire diet, account for every portion and preparation method, or tell you whether the food suits your individual medical needs.',
        ],
      },
      {
        h: 'What it does not claim',
        p: [
          'The numerical score is not a clinically validated health scale. It has not been shown to predict an individual health outcome. It is not a complete measure of micronutrient density: product databases do not always provide every micronutrient, and a missing value is not evidence that the food contains zero of it.',
          'A score also does not certify allergen safety. Optimally can remember personal exclusions and shape suggestions, but the community record may not reflect a new formulation, and a photo may not read every word. Check the exact package and follow your own allergy guidance. Food safety is also separate from nutrition preference; a high rating does not make unsafe handling safe.',
        ],
      },
      {
        h: 'Use the explanation, not just the rank',
        p: [
          'Suppose two canned fish products receive different ratings. Open the breakdown and see whether the ingredient list, processing rule, or available nutrition information explains the gap. Then verify that each database record matches the can. If the difference comes from a product entry that is plainly wrong, report it. If it comes from a rule you disagree with, the explanation gives you something concrete to evaluate.',
          'Use the rest of the app to make that information practical: add a meal to the food log, browse a recipe, or consider a staple for your next shop. Optimally is one Aajonus Primal and Ray Peat-inspired approach, not a diet-selector between those authors. Their perspectives are inspirations rather than proof that the combined approach is clinically superior.',
        ],
      },
    ],
    cta: 'Open a product result in Optimally and read the ingredient-level explanation before deciding what the score means for your meal.',
    faq: [
      {
        q: 'Is Optimally’s score scientifically validated?',
        a: 'No. It is an editorial rating informed by food composition and the app’s stated criteria, not a clinically validated health scale.',
      },
      {
        q: 'Does the score measure all micronutrients?',
        a: 'No. Available product data vary, and the score is not a comprehensive micronutrient-density calculation. Missing fields are not zeros.',
      },
      {
        q: 'Does a high score mean a food is safe for my allergy?',
        a: 'No. Check the current package and follow your allergy guidance. Food quality and personal allergen safety are separate.',
      },
    ],
    related: [
      'food-scanner-with-explanations',
      'food-label-scanner-app',
      'food-scanner-accuracy',
    ],
    sources: [
      {
        title: 'Open Food Facts API overview',
        url: 'https://openfoodfacts.github.io/documentation/docs/Product-Opener/api/',
        note: 'Voluntary product records and their accuracy limits.',
      },
      {
        title: 'USDA FoodData Central: About the data',
        url: 'https://fdc.nal.usda.gov/about-us/',
        note: 'Different food composition datasets serve different purposes.',
      },
      {
        title: 'GOV.UK: Understanding allergen labelling',
        url: 'https://www.gov.uk/understanding-food-labelling/allergen-labelling',
        note: 'Allergen information and consumer precautions.',
      },
    ],
    topic: 'scanning',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
  },
]
