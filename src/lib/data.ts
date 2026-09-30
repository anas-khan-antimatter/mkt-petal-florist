export interface Arrangement {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number;
  season: string;
  occasion: string;
  stems: string[];
  colorNote: string;
  imageBg: string;
  careTip: string;
}

export const arrangements: Arrangement[] = [
  {
    slug: "spring-awakening",
    name: "Spring Awakening",
    tagline: "Daffodils, tulips, ranunculus, and eucalyptus",
    description:
      "A sunlit celebration of the season's first blooms. Hand-picked daffodils stand tall alongside frilled tulips and layered ranunculus, all cradled in fragrant eucalyptus. This arrangement brings the freshness of an early morning garden indoors.",
    price: 68,
    season: "Spring",
    occasion: "everyday",
    stems: ["Daffodil", "Tulip", "Ranunculus", "Eucalyptus", "Waxflower"],
    colorNote: "Buttercup yellow, blush pink, soft white, stem green",
    imageBg: "from-amber-100 via-yellow-100 to-green-200",
    careTip: "Trim stems at an angle every 2 days and keep away from direct sunlight and fruit bowls.",
  },
  {
    slug: "summer-romance",
    name: "Summer Romance",
    tagline: "Peonies, sunflowers, lavender, and ferns",
    description:
      "Lush, generous, and utterly romantic — this arrangement is built around the opulent peony. Sunflowers add a cheerful lift, while spikes of lavender bring fragrance and texture. Ferns and trailing ivy complete the feeling of a wild summer garden.",
    price: 74,
    season: "Summer",
    occasion: "wedding",
    stems: ["Peony", "Sunflower", "Lavender", "Fern", "Ivy"],
    colorNote: "Magenta blush, golden yellow, violet, deep green",
    imageBg: "from-orange-200 via-rose-200 to-purple-200",
    careTip: "Peonies benefit from a gentle mist of water. Re-cut stems and change water daily for longest vase life.",
  },
  {
    slug: "autumn-hearth",
    name: "Autumn Hearth",
    tagline: "Dahlias, chrysanthemums, berries, and dried grasses",
    description:
      "Inspired by the warmth of a crackling fire, this arrangement pairs dinner-plate dahlias with textural chrysanthemums, bright hypericum berries, and airy dried grasses. It's a celebration of abundance and the beauty of change.",
    price: 72,
    season: "Fall",
    occasion: "sympathy",
    stems: ["Dahlia", "Chrysanthemum", "Hypericum Berry", "Dried Grass", "Ruscus"],
    colorNote: "Burnt orange, burgundy, bronze, ochre",
    imageBg: "from-amber-200 via-red-200 to-brown-200",
    careTip: "Remove leaves below the waterline to prevent bacterial growth. Dahlias prefer cooler room temperatures.",
  },
  {
    slug: "winter-noir",
    name: "Winter Noir",
    tagline: "Amaryllis, evergreens, white roses, and pine cones",
    description:
      "Dramatic and sculptural, Winter Noir channels the quiet elegance of a snowy forest. Stark white amaryllis and roses rise from a bed of evergreen fronds, punctuated by pine cones and silver brunia. A study in contrast and restraint.",
    price: 78,
    season: "Winter",
    occasion: "wedding",
    stems: ["Amaryllis", "White Rose", "Evergreen", "Pine Cone", "Brunia"],
    colorNote: "Crisp white, forest green, silver, charcoal",
    imageBg: "from-slate-100 via-blue-100 to-white",
    careTip: "Amaryllis stems are thick and hollow — use a sharp knife for a clean cut. Change water every other day.",
  },
  {
    slug: "blush-garden-rose",
    name: "Blush Garden Rose",
    tagline: "Garden roses, lisianthus, scabiosa, and sage",
    description:
      "Our signature arrangement features the unfurling beauty of garden roses in blush and cream. Delicate lisianthus and dancing scabiosa add whimsy, while sage leaves ground the composition with their velvety green.",
    price: 82,
    season: "Spring",
    occasion: "wedding",
    stems: ["Garden Rose", "Lisianthus", "Scabiosa", "Sage", "Astrantia"],
    colorNote: "Blush pink, cream, lavender, sage green",
    imageBg: "from-pink-200 via-rose-200 to-green-100",
    careTip: "Garden roses are thirsty — fill the vase to the top and top off daily. Remove guard petals for a fuller bloom.",
  },
  {
    slug: "golden-hour",
    name: "Golden Hour",
    tagline: "Marigolds, yarrow, crocosmia, and bunny tails",
    description:
      "Capturing the honeyed light of late afternoon, this textural arrangement layers warm marigolds with soft yarrow, fiery crocosmia, and playful bunny tails grasses. It's joy bottled in a vase.",
    price: 62,
    season: "Summer",
    occasion: "everyday",
    stems: ["Marigold", "Yarrow", "Crocosmia", "Bunny Tail Grass", "Solidago"],
    colorNote: "Golden yellow, amber, burnt orange, wheat",
    imageBg: "from-yellow-200 via-orange-200 to-amber-100",
    careTip: "Remove foliage that will sit below the waterline. Change water every 2 days and re-cut stems.",
  },
  {
    slug: "ivory-sympathy",
    name: "Ivory Tribute",
    tagline: "Calla lilies, white orchids, eucalyptus, and ferns",
    description:
      "A serene and dignified arrangement of pure white calla lilies and phalaenopsis orchids, set against a bed of silvery eucalyptus and leathery ferns. Designed to convey respect, remembrance, and peace.",
    price: 90,
    season: "All",
    occasion: "sympathy",
    stems: ["Calla Lily", "White Orchid", "Eucalyptus", "Fern", "Waxflower"],
    colorNote: "Pure white, ivory, silver-green",
    imageBg: "from-white via-green-100 to-slate-100",
    careTip: "Calla lilies are sensitive to ethylene gas — keep away from ripening fruit. Mist orchids lightly.",
  },
  {
    slug: "wild-prairie",
    name: "Wild Prairie",
    tagline: "Echinacea, rudbeckia, eryngium, and grasses",
    description:
      "Untamed and free-spirited, this arrangement celebrates the beauty of the plains. Coneflowers and black-eyed Susans mingle with spiky eryngium and swaying grasses, creating a mini meadow on your table.",
    price: 58,
    season: "Summer",
    occasion: "everyday",
    stems: ["Echinacea", "Rudbeckia", "Eryngium", "Pampas Grass", "Mint"],
    colorNote: "Purple-pink, golden yellow, steel blue, tan",
    imageBg: "from-purple-200 via-yellow-100 to-green-200",
    careTip: "Hardy native flowers are low-maintenance — simply top up water and trim every 3-4 days.",
  },
  {
    slug: "first-bloom",
    name: "First Bloom",
    tagline: "Sweet peas, freesia, stock, and baby's breath",
    description:
      "Delicate and sweetly scented, this petite arrangement is perfect for a bedside table or a thoughtful gift. Sweet peas cascade alongside fragrant freesia and stock, with tiny sprays of baby's breath like fresh snowfall.",
    price: 44,
    season: "Spring",
    occasion: "everyday",
    stems: ["Sweet Pea", "Freesia", "Stock", "Baby's Breath", "Mint"],
    colorNote: "Pastel pink, lavender, white, pale green",
    imageBg: "from-pink-100 via-purple-100 to-white",
    careTip: "Sweet peas are delicate — handle gently and keep in a cool spot away from drafts.",
  },
];

