import type { Guide } from './guides'

/** Practical food-category guides grounded in primary nutrition and safety sources. */
export const FOOD_GUIDES: Guide[] = [
  {
    slug: 'egg-food-scanner',
    kind: 'usecase',
    topic: 'food',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
    title: 'Egg food scanner: how to choose eggs and egg products',
    heading: 'A practical guide to eggs and egg labels',
    description:
      'How to compare shell eggs, liquid egg products and prepared foods, what eggs contribute, and how to handle them safely.',
    question: 'What should I look for when buying eggs?',
    answer:
      'For plain eggs, compare freshness, storage and the format you will use; shell colour and “free-range” wording do not tell you the full nutrition story. Eggs contribute high-quality protein and nutrients including choline, while their exact nutrient content depends on size and preparation. For packaged egg foods, check the full ingredients and added salt or sauces. Store eggs as directed and cook them safely; use pasteurized eggs in recipes that stay raw or lightly cooked.',
    sections: [
      {
        h: 'What an egg brings to a meal',
        p: [
          'Eggs are a compact source of protein and a useful contributor of choline. The NIH Office of Dietary Supplements lists eggs among foods that provide choline, alongside meat, fish and dairy. Eggs also contain vitamin B12; the NIH notes that animal foods naturally contain B12, while a plant food supplies it only when fortified. These facts make eggs a useful staple for many people, not a uniquely complete food or a guarantee that any individual has met a nutrient need.',
          'A whole-food approach can make room for eggs alongside fish, meat, fruit, tolerated pasteurized dairy and other foods. Variety matters because no single ingredient supplies everything. Optimally’s food score is a curated editorial summary using available information; it is not a clinical nutrient calculation or diagnosis.',
        ],
      },
      {
        h: 'A quick shelf checklist',
        p: [
          '- Plain shell eggs: check the date and that shells are clean and uncracked; refrigerate and follow the pack’s storage directions.',
          '- Liquid, frozen or powdered egg: read whether it is pasteurized, especially if you need it for a recipe that will not be thoroughly cooked.',
          '- Prepared egg products: compare the ingredient list. A carton of plain eggs is different from a breakfast sandwich, omelette mix or egg salad with added oils, starches, salt and flavourings.',
          '- Allergy and preference: egg is a major allergen in many markets. Verify the package and your own avoidance rules every time.',
        ],
      },
      {
        h: 'Three cart comparisons',
        p: [
          'Imagine choosing between a carton of ordinary shell eggs and a ready-made cheese-and-egg breakfast wrap. The wrap may be convenient, but the extra label answers different questions: what kind of bread, oil, cheese and stabiliser are included, and how much salt is listed per serving? Do not infer that the eggs themselves are inferior because the assembled meal has a longer list.',
          'Compare a plain liquid egg carton with a flavoured “egg white” product. Check whether it is simply egg white or includes seasoning, gums or other ingredients. Then compare serving sizes: a nutrition panel is only useful when you compare like portions.',
          'Finally, compare a supermarket egg with an “enriched” or omega-3-marketed egg. Read the package description and nutrition information rather than assuming the front claim establishes a meaningful health advantage for you.',
        ],
      },
      {
        h: 'Keep food safety separate from food preference',
        p: [
          'The FDA advises cooking eggs until yolks and whites are firm. For recipes served raw or undercooked—such as homemade mayonnaise, mousse or Caesar dressing—use eggs pasteurized to destroy Salmonella or pasteurized egg products. Refrigerate promptly and prevent raw egg from contacting ready-to-eat foods. Raw-food traditions, including Aajonus Vonderplanitz’s Primal Diet, should be described as a perspective; Optimally does not adopt raw-egg protocols or claims that pathogens are harmless.',
          'If you are pregnant, immunocompromised, older, or preparing food for someone at higher risk, follow the relevant local health authority’s stricter advice.',
        ],
      },
    ],
    cta: 'Photograph a packaged egg label in Optimally to see its ingredients and the reasons behind the food rating, then save egg-based meal ideas that fit your preferences.',
    faq: [
      {
        q: 'Are brown eggs more nutritious than white eggs?',
        a: 'Shell colour mainly reflects the laying hen’s breed. It is not a reliable shortcut for comparing a package’s nutrient content; read the nutrition panel when one is provided.',
      },
      {
        q: 'Can I use ordinary eggs in a raw recipe?',
        a: 'For food safety, FDA guidance recommends pasteurized eggs or egg products when the recipe will remain raw or undercooked. Follow local guidance and safe handling instructions.',
      },
      {
        q: 'Does a good score mean eggs are safe for my allergy?',
        a: 'No. Food quality and personal safety are separate. Avoid eggs if they are an allergen for you, and check the physical package even when an app reads it.',
      },
    ],
    related: [
      'animal-based-food-scanner',
      'micronutrient-focused-food-scanner',
      'food-scanner-with-explanations',
    ],
    sources: [
      {
        title: 'NIH ODS: Choline fact sheet for consumers',
        url: 'https://ods.od.nih.gov/factsheets/Choline-Consumer/',
      },
      {
        title: 'NIH ODS: Vitamin B12 fact sheet for consumers',
        url: 'https://ods.od.nih.gov/factsheets/VitaminB12-Consumer/',
      },
      {
        title: 'FDA: What You Need to Know About Egg Safety',
        url: 'https://www.fda.gov/food/buy-store-serve-safe-food/what-you-need-know-about-egg-safety',
      },
      {
        title: 'FDA: Food allergies and label requirements',
        url: 'https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies',
      },
    ],
  },
  {
    slug: 'dairy-food-scanner',
    kind: 'usecase',
    topic: 'food',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
    title: 'Dairy food scanner: compare milk, yoghurt and cheese',
    heading: 'How to read dairy labels and choose what suits you',
    description:
      'A practical comparison of milk, yoghurt and cheese labels, including pasteurisation, added sugar, allergens and nutrient context.',
    question: 'How do I compare dairy products in a food scanner?',
    answer:
      'Start with the product type and the ingredient list: plain milk, unsweetened yoghurt and aged cheese have different uses and labels. Check whether milk is pasteurized, compare serving sizes, and distinguish naturally occurring milk sugar from added sugar where the label reports both. Dairy can contribute protein, calcium, B12 and iodine, but amounts vary and some labels omit naturally present nutrients. Choose products you tolerate; a food score never overrides a milk allergy or personal medical advice.',
    sections: [
      {
        h: 'Milk, yoghurt and cheese are not interchangeable',
        p: [
          'Milk can be a drink or cooking ingredient; yoghurt is fermented milk; cheese concentrates milk solids and may be aged or brined. Their nutrient profiles and serving sizes differ, so comparing numbers without context can mislead. NIH’s Office of Dietary Supplements identifies dairy products as sources of calcium and B12, and milk, yoghurt and cheese among foods that can supply iodine. Iodine amounts in dairy vary with farming and processing conditions, so a generic category cannot promise a specific amount.',
          'Fortification also varies by country and product. Check the nutrition panel for nutrients that are declared. The ingredient list tells you what was added; it cannot show every naturally occurring micronutrient.',
        ],
      },
      {
        h: 'A dairy label checklist',
        p: [
          '- Plain milk: check fat level, pasteurization statement where provided, and whether vitamins are added.',
          '- Yoghurt: compare plain and flavoured versions, serving sizes, and the added-sugars line where available. Milk naturally contains lactose, so total sugars are not the same as added sugars.',
          '- Cheese: check milk source and allergens, ingredients, salt, and whether the cheese is made from pasteurized milk if that matters for your circumstances.',
          '- Alternatives: fortified plant drinks can differ widely in protein, calcium, vitamin D and iodine; read the individual carton instead of assuming all substitutes match milk.',
          '- Preferences: lactose-free dairy still contains milk protein and is not suitable for a milk-protein allergy.',
        ],
      },
      {
        h: 'Worked comparisons from the chilled aisle',
        p: [
          'Suppose a plain Greek-style yoghurt has milk and cultures, while a fruit-on-the-bottom cup lists fruit preparation, sugar and starch. The plain cup offers control over sweetness; the flavoured one may be convenient. Compare the declared added sugar and serving size, then decide based on how it fits your meal—not by treating every gram of total sugar as added.',
          'A cheddar block and a processed cheese slice are both dairy-containing foods, but the slice may contain emulsifying salts and other ingredients for texture and melting. If the question is minimally processed cooking, the block is the simpler choice. If the question is calcium or protein per serving, compare the actual nutrition panels.',
          'For milk versus an oat or almond drink, check protein and fortification. A front label saying “barista” describes intended use, not nutritional equivalence.',
        ],
      },
      {
        h: 'Tolerance, allergy and safe handling',
        p: [
          'A milk allergy involves milk proteins; lactose intolerance concerns digestion of lactose. They are different and need different choices. Read the package’s allergen declaration and follow your clinician’s advice for diagnosed allergy or symptoms. Optimally’s personal exclusions can inform suggestions, but a photo or database record can miss a warning, so inspect the package yourself.',
          'Choose pasteurized dairy as the default. FDA food-safety guidance warns that unpasteurized milk and cheese made from it can carry harmful bacteria. Keep refrigerated products cold and follow storage dates. Raw milk is not made safe by an organic, farm-fresh or grass-fed claim.',
        ],
      },
    ],
    cta: 'Use Optimally’s label-photo scan on a yoghurt or cheese you are considering; inspect the ingredient reasons, then log the dairy foods you tolerate as part of meals you enjoy.',
    faq: [
      {
        q: 'Is all sugar in plain yoghurt added sugar?',
        a: 'No. Milk naturally contains lactose. Where a label separates added sugars from total sugars, use that distinction; recipes and rules differ by market.',
      },
      {
        q: 'Does lactose-free milk avoid milk allergens?',
        a: 'No. Lactose-free products generally still contain milk proteins. They are not a safe substitute for a person with milk-protein allergy.',
      },
      {
        q: 'Is raw milk a more nourishing choice?',
        a: 'A raw label does not establish a health advantage or remove pathogen risk. Pasteurized dairy is the default in Optimally’s recommendations.',
      },
    ],
    related: [
      'simple-ingredient-food-shopping',
      'micronutrient-focused-food-scanner',
      'food-scanner-for-home-cooking',
    ],
    sources: [
      {
        title: 'NIH ODS: Calcium fact sheet',
        url: 'https://ods.od.nih.gov/factsheets/Calcium-Consumer/',
      },
      {
        title: 'NIH ODS: Iodine fact sheet',
        url: 'https://ods.od.nih.gov/factsheets/Iodine-Consumer/',
      },
      {
        title: 'NIH ODS: Vitamin B12 fact sheet',
        url: 'https://ods.od.nih.gov/factsheets/VitaminB12-Consumer/',
      },
      {
        title: 'FDA: Dairy and eggs food safety',
        url: 'https://www.fda.gov/food/people-risk-foodborne-illness/dairy-and-eggs-food-safety-moms-be',
      },
      {
        title: 'FDA: Added sugars on the Nutrition Facts label',
        url: 'https://www.fda.gov/food/nutrition-facts-label/added-sugars-nutrition-facts-label',
      },
    ],
  },
  {
    slug: 'meat-food-scanner',
    kind: 'usecase',
    topic: 'food',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
    title: 'Meat food scanner: read meat and deli labels',
    heading: 'Choose meat with a clearer label-reading routine',
    description:
      'How to compare fresh meat, mince and deli products by ingredients, preparation, nutrition and food safety.',
    question: 'What should a meat food scanner tell me?',
    answer:
      'For fresh meat, start with the cut and intended meal; for mince, sausages and deli meats, read the full ingredients and compare sodium and serving sizes. Meat supplies protein and several nutrients, including vitamin B12; iron content and type vary by animal and cut. A product’s score is an editorial summary, not a full nutrient analysis. Choose safe preparation and storage, and treat “grass-fed,” “organic” or “natural” as claims to interpret rather than proof of a health outcome.',
    sections: [
      {
        h: 'Fresh cuts and processed meat answer different questions',
        p: [
          'A plain steak, chicken thigh or pork chop usually has a short ingredient list because it is a raw ingredient rather than a finished recipe. The useful comparison may be cut, price, portion, cooking method and how it fits the meal. Mince may be plain meat or may include seasoning; the label settles that question.',
          'Sausages, cured meats, deli slices and ready-to-eat meatballs can contain salt, spices, starches, sugars, preservatives or other ingredients. “Processed meat” is a broad food description, not a verdict that every serving is identical. Look at what is actually in the pack and how often it is part of your routine.',
        ],
      },
      {
        h: 'What meat contributes—and what a label cannot tell you',
        p: [
          'NIH’s Office of Dietary Supplements lists meat among foods containing vitamin B12 and iron. The amount depends on the specific food and portion, and a packaged-food scanner may not have those nutrient fields at all. Some nutrition panels report protein and iron; others may show only required nutrients. Missing data means unknown, not zero.',
          'A primal-inspired meal can make room for meat while also including fish, eggs, fruit, tolerated dairy and other foods for variety. The presence of a whole-food ingredient does not automatically make an entire packaged product the best fit, and an app score does not diagnose deficiency or replace an individual plan.',
        ],
      },
      {
        h: 'A practical meat-counter checklist',
        p: [
          '- Fresh meat: check the cut, use-by date, package condition and safe storage instructions.',
          '- Mince: confirm whether it is only meat or includes salt, seasoning or binders; compare lean/fat descriptions with the nutrition panel if relevant to your cooking.',
          '- Sausages and deli slices: read the complete ingredient list, including sugar, starch, curing ingredients and allergen statements. Compare sodium per realistic serving.',
          '- Marketing claims: pasture-raised, organic, grass-fed and “natural” have specific or market-dependent definitions. They do not prove a particular health outcome or make raw meat safe.',
          '- Personal fit: account for allergies, religious or ethical choices, budget, taste and the rest of your diet.',
        ],
      },
      {
        h: 'Two worked shopping decisions',
        p: [
          'You want burger patties. One pack is plain minced beef formed into patties; another includes a seasoning blend, breadcrumbs and flavouring. If you want the simplest cooking base, choose the plain pack and season it at home. If convenience matters more, use the ingredient list to check allergens and any ingredients you avoid. Compare like serving sizes rather than assuming the shorter list tells you everything about nutrition.',
          'You are choosing between plain roast beef slices and a deli product with added starch and sweetener. The first may be the simpler ingredient choice; the second may suit sandwiches or budget needs. A useful decision considers the whole pattern, not a fear-based “clean/dirty” label.',
        ],
      },
      {
        h: 'Cook and store it safely',
        p: [
          'Keep raw meat separate from ready-to-eat food, wash hands and surfaces, and refrigerate promptly. Use a food thermometer and the safe minimum temperature recommended by your local authority; targets vary by meat type and jurisdiction. Optimally’s primal inspiration does not mean it recommends raw animal foods. A grass-fed or organic label does not remove pathogen risk.',
        ],
      },
    ],
    cta: 'Scan or photograph a packaged meat label in Optimally to see the listed ingredients and rating reasons, then build a meal idea around the cut and sides you actually enjoy.',
    faq: [
      {
        q: 'Does a high meat score mean this cut is nutritionally complete?',
        a: 'No. A score summarizes Optimally’s criteria and available data; it does not mean a single food supplies every nutrient or guarantees adequacy.',
      },
      {
        q: 'Does “natural” mean a meat product has no additives?',
        a: 'The phrase is not a substitute for reading ingredients. Check the full list and nutrition panel for the specific product.',
      },
      {
        q: 'Does Optimally recommend raw meat?',
        a: 'No. Its recommendations use safe preparation. Raw-meat traditions are presented as perspectives, not as a safe protocol.',
      },
    ],
    related: [
      'animal-based-food-scanner',
      'simple-ingredient-food-shopping',
      'food-scanner-for-home-cooking',
    ],
    sources: [
      {
        title: 'NIH ODS: Iron fact sheet for consumers',
        url: 'https://ods.od.nih.gov/factsheets/Iron-Consumer/',
      },
      {
        title: 'NIH ODS: Vitamin B12 fact sheet for consumers',
        url: 'https://ods.od.nih.gov/factsheets/VitaminB12-Consumer/',
      },
      {
        title: 'FDA: Types of food ingredients and label order',
        url: 'https://www.fda.gov/food/food-additives-and-gras-ingredients-information-consumers/types-food-ingredients',
      },
      {
        title: 'FoodSafety.gov: Safe minimum internal temperatures',
        url: 'https://www.foodsafety.gov/food-safety-charts/safe-minimum-internal-temperatures',
      },
    ],
  },
  {
    slug: 'seafood-food-scanner',
    kind: 'usecase',
    topic: 'food',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
    title: 'Seafood food scanner: choose fish and shellfish',
    heading: 'A useful guide to fish labels, nutrients and safe handling',
    description:
      'Compare fresh, frozen and canned seafood while understanding nutrient variety, allergens, mercury advice and kitchen safety.',
    question: 'How do I choose seafood using a food scanner?',
    answer:
      'Choose seafood by species, freshness, format and the meal you want. Fish and shellfish provide protein, and some fish provide omega-3 fats, vitamin D or iodine; these vary by species, portion and preparation. Compare canned products for salt, added oil and sauces. Follow current local advice on species and mercury, especially during pregnancy and for children, and handle seafood safely. A scanner can explain a label, but it cannot verify freshness or replace package and health guidance.',
    sections: [
      {
        h: 'Fish is a category, not a nutrient guarantee',
        p: [
          'Salmon, sardines, cod, tuna, prawns and mussels differ in fat, micronutrients, bones, serving size and culinary use. The NIH Office of Dietary Supplements describes fish as a source of omega-3 fats and notes that fatty fish are among the best natural food sources of vitamin D. NIH also lists fish and other seafood among foods that can provide iodine. Those are category-level patterns: an app should not infer an exact nutrient amount unless the specific product data supports it.',
          'A varied rotation can include oily and lean fish, shellfish if tolerated, eggs, meat, fruit and other foods. Seafood is one useful part of a way of eating, not a single-food cure or a guarantee of a particular health result.',
        ],
      },
      {
        h: 'Read the pack by format',
        p: [
          '- Fresh counter fish: ask the species and whether it was previously frozen; assess cold storage and a fresh, mild smell. Colour by itself does not prove freshness.',
          '- Frozen fillets: check the package is intact and the product remains frozen; avoid packages with extensive ice crystals or signs of thawing and refreezing.',
          '- Canned fish: compare ingredients, sodium, added oil or sauce, and serving size. “In water” or “in olive oil” describes the packing liquid, not every nutrition dimension.',
          '- Smoked, marinated or breaded seafood: check added salt, sugar, oils, coatings and allergens. Preparation changes the product you are comparing.',
          '- Shellfish: observe species labels and allergy information; shellfish allergy is distinct from finfish allergy.',
        ],
      },
      {
        h: 'Shelf examples that change the decision',
        p: [
          'Compare plain frozen salmon with a breaded fish portion. The first gives you the fish and lets you add your own sides; the second may be convenient but includes a coating and oil. Inspect the ingredient list and sodium per serving, then decide whether speed or ingredient simplicity matters more for that meal.',
          'Compare sardines in water with sardines in oil. The ingredient list and nutrition panel can help you understand the packing liquid and salt; neither label automatically establishes that one is universally better. If the tin includes bones, that may affect its calcium contribution, but only make a quantitative comparison when the product data provides it.',
          'A tuna pouch and a salmon tin are not a direct swap simply because both are fish. Species-specific mercury guidance matters, and recommendations can differ by country and for pregnancy or childhood. Check your public health authority’s current advice.',
        ],
      },
      {
        h: 'Freshness and safe preparation',
        p: [
          'FDA guidance says most seafood should be cooked to an internal temperature of 145°F (63°C), and gives visual cues when a thermometer is unavailable. Keep seafood cold, thaw it safely, wash hands and surfaces, and separate raw seafood from ready-to-eat foods. Discard cooked shellfish that do not open during cooking, as FDA advises.',
          'Some people choose raw fish dishes. Food safety advice identifies raw or undercooked fish and shellfish as a higher-risk choice, and freezing does not eliminate every hazard. Optimally recommends safe preparation and does not claim raw seafood is harmless or medicinal.',
        ],
      },
      {
        h: 'Use the scan as one input',
        p: [
          'A barcode can retrieve a product record; a label photo can expose ingredients when the database is incomplete. Neither can tell whether a fresh fillet smells sour, whether a tin was stored correctly, or whether a species fits personal medical advice. Verify the physical pack and choose options compatible with allergies and preferences.',
        ],
      },
    ],
    cta: 'Photograph a canned or frozen seafood label in Optimally to inspect the ingredient reasons, then pair it with a meal idea and keep your usual seafood rotation in your food log.',
    faq: [
      {
        q: 'Is canned fish less nutritious than fresh fish?',
        a: 'Processing and species differ. Compare the specific product data and ingredients; “canned” alone cannot answer every nutrition question.',
      },
      {
        q: 'Can a food scanner tell me whether fish is safe to eat?',
        a: 'It can read product information, not confirm freshness, cold-chain handling, correct cooking, or whether species-specific advice applies to you.',
      },
      {
        q: 'Which fish should I eat during pregnancy?',
        a: 'Follow current guidance from your national health authority on species, portions and mercury. Recommendations are population- and jurisdiction-specific.',
      },
    ],
    related: [
      'animal-based-food-scanner',
      'food-scanner-for-grocery-shopping',
      'food-scanner-accuracy',
    ],
    sources: [
      {
        title: 'NIH ODS: Omega-3 fatty acids fact sheet',
        url: 'https://ods.od.nih.gov/factsheets/Omega3FattyAcids-Consumer/',
      },
      {
        title: 'NIH ODS: Vitamin D fact sheet',
        url: 'https://ods.od.nih.gov/factsheets/VitaminD-Consumer/',
      },
      {
        title: 'NIH ODS: Iodine fact sheet',
        url: 'https://ods.od.nih.gov/factsheets/Iodine-Consumer/',
      },
      {
        title: 'FDA: Selecting and serving seafood safely',
        url: 'https://www.fda.gov/food/buy-store-serve-safe-food/selecting-and-serving-fresh-and-frozen-seafood-safely',
      },
    ],
  },
  {
    slug: 'fruit-food-scanner',
    kind: 'usecase',
    topic: 'food',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
    title: 'Fruit food scanner: whole fruit, juice and packaged fruit',
    heading: 'How to compare fruit without flattening nutrition into one score',
    description:
      'A grounded guide to whole fruit, juice, dried fruit and fruit snacks, with practical label checks and useful score context.',
    question: 'How should I use a food scanner for fruit?',
    answer:
      'For fresh whole fruit, a barcode score may be unavailable or less useful than the food itself, portion and variety. Whole fruit is a valuable food choice, yet it does not contribute the same protein or breadth of nutrients as a meal built around eggs, meat, fish or dairy. Compare packaged fruit by ingredients, serving size and added sugars; juice and honey are not interchangeable with whole fruit. Optimally’s score is an editorial guide, not a complete nutrient calculation or clinical scale.',
    sections: [
      {
        h: 'Whole fruit is useful, and category context still matters',
        p: [
          'Apples, berries, citrus, bananas and other whole fruits bring different flavours and food components. The USDA’s food composition database can help answer specific questions about a named food and serving, but values depend on variety, preparation and portion. A scanner record may have only incomplete macro data, so do not treat an unreported micronutrient as absent.',
          'Optimally intentionally calibrates food categories: whole-food status matters, but a fruit does not receive the same near-perfect rating as the most nutrient-dense protein-rich staples simply because it is minimally processed. An apple’s maximum rating is 90 in the current editorial calibration. That is not a sign that apples are harmful; whole fruit remains a useful choice within varied meals.',
        ],
      },
      {
        h: 'Four forms of fruit, four different label questions',
        p: [
          '- Fresh whole fruit: usually no ingredients panel is needed. Consider ripeness, cost, season and whether you will enjoy and use it.',
          '- Frozen fruit: compare plain fruit with sweetened mixes; frozen berries with no added ingredients can be a practical pantry staple.',
          '- Dried fruit: check portion size and whether sugar or oil was added. Drying concentrates the food into a smaller volume, so a handful and a bowl of fresh fruit are not equivalent portions.',
          '- Juice, purée pouches and fruit snacks: read whether the product is juice, concentrate, purée or a confection-style snack, and look for added sugar and other ingredients.',
        ],
      },
      {
        h: 'A worked supermarket comparison',
        p: [
          'At the freezer, compare a plain frozen berry bag with a sweetened berry dessert topping. The first ingredient list may be just berries; the second may include syrup or sugar. If you want fruit for yoghurt or a smoothie, the plain bag gives more control over sweetness. Check serving sizes and the panel rather than assuming a fruit picture on the front means the products are alike.',
          'Now compare a whole orange with a small juice bottle. Both can come from fruit, but eating a whole orange retains the intact food structure and takes longer than drinking juice. WHO defines free sugars to include those naturally present in fruit juice and concentrates; whole fruit sugars are treated differently in its guideline. This is a useful reason to make whole fruit the default without declaring juice poisonous or forbidden.',
          'Finally, compare a fruit-flavoured yoghurt with plain yoghurt plus fresh fruit. The first is convenient; the second gives you direct control over ingredients. Either can fit a real-life pattern.',
        ],
      },
      {
        h: 'Honey and fruit are not the same thing',
        p: [
          'Honey is a sweetener, not a substitute for whole fruit. FDA guidance counts honey among added sugars on foods and treats the single-ingredient honey label specially. WHO includes honey’s sugars in free sugars. That does not mean one spoonful is a toxin; it means sweetness should be understood in the context of the whole diet, not marketed as an unlimited health food.',
        ],
      },
      {
        h: 'Food log and allergy reminders',
        p: [
          'A meal photo can help you record fruit alongside the rest of a meal, while a barcode or package photo can explain a packaged fruit snack. Those tools make the choice easier to understand; they do not measure the exact nutrient content of an unweighed meal. People with fruit allergies, oral allergy syndrome or medically directed restrictions should follow their own guidance. A strong score cannot make an allergen safe.',
        ],
      },
    ],
    cta: 'Use Optimally’s meal photo to log fruit in the context of a whole meal, or scan a packaged fruit snack to see how its ingredients differ from plain fruit.',
    faq: [
      {
        q: 'Does an apple’s 90-point maximum mean apples are unhealthy?',
        a: 'No. It reflects category calibration in an editorial score, including protein and nutrient breadth. Apples remain a useful whole-fruit choice.',
      },
      {
        q: 'Is fruit sugar the same as added sugar?',
        a: 'Sugar naturally present in whole fruit is distinct from added sugar. Juice, concentrates and sweeteners are treated differently by public-health definitions; check the product and jurisdiction.',
      },
      {
        q: 'Can Optimally calculate all nutrients in a meal photo?',
        a: 'No. A photo can support logging, but it does not establish exact ingredients, portion weights or comprehensive micronutrient amounts.',
      },
    ],
    related: [
      'micronutrient-focused-food-scanner',
      'how-optimally-food-scores-work',
      'food-scanner-for-home-cooking',
    ],
    sources: [
      { title: 'USDA FoodData Central', url: 'https://fdc.nal.usda.gov/' },
      {
        title: 'WHO: Sugars intake guideline and definition of free sugars',
        url: 'https://www.who.int/news/item/04-03-2015-who-calls-on-countries-to-reduce-sugars-intake-among-adults-and-children',
      },
      {
        title: 'FDA: Added sugars on the Nutrition Facts label',
        url: 'https://www.fda.gov/food/nutrition-facts-label/added-sugars-nutrition-facts-label',
      },
      {
        title: 'FDA: Food allergies and label requirements',
        url: 'https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies',
      },
    ],
  },
  {
    slug: 'honey-and-added-sugar-labels',
    kind: 'problem',
    topic: 'food',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
    title: 'Honey and added sugar labels: what counts and what does not',
    heading: 'How to read honey and added sugar on food labels',
    description:
      'Understand added-sugar panels, ingredient-list aliases, honey claims and the difference between sweetener and whole fruit.',
    question: 'Does honey count as added sugar on a food label?',
    answer:
      'Yes: FDA guidance includes honey among added sugars when it is used as a sweetener in a food. WHO also counts sugars naturally present in honey, syrups and fruit juice as free sugars. Whole fruit and plain milk contain naturally occurring sugars that are not classified the same way. Check both the ingredient list and nutrition panel, compare serving sizes, and treat “natural” or “raw” as descriptions—not evidence that honey is unlimited or medically beneficial.',
    sections: [
      {
        h: 'Added sugar is about how the ingredient is used',
        p: [
          'On the US Nutrition Facts label, total sugars include sugars naturally present in foods such as fruit and milk as well as sugars added during processing. Added sugars include table sugar, syrups and honey used as sweeteners. The distinction helps explain why a plain yoghurt and a sweetened yoghurt can show similar total sugars but different added-sugar amounts.',
          'WHO uses the term free sugars for sugars added by manufacturers, cooks or consumers, plus sugars naturally present in honey, syrups, fruit juices and concentrates. Its recommendation is population guidance, not an individual prescription. Local labels and policy language can differ, so use the panel format in your country.',
        ],
      },
      {
        h: 'Names to scan for on an ingredient list',
        p: [
          'Sugar may appear as sugar, sucrose, glucose, dextrose, fructose, maltose, invert sugar, corn syrup, glucose syrup, rice syrup, molasses, agave syrup, fruit-juice concentrate or honey. A product may use more than one kind. The order is meaningful: ingredients are generally listed by weight in descending order, so several sweeteners can distribute across the list.',
          'A name on this list does not prove how much of the product is sugar. Use the added-sugars field when present and compare the serving size with what you expect to eat. Front claims such as “no refined sugar” can still accompany honey, dates or syrup; read the full label.',
        ],
      },
      {
        h: 'Honey has a special label case',
        p: [
          'Pure honey sold as a single-ingredient sugar or syrup may use a special FDA label format: the added-sugars percent Daily Value is shown, while grams and percent may appear in a footnote or be omitted from the standard line. This avoids making a single-ingredient sweetener look as if sugar was added to a different food. When honey is an ingredient in yoghurt, granola or a sauce, it still counts as added sugar in that product.',
          'Raw, local, manuka and organic are not synonyms for low sugar. They describe sourcing or processing claims, not permission to count honey as a whole-fruit serving or as a treatment.',
        ],
      },
      {
        h: 'A quick shelf comparison',
        p: [
          'Compare plain yoghurt with a honey-flavoured yoghurt. First identify the serving size, then check total sugars and added sugars. Plain milk’s lactose is naturally present; honey added to the flavoured cup is a sweetener. If you prefer more sweetness, you can add a measured amount yourself and keep the quantity visible.',
          'Compare two breakfast bars: one lists dates and honey, another lists cane sugar and glucose syrup. Their ingredients differ, and dates should not automatically be counted as added sugar merely because they taste sweet. Check total and added sugars where the label reports them, then consider the bar’s protein, ingredients, serving size and how often you eat it.',
          'Compare whole fruit with fruit juice. WHO counts juice sugars as free sugars; an intact piece of fruit is not treated that way. Whole fruit is a useful default without needing to ban juice or describe a small amount of honey as poison.',
        ],
      },
      {
        h: 'Make the choice useful, not moral',
        p: [
          'Optimally’s food guidance prefers whole fruit as a regular fruit choice and does not present honey or added sugar as dietary foundations. It also avoids calling foods “toxic” or implying that a label can diagnose a health problem. A food score is a curated, non-clinical summary; a low or high rating does not prescribe a personal sugar limit. Follow individualized advice if you have diabetes, dental concerns, an eating disorder history or another condition.',
        ],
      },
    ],
    cta: 'Scan a sweetened yoghurt, bar or sauce in Optimally to inspect its ingredient list and rating reasons; log the meal if you want to see the choice in context.',
    faq: [
      {
        q: 'Does honey count as added sugar?',
        a: 'FDA includes honey used as a sweetener in added sugars, and WHO includes honey sugars in free sugars. Pure honey has a special single-ingredient label format.',
      },
      {
        q: 'Is fruit juice sugar treated like whole-fruit sugar?',
        a: 'No. WHO includes sugars in fruit juice and concentrates in free sugars; naturally occurring sugars in intact whole fruit are distinct.',
      },
      {
        q: 'Does “no refined sugar” mean a product has no added sweetener?',
        a: 'Not necessarily. Check for honey, syrups, dates, juice concentrates and other sweet ingredients in the full list.',
      },
    ],
    related: [
      'fruit-food-scanner',
      'simple-ingredient-food-shopping',
      'how-optimally-food-scores-work',
    ],
    sources: [
      {
        title: 'FDA: Added sugars on the Nutrition Facts label',
        url: 'https://www.fda.gov/food/nutrition-facts-label/added-sugars-nutrition-facts-label',
      },
      {
        title: 'FDA: How to understand and use the Nutrition Facts label',
        url: 'https://www.fda.gov/food/nutrition-facts-label/how-understand-and-use-nutrition-facts-label',
      },
      {
        title: 'WHO: Sugars intake guideline',
        url: 'https://www.who.int/news/item/04-03-2015-who-calls-on-countries-to-reduce-sugars-intake-among-adults-and-children',
      },
    ],
  },
  {
    slug: 'simple-ingredient-food-shopping',
    kind: 'usecase',
    topic: 'food',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
    title: 'Simple ingredient food shopping: a practical grocery checklist',
    heading: 'Shop for simple, nourishing food without a purity test',
    description:
      'A flexible supermarket routine for choosing useful staples, reading labels and avoiding simplistic clean-food rules.',
    question: 'How can I shop for food with simple ingredients?',
    answer:
      'Build a short list around meals you actually eat: eggs, meat or fish, tolerated pasteurized dairy, whole fruit and roots such as potatoes or carrots. For packaged foods, read the ingredient list and nutrition panel together; ingredient length alone is a poor verdict. Compare two realistic options, check allergens and serving sizes, and keep convenience foods that help you eat consistently. “Simple” is a useful preference, not a purity test or proof that every additive is harmful.',
    sections: [
      {
        h: 'Start with meals, not a blacklist',
        p: [
          'A grocery list works best when it maps to meals. Pick a few breakfasts, lunches and dinners you like, then buy components you will use: eggs; fish or meat; pasteurized dairy you tolerate; whole fruit; potatoes, carrots or sweet potatoes; and seasonings or pantry foods that make cooking practical. The aim is enough energy and protein, foods you enjoy, and variety over time—not a perfect trolley.',
          'This reflects Optimally’s primal-inspired, micronutrient-focused direction, while leaving room for different tastes, cultures, budgets and exclusions. It is not a strict selector for Aajonus Vonderplanitz’s Primal Diet or Ray Peat’s separate writing.',
        ],
      },
      {
        h: 'A five-step package check',
        p: [
          '- Read the product name and serving size first. A “family pack” and a single serving can make numbers look different.',
          '- Read ingredients from the top. In US labeling, ingredients are generally listed by descending weight; local rules may have details and exceptions.',
          '- Identify the practical question: added sugar, allergen, type of oil, processing marker, protein, sodium, or simply “will this work for dinner?”',
          '- Compare like with like. Plain yoghurt versus flavoured yoghurt is a clearer comparison than yoghurt versus a snack bar.',
          '- Check the package itself. A scanner record or photo can be incomplete or outdated, and an allergen warning must be verified.',
        ],
      },
      {
        h: 'Simple does not always mean better',
        p: [
          'A long list is not automatically a sign of a poor choice. A home-cooked stew can list meat, carrots, potatoes, herbs, broth and several seasonings. A short list can still describe a sweet drink or a product with little of the nutrients you hoped to find. Ingredient type, amount, food role and overall pattern all matter.',
          'The NOVA framework classifies foods by processing and industrial formulation, but it is not a full nutrient score and its groups are broad. A product’s degree of processing can be one useful question; it does not make two products within a category nutritionally equivalent.',
        ],
      },
      {
        h: 'Three realistic trolley swaps',
        p: [
          'For breakfast, compare plain yoghurt plus berries with a sweetened dessert-style yoghurt. If you want to control sweetness, the plain tub and fruit are flexible. If the sweetened cup is what you will eat, compare its label and portion rather than skipping breakfast in pursuit of a perfect choice.',
          'For a quick dinner, compare plain frozen fish and potatoes with a breaded fish meal. The former gives you more control over sides and seasoning; the latter may save time. Read its ingredients and sodium, then choose the convenience tradeoff consciously.',
          'For snacks, compare a whole apple and a packaged fruit bar. The apple is a whole-fruit option; the bar may travel better. Its score should be read as an editorial summary of the available data, not a statement that the fruit bar has no place in your day.',
        ],
      },
      {
        h: 'Plan for allergies, budget and waste',
        p: [
          'Buy portions you can use, choose frozen or canned staples where they make meals affordable, and plan leftovers. When a package has a “may contain” statement or a named allergen, follow your own allergy plan; a high rating never makes it safe. If an exclusion is preference-based, Optimally can keep it in mind for suggestions, but the physical label remains authoritative.',
          'Food quality and food safety are separate. Cook animal foods safely and choose pasteurized dairy as the default. Organic or pasture-raised marketing does not make raw meat, eggs or milk pathogen-free.',
        ],
      },
    ],
    cta: 'Use Optimally’s barcode scan or ingredient-label photo for the packaged item you are weighing up, then save staple ideas and recipes that fit the meals on your list.',
    faq: [
      {
        q: 'Are fewer ingredients always healthier?',
        a: 'No. Ingredient count alone does not show nutrient quality, portion, processing purpose or how a food fits your diet.',
      },
      {
        q: 'Can Optimally create a strict Primal or Ray Peat shopping list?',
        a: 'Optimally follows one primal-inspired approach and does not select between diet identities. Personal allergies, intolerances and exclusions still inform suggestions.',
      },
      {
        q: 'Can a scanner confirm a product is allergy-safe?',
        a: 'No. Verify the physical package and follow your personal allergy guidance; app data may be incomplete.',
      },
    ],
    related: [
      'food-scanner-for-grocery-shopping',
      'food-scanner-with-explanations',
      'animal-based-food-scanner',
    ],
    sources: [
      {
        title: 'FDA: Types of food ingredients and ingredient order',
        url: 'https://www.fda.gov/food/food-additives-and-gras-ingredients-information-consumers/types-food-ingredients',
      },
      {
        title: 'FDA: Food allergies and label requirements',
        url: 'https://www.fda.gov/food/nutrition-food-labeling-and-critical-foods/food-allergies',
      },
      {
        title: 'NIH: Ultra-processed diets randomized trial (PMC)',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7946062/',
      },
      { title: 'USDA FoodData Central', url: 'https://fdc.nal.usda.gov/' },
    ],
  },
  {
    slug: 'nutrient-density-vs-food-processing',
    kind: 'problem',
    topic: 'food',
    updated: '9 October 2026',
    updatedISO: '2026-10-09',
    title: 'Nutrient density vs food processing: how to compare foods',
    heading: 'Nutrient density and processing answer different questions',
    description:
      'Understand why nutrient density and processing level should be read separately, and how to compare real grocery choices without false precision.',
    question: 'Is nutrient density more important than food processing?',
    answer:
      'They describe different things. Nutrient density asks what nutrients a food provides relative to a chosen amount or energy; processing describes how a food was made and formulated. A minimally processed food can still contribute a narrower range of nutrients, while a packaged food can contain useful nutrients and still be highly processed. Compare ingredient information, available nutrient data, portion and food role together. Optimally’s curated score is neither a clinical scale nor a complete micronutrient calculation.',
    sections: [
      {
        h: 'Define the two ideas before comparing',
        p: [
          'Nutrient density has no single universal denominator unless you specify it. A comparison per 100 grams, per serving or per calorie can produce different rankings. It also depends on which nutrients you include and whether the food database has reliable values for each one. FoodData Central is a useful reference for named foods, but a package’s actual formulation, portion and cooking still matter.',
          'Processing is another dimension. NOVA groups foods by the nature and purpose of processing, including industrial formulations. That can help people notice patterns that a basic nutrient panel misses. It does not calculate vitamin and mineral breadth, and it does not mean every item in the same NOVA group has the same nutritional profile.',
        ],
      },
      {
        h: 'A useful comparison keeps food role visible',
        p: [
          'Compare an apple with a serving of eggs: the apple can be a useful fruit snack, while eggs contribute protein and a different range of nutrients. Calling the apple “less nutrient-dense” in some dimensions does not make it a bad food; it tells you that the two foods play different roles. A meal can use fruit for one role and eggs, fish, meat or tolerated dairy for others.',
          'Now compare plain Greek yoghurt with a highly formulated protein dessert. Both may provide protein. The ingredient list, added sugars, processing markers, portion and wider nutrient panel answer additional questions. A high protein number alone does not erase the rest of the formulation; a longer label alone does not prove harm.',
        ],
      },
      {
        h: 'Why one score cannot be the whole diet',
        p: [
          'A product score compresses multiple judgments into one number. It can help you compare similar products quickly, but it cannot represent your portion, allergy, budget, preferences, meal pattern or lab results. It is especially misleading to call a score a “micronutrient calculation” when a record only contains calories and macronutrients. Missing fields remain unknown, not zero.',
          'Optimally’s score is a curated editorial rule set informed by food composition and its stated Primal-inspired approach. It is not clinically validated, does not diagnose deficiencies and does not establish that a product prevents or treats disease. Whole-food status does not automatically earn the top rating; category calibration considers a food’s role and the available nutrition information. The current apple maximum is 90, which reflects that calibration rather than a harmful-food warning.',
        ],
      },
      {
        h: 'A four-question comparison routine',
        p: [
          '- What job is this food doing: meal protein, fruit, cooking ingredient, snack or convenience item?',
          '- What does the label actually report, and for which serving? Separate declared values from reference database values and qualitative descriptions.',
          '- What does the ingredient list say about formulation and processing? Look for the specific ingredient you care about instead of relying on a “clean” front claim.',
          '- What else is on the plate across the day? Variety and enough energy matter more than finding one perfect product.',
        ],
      },
      {
        h: 'Processing evidence has a scope',
        p: [
          'In a small 2019 inpatient randomized crossover trial, NIH researchers fed adults ultra-processed and minimally processed diets for two weeks each. Participants ate more calories and gained weight during the ultra-processed phase even though the offered diets were matched on several nutrients. That is meaningful experimental evidence about those diets and those participants; it does not prove that every processed product is harmful, explain every mechanism, or validate every scoring system.',
          'Use processing as one useful lens alongside nutrient content and personal context. That gives you a practical choice without turning food into a purity contest.',
        ],
      },
    ],
    cta: 'Scan a packaged food in Optimally to see which ingredients and processing criteria affected its score, then use the food log and meal ideas to compare that item in context.',
    faq: [
      {
        q: 'Does a high nutrient score mean a food is unprocessed?',
        a: 'No. Nutrient content and processing are separate dimensions. Check the ingredient list and the method behind any score.',
      },
      {
        q: 'Does minimally processed automatically mean nutrient-dense?',
        a: 'No. Foods vary in protein and vitamin/mineral breadth. Whole fruit, eggs and fish can all be useful while serving different roles.',
      },
      {
        q: 'Does Optimally calculate every micronutrient?',
        a: 'No. It uses available ingredient and nutrition information within curated criteria; missing nutrient data is not treated as a zero or a complete calculation.',
      },
    ],
    related: [
      'micronutrient-focused-food-scanner',
      'how-optimally-food-scores-work',
      'whole-food-scanner-app',
    ],
    sources: [
      { title: 'USDA FoodData Central', url: 'https://fdc.nal.usda.gov/' },
      {
        title: 'NIH: Ultra-processed diets randomized trial (PMC)',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC7946062/',
      },
      {
        title: 'FDA: Ingredient listing and types of ingredients',
        url: 'https://www.fda.gov/food/food-additives-and-gras-ingredients-information-consumers/types-food-ingredients',
      },
    ],
  },
]
