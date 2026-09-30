// ------------------------------------------------------------------
// Petal & Stem — data layer
// All static/product data lives here so routes and API handlers
// share a single source of truth.
// ------------------------------------------------------------------

// ─── Bouquets ───────────────────────────────────────────────────

export type Bouquet = {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  price: number;
  season: "Spring" | "Summer" | "Fall" | "Winter" | "All-Year";
  colorPalette: string[];
  stems: string[];
  size: "Small" | "Medium" | "Large" | "Grand";
  imageGradient: string;
  icon: string;
  occasions: string[];
  featured: boolean;
};

export const bouquets: Bouquet[] = [
  {
    id: "spring-awakening",
    name: "Spring Awakening",
    slug: "spring-awakening",
    tagline: "Daffodils, tulips, ranunculus, and eucalyptus",
    description:
      "A vibrant celebration of spring's first blooms. This cheerful arrangement pairs golden daffodils with tulips and ruffled ranunculus, accented by fragrant eucalyptus. Perfect for welcoming the season of renewal.",
    price: 68,
    season: "Spring",
    colorPalette: ["#FDE68A", "#FCA5A5", "#FEF3C7", "#86EFAC"],
    stems: ["Daffodil", "Tulip", "Ranunculus", "Eucalyptus", "Waxflower"],
    size: "Medium",
    imageGradient: "from-pink-200 via-yellow-100 to-green-200",
    icon: "Leaf",
    occasions: ["everyday", "sympathy", "thank-you"],
    featured: true,
  },
  {
    id: "summer-romance",
    name: "Summer Romance",
    slug: "summer-romance",
    tagline: "Peonies, sunflowers, lavender, and ferns",
    description:
      "Lush, sun-kissed blooms that capture the warmth of summer days. Blush peonies mingle with sunflowers and sprigs of lavender, backed by verdant fern fronds. A romantic statement for any celebration.",
    price: 74,
    season: "Summer",
    colorPalette: ["#FCA5A5", "#FDE68A", "#D8B4FE", "#86EFAC"],
    stems: ["Peony", "Sunflower", "Lavender", "Fern", "Stock"],
    size: "Medium",
    imageGradient: "from-orange-200 via-rose-200 to-purple-200",
    icon: "Sun",
    occasions: ["wedding", "anniversary", "birthday"],
    featured: true,
  },
  {
    id: "autumn-hearth",
    name: "Autumn Hearth",
    slug: "autumn-hearth",
    tagline: "Dahlias, chrysanthemums, berries, and dried grasses",
    description:
      "Earthy and warm, this arrangement brings the cozy feeling of autumn indoors. Rich dahlias in burgundy and gold pair with chrysanthemums, hypericum berries, and textural dried grasses.",
    price: 72,
    season: "Fall",
    colorPalette: ["#FCA5A5", "#FBBF24", "#D97706", "#78350F"],
    stems: ["Dahlia", "Chrysanthemum", "Hypericum Berry", "Dried Grass", "Craspedia"],
    size: "Medium",
    imageGradient: "from-amber-200 via-red-200 to-brown-200",
    icon: "Star",
    occasions: ["thanksgiving", "sympathy", "everyday"],
    featured: true,
  },
  {
    id: "winter-noir",
    name: "Winter Noir",
    slug: "winter-noir",
    tagline: "Amaryllis, evergreens, white roses, and pine cones",
    description:
      "Elegant and dramatic — pure white amaryllis and roses stand against deep evergreen foliage, punctuated by pine cones and frosty accents. A stunning centerpiece for winter gatherings.",
    price: 78,
    season: "Winter",
    colorPalette: ["#F8FAFC", "#E2E8F0", "#DBEAFE", "#FEF9C3"],
    stems: ["Amaryllis", "White Rose", "Evergreen", "Pine Cone", "Baby's Breath"],
    size: "Large",
    imageGradient: "from-slate-100 via-blue-100 to-white",
    icon: "Heart",
    occasions: ["christmas", "sympathy", "anniversary"],
    featured: true,
  },
  {
    id: "blush-dreams",
    name: "Blush Dreams",
    slug: "blush-dreams",
    tagline: "Garden roses, lisianthus, astilbe, and silver eucalyptus",
    description:
      "Soft, romantic, utterly timeless. Blush garden roses take centre stage among delicate lisianthus and feathery astilbe, all wrapped in aromatic silver dollar eucalyptus. Our best-selling wedding bouquet.",
    price: 85,
    season: "All-Year",
    colorPalette: ["#FBCFE8", "#FDA4AF", "#E9D5FF", "#D1FAE5"],
    stems: ["Garden Rose", "Lisianthus", "Astilbe", "Eucalyptus", "Ammi"],
    size: "Medium",
    imageGradient: "from-pink-100 via-rose-100 to-purple-100",
    icon: "Heart",
    occasions: ["wedding", "anniversary", "birthday", "romance"],
    featured: true,
  },
  {
    id: "golden-hour",
    name: "Golden Hour",
    slug: "golden-hour",
    tagline: "Sunflowers, marigolds, goldenrod, and wheat",
    description:
      "Radiant and uplifting — this sun-drenched bouquet radiates joy. Golden sunflowers and marigolds are complemented by goldenrod and wheat stalks, creating a rustic yet refined look.",
    price: 62,
    season: "Summer",
    colorPalette: ["#FDE047", "#F59E0B", "#FEF3C7", "#D8B4FE"],
    stems: ["Sunflower", "Marigold", "Goldenrod", "Wheat", "Statice"],
    size: "Medium",
    imageGradient: "from-yellow-200 via-amber-100 to-orange-200",
    icon: "Sun",
    occasions: ["birthday", "thanksgiving", "everyday", "thank-you"],
    featured: false,
  },
  {
    id: "moonlit-garden",
    name: "Moonlit Garden",
    slug: "moonlit-garden",
    tagline: "White hydrangea, stock, tuberose, and dusty miller",
    description:
      "An ethereal all-white arrangement that catches the light like a moonlit garden. Creamy hydrangea and fragrant tuberose are layered with white stock and silvery dusty miller.",
    price: 70,
    season: "All-Year",
    colorPalette: ["#FFFFFF", "#F1F5F9", "#E2E8F0", "#CBD5E1"],
    stems: ["Hydrangea", "Stock", "Tuberose", "Dusty Miller", "Waxflower"],
    size: "Medium",
    imageGradient: "from-white via-gray-50 to-blue-50",
    icon: "Star",
    occasions: ["sympathy", "wedding", "anniversary"],
    featured: false,
  },
  {
    id: "wild-meadow",
    name: "Wild Meadow",
    slug: "wild-meadow",
    tagline: "Mixed wildflowers, Queen Anne's lace, and herbs",
    description:
      "Untamed and joyful — a hand-gathered mix of seasonal wildflowers that brings the meadow indoors. Every bunch is unique, with fragrant herbs like rosemary and mint woven throughout.",
    price: 55,
    season: "Spring",
    colorPalette: ["#FDE68A", "#86EFAC", "#FCA5A5", "#C4B5FD"],
    stems: ["Wildflower Mix", "Queen Anne's Lace", "Rosemary", "Mint", "Bells of Ireland"],
    size: "Small",
    imageGradient: "from-green-100 via-yellow-100 to-pink-100",
    icon: "Leaf",
    occasions: ["everyday", "thank-you", "birthday"],
    featured: false,
  },
  {
    id: "grand-opulence",
    name: "Grand Opulence",
    slug: "grand-opulence",
    tagline: "Calla lilies, orchids, red roses, and velvet ribbon",
    description:
      "Luxury redefined — sleek calla lilies and exotic orchids arranged with deep crimson roses in a dramatic cascade. Bound with velvet ribbon for an unforgettable presentation. Our most exquisite offering.",
    price: 150,
    season: "All-Year",
    colorPalette: ["#7F1D1D", "#991B1B", "#450A0A", "#FCD34D"],
    stems: ["Calla Lily", "Orchid", "Red Rose", "Ruscus", "Hypericum"],
    size: "Grand",
    imageGradient: "from-red-900 via-red-800 to-rose-900",
    icon: "Heart",
    occasions: ["anniversary", "romance", "wedding"],
    featured: true,
  },
];

