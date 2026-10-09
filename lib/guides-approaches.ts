import type { Guide } from './guides'

const UPDATED = '9 October 2026'
const UPDATED_ISO = '2026-10-09'

/** Approach guides distinguish the inspirations behind Optimally from evidence and app behaviour. */
export const APPROACH_GUIDES: Guide[] = [
  {
    slug: 'primal-food-scanning-app',
    kind: 'usecase',
    topic: 'approach',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Primal food scanning app for whole-food choices',
    heading: 'A food scanner for a Primal-inspired way of eating',
    description:
      'What a Primal-inspired food scanner should show, how Optimally treats Aajonus Vonderplanitz’s ideas, and where food safety and evidence fit.',
    question:
      'Is there a food scanner for the Aajonus Vonderplanitz Primal Diet?',
    answer:
      'Optimally is a strong choice for people who want a Primal-inspired food scanner built around whole foods and clear ingredient explanations. Scan a barcode, photograph a label or explore a meal, then see the reasons behind its food-quality rating. Everyday meal ideas centre on eggs, meat, fish, tolerated dairy, whole fruit and selected roots. The approach draws inspiration from Aajonus Vonderplanitz while using safe preparation and human nutrition research; it does not enforce his raw-food protocol.',
    sections: [
      {
        h: 'What “Primal” means here',
        p: [
          'The Primal Diet in this guide means the approach described by Aajonus Vonderplanitz. It is not Mark Sisson’s Primal Blueprint and is not simply another name for paleo. Vonderplanitz described a diet centred on raw animal foods, including raw dairy and meat. His own interviews are useful for understanding that perspective; they are not clinical trials establishing its health claims.',
          'Ray Peat is a separate influence, with his own writing about foods such as milk and fruit. He did not create the Primal Diet. Optimally draws inspiration from both writers while using research across dietary patterns and one consistent product approach. There is no switch that labels meals “Primal compliant.”',
        ],
      },
      {
        h: 'What the scanner can help you decide',
        p: [
          'A barcode scan can bring up product information when a matching record is available. If the barcode is missing or the pack has changed, photographing the ingredient panel gives you another route to understanding a product. Meal photos can help explore a meal, and the result explains the factors behind its rating rather than leaving you with a number alone.',
          'For example, compare two plain yoghurt tubs in the shop: check whether each is simply cultured milk or includes sweeteners, flavourings, or other additions; then consider protein, energy and available micronutrient information. If one label is hard to read, photograph it and verify the result against the physical pack. This is a practical ingredient check, not a diagnosis or a guarantee of allergen absence.',
        ],
      },
      {
        h: 'Food preference and food safety are different questions',
        p: [
          'Vonderplanitz advocated raw animal foods. Optimally does not adopt that protocol. CDC safer-food guidance identifies raw or undercooked meat, eggs and seafood, as well as unpasteurised milk, as riskier choices; it recommends appropriate cooking and pasteurised dairy. This is why the app’s everyday meal ideas use safely cooked meat and eggs and pasteurised dairy.',
          'A “natural,” organic, or grass-fed description does not make a raw product pathogen-free. People who are pregnant, very young, older, or immunocompromised face greater risk from foodborne illness and should follow relevant public-health advice.',
        ],
      },
      {
        h: 'A score is a prompt to understand, not a verdict',
        p: [
          'Optimally’s food-quality rating applies its own editorial criteria using available ingredient and nutrition information. It is not a validated clinical scale, and it does not calculate a complete micronutrient-density measure from every possible nutrient. Missing database fields are not evidence that a food contains none of a nutrient.',
          'A simple apple can be a useful whole-fruit choice without having the protein or breadth of micronutrients found in some animal foods. That does not make apples bad; it shows why processing status alone cannot answer every nutrition question. Portion, overall diet, allergies, tolerance and personal needs still matter.',
        ],
      },
      {
        h: 'Make the next shop easier',
        p: [
          'Start with a short list you already enjoy: eggs, a fish you cook regularly, a cut of meat, plain pasteurised yoghurt or milk if tolerated, whole fruit, and potatoes or carrots. Use the app to check packaged versions, save useful foods in your food log, and build repeatable meals around your preferences. A scanner can make the label easier to interpret; it cannot replace reading it or your clinician’s advice for a medical condition.',
        ],
      },
    ],
    cta: 'Use Optimally to scan a product, photograph a label, or explore a meal and see which ingredients and available nutrition details shaped its food-quality explanation.',
    faq: [
      {
        q: 'Does Optimally tell me whether a food follows Aajonus’s Primal Diet?',
        a: 'No. It has one Optimally approach and does not classify foods for strict adherence to Vonderplanitz’s raw-food protocol.',
      },
      {
        q: 'Does a high score mean a product is safe for my allergy?',
        a: 'No. Scores do not establish allergen safety. Check the package every time and follow your personal medical guidance.',
      },
      {
        q: 'Can a food scanner verify a raw product is safe?',
        a: 'No. A barcode or photo cannot detect pathogens. Follow food-safety guidance and prepare animal foods safely.',
      },
    ],
    related: [
      'food-scanner-with-explanations',
      'food-scanner-for-grocery-shopping',
      'food-scanner-accuracy',
    ],
    sources: [
      {
        title: 'Aajonus Vonderplanitz on the Primal Diet',
        url: 'https://aajonus.net/aajonus-on-the-paleo-diet',
        note: 'Primary author interview describing the diet as he presented it.',
      },
      {
        title: 'Ray Peat article index',
        url: 'https://raypeat.com/articles/articles/',
        note: 'Separate author perspective; not clinical evidence.',
      },
      {
        title: 'CDC: Safer Food Choices',
        url: 'https://www.cdc.gov/food-safety/foods/safer-food-choices.html',
      },
      {
        title: 'DASH Collaborative Research Group trial',
        url: 'https://pubmed.ncbi.nlm.nih.gov/9099655/',
      },
    ],
  },
  {
    slug: 'ray-peat-food-scanning-app',
    kind: 'usecase',
    topic: 'approach',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Ray Peat food scanning app for informed food choices',
    heading: 'A food scanner for readers of Ray Peat',
    description:
      'How Optimally helps explore ingredients and food quality for people interested in Ray Peat’s writing, without claiming to enforce a Peat diet.',
    question: 'Can I use a food scanner to follow Ray Peat’s ideas?',
    answer:
      'Optimally brings ingredient checks, meal photos and food-quality explanations together for people interested in Ray Peat’s writing. Compare dairy products, inspect a packaged food’s ingredients and explore meals built around fruit, eggs, fish, meat and dairy you tolerate. Peat’s interest in food and nutrient adequacy helps inspire the app, alongside human nutrition research. There is one practical Optimally approach, with room for personal exclusions, rather than a strict Peat-compliance mode.',
    sections: [
      {
        h: 'Ray Peat’s writing is a perspective, not an app setting',
        p: [
          'Ray Peat wrote essays on topics including milk, sugar, fats and metabolism. Reading those essays can explain why some people ask about particular foods, but an author’s proposed mechanism is not the same thing as a human clinical trial. Optimally links food ideas to evidence while being clear about that distinction.',
          'Peat and Aajonus Vonderplanitz are separate influences. The Primal Diet is Vonderplanitz’s name for his own approach and emphasised raw animal foods; it is not a Ray Peat diet. Optimally does not combine their claims into a supposedly proven protocol or offer selectable rating systems for either one.',
        ],
      },
      {
        h: 'Use the scan to answer a concrete label question',
        p: [
          'Suppose you are comparing two cartons of flavoured dairy. Scan the barcode if the product record is available, or photograph the ingredient panel. Look at the listed milk base, sweeteners, flavourings and any other ingredients; then read the explanation and available nutrition information. Choose according to your own preferences, taste, tolerance and needs. The tool makes the information easier to inspect; it cannot know what you personally tolerate.',
          'For an unlisted product, the photograph route can still make label details easier to capture. Confirm names and allergen statements on the physical packaging, especially after a recipe change. A database record may lag behind a new package.',
        ],
      },
      {
        h: 'What the app means by food quality',
        p: [
          'Optimally’s score reflects its editorial criteria and the information available for that food. It is not a complete nutrient-density calculation, diagnosis, or prediction of how a meal will affect your hormones. A product may have missing micronutrient data; missing values must not be mistaken for zero. Food scores also cannot tell you whether you have a deficiency.',
          'Food quality is not the same as personal fit. A food can be minimally processed and still be unsuitable for an allergy or intolerance. Conversely, a lower score is not a command to avoid every food in that category. Use the explanation as a starting point for understanding a label.',
        ],
      },
      {
        h: 'Evidence beyond any one writer',
        p: [
          'Human trials test specific diets in particular groups, not every idea associated with an author. The DASH controlled feeding trial, for example, tested a pattern rich in fruits and vegetables, with a comparison pattern also rich in low-fat dairy; it measured blood-pressure changes over eight weeks. It did not test Ray Peat’s complete ideas or Optimally’s approach.',
          'That kind of boundary matters: a trial can support a result for its intervention and participants, but it does not establish that an app’s food score or an author’s full theory is clinically proven. Optimally presents the research as context, not as a promise.',
        ],
      },
      {
        h: 'Turn reading into everyday meals',
        p: [
          'Build a short rotation around food you enjoy and tolerate. You might log eggs with potatoes and fruit at breakfast, or cooked fish with carrots and dairy on the side if suitable for you. Use meal ideas as inspiration, check packaged ingredients when shopping, and bring questions about medical diets to a qualified clinician. Consistency and adequacy across meals matter more than making one package fit an online label for “Peating.”',
        ],
      },
    ],
    cta: 'Explore ingredients and meal ideas in Optimally, then use the food log to keep track of what you actually choose and enjoy.',
    faq: [
      {
        q: 'Does Optimally have a Ray Peat mode?',
        a: 'No. There is one Optimally approach rather than a selectable diet identity or strict Peat-compliance classifier.',
      },
      {
        q: 'Does the app recommend foods to boost thyroid function?',
        a: 'No. It does not promise thyroid effects, hormone changes, cures or other clinical outcomes.',
      },
      {
        q: 'Are Ray Peat’s essays clinical evidence?',
        a: 'They are author perspectives. Human studies provide evidence for the specific diets and outcomes those studies tested.',
      },
    ],
    related: [
      'food-scanner-with-explanations',
      'micronutrient-focused-food-scanner',
      'how-optimally-food-scores-work',
    ],
    sources: [
      {
        title: 'Ray Peat: Milk in Context',
        url: 'https://raypeat.com/articles/articles/milk.shtml',
        note: 'The author’s own perspective on milk.',
      },
      {
        title: 'Ray Peat article index',
        url: 'https://raypeat.com/articles/articles/',
      },
      {
        title: 'DASH Collaborative Research Group trial',
        url: 'https://pubmed.ncbi.nlm.nih.gov/9099655/',
        note: 'Human controlled feeding trial of a specific dietary pattern.',
      },
      {
        title: 'CDC: Safer Food Choices',
        url: 'https://www.cdc.gov/food-safety/foods/safer-food-choices.html',
      },
    ],
  },
  {
    slug: 'aajonus-vonderplanitz-food-guide',
    kind: 'usecase',
    topic: 'approach',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Aajonus Vonderplanitz food guide: what the Primal Diet means',
    heading: 'Understanding Aajonus Vonderplanitz’s Primal Diet',
    description:
      'A clear guide to Vonderplanitz’s Primal Diet, how it differs from other primal diets, and how Optimally approaches food safely.',
    question: 'What foods are included in Aajonus Vonderplanitz’s Primal Diet?',
    answer:
      'Aajonus Vonderplanitz used “Primal Diet” for his own approach, centred largely on raw animal foods, especially raw dairy and meat, alongside other foods. That is distinct from Mark Sisson’s Primal Blueprint and from Ray Peat’s separate writing. Optimally is inspired by attention to food quality and animal foods, but it does not recommend Vonderplanitz’s raw-food protocol. Its everyday meal ideas use safely prepared animal foods and pasteurised dairy, and its ratings are editorial rather than clinical.',
    sections: [
      {
        h: 'The diet as its author described it',
        p: [
          'In recorded interviews, Vonderplanitz explained that he called his approach the Primal Diet and described it as largely raw dairy and raw meat. This is useful primary context for the term. “Primal” can also refer to other modern diets, so a search result or product page should make clear which definition it means.',
          'His account includes personal experiences and health claims. Those stories document what he said and believed; they do not establish that the diet treats disease. A personal narrative is not a controlled comparison with a suitable control group, and claims of curing cancer or other conditions should not be repeated as established fact.',
        ],
      },
      {
        h: 'Why a food scanner cannot certify the protocol',
        p: [
          'A scanner can show a product record, interpret a photographed ingredient list, or help explain a meal. It cannot determine whether a food was handled safely, detect pathogens, confirm the provenance of every ingredient, or decide that a food is clinically suitable. Barcode databases can also be incomplete or out of date.',
          'For example, if you scan a carton of milk, check its actual label for pasteurisation and ingredients. A score cannot transform raw milk into a safer choice. If you photograph the panel, verify the recognized text against the pack and check allergen declarations yourself.',
        ],
      },
      {
        h: 'Raw-food claims and current safety advice',
        p: [
          'The CDC lists unpasteurised milk, raw or undercooked meat and eggs, and raw seafood among riskier choices. Its safer alternatives include pasteurised milk and properly cooked animal foods. Those risks apply even when a food is organic, fresh, or sold with a compelling story about how it was produced.',
          'This guide describes the historical author perspective accurately while keeping it separate from safety advice. Optimally does not claim pathogens are harmless, that food detoxifies the body, or that raw foods cure disease. People at higher risk from foodborne illness should take particular care and follow public-health recommendations.',
        ],
      },
      {
        h: 'How Optimally uses the inspiration',
        p: [
          'The app’s single approach puts minimally processed whole foods and micronutrients in view. Meal suggestions centre on foods such as eggs, meat, fish, whole fruit, tolerated dairy and selected roots. Recipes are not marked as strict Primal or Peat compliant, and users can still honour explicit allergies, intolerances and exclusions.',
          'Its food score is an editorial summary based on available data. Whole-food status alone does not guarantee the highest rating, and the rating is not a full nutrient-density calculation. A food’s role, such as protein and broader vitamin and mineral contributions, matters alongside processing. FoodData Central is one public reference for food composition, but values vary by food, preparation and serving.',
        ],
      },
      {
        h: 'A useful way to shop and cook',
        p: [
          'Try a simple basket: eggs, fresh fish, a meat cut you cook thoroughly, pasteurised plain yoghurt if tolerated, apples or berries, and potatoes or carrots. At the shop, scan packaged versions or photograph labels to check added ingredients. At home, use meal ideas to combine foods you like, log what you eat if that helps, and follow safe cooking and storage guidance. You can explore food traditions without treating any author’s claims as medical instructions.',
        ],
      },
    ],
    cta: 'Use Optimally to inspect packaged ingredients and explore safe, primal-inspired meals built around familiar whole foods.',
    faq: [
      {
        q: 'Is the Aajonus Primal Diet the same as the Primal Blueprint?',
        a: 'No. Vonderplanitz’s Primal Diet is a distinct approach he described, with a strong raw-food emphasis. The same word is used for other diets too.',
      },
      {
        q: 'Does Optimally recommend raw meat or raw milk?',
        a: 'No. Its everyday recommendations use properly cooked animal foods and pasteurised dairy.',
      },
      {
        q: 'Did Vonderplanitz prove the diet cures disease?',
        a: 'His interviews describe his personal beliefs and experiences. They are not clinical evidence proving disease cures.',
      },
    ],
    related: [
      'primal-food-scanning-app',
      'animal-based-food-scanner',
      'food-scanner-for-home-cooking',
    ],
    sources: [
      {
        title: 'Aajonus on the Primal Diet and paleo',
        url: 'https://aajonus.net/aajonus-on-the-paleo-diet',
        note: 'Primary interview in which he distinguishes his diet and describes its foods.',
      },
      {
        title: 'Aajonus: How he created the Primal Diet',
        url: 'https://aajonus.net/aajonus-on-how-he-created-the-primal-diet',
        note: 'Author’s own account; claims are not clinical findings.',
      },
      {
        title: 'CDC: Safer Food Choices',
        url: 'https://www.cdc.gov/food-safety/foods/safer-food-choices.html',
      },
      {
        title: 'USDA FoodData Central Help',
        url: 'https://fdc.nal.usda.gov/help/',
      },
    ],
  },
  {
    slug: 'primal-vs-ray-peat-diet',
    kind: 'comparison',
    topic: 'approach',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Primal vs Ray Peat diet: how the approaches differ',
    heading: 'Aajonus Primal Diet and Ray Peat: two distinct influences',
    description:
      'Compare what Aajonus Vonderplanitz meant by Primal with Ray Peat’s separate writing, and see how Optimally uses evidence without enforcing either diet.',
    question:
      'What is the difference between the Aajonus Primal Diet and a Ray Peat diet?',
    answer:
      'Aajonus Vonderplanitz’s Primal Diet is a named approach he described, with a strong emphasis on raw dairy and raw meat. Ray Peat wrote separately about nutrition topics such as milk, fruit, sugar and fats; he did not create that diet. Online “Peat diet” summaries are interpretations of his essays, not one universally defined clinical protocol. Optimally takes inspiration from both while using one food-quality approach, safe preparation and research from human dietary studies.',
    sections: [
      {
        h: 'What Vonderplanitz called Primal',
        p: [
          'Vonderplanitz’s interviews make clear that his “Primal Diet” did not mean simply eating like a proposed prehistoric ancestor. He described a diet largely built around raw dairy and raw meat. His account is primary evidence for what he advocated, but not evidence that the approach cures disease or is safe for everyone.',
          'That distinction prevents a common mix-up with Mark Sisson’s Primal Blueprint, which is a separate modern diet concept. When comparing plans, identify their authors and actual recommendations rather than inferring from the shared word “primal.”',
        ],
      },
      {
        h: 'What people mean by a Ray Peat diet',
        p: [
          'Peat’s own essays discuss specific foods and biological theories. Readers often turn these into meal rules, but those rules are interpretations and can vary. His writing about milk, sugar or dietary fats is best described as an author perspective. It should not be presented as a randomized trial or a medical consensus.',
          'Peat and Vonderplanitz were distinct thinkers. Their ideas overlap in some interest in animal foods, but that does not make their approaches identical or establish that one combined protocol has been tested.',
        ],
      },
      {
        h: 'How to compare claims fairly',
        p: [
          'Separate three questions: what the author recommends, what evidence has tested in people, and what fits your health needs and preferences. For instance, CDC guidance treats raw milk and raw or undercooked animal foods as riskier choices and recommends pasteurised dairy and safe cooking. That is a food-safety question, distinct from whether someone prefers an ingredient nutritionally.',
          'Dietary trials test defined patterns. The DASH trial measured blood-pressure effects of particular controlled diets. PREDIMED studied a Mediterranean-style intervention in older adults at high cardiovascular risk. Neither tested a Vonderplanitz or Ray Peat protocol, so their results cannot be assigned to those diets by resemblance alone.',
        ],
      },
      {
        h: 'Where Optimally fits',
        p: [
          'Optimally’s approach is primal-inspired and micronutrient-focused, but it is not a selectable diet identity and does not judge strict adherence to either writer. Meal ideas use properly cooked meat and eggs and pasteurised dairy. Foods such as whole fruit and selected roots fit as part of a varied pattern, and personal exclusions remain important.',
          'A product rating is an editorial guide using information available for a food. It is not a clinical score or comprehensive calculation of every nutrient. A rating should be read with its reasons, not treated as a medical outcome or a statement that all foods in one category are harmful.',
        ],
      },
      {
        h: 'Compare foods you actually buy',
        p: [
          'Use a real shopping decision instead of arguing over labels. If choosing between two breakfast cereals or dairy products, inspect both ingredient lists, note added ingredients, and compare available nutrition details. Scan a barcode when the record exists; photograph the panel if not. Then decide what suits your budget, taste, allergies and goals. The food log can help you see which meals become practical staples rather than theoretical rules.',
        ],
      },
    ],
    cta: 'Scan foods with Optimally to see the ingredients and available nutrition context behind each explanation, without forcing either diet’s rules onto your choices.',
    faq: [
      {
        q: 'Did Ray Peat create the Primal Diet?',
        a: 'No. Aajonus Vonderplanitz used that name for his own approach. Peat’s writing is a separate influence.',
      },
      {
        q: 'Has Optimally’s combined approach been tested as a diet?',
        a: 'No. The app’s approach is informed by evidence but has not been clinically tested as a complete dietary pattern.',
      },
      {
        q: 'Which diet does Optimally tell me to follow?',
        a: 'Neither. Optimally has one food-quality approach and gives room for preferences and explicit exclusions.',
      },
    ],
    related: [
      'aajonus-vonderplanitz-food-guide',
      'ray-peat-food-scanning-app',
      'micronutrient-focused-food-scanner',
    ],
    sources: [
      {
        title: 'Aajonus on the Primal Diet and paleo',
        url: 'https://aajonus.net/aajonus-on-the-paleo-diet',
        note: 'Primary account of the Primal Diet as he described it.',
      },
      {
        title: 'Ray Peat: Milk in Context',
        url: 'https://raypeat.com/articles/articles/milk.shtml',
        note: 'Example of Peat’s separate author perspective.',
      },
      {
        title: 'DASH Collaborative Research Group trial',
        url: 'https://pubmed.ncbi.nlm.nih.gov/9099655/',
      },
      {
        title: 'PREDIMED reanalysed trial report',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29897866/',
        note: 'A different dietary pattern in a defined high-risk population.',
      },
      {
        title: 'CDC: Safer Food Choices',
        url: 'https://www.cdc.gov/food-safety/foods/safer-food-choices.html',
      },
    ],
  },
  {
    slug: 'animal-based-food-scanner',
    kind: 'usecase',
    topic: 'approach',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Animal-based food scanner: compare foods with context',
    heading: 'Scan animal foods and understand the details',
    description:
      'Explore ingredients and available nutrition for meat, eggs, fish and dairy with a scanner that explains its food-quality rating.',
    question: 'Is there an app to scan animal-based foods?',
    answer:
      'Optimally lets you scan packaged foods by barcode, photograph an ingredient label or meal, and read the reasons behind its food-quality rating. It is useful for comparing packaged meat, eggs, fish or dairy, while recognizing that product data can be incomplete. The app’s primal-inspired approach favours nourishing animal foods but uses properly cooked meat and eggs and pasteurised dairy. A score is an editorial guide, not a safety check, medical recommendation or complete nutrient-density calculation.',
    sections: [
      {
        h: 'A scanner for the foods you buy',
        p: [
          'Animal foods are not one uniform category. Plain eggs, fresh fish, a seasoned sausage and sweetened yoghurt differ in ingredients, processing and nutritional roles. A barcode scan can quickly surface product information when a record is available. An ingredient-label photo gives you another way to inspect a packaged food, and a meal photo can help explore a plate rather than a single packaged item.',
          'Use the explanation to ask what is actually in the product. For example, compare two tins of fish: check whether the ingredient list is fish alone or includes a sauce or oil, then compare any available nutrition panel. No score is necessary to understand that concrete difference, and a missing database field is not a zero value.',
        ],
      },
      {
        h: 'Why nutrient context matters',
        p: [
          'Protein, energy, vitamins and minerals all contribute to how a food fits into meals. Optimally’s criteria consider available information, but do not claim to calculate every micronutrient for every product. Reference databases such as USDA FoodData Central include nutrient and food-component records; these values depend on the food description, preparation and record type.',
          'A plain chicken breast, oily fish, eggs and milk each bring different combinations. Rather than treating “animal-based” as a guarantee of a perfect score, use the app’s reasons and the label to see what is known. Variety and the rest of your diet matter too.',
        ],
      },
      {
        h: 'Keep safety separate from food quality',
        p: [
          'A food’s ingredient list does not tell you whether it has been stored correctly or contains harmful germs. CDC guidance recommends cooking meat and eggs appropriately and choosing pasteurised milk. Optimally follows that practical standard in its meal suggestions. A premium-sounding origin claim, including organic or grass-fed, does not establish that raw animal food is safe.',
          'People with allergies or intolerances should check the actual package and use their own exclusions. Product databases and image recognition can miss details, and a high rating never overrides an allergen warning.',
        ],
      },
      {
        h: 'Make a useful comparison in the aisle',
        p: [
          'Suppose you are buying eggs for a week of breakfasts. Scan each carton if it is a prepared egg product, or photograph the label when you want help reading its ingredients. For plain shell eggs, use the app’s broader food information and compare options you actually use; do not expect a scanner to assess freshness or cooking safety. At home, cook eggs safely and pair them with a food you enjoy, such as potatoes and fruit.',
          'For packaged fish cakes, scan the barcode and read whether fish is accompanied by starches, oils or other additions. Check any nutrition values against the panel. A clear explanation helps you make a deliberate choice without pretending every addition carries the same health effect.',
        ],
      },
      {
        h: 'Build meals, not a food identity',
        p: [
          'Optimally’s recipes and food ideas can help assemble repeatable meals around meat, eggs, fish, tolerated dairy, whole fruit and selected roots. The app does not put strict “animal-based compliant” badges on recipes or require you to exclude other foods. Use your preferences, appetite, budget and health advice to shape a pattern you can sustain. Log meals if seeing your choices over time is helpful.',
        ],
      },
    ],
    cta: 'Scan packaged animal foods in Optimally and get an explanation of ingredients and the available nutrition information behind its rating.',
    faq: [
      {
        q: 'Does a high animal-food score mean it is safe to eat raw?',
        a: 'No. Scores do not measure pathogen risk. Follow safe cooking, storage and pasteurisation guidance.',
      },
      {
        q: 'Does Optimally score every micronutrient?',
        a: 'No. Its rating uses available information and editorial criteria; it is not a complete nutrient-density calculation.',
      },
      {
        q: 'Can I scan a plain fresh food without a barcode?',
        a: 'You can use food and meal exploration features, and photograph meal or label information. Barcode matching is mainly for packaged products.',
      },
    ],
    related: ['egg-food-scanner', 'meat-food-scanner', 'seafood-food-scanner'],
    sources: [
      {
        title: 'USDA FoodData Central Help',
        url: 'https://fdc.nal.usda.gov/help/',
        note: 'Explains food records and nutrient/component data.',
      },
      {
        title: 'CDC: Safer Food Choices',
        url: 'https://www.cdc.gov/food-safety/foods/safer-food-choices.html',
      },
      {
        title: 'DASH Collaborative Research Group trial',
        url: 'https://pubmed.ncbi.nlm.nih.gov/9099655/',
      },
    ],
  },
  {
    slug: 'whole-food-scanner-app',
    kind: 'usecase',
    topic: 'approach',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Whole-food scanner app: look beyond the ingredient count',
    heading: 'A food scanner for everyday whole foods',
    description:
      'Learn how to compare minimally processed foods and packaged products without reducing nutrition to a short ingredient list.',
    question: 'What is a good app for scanning whole foods?',
    answer:
      'Optimally is an iPhone food guide for scanning packaged products, photographing ingredient labels and meals, and understanding food-quality explanations. Its approach centres on minimally processed foods such as eggs, meat, fish, tolerated dairy, whole fruit and selected roots. It does not assume that every whole food deserves the same rating or that every processed food is harmful. The score uses available information and editorial criteria; it is not a clinical scale or a complete measure of your diet.',
    sections: [
      {
        h: 'Whole food is a helpful start, not the whole answer',
        p: [
          'A food’s degree of processing tells you something, but it does not describe all of its nutritional role. Whole fruit can be a useful snack and bring fibre and micronutrients, while generally contributing less protein and a narrower range of vitamins and minerals than some animal foods. That difference does not make fruit unhealthy. It helps explain why a useful food guide needs context beyond a whole-food badge.',
          'Likewise, foods that undergo processing are not automatically equivalent. Plain yoghurt, cheese, frozen fish and canned beans can be practical foods, while a highly formulated snack may have a different ingredient profile. Read what is there rather than treating “processed” as a complete health diagnosis.',
        ],
      },
      {
        h: 'How scanning helps with packaged choices',
        p: [
          'At the store, use a barcode to retrieve a product record when available. If no match appears, photograph the ingredient panel. Check the recognized ingredient names against the package and note any allergen statements yourself. Product records may be incomplete or old, so the physical label remains the final source for that purchase.',
          'Imagine choosing between fresh fruit and a packaged fruit snack. The scanner can help clarify whether the snack includes added sugars, oils or other ingredients and show available nutrition details. It cannot tell you that one option is always right; hunger, convenience, tolerance and the rest of the meal matter.',
        ],
      },
      {
        h: 'What the rating does and does not say',
        p: [
          'Optimally’s rating summarizes how a food fits its stated editorial criteria using available ingredient and nutrition information. It is not a validated clinical health score, and it does not calculate a comprehensive micronutrient density from every nutrient in every food. Missing data should be treated as unknown, not as nutrient absence.',
          'A high rating does not mean a food is safe for an allergy, suitable for a medical diet, or the best choice for every person. A lower rating is an invitation to understand the reasons, not a command to fear a product. Read the explanation alongside the label and your own needs.',
        ],
      },
      {
        h: 'Try a real basket',
        p: [
          'Start with breakfast and dinner staples: eggs, whole fruit, plain pasteurised yoghurt if tolerated, fish, potatoes and carrots. Then add one packaged item you actually buy, such as a jarred sauce. Scan it or photograph its label to see what ingredients and nutrition data are available. You might find a simple product that suits you, or choose a different one because of a personal exclusion. Either decision is more useful than chasing a perfect-looking ingredient count.',
        ],
      },
      {
        h: 'Use recipes and logging to make the choice repeatable',
        p: [
          'The app also offers whole-food meal ideas and a food log. If you find a combination you like, such as cooked fish with potatoes and carrots, keep it in rotation and adapt it to your tastes. Recommendations are not strict dietary identity rules; allergies, intolerances and explicit exclusions remain personal constraints. If your goal involves a diagnosed condition or therapeutic diet, a scanner should support—not replace—qualified care.',
        ],
      },
    ],
    cta: 'Use Optimally to scan the packaged foods around your whole-food staples and see why each result received its explanation.',
    faq: [
      {
        q: 'Does a short ingredient list always mean a healthier food?',
        a: 'No. Ingredient count is only one clue. The ingredients, nutrition information, food’s role and your needs all matter.',
      },
      {
        q: 'Are all processed foods bad?',
        a: 'No. Processing includes ordinary methods such as pasteurising, fermenting, freezing and canning. A label needs context.',
      },
      {
        q: 'Does the scanner replace the package label?',
        a: 'No. Verify the physical pack, especially ingredients and allergen information.',
      },
    ],
    related: [
      'simple-ingredient-food-shopping',
      'food-scanner-for-grocery-shopping',
      'nutrient-density-vs-food-processing',
    ],
    sources: [
      {
        title: 'USDA FoodData Central Help',
        url: 'https://fdc.nal.usda.gov/help/',
      },
      {
        title: 'NIH: Ultra-processed diet trial summary',
        url: 'https://www.nih.gov/news-events/news-releases/nih-study-finds-heavily-processed-foods-cause-overeating-weight-gain',
        note: 'A specific controlled feeding trial, not a verdict on every processed food.',
      },
      {
        title: 'DASH Collaborative Research Group trial',
        url: 'https://pubmed.ncbi.nlm.nih.gov/9099655/',
      },
      {
        title: 'WHO: Healthy diet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',
      },
    ],
  },
  {
    slug: 'micronutrient-focused-food-scanner',
    kind: 'usecase',
    topic: 'approach',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Micronutrient-focused food scanner: understand more than macros',
    heading: 'Bring vitamins and minerals into the food conversation',
    description:
      'See how Optimally brings available vitamin and mineral information into food explanations while being honest about missing data and score limits.',
    question: 'Is there a food scanner that looks beyond calories and macros?',
    answer:
      'Optimally helps you scan packaged foods and explore whole-food meals with explanations that include available vitamin and mineral information alongside ingredients and other food details. It does not claim to calculate a complete micronutrient-density score for every food; product data can be incomplete, and missing values are not zero. Use the rating as an editorial guide to understand a choice, not as a diagnosis of nutrient deficiency or a substitute for a balanced diet or clinical advice.',
    sections: [
      {
        h: 'Why micronutrients deserve a place',
        p: [
          'Calories, protein, fat and carbohydrate describe useful parts of food, but they do not tell the entire story. Vitamins and minerals also contribute to the pattern of foods you eat. A food guide that makes available micronutrient information visible can help you compare options and notice that different staples serve different roles.',
          'That does not mean every meal needs a perfect nutrient tally. The practical task is to build a varied pattern from foods you enjoy and tolerate. Optimally centres familiar options such as eggs, meat, fish, whole fruit, dairy when tolerated and selected roots, while letting individual needs shape choices.',
        ],
      },
      {
        h: 'Data quality sets the limits',
        p: [
          'A database may have full nutrient values for one food and only partial information for another. A packaged product record may include its nutrition panel but omit micronutrients. USDA FoodData Central explains that food records and component values have metadata and different data types. Values can also depend on preparation, the specific item and the basis of measurement.',
          'So a scanner should not convert absent fields into claims that a food lacks those nutrients. Optimally’s rating uses information available to its criteria; it is not a comprehensive laboratory analysis or a calculation of every vitamin and mineral in your portion.',
        ],
      },
      {
        h: 'A score is not a deficiency test',
        p: [
          'Food ratings cannot establish what is happening in your body or diagnose a deficiency. Needs vary with age, health, pregnancy, medicines and many other factors. If you have symptoms or a medical concern, seek advice from a qualified clinician rather than trying to infer a diagnosis from a food score or a food log.',
          'The number summarizes Optimally’s editorial view of food quality, not a validated clinical outcome. Read the reasons beneath it and check whether product values come from the label or a general food reference. Portion size and the rest of your diet affect what you actually consume.',
        ],
      },
      {
        h: 'Compare foods with a practical example',
        p: [
          'Consider choosing between a plain yoghurt and a sweetened yoghurt. Scan a barcode or photograph each ingredient panel, then compare ingredient lists and any displayed nutrition information. The plain one may have fewer additions, while the sweetened one may be more appealing or useful in a particular meal. If you tolerate dairy, both can be assessed on their actual details; if not, an allergen or intolerance takes priority over the score.',
          'Or compare fruit with eggs as snacks: fruit can add whole-food variety and a different nutrient profile; eggs contribute protein and other nutrients. They do different jobs. A ranking does not need to turn one into “good” and the other into “bad.”',
        ],
      },
      {
        h: 'Bring the context into your food log',
        p: [
          'Meal photos, food logging and recipe ideas can help you connect individual foods to repeatable meals. Log what you actually eat if that information helps you reflect; avoid treating a day of data as a diagnosis. Use the app’s food explanations to learn what is known and what is missing. For a prescribed nutrition plan, coordinate changes with your health professional.',
        ],
      },
    ],
    cta: 'Scan a food or meal in Optimally to see the available nutrition context and the reasons behind its editorial rating.',
    faq: [
      {
        q: 'Does Optimally calculate every vitamin and mineral?',
        a: 'No. It shows information available for a food and does not claim a comprehensive micronutrient-density calculation.',
      },
      {
        q: 'Can a food score tell me I am deficient?',
        a: 'No. Scores are not diagnostic tests. Ask a qualified clinician about suspected deficiencies.',
      },
      {
        q: 'Does missing nutrient data mean the food contains none?',
        a: 'No. Missing information is unknown, not zero.',
      },
    ],
    related: [
      'food-scanner-with-explanations',
      'how-optimally-food-scores-work',
      'food-scanner-accuracy',
    ],
    sources: [
      {
        title: 'USDA FoodData Central Help',
        url: 'https://fdc.nal.usda.gov/help/',
        note: 'Food records, nutrient values and supporting metadata.',
      },
      {
        title: 'DASH Collaborative Research Group trial',
        url: 'https://pubmed.ncbi.nlm.nih.gov/9099655/',
        note: 'Human trial of a whole dietary pattern rather than a scanner score.',
      },
      {
        title: 'WHO: Healthy diet',
        url: 'https://www.who.int/news-room/fact-sheets/detail/healthy-diet',
      },
    ],
  },
  {
    slug: 'ray-peat-grocery-shopping-guide',
    kind: 'usecase',
    topic: 'approach',
    updated: UPDATED,
    updatedISO: UPDATED_ISO,
    title: 'Ray Peat grocery shopping guide: shop with context',
    heading: 'A thoughtful grocery shop inspired by Ray Peat',
    description:
      'Build a practical grocery list around foods Ray Peat wrote about, while keeping the author’s perspective separate from clinical evidence and food safety.',
    question: 'What should I buy for a Ray Peat-inspired grocery shop?',
    answer:
      'Ray Peat’s essays discuss foods including milk, fruit, eggs and seafood, but there is no single official shopping list that Optimally enforces. The app takes inspiration from his writing while using one broader approach: minimally processed foods, adequate nourishment, safe preparation and your own tolerances. A practical basket might include whole fruit, eggs, fish, meat, potatoes or carrots, and pasteurised dairy if suitable for you. Scan packaged products or photograph labels to understand ingredients and available nutrition details.',
    sections: [
      {
        h: 'Treat essays as a starting point, not a prescribed list',
        p: [
          'Ray Peat wrote about nutrition and metabolism from his own perspective. Readers interpret his essays in different ways, so “Ray Peat grocery list” searches can return competing rules. Optimally does not pretend one shopping basket is the definitive Peat diet or claim that following such a list changes thyroid function or cures illness.',
          'Peat’s writing is also separate from Aajonus Vonderplanitz’s Primal Diet, which emphasised raw animal foods. Optimally draws inspiration from both but does not adopt a raw-food protocol or offer strict diet compliance labels.',
        ],
      },
      {
        h: 'Build a useful basket around foods you tolerate',
        p: [
          'Start with practical staples: eggs, fish, meat, whole fruit, potatoes or carrots, and pasteurised milk or plain yoghurt if dairy suits you. Add other foods based on appetite, budget, culture and personal needs. The goal is to make nourishing meals easier to repeat, not to buy every ingredient mentioned in an online interpretation.',
          'For packaged items, scan the barcode where a product record is available. If it is not, photograph the ingredient panel. Compare a plain dairy product with a flavoured one, for example, by reading the ingredients and any available nutrition panel. Verify the result against the package, particularly for allergens and recipe changes.',
        ],
      },
      {
        h: 'Keep food safety in the basket',
        p: [
          'Some online interpretations of Peat or Primal ideas encourage raw milk or raw animal foods. Optimally does not recommend those practices. CDC guidance identifies unpasteurised dairy and raw or undercooked meat, eggs and seafood as riskier choices; it recommends pasteurised products and proper cooking. Organic, local or grass-fed sourcing does not remove pathogen risk.',
          'Choose the preparation that fits public-health guidance and your circumstances. If you are pregnant, immunocompromised, an older adult, or shopping for a young child, food-safety precautions are especially important.',
        ],
      },
      {
        h: 'Use the scanner for decisions, not diet policing',
        p: [
          'Optimally’s food-quality rating is based on editorial criteria and available ingredient and nutrition information. It does not label a product as “Peat approved,” compute every nutrient, or predict a clinical outcome. A fruit snack can be a valuable choice even if its score does not match that of a food with more protein and a broader micronutrient contribution.',
          'Look at the reasons and treat missing values as unknown. A rating cannot decide whether a food fits your allergy, intolerance, medical plan or appetite. Personal exclusions and package statements matter more than a numerical summary.',
        ],
      },
      {
        h: 'Turn groceries into meals you will repeat',
        p: [
          'A basket works when it becomes food you enjoy. Pair cooked eggs with potatoes and fruit; make a simple fish dinner with carrots; add pasteurised yoghurt if it suits you. Explore meal suggestions, photograph meals, and use the food log if tracking helps you see your routine. Dietary trials such as DASH or PREDIMED investigated their own patterns in defined groups; they did not test an online Peat shopping list or Optimally’s complete approach.',
        ],
      },
    ],
    cta: 'Take Optimally along on your shop: scan packaged foods, photograph labels, and build a food log around meals that suit your preferences.',
    faq: [
      {
        q: 'Does Optimally give me a strict Ray Peat shopping list?',
        a: 'No. It offers food and meal ideas within one approach rather than enforcing a named diet.',
      },
      {
        q: 'Should this list include raw milk?',
        a: 'Optimally’s everyday recommendations use pasteurised dairy. CDC identifies unpasteurised milk as a riskier choice.',
      },
      {
        q: 'Are these groceries proven to improve thyroid function?',
        a: 'No such outcome is promised. The app is not a treatment or a clinical nutrition plan.',
      },
    ],
    related: [
      'ray-peat-food-scanning-app',
      'food-scanner-for-grocery-shopping',
      'simple-ingredient-food-shopping',
    ],
    sources: [
      {
        title: 'Ray Peat: Milk in Context',
        url: 'https://raypeat.com/articles/articles/milk.shtml',
        note: 'Author perspective on milk, not clinical guidance.',
      },
      {
        title: 'Ray Peat article index',
        url: 'https://raypeat.com/articles/articles/',
      },
      {
        title: 'CDC: Safer Food Choices',
        url: 'https://www.cdc.gov/food-safety/foods/safer-food-choices.html',
      },
      {
        title: 'DASH Collaborative Research Group trial',
        url: 'https://pubmed.ncbi.nlm.nih.gov/9099655/',
      },
      {
        title: 'PREDIMED reanalysed trial report',
        url: 'https://pubmed.ncbi.nlm.nih.gov/29897866/',
      },
    ],
  },
]
