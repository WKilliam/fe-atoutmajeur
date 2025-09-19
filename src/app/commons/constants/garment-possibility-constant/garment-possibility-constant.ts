import {SelectUiOptionsInterface} from '@interfaces';

// Constante pour les labels
export const CONST_GarmentLabels = {
  ALL_GARMENTS: 'All Garments',

  // Tops
  SHIRTS: 'Shirts',
  T_SHIRTS: 'T-Shirts',
  POLO_SHIRTS: 'Polo Shirts',
  BLOUSES: 'Blouses',
  SWEATERS: 'Sweaters',
  HOODIES: 'Hoodies',
  TANK_TOPS: 'Tank Tops',
  CARDIGANS: 'Cardigans',

  // Bottoms
  PANTS: 'Pants',
  JEANS: 'Jeans',
  SHORTS: 'Shorts',
  SKIRTS: 'Skirts',
  LEGGINGS: 'Leggings',
  TROUSERS: 'Trousers',

  // Dresses & Jumpsuits
  DRESSES: 'Dresses',
  EVENING_DRESSES: 'Evening Dresses',
  COCKTAIL_DRESSES: 'Cocktail Dresses',
  CASUAL_DRESSES: 'Casual Dresses',
  JUMPSUITS: 'Jumpsuits',
  ROMPERS: 'Rompers',

  // Outerwear
  SUITS: 'Suits',
  BLAZERS: 'Blazers',
  JACKETS: 'Jackets',
  COATS: 'Coats',
  WINTER_COATS: 'Winter Coats',
  LEATHER_JACKETS: 'Leather Jackets',
  WINDBREAKERS: 'Windbreakers',
  VESTS: 'Vests',

  // Underwear & Intimate
  UNDERWEAR: 'Underwear',
  BRAS: 'Bras',
  SOCKS: 'Socks',
  STOCKINGS: 'Stockings',
  LINGERIE: 'Lingerie',
  BOXERS: 'Boxers',

  // Sportswear
  SPORTSWEAR: 'Sportswear',
  YOGA_PANTS: 'Yoga Pants',
  SPORTS_BRAS: 'Sports Bras',
  SWIMWEAR: 'Swimwear',
  ATHLETIC_SHORTS: 'Athletic Shorts',
  GYM_WEAR: 'Gym Wear',

  // Sleepwear
  PAJAMAS: 'Pajamas',
  NIGHTGOWNS: 'Nightgowns',
  ROBES: 'Robes',
  SLEEP_SHIRTS: 'Sleep Shirts',

  // Home Textiles
  BED_SHEETS: 'Bed Sheets',
  PILLOWCASES: 'Pillowcases',
  TOWELS: 'Towels',
  BATH_TOWELS: 'Bath Towels',
  BLANKETS: 'Blankets',
  COMFORTERS: 'Comforters',
  CURTAINS: 'Curtains',
  TABLE_LINENS: 'Table Linens',
  DUVET_COVERS: 'Duvet Covers',

  // Special Occasion
  WEDDING_DRESSES: 'Wedding Dresses',
  FORMAL_WEAR: 'Formal Wear',
  UNIFORMS: 'Uniforms',
  COSTUMES: 'Costumes',

  // Accessories
  TIES: 'Ties',
  SCARVES: 'Scarves',
  BELTS: 'Belts',
  HATS: 'Hats',
  GLOVES: 'Gloves',

  // Other
  OTHER: 'Other',
  DELICATE_ITEMS: 'Delicate Items',
  VINTAGE_ITEMS: 'Vintage Items',
  SPECIALTY_FABRICS: 'Specialty Fabrics',
  BABY_CLOTHES: 'Baby Clothes',
  CHILDREN_CLOTHES: 'Children Clothes'
} as const;