// ─── Bouquet Builder Presets ────────────────────────────────────

export type BuilderCategory = {
  label: string;
  key: string;
  options: { label: string; price: number; description?: string }[];
};

export const builderCategories: BuilderCategory[] = [
  {
    label: "Size",
    key: "size",
    options: [
      { label: "Small (5-7 stems)", price: 0, description: "Intimate and sweet" },
      { label: "Medium (8-12 stems)", price: 15, description: "Our most popular size" },
      { label: "Large (14-18 stems)", price: 30, description: "Full and dramatic" },
      { label: "Grand (20+ stems)", price: 50, description: "Luxury statement piece" },
    ],
  },
  {
    label: "Color Palette",
    key: "palette",
    options: [
      { label: "Soft Pastels", price: 0, description: "Blush, lavender, cream" },
      { label: "Bold & Bright", price: 5, description: "Magenta, orange, yellow" },
      { label: "White & Green", price: 0, description: "Classic and elegant" },
      { label: "Sunset Tones", price: 5, description: "Coral, amber, gold" },
      { label: "Whimsical Mix", price: 3, description: "Rainbow of seasonal bloom" },
    ],
  },
  {
    label: "Focal Flower",
    key: "focal",
    options: [
      { label: "Garden Rose", price: 8, description: "Romantic and fragrant" },
      { label: "Peony", price: 12, description: "Lush and luxurious" },
      { label: "Sunflower", price: 4, description: "Cheerful and bold" },
      { label: "Calla Lily", price: 10, description: "Sleek and modern" },
      { label: "Dahlia", price: 6, description: "Textural and rich" },
      { label: "Surprise Me", price: 0, description: "Florist's choice" },
    ],
  },
  {
    label: "Add-Ons",
    key: "addons",
    options: [
      { label: "No add-ons", price: 0 },
      { label: "Baby's Breath Accent", price: 8 },
      { label: "Eucalyptus Sprigs", price: 10 },
      { label: "Decorative Wrapping", price: 6 },
      { label: "Vase Included", price: 15 },
      { label: "Chocolate Pairing", price: 12 },
      { label: "Handwritten Card", price: 5 },
    ],
  },
  {
    label: "Vessel",
    key: "vessel",
    options: [
      { label: "Classic Wrap", price: 0, description: "Recycled kraft paper" },
      { label: "Ceramic Vase", price: 12, description: "Hand-thrown stoneware" },
      { label: "Glass Vase", price: 10, description: "Clear cylinder vase" },
      { label: "Burlap Wrap", price: 4, description: "Rustic natural look" },
      { label: "Gift Box", price: 8, description: "Premium keepsake box" },
    ],
  },
];

