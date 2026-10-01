export const CATEGORIES = [
  { id: 'all', name: 'All Products', description: 'Explore our complete range of raw, pure apiary honey' },
  { id: 'raw-honey', name: 'Premium Raw Honey', description: 'Unheated, unfiltered liquid gold straight from the hives' },
  { id: 'organic-wild', name: 'Organic Wild Honey', description: 'Harvested from pristine native forest groves' },
  { id: 'infused-dryfruits', name: 'Infused & Specialty Honey', description: 'Raw honey infused with organic dry fruits and herbs' },
  { id: 'monofloral', name: 'Monofloral Honey', description: 'Single-blossom seasonal harvests with distinct floral notes' }
];

export const PRODUCTS = [
  {
    id: "wild-forest-honey",
    slug: "wild-forest-honey",
    name: "Wild Forest Honey",
    tamilName: "இயற்கை காட்டு தேன்",
    category: "organic-wild",
    categoryName: "Organic Wild Honey",
    badge: "Bestseller",
    rating: 4.9,
    reviewCount: 142,
    shortDescription: "100% pure, raw honey harvested from dense pristine forest reserves with deep floral and mineral notes.",
    fullDescription: "Madhurum Wild Forest Honey is gathered by wild bee colonies feeding on rich bio-diverse blossoms in unpolluted forest reserves. Unheated, unpasteurized, and micro-filtered only through organic cotton muslin, it preserves every single enzyme, trace mineral, and active botanical pollen grain.",
    image: "/assets/wildforesthoney-Dk_XVgTC.png",
    gallery: [
      "/assets/wildforesthoney-Dk_XVgTC.png",
      "/assets/Homea1-BXfUOH0T.jpg",
      "/assets/Homea4-CDdZXS_r.jpg"
    ],
    variants: [
      { size: "250g", weightInGrams: 250, price: 349, originalPrice: 399, inStock: true },
      { size: "500g", weightInGrams: 500, price: 599, originalPrice: 699, inStock: true, isPopular: true },
      { size: "1000g (1 kg)", weightInGrams: 1000, price: 1099, originalPrice: 1299, inStock: true }
    ],
    floraSource: "Forest Wildflowers, Acacia & Herbal Blossoms",
    harvestLocation: "Western Ghats Forest Foothills, Tamil Nadu",
    moistureContent: "< 18% (Compliant with Pure Honey Standard)",
    color: "Deep Amber with golden undertones",
    tasteProfile: "Complex, woody, with a velvety caramel finish",
    shelfLife: "24 months from bottling (Pure honey never truly spoils)",
    storage: "Store in a cool, dry place away from direct sunlight. Do not refrigerate. Natural crystallization may occur — simply place jar in warm water.",
    ingredients: "100% Pure Raw Wild Forest Honey. No added sugar, syrup, preservatives, or artificial aroma.",
    benefits: [
      "Natural source of antioxidants, polyphenols, and active enzymes",
      "Soothes sore throats, seasonal coughs, and upper respiratory tract",
      "Aids natural digestion and nourishes healthy gut microbiota",
      "Strengthens everyday immune resilience and vitality"
    ],
    nutritionPer100g: {
      energy: "304 kcal",
      carbohydrates: "82.4g",
      naturalSugars: "82.1g",
      protein: "0.3g",
      fat: "0g",
      potassium: "52mg"
    }
  },
  {
    id: "moringa-honey",
    slug: "moringa-honey",
    name: "Moringa Blossom Honey",
    tamilName: "முருங்கை பூ தேன்",
    category: "monofloral",
    categoryName: "Monofloral Honey",
    badge: "Superfood",
    rating: 4.8,
    reviewCount: 98,
    shortDescription: "Nutrient-packed monofloral honey harvested during the annual blooming of organic Moringa oleifera flowers.",
    fullDescription: "Cultivated in partnership with dedicated organic moringa growers in Tamil Nadu, our bees gather nectar exclusively from pure moringa blossoms. Moringa honey is celebrated for its distinctive amber clarity, warm vegetal sweetness, and potent micronutrient composition.",
    image: "/assets/moringahoney-CyVso1zD.png",
    gallery: [
      "/assets/moringahoney-CyVso1zD.png",
      "/assets/Homea2-BaeEHGee.jpg",
      "/assets/Homea3-ZN1IhO53.jpg"
    ],
    variants: [
      { size: "100g", weightInGrams: 100, price: 299, originalPrice: 349, inStock: true },
      { size: "250g", weightInGrams: 250, price: 499, originalPrice: 599, inStock: true },
      { size: "500g", weightInGrams: 500, price: 899, originalPrice: 1049, inStock: true, isPopular: true },
      { size: "1000g (1 kg)", weightInGrams: 1000, price: 1599, originalPrice: 1899, inStock: true }
    ],
    floraSource: "Organic Moringa Oleifera (Drumstick) Blossoms",
    harvestLocation: "Dindigul & Theni Organic Belts, Tamil Nadu",
    moistureContent: "< 17.5%",
    color: "Golden Amber",
    tasteProfile: "Mildly herbal, delicately sweet with floral persistence",
    shelfLife: "24 months from bottling",
    storage: "Store at ambient room temperature in an airtight glass jar.",
    ingredients: "100% Single-Blossom Raw Moringa Honey.",
    benefits: [
      "Rich in natural iron, calcium, and plant bioflavonoids",
      "Assists in maintaining sustained stamina and energy throughout the day",
      "Promotes radiant, hydrated skin and healthy cellular turnover",
      "Ideal replacement for refined white sugar in green teas and warm beverages"
    ],
    nutritionPer100g: {
      energy: "308 kcal",
      carbohydrates: "81.9g",
      naturalSugars: "80.5g",
      protein: "0.4g",
      fat: "0g",
      iron: "1.2mg"
    }
  },
  {
    id: "dry-fruits-honey",
    slug: "dry-fruits-honey",
    name: "Dry Fruits Infused Honey",
    tamilName: "உலர் பழங்கள் கலந்த தேன்",
    category: "infused-dryfruits",
    categoryName: "Infused & Specialty Honey",
    badge: "Energy Booster",
    rating: 5.0,
    reviewCount: 186,
    shortDescription: "Premium roasted California almonds, walnuts, cashews, and pistachios steeped in thick multifloral honey.",
    fullDescription: "A powerhouse of nutrition combining handpicked roasted dry fruits steeped generously in raw, unpasteurized honey. Every spoonful delivers crunchy dry fruit goodness coupled with smooth pure honey. An exceptional traditional breakfast staple for growing children, athletes, and elderly family members.",
    image: "/assets/dryfruitsh-D5pXICcT.png",
    gallery: [
      "/assets/dryfruitsh-D5pXICcT.png",
      "/assets/Homea5-6n4Sn_d6.jpg",
      "/assets/Homea1-BXfUOH0T.jpg"
    ],
    variants: [
      { size: "250g", weightInGrams: 250, price: 449, originalPrice: 499, inStock: true },
      { size: "500g", weightInGrams: 500, price: 799, originalPrice: 899, inStock: true, isPopular: true },
      { size: "1000g (1 kg)", weightInGrams: 1000, price: 1499, originalPrice: 1699, inStock: true }
    ],
    floraSource: "Multifloral Honey with Roasted Nuts",
    harvestLocation: "Sawyerpuram Apiaries, Tuticorin & Nilgiris",
    moistureContent: "< 18%",
    color: "Golden with rich whole and sliced nut clusters",
    tasteProfile: "Nutty, rich, creamy crunch paired with soothing sweet notes",
    shelfLife: "18 months from packing",
    storage: "Keep in a cool dry area. Use a dry wooden or stainless steel spoon.",
    ingredients: "Pure Raw Multiflower Honey (60%), Almonds, Walnuts, Cashew Nuts, Pistachios (40%).",
    benefits: [
      "Wholesome fuel rich in Omega-3 fatty acids and plant protein",
      "Supports sharp cognitive performance, memory, and concentration",
      "Combines healthy fats with slow-release natural carbohydrates",
      "Perfect topping for oatmeal, Greek yogurt, or healthy dessert bowls"
    ],
    nutritionPer100g: {
      energy: "412 kcal",
      carbohydrates: "64.2g",
      naturalSugars: "58.0g",
      protein: "8.5g",
      fat: "14.2g",
      dietaryFiber: "3.1g"
    }
  },
  {
    id: "fig-honey",
    slug: "fig-honey",
    name: "Fig (Anjeer) Infused Honey",
    tamilName: "அத்திப்பழ தேன்",
    category: "infused-dryfruits",
    categoryName: "Infused & Specialty Honey",
    badge: "Digestive Wellness",
    rating: 4.9,
    reviewCount: 115,
    shortDescription: "Tender sun-ripened organic figs steeped slowly in raw honey for optimal digestive wellness and vitality.",
    fullDescription: "Naturally sun-dried organic figs (anjeer) slowly matured inside small batches of raw multifloral honey. As the figs absorb the honey, they become succulent and infuse the honey with earthy fig notes. Highly prized in traditional Ayurvedic practices for maintaining digestive equilibrium and iron levels.",
    image: "/assets/fighoney-BvdiGDkF.jpg",
    gallery: [
      "/assets/fighoney-BvdiGDkF.jpg",
      "/assets/Homea4-CDdZXS_r.jpg",
      "/assets/Homea2-BaeEHGee.jpg"
    ],
    variants: [
      { size: "250g", weightInGrams: 250, price: 429, originalPrice: 479, inStock: true },
      { size: "500g", weightInGrams: 500, price: 749, originalPrice: 849, inStock: true, isPopular: true },
      { size: "1000g (1 kg)", weightInGrams: 1000, price: 1399, originalPrice: 1599, inStock: true }
    ],
    floraSource: "Multifloral Honey steeped with Sun-Dried Figs",
    harvestLocation: "Tamil Nadu Apiaries & Certified Organic Orchards",
    moistureContent: "< 18%",
    color: "Warm dark copper with whole plump fig morsels",
    tasteProfile: "Sweet, gently tart fig notes with honey richness",
    shelfLife: "18 months from packing",
    storage: "Store away from heat and moisture. Do not refrigerate.",
    ingredients: "Pure Raw Multiflora Honey (65%), Sun-Dried Organic Turkish Figs (35%).",
    benefits: [
      "Natural soluble fiber helps relieve occasional constipation and bloating",
      "Packed with bioavailable potassium, magnesium, and dietary iron",
      "Balances acidity and nurtures healthy stomach lining",
      "Traditional revitalizer for sustained stamina and reproductive health"
    ],
    nutritionPer100g: {
      energy: "332 kcal",
      carbohydrates: "76.8g",
      naturalSugars: "71.2g",
      protein: "2.1g",
      fat: "0.6g",
      dietaryFiber: "4.8g"
    }
  },
  {
    id: "raw-multifloral-honey",
    slug: "raw-multifloral-honey",
    name: "Classic Raw Multifloral Honey",
    tamilName: "இயற்கை பல மலர் தேன்",
    category: "raw-honey",
    categoryName: "Premium Raw Honey",
    badge: "Farm Direct",
    rating: 4.8,
    reviewCount: 210,
    shortDescription: "Our signature everyday pure honey straight from our 2,000 beehives across lush seasonal pastures.",
    fullDescription: "The cornerstone of Madhurum Honey Farm. Harvested from our 2,000 managed beehives across the agricultural heartlands of Tamil Nadu. Bees pollinate native sunflower, neem, mustard, and wildflower meadows, producing a well-rounded, balanced honey loved by the whole family.",
    image: "/assets/wildforesthoney-Dk_XVgTC.png",
    gallery: [
      "/assets/wildforesthoney-Dk_XVgTC.png",
      "/assets/Homea1-BXfUOH0T.jpg",
      "/assets/Homea3-ZN1IhO53.jpg"
    ],
    variants: [
      { size: "250g", weightInGrams: 250, price: 299, originalPrice: 349, inStock: true },
      { size: "500g", weightInGrams: 500, price: 529, originalPrice: 599, inStock: true, isPopular: true },
      { size: "1000g (1 kg)", weightInGrams: 1000, price: 949, originalPrice: 1099, inStock: true }
    ],
    floraSource: "Native Meadow Wildflowers, Sunflower & Neem",
    harvestLocation: "Madhurum Bee Farm, Sawyerpuram & Coimbatore",
    moistureContent: "< 18.2%",
    color: "Warm Golden Nectar",
    tasteProfile: "Pleasantly floral, gentle sweetness, clean aftertaste",
    shelfLife: "24 months from bottling",
    storage: "Store at ambient room temperature in an upright position.",
    ingredients: "100% Pure Raw Honey. Completely unpasteurized.",
    benefits: [
      "Natural morning energizer when stirred in lukewarm lemon water",
      "Contains living enzymes (diastase and invertase) destroyed by commercial boiling",
      "Helps calm nocturnal coughing fits and promotes restful sleep",
      "Sustainably harvested with 100% bee-friendly protocols"
    ],
    nutritionPer100g: {
      energy: "304 kcal",
      carbohydrates: "82.4g",
      naturalSugars: "82.0g",
      protein: "0.3g",
      fat: "0g",
      calcium: "6mg"
    }
  },
  {
    id: "jamun-honey",
    slug: "jamun-honey",
    name: "Jamun Blossom Honey",
    tamilName: "நாவல் பூ தேன்",
    category: "monofloral",
    categoryName: "Monofloral Honey",
    badge: "Low GI",
    rating: 4.9,
    reviewCount: 76,
    shortDescription: "A rare dark honey harvested during the annual blooming of native Indian blackberry (Jamun) groves.",
    fullDescription: "Collected specifically during May and June when ancient Jamun trees burst into blossom. This distinctive dark, amber honey has a deep flavor with subtle herbal bitterness and an extraordinarily low glycemic index compared to standard sweeteners.",
    image: "/assets/moringahoney-CyVso1zD.png",
    gallery: [
      "/assets/moringahoney-CyVso1zD.png",
      "/assets/Homea4-CDdZXS_r.jpg",
      "/assets/Homea5-6n4Sn_d6.jpg"
    ],
    variants: [
      { size: "250g", weightInGrams: 250, price: 379, originalPrice: 429, inStock: true },
      { size: "500g", weightInGrams: 500, price: 649, originalPrice: 749, inStock: true, isPopular: true },
      { size: "1000g (1 kg)", weightInGrams: 1000, price: 1199, originalPrice: 1399, inStock: true }
    ],
    floraSource: "Syzygium Cumini (Jamun / Black Plum) Blossoms",
    harvestLocation: "Cauvery River Basin Orchards, Tamil Nadu",
    moistureContent: "< 17.8%",
    color: "Deep Dark Mahogany",
    tasteProfile: "Complex, bold, mildly astringent with berry notes",
    shelfLife: "24 months from bottling",
    storage: "Store in a cool, dark cupboard at room temperature.",
    ingredients: "100% Pure Raw Jamun Flower Honey.",
    benefits: [
      "Lower glycemic response, traditionally preferred for health-conscious lifestyles",
      "High concentration of plant flavonoids and astringent tannins",
      "Assists in maintaining optimal liver function and metabolic wellness",
      "Rich in natural antioxidants that neutralize everyday oxidative stress"
    ],
    nutritionPer100g: {
      energy: "298 kcal",
      carbohydrates: "79.5g",
      naturalSugars: "78.0g",
      protein: "0.5g",
      fat: "0g",
      zinc: "0.4mg"
    }
  }
];