export function getArrangement(slug: string): Arrangement | undefined {
  return arrangements.find((a) => a.slug === slug);
}

export const occasions = [
  {
    slug: "wedding",
    name: "Wedding Floristry",
    hero: "Every love story deserves petals.",
    description:
      "From intimate elopements to grand celebrations, we design floral narratives that echo your unique love. Our team works closely with you to understand your palette, venue, and vision — then translates it into hand-tied bouquets, ceremony arches, table arrangements, and installations.",
    offerings: [
      "Bridal & bridesmaid bouquets",
      "Ceremony arches & aisle markers",
      "Reception centerpieces",
      "Corsages & boutonnières",
      "Floral installations",
    ],
    imageBg: "from-pink-200 via-rose-200 to-green-200",
    cta: "Schedule a consultation",
  },
  {
    slug: "sympathy",
    name: "Sympathy & Remembrance",
    hero: "Honoring those we hold in memory.",
    description:
      "In moments of loss, flowers speak when words cannot. We craft respectful arrangements that celebrate a life well-lived — from traditional standing sprays and casket adornments to intimate keepsakes. White, ivory, and soft lavender palettes convey serenity and grace.",
    offerings: [
      "Standing sprays & wreaths",
      "Casket adornments",
      "Sympathy baskets",
      "Memorial keepsakes",
      "Funeral service flowers",
    ],
    imageBg: "from-white via-green-200 to-slate-200",
    cta: "Speak with our team",
  },
  {
    slug: "everyday",
    name: "Everyday Arrangements",
    hero: "Make the ordinary extraordinary.",
    description:
      "You don't need a special occasion to deserve flowers. Our everyday collection brings the studio's seasonal sensibility to your home or office. Delivered weekly, bi-weekly, or as a one-time treat — each arrangement is a fresh composition shaped by what's blooming that week.",
    offerings: [
      "Weekly subscription",
      "Single delivery",
      "Desk arrangements",
      "Hostess gifts",
      "Just-because surprises",
    ],
    imageBg: "from-yellow-200 via-orange-200 to-green-100",
    cta: "Start subscription",
  },
];

export function getOccasion(slug: string) {
  return occasions.find((o) => o.slug === slug);
}