export const BUILDER_BASE_PRICE = 45;

// ─── Occasions ──────────────────────────────────────────────────

export type Occasion = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  imageGradient: string;
  icon: string;
  tips: string[];
  recommendedBouquetIds: string[];
};

export const occasions: Occasion[] = [
  {
    id: "wedding",
    slug: "wedding",
    title: "Wedding & Civil Ceremonies",
    subtitle: "Your love story in bloom",
    description:
      "From intimate elopements to grand cathedral ceremonies, our wedding floristry team creates breathtaking arrangements that reflect your unique love story. Every petal, every stem is thoughtfully chosen to complement your theme, palette, and venue.",
    imageGradient: "from-pink-200 via-rose-100 to-white",
    icon: "Heart",
    tips: [
      "Schedule your consultation at least 3-4 months before the big day",
      "Bring fabric swatches, invitations, or a mood board to your consultation",
      "Consider seasonal blooms for the best value and freshest flowers",
      "Don't forget the boutonnières, corsages, and flower girl petals",
      "Repurpose ceremony flowers at the reception to maximize your budget",
    ],
    recommendedBouquetIds: ["blush-dreams", "summer-romance", "grand-opulence"],
  },
  {
    id: "sympathy",
    slug: "sympathy",
    title: "Sympathy & Memorial",
    subtitle: "Expressing what words cannot",
    description:
      "When words fall short, flowers speak from the heart. We create dignified, respectful sympathy arrangements — from standing sprays and casket adornments to intimate keepsakes for the family. Each arrangement is handled with the utmost care and sensitivity.",
    imageGradient: "from-slate-100 via-blue-50 to-white",
    icon: "Star",
    tips: [
      "White lilies, roses, and chrysanthemums are classic sympathy choices",
      "Consider a living plant as a lasting tribute",
      "Deliver to the funeral home or family residence — we coordinate timing",
      "Include a personalized card with your message of condolence",
      "Ask about our same-day sympathy delivery service",
    ],
    recommendedBouquetIds: ["moonlit-garden", "winter-noir", "autumn-hearth"],
  },
  {
    id: "everyday",
    slug: "everyday",
    title: "Everyday Blooms",
    subtitle: "Brighten any ordinary day",
    description:
      "You don't need a special occasion to brighten your home or someone's day. Our Everyday Blooms collection brings fresh, seasonal flowers into your life — whether it's a cheerful bunch for your kitchen table or a spontaneous surprise for someone you love.",
    imageGradient: "from-green-100 via-yellow-100 to-pink-100",
    icon: "Leaf",
    tips: [
      "Fresh flowers last 7-10 days with proper care — change water every 2 days",
      "Mix and match stems from our create-your-own bar in the studio",
      "Subscribe for weekly or bi-weekly deliveries and never run out of blooms",
      "Try unusual vessels like teapots, pitchers, or mason jars for a casual look",
      "Photograph your arrangement — we love seeing how you style your blooms!",
    ],
    recommendedBouquetIds: ["wild-meadow", "golden-hour", "spring-awakening"],
  },
  {
    id: "birthday",
    slug: "birthday",
    title: "Birthday Celebrations",
    subtitle: "Make their day blossom",
    description:
      "Celebrate another trip around the sun with flowers as vibrant and unique as the birthday person. From cheerful mixed bouquets to extravagant luxury arrangements, we'll help you find the perfect expression of your birthday wishes.",
    imageGradient: "from-yellow-200 via-orange-100 to-rose-200",
    icon: "Sun",
    tips: [
      "Include their favorite color or flower for a personal touch",
      "Add a balloon, chocolates, or a small gift to make it a complete package",
      "Schedule delivery early in the day for maximum surprise factor",
      "Consider a subscription — the gift that keeps blooming all year",
      "Ask about our birthday-party bulk floral packages",
    ],
    recommendedBouquetIds: ["golden-hour", "summer-romance", "wild-meadow"],
  },
  {
    id: "anniversary",
    slug: "anniversary",
    title: "Anniversary & Romance",
    subtitle: "Love in full bloom",
    description:
      "Mark the milestones of your journey together with flowers that speak the language of love. Whether it's your first anniversary or your fiftieth, our romantic arrangements are designed to sweep them off their feet all over again.",
    imageGradient: "from-rose-100 via-pink-100 to-purple-100",
    icon: "Heart",
    tips: [
      "Red roses are classic, but a mixed arrangement can be even more memorable",
      "Add a handwritten note sharing your favorite memory together",
      "Include their wedding flower if you remember what was in the bouquet",
      "Upgrade to a premium vase they can keep as a lasting memento",
      "Schedule a surprise delivery to their workplace for extra romance points",
    ],
    recommendedBouquetIds: ["blush-dreams", "grand-opulence", "moonlit-garden"],
  },
  {
    id: "thank-you",
    slug: "thank-you",
    title: "Thank You & Congratulations",
    subtitle: "Gratitude made beautiful",
    description:
      "Say thank you, congratulations, or well done with a bouquet that expresses your appreciation as beautifully as words. Perfect for hostess gifts, client appreciation, congratulating a new graduate, or celebrating a promotion.",
    imageGradient: "from-blue-100 via-indigo-50 to-pink-100",
    icon: "Star",
    tips: [
      "Pair with a bottle of wine or gourmet treats for a complete gift",
      "Include a card with a specific message — mention what you're grateful for",
      "Send to their home address so they can enjoy it right away",
      "Our studio wrap in recycled kraft paper is elegant and eco-friendly",
      "Can't decide? A gift certificate lets them choose their favorite blooms",
    ],
    recommendedBouquetIds: ["golden-hour", "spring-awakening", "wild-meadow"],
  },
];