// Constante principale qui utilise les labels séparés
export const Const_GarmentPossibility: SelectUiOptionsInterface[] = [
  { value: '', label: CONST_GarmentLabels.ALL_GARMENTS },

  // Tops
  { value: 'SHIRTS', label: CONST_GarmentLabels.SHIRTS },
  { value: 'T_SHIRTS', label: CONST_GarmentLabels.T_SHIRTS },
  { value: 'POLO_SHIRTS', label: CONST_GarmentLabels.POLO_SHIRTS },
  { value: 'BLOUSES', label: CONST_GarmentLabels.BLOUSES },
  { value: 'SWEATERS', label: CONST_GarmentLabels.SWEATERS },
  { value: 'HOODIES', label: CONST_GarmentLabels.HOODIES },
  { value: 'TANK_TOPS', label: CONST_GarmentLabels.TANK_TOPS },
  { value: 'CARDIGANS', label: CONST_GarmentLabels.CARDIGANS },

  // Bottoms
  { value: 'PANTS', label: CONST_GarmentLabels.PANTS },
  { value: 'JEANS', label: CONST_GarmentLabels.JEANS },
  { value: 'SHORTS', label: CONST_GarmentLabels.SHORTS },
  { value: 'SKIRTS', label: CONST_GarmentLabels.SKIRTS },
  { value: 'LEGGINGS', label: CONST_GarmentLabels.LEGGINGS },
  { value: 'TROUSERS', label: CONST_GarmentLabels.TROUSERS },

  // Dresses & Jumpsuits
  { value: 'DRESSES', label: CONST_GarmentLabels.DRESSES },
  { value: 'EVENING_DRESSES', label: CONST_GarmentLabels.EVENING_DRESSES },
  { value: 'COCKTAIL_DRESSES', label: CONST_GarmentLabels.COCKTAIL_DRESSES },
  { value: 'CASUAL_DRESSES', label: CONST_GarmentLabels.CASUAL_DRESSES },
  { value: 'JUMPSUITS', label: CONST_GarmentLabels.JUMPSUITS },
  { value: 'ROMPERS', label: CONST_GarmentLabels.ROMPERS },

  // Outerwear
  { value: 'SUITS', label: CONST_GarmentLabels.SUITS },
  { value: 'BLAZERS', label: CONST_GarmentLabels.BLAZERS },
  { value: 'JACKETS', label: CONST_GarmentLabels.JACKETS },
  { value: 'COATS', label: CONST_GarmentLabels.COATS },
  { value: 'WINTER_COATS', label: CONST_GarmentLabels.WINTER_COATS },
  { value: 'LEATHER_JACKETS', label: CONST_GarmentLabels.LEATHER_JACKETS },
  { value: 'WINDBREAKERS', label: CONST_GarmentLabels.WINDBREAKERS },
  { value: 'VESTS', label: CONST_GarmentLabels.VESTS },

  // Underwear & Intimate
  { value: 'UNDERWEAR', label: CONST_GarmentLabels.UNDERWEAR },
  { value: 'BRAS', label: CONST_GarmentLabels.BRAS },
  { value: 'SOCKS', label: CONST_GarmentLabels.SOCKS },
  { value: 'STOCKINGS', label: CONST_GarmentLabels.STOCKINGS },
  { value: 'LINGERIE', label: CONST_GarmentLabels.LINGERIE },
  { value: 'BOXERS', label: CONST_GarmentLabels.BOXERS },

  // Sportswear
  { value: 'SPORTSWEAR', label: CONST_GarmentLabels.SPORTSWEAR },
  { value: 'YOGA_PANTS', label: CONST_GarmentLabels.YOGA_PANTS },
  { value: 'SPORTS_BRAS', label: CONST_GarmentLabels.SPORTS_BRAS },
  { value: 'SWIMWEAR', label: CONST_GarmentLabels.SWIMWEAR },
  { value: 'ATHLETIC_SHORTS', label: CONST_GarmentLabels.ATHLETIC_SHORTS },
  { value: 'GYM_WEAR', label: CONST_GarmentLabels.GYM_WEAR },

  // Sleepwear
  { value: 'PAJAMAS', label: CONST_GarmentLabels.PAJAMAS },
  { value: 'NIGHTGOWNS', label: CONST_GarmentLabels.NIGHTGOWNS },
  { value: 'ROBES', label: CONST_GarmentLabels.ROBES },
  { value: 'SLEEP_SHIRTS', label: CONST_GarmentLabels.SLEEP_SHIRTS },

  // Home Textiles
  { value: 'BED_SHEETS', label: CONST_GarmentLabels.BED_SHEETS },
  { value: 'PILLOWCASES', label: CONST_GarmentLabels.PILLOWCASES },
  { value: 'TOWELS', label: CONST_GarmentLabels.TOWELS },
  { value: 'BATH_TOWELS', label: CONST_GarmentLabels.BATH_TOWELS },
  { value: 'BLANKETS', label: CONST_GarmentLabels.BLANKETS },
  { value: 'COMFORTERS', label: CONST_GarmentLabels.COMFORTERS },
  { value: 'CURTAINS', label: CONST_GarmentLabels.CURTAINS },
  { value: 'TABLE_LINENS', label: CONST_GarmentLabels.TABLE_LINENS },
  { value: 'DUVET_COVERS', label: CONST_GarmentLabels.DUVET_COVERS },

  // Special Occasion
  { value: 'WEDDING_DRESSES', label: CONST_GarmentLabels.WEDDING_DRESSES },
  { value: 'FORMAL_WEAR', label: CONST_GarmentLabels.FORMAL_WEAR },
  { value: 'UNIFORMS', label: CONST_GarmentLabels.UNIFORMS },
  { value: 'COSTUMES', label: CONST_GarmentLabels.COSTUMES },

  // Accessories
  { value: 'TIES', label: CONST_GarmentLabels.TIES },
  { value: 'SCARVES', label: CONST_GarmentLabels.SCARVES },
  { value: 'BELTS', label: CONST_GarmentLabels.BELTS },
  { value: 'HATS', label: CONST_GarmentLabels.HATS },
  { value: 'GLOVES', label: CONST_GarmentLabels.GLOVES },

  // Other
  { value: 'OTHER', label: CONST_GarmentLabels.OTHER },
  { value: 'DELICATE_ITEMS', label: CONST_GarmentLabels.DELICATE_ITEMS },
  { value: 'VINTAGE_ITEMS', label: CONST_GarmentLabels.VINTAGE_ITEMS },
  { value: 'SPECIALTY_FABRICS', label: CONST_GarmentLabels.SPECIALTY_FABRICS },
  { value: 'BABY_CLOTHES', label: CONST_GarmentLabels.BABY_CLOTHES },
  { value: 'CHILDREN_CLOTHES', label: CONST_GarmentLabels.CHILDREN_CLOTHES }
];