// ─── Care Guides ────────────────────────────────────────────────

export type CareGuide = {
  id: string;
  slug: string;
  title: string;
  icon: string;
  summary: string;
  steps: { title: string; detail: string }[];
  tips: string[];
};

export const careGuides: CareGuide[] = [
  {
    id: "cut-stem-care",
    slug: "cut-stem-care",
    title: "Cut Stem Care",
    icon: "Scissors",
    summary: "How to prepare and maintain cut flower stems for longest vase life.",
    steps: [
      {
        title: "Trim at an angle",
        detail:
          "Using sharp shears or a knife, cut about 1-2 inches off the bottom of each stem at a 45° diagonal. This increases the surface area for water uptake and prevents stems from sitting flat against the vase bottom, which can block absorption.",
      },
      {
        title: "Use clean tools",
        detail:
          "Dirty or dull blades can crush stems and introduce bacteria. Wipe your shears with rubbing alcohol between uses, especially when working with different flower types.",
      },
      {
        title: "Remove lower foliage",
        detail:
          "Strip any leaves that would fall below the water line. Submerged leaves decay quickly, promoting bacterial growth that clogs stems and shortens flower life.",
      },
      {
        title: "Re-trim every 2-3 days",
        detail:
          "Each time you change the water, give stems a fresh cut. This reopens the vascular tissue so flowers can continue drinking effectively.",
      },
    ],
    tips: [
      "For woody stems (like lilacs or hydrangeas), split the base with a vertical cut for even better water uptake.",
      "Use a sharp knife rather than scissors when possible — scissors can crush delicate stems.",
      "Always cut over a sink or bucket — don't let cut ends touch countertops.",
    ],
  },
  {
    id: "water-and-food",
    slug: "water-and-food",
    title: "Water & Flower Food",
    icon: "Droplets",
    summary: "The right water, temperature, and nutrients make all the difference.",
    steps: [
      {
        title: "Start with clean lukewarm water",
        detail:
          "Fill your vase with fresh, lukewarm tap water. Lukewarm water contains more dissolved oxygen than cold water and is absorbed more readily by stems. Avoid distilled or softened water.",
      },
      {
        title: "Add flower food",
        detail:
          "Use the packet provided with your Petal & Stem arrangement. Flower food contains three essential ingredients: sugar (food), acidifier (lowers pH for better uptake), and bleach (antibacterial). Don't skip it!",
      },
      {
        title: "Change water every 2 days",
        detail:
          "Empty the vase, wash it with warm soapy water, rinse thoroughly, and refill with fresh water and a fresh dose of flower food. Clean vase = happy flowers.",
      },
      {
        title: "Top off between changes",
        detail:
          "Flowers drink a lot, especially in the first few days. Check the water level daily and top off with fresh water as needed. Never let the vase run dry.",
      },
    ],
    tips: [
      "No flower food? Mix 1 tsp sugar + 1 tsp lemon juice + 1/4 tsp bleach per quart of water as a DIY alternative.",
      "Avoid using pennies or aspirin in the water — modern research shows they don't help and may harm flowers.",
      "If water turns cloudy between changes, wash the vase immediately — bacteria has taken hold.",
    ],
  },
  {
    id: "light-and-placement",
    slug: "light-and-placement",
    title: "Light & Placement",
    icon: "Sun",
    summary: "Where you put your flowers matters as much as how you care for them.",
    steps: [
      {
        title: "Bright indirect light",
        detail:
          "Place arrangements in bright, indirect light — near a north or east-facing window is ideal. Direct sunlight can overheat and dehydrate flowers, causing premature wilting.",
      },
      {
        title: "Avoid drafts and heat",
        detail:
          "Keep flowers away from heating vents, radiators, air conditioning units, ceiling fans, and frequently opened doors. Air currents accelerate moisture loss from petals and leaves.",
      },
      {
        title: "Keep away from fruit bowls",
        detail:
          "Ripening fruit (especially apples, bananas, and tomatoes) emits ethylene gas, which causes flowers to age rapidly. Display arrangements in a separate room from your fruit bowl.",
      },
      {
        title: "Move at night",
        detail:
          "If possible, move arrangements to a cooler room (55-65°F) at night. Flowers last longer when they experience a temperature drop during their rest period. Return to their display spot in the morning.",
      },
    ],
    tips: [
      "Bathrooms can be great for flowers due to higher humidity — just ensure they get some natural light.",
      "Never place flowers on top of a television, radiator, or near a fireplace.",
      "In winter, keep flowers away from exterior doors and drafty windows.",
    ],
  },
  {
    id: "flower-specific-care",
    slug: "flower-specific-care",
    title: "Flower-Specific Care",
    icon: "Sprout",
    summary: "Different flowers have unique needs. Learn the quirks of popular bloom types.",
    steps: [
      {
        title: "Roses",
        detail:
          "Remove guard petals (outer layer) and thorns carefully. Recut stems under water to prevent air bubbles. Keep away from drafts. Mist petals lightly but avoid wetting the bloom center — it can cause rot.",
      },
      {
        title: "Hydrangeas",
        detail:
          "Hydrangeas drink through their petals as well as their stems. Mist the entire bloom head daily. If they droop, submerge the entire flower head in cool water for 30 minutes — they'll bounce back dramatically.",
      },
      {
        title: "Tulips",
        detail:
          "Tulips continue to grow in the vase! They'll bend toward light sources and can grow up to an inch after cutting. Keep them in a tall vase and rotate daily if they start leaning too much toward a window.",
      },
      {
        title: "Lilies",
        detail:
          "Remove the orange pollen-bearing anthers as soon as blooms open — the pollen stains fabric and skin easily. Snip them off with scissors for a cleaner look and longer bloom life.",
      },
    ],
    tips: [
      "When in doubt, ask your Petal & Stem florist — we include care cards with every arrangement.",
      "Different flowers have different vase lives; remove spent blooms promptly to keep the arrangement looking fresh.",
      "Some flowers (like daffodils) exude a sap that's harmful to other flowers — condition them separately for 24 hours before mixing.",
    ],
  },
  {
    id: "longevity-tricks",
    slug: "longevity-tricks",
    title: "Longevity Tricks",
    icon: "Thermometer",
    summary: "Pro florist secrets to extend your arrangement's life by days.",
    steps: [
      {
        title: "Cool, cool, cool",
        detail:
          "Most cut flowers last longest at 65-72°F. Every degree cooler extends vase life. At night, move arrangements to your coolest room. Never store flowers in the refrigerator alongside fruit.",
      },
      {
        title: "Mist daily",
        detail:
          "A fine mist of water on petals and leaves helps maintain humidity around the blooms. Use a spray bottle set to the finest mist setting. Avoid drenching delicate petals like garden roses.",
      },
      {
        title: "Remove spent blooms",
        detail:
          "As individual flowers fade, remove them from the arrangement. Spent blooms release ethylene gas that accelerates aging in remaining flowers. A quick daily tidy-up keeps the whole arrangement looking fresh longer.",
      },
      {
        title: "Give a fresh start",
        detail:
          "If an arrangement begins to flag, recut all stems, change the water completely, and add a new dose of flower food. Often this 'reset' can revive a tired bouquet for several more days.",
      },
    ],
    tips: [
      "Keep flowers out of direct sunlight — it's the #1 cause of premature wilting.",
      "Use a clean vase every time — residual bacteria from previous arrangements shorten vase life.",
      "Consider an arrangement's 'maturity' — tightly budded flowers will open over time, giving you a changing display.",
    ],
  },
];

// ─── Delivery Zones ─────────────────────────────────────────────

export type DeliveryZone = {
  name: string;
  zone: string;
  fee: string;
  feeAmount: number;
  time: string;
  minOrder: number;
  color: string;
  textColor: string;
  zipPrefixes: number[];
};

export const deliveryZones: DeliveryZone[] = [
  {
    name: "Downtown Core",
    zone: "Zone 1",
    fee: "Free",
    feeAmount: 0,
    time: "1-2 hours",
    minOrder: 35,
    color: "bg-green-50 border-green-200",
    textColor: "text-green-700",
    zipPrefixes: [100, 101, 102],
  },
  {
    name: "Metro Area",
    zone: "Zone 2",
    fee: "$5",
    feeAmount: 5,
    time: "2-4 hours",
    minOrder: 45,
    color: "bg-blue-50 border-blue-200",
    textColor: "text-blue-700",
    zipPrefixes: [103, 104, 110, 111],
  },
  {
    name: "Suburbs",
    zone: "Zone 3",
    fee: "$10",
    feeAmount: 10,
    time: "4-6 hours",
    minOrder: 55,
    color: "bg-amber-50 border-amber-200",
    textColor: "text-amber-700",
    zipPrefixes: [112, 113, 114, 115],
  },
  {
    name: "Extended Area",
    zone: "Zone 4",
    fee: "$15",
    feeAmount: 15,
    time: "Next Day",
    minOrder: 65,
    color: "bg-rose-50 border-rose-200",
    textColor: "text-rose-700",
    zipPrefixes: [116, 117, 118, 119],
  },
];

// ─── Helpers ────────────────────────────────────────────────────

export function getBouquetById(id: string): Bouquet | undefined {
  return bouquets.find((b) => b.id === id || b.slug === id);
}

export function getOccasionBySlug(slug: string): Occasion | undefined {
  return occasions.find((o) => o.slug === slug);
}

export function getCareGuideBySlug(slug: string): CareGuide | undefined {
  return careGuides.find((c) => c.slug === slug);
}

export function getBouquetsByOccasion(occasionSlug: string): Bouquet[] {
  return bouquets.filter((b) => b.occasions.includes(occasionSlug));
}

export function checkDeliveryZip(zip: string): {
  zone: DeliveryZone | null;
  valid: boolean;
  message: string;
} {
  const zipNum = parseInt(zip, 10);
  if (isNaN(zipNum) || zip.length < 3) {
    return { zone: null, valid: false, message: "Please enter a valid ZIP code" };
  }
  const prefix = Math.floor(zipNum / 100) * 100;
  // Support a range of patterns – match by first 3 digits
  const matched = deliveryZones.find((z) =>
    z.zipPrefixes.some((p) => {
      const diff = zipNum - p;
      return diff >= 0 && diff < 10;
    })
  );
  if (matched) {
    return {
      zone: matched,
      valid: true,
      message: `You're in ${matched.name} (${matched.zone}) — ${matched.fee} delivery, est. ${matched.time}`,
    };
  }
  return {
    zone: null,
    valid: false,
    message: "We don't currently deliver to that area. Check back soon!",
  };
}