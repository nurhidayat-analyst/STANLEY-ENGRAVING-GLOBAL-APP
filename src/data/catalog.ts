import quencherH20Img from '@/assets/products/quencher-h20-blue.png'
import quencherProTourImg from '@/assets/products/quencher-protour-peach.png'
import iceFlowImg from '@/assets/products/iceflow-white.png'
import campMugImg from '@/assets/products/camp-mug-green.png'
import cafeTumblerImg from '@/assets/products/cafe-tumbler-brown.png'
import quencherGreenImg from '@/assets/products/quencher-green.png'
import quencherGreenBlankImg from '@/assets/products/quencher-green-blank.png'

import trending1Img from '@/assets/images/trending-1.jpg'
import trending2Img from '@/assets/images/trending-2.jpg'
import trending3Img from '@/assets/images/trending-3.jpg'

export interface ProductColor {
  name: string
  hex: string
  image?: string
  blankImage?: string
  isLight?: boolean
}

export interface EngravingCharLimits {
  S: number
  M: number
  L: number
  XL: number
}

export interface EngravingProfile {
  zoneWidth: number
  zoneHeight: number
  zoneTop?: string
  maxSoloGraphicHeight: number
  largeGraphicHeight: number
  standardGraphicHeight: number
  smallGraphicHeight: number
  charLimits: {
    solo: EngravingCharLimits
    withLargeGraphic: EngravingCharLimits
    withStandardGraphic: EngravingCharLimits
    withSmallGraphic: EngravingCharLimits
  }
}

export const DEFAULT_ENGRAVING_PROFILE: EngravingProfile = {
  zoneWidth: 191,
  zoneHeight: 280,
  zoneTop: '48%',
  maxSoloGraphicHeight: 182,
  largeGraphicHeight: 182,
  standardGraphicHeight: 135,
  smallGraphicHeight: 100,
  charLimits: {
    solo: { S: 100, M: 80, L: 60, XL: 40 },
    withLargeGraphic: { S: 60, M: 45, L: 30, XL: 20 },
    withStandardGraphic: { S: 80, M: 60, L: 45, XL: 30 },
    withSmallGraphic: { S: 90, M: 70, L: 55, XL: 35 },
  }
}

export const getEngravingProfile = (product?: Product): EngravingProfile => {
  return product?.engravingProfile || DEFAULT_ENGRAVING_PROFILE
}

export interface Product {
  id: string
  handle: string
  name: string
  description: string
  priceFormatted: string
  priceAmount: number
  currency: string
  defaultImage: string
  defaultBlankImage?: string
  gradientFrom: string
  gradientTo: string
  colors: ProductColor[]
  badge?: string
  sizes?: string[]
  engravingProfile?: EngravingProfile
}

export interface InspirationCard {
  id: string
  titleLine1: string
  titleLine2?: string
  subtitle?: string
  tag?: string
  image: string
  bgColor?: string
  textColor: 'black' | 'white'
  gradientOverlay?: string
  description: string
  campaignId?: string
}

export const INSPIRATION_CARDS: InspirationCard[] = [
  {
    id: 'collaborations',
    titleLine1: 'Collaborations',
    subtitle: 'Exclusive artist & brand co-creations.',
    tag: 'Collaborations',
    image: trending1Img,
    bgColor: '#1d3e68',
    textColor: 'white',
    gradientOverlay: 'linear-gradient(180deg, rgba(12, 38, 70, 0.70) 0%, rgba(12, 38, 70, 0.22) 40%, transparent 75%)',
    description: 'Exclusive artist & brand co-creations.',
    campaignId: 'maliq',
  },
  {
    id: 'licensed-graphics',
    titleLine1: 'Licensed Graphics',
    subtitle: 'Official badges, crests, and partner artwork.',
    tag: 'Licensed Graphics',
    image: trending2Img,
    bgColor: '#1e293b',
    textColor: 'white',
    gradientOverlay: 'linear-gradient(180deg, rgba(15, 23, 42, 0.72) 0%, rgba(15, 23, 42, 0.25) 40%, transparent 75%)',
    description: 'Official badges, crests, and partner artwork.',
    campaignId: 'university',
  },
  {
    id: 'design-gallery',
    titleLine1: 'Design Gallery',
    subtitle: 'Explore curated vector art and graphics.',
    tag: 'Design Gallery',
    image: trending3Img,
    bgColor: '#2a221a',
    textColor: 'white',
    gradientOverlay: 'linear-gradient(180deg, rgba(25, 20, 16, 0.72) 0%, rgba(25, 20, 16, 0.25) 40%, transparent 75%)',
    description: 'Explore curated vector art and graphics.',
    campaignId: 'autumn-26',
  },
]

export const PRODUCTS: Product[] = [
  {
    id: 'quencher-h20-40oz',
    handle: 'the-quencher-h20-flowstate-tumbler-40oz',
    name: 'The Quencher H2.0 FlowState™ Tumbler 40 oz',
    description: 'The iconic everyday hydration tumbler with 3-position FlowState™ lid and comfort-grip handle.',
    priceFormatted: 'IDR 800.000',
    priceAmount: 800000,
    currency: 'IDR',
    defaultImage: '/products/quencher-flowstate-front.png',
    defaultBlankImage: '/products/quencher-flowstate-back.png',
    gradientFrom: '#1e355b',
    gradientTo: '#95b3d7',
    sizes: ['40 oz', '30 oz'],
    engravingProfile: {
      zoneWidth: 191,
      zoneHeight: 280,
      zoneTop: '48%',
      maxSoloGraphicHeight: 182,
      largeGraphicHeight: 182,
      standardGraphicHeight: 135,
      smallGraphicHeight: 100,
      charLimits: {
        solo: { S: 100, M: 80, L: 60, XL: 40 },
        withLargeGraphic: { S: 60, M: 45, L: 30, XL: 20 },
        withStandardGraphic: { S: 80, M: 60, L: 45, XL: 30 },
        withSmallGraphic: { S: 90, M: 70, L: 55, XL: 35 },
      }
    },
    colors: [
      { name: 'Navy Blue', hex: '#1E355B', image: '/products/quencher-flowstate-front.png', blankImage: '/products/quencher-flowstate-back.png', isLight: false },
      { name: 'Hammertone Green', hex: '#637554', image: quencherGreenImg, blankImage: quencherGreenBlankImg, isLight: false },
      { name: 'Rose Quartz', hex: '#E8C5C8', image: '/products/quencher-flowstate-front.png', blankImage: '/products/quencher-flowstate-back.png', isLight: true },
      { name: 'Eucalyptus Green', hex: '#8FA396', image: '/products/quencher-flowstate-front.png', blankImage: '/products/quencher-flowstate-back.png', isLight: true },
      { name: 'Cream', hex: '#F5F2EB', image: '/products/quencher-flowstate-front.png', blankImage: '/products/quencher-flowstate-back.png', isLight: true },
      { name: 'Matte Charcoal', hex: '#363839', image: '/products/quencher-flowstate-front.png', blankImage: '/products/quencher-flowstate-back.png', isLight: false },
      { name: 'Fog Gray', hex: '#8C9BA5', image: '/products/quencher-flowstate-front.png', blankImage: '/products/quencher-flowstate-back.png', isLight: true }
    ]
  },
  {
    id: 'quencher-protour',
    handle: 'the-quencher-protour-flip-straw-tumbler-40oz',
    name: 'The Quencher ProTour Flip Straw Tumbler 40 oz',
    description: 'Built-in leakproof flip straw lid with high-flow valve and ergonomic comfort grip handle.',
    priceFormatted: 'IDR 800.000',
    priceAmount: 800000,
    currency: 'IDR',
    defaultImage: '/products/quencher-protour-front.png',
    defaultBlankImage: '/products/quencher-protour-back.png',
    gradientFrom: '#5a4d69',
    gradientTo: '#d5c8e3',
    sizes: ['40 oz'],
    engravingProfile: {
      zoneWidth: 191,
      zoneHeight: 280,
      zoneTop: '48%',
      maxSoloGraphicHeight: 182,
      largeGraphicHeight: 182,
      standardGraphicHeight: 135,
      smallGraphicHeight: 100,
      charLimits: {
        solo: { S: 100, M: 80, L: 60, XL: 40 },
        withLargeGraphic: { S: 60, M: 45, L: 30, XL: 20 },
        withStandardGraphic: { S: 80, M: 60, L: 45, XL: 30 },
        withSmallGraphic: { S: 90, M: 70, L: 55, XL: 35 },
      }
    },
    colors: [
      { name: 'Aster Purple', hex: '#6A5D7B', image: '/products/quencher-protour-front.png', blankImage: '/products/quencher-protour-back.png', isLight: false },
      { name: 'Peach Glaze', hex: '#F4856E', image: quencherProTourImg, blankImage: '/products/quencher-protour-back.png', isLight: true },
      { name: 'Mint Jade', hex: '#597D71', image: '/products/quencher-protour-front.png', blankImage: '/products/quencher-protour-back.png', isLight: false },
      { name: 'Cream', hex: '#F5F2EB', image: '/products/quencher-protour-front.png', blankImage: '/products/quencher-protour-back.png', isLight: true }
    ]
  },
  {
    id: 'iceflow-flip-straw',
    handle: 'the-iceflow-flip-straw-tumbler-2-0-30oz',
    name: 'The IceFlow™ Flip Straw Tumbler 2.0 30 oz',
    description: 'Updated 2.0 design with folding handle, leakproof flip straw, and cup-holder friendly silhouette.',
    priceFormatted: 'IDR 800.000',
    priceAmount: 800000,
    currency: 'IDR',
    defaultImage: '/products/iceflow-flipstraw-front.png',
    defaultBlankImage: '/products/iceflow-flipstraw-back.png',
    gradientFrom: '#962828',
    gradientTo: '#f7bebe',
    sizes: ['30 oz', '20 oz'],
    engravingProfile: {
      zoneWidth: 180,
      zoneHeight: 260,
      zoneTop: '52%',
      maxSoloGraphicHeight: 170,
      largeGraphicHeight: 170,
      standardGraphicHeight: 125,
      smallGraphicHeight: 95,
      charLimits: {
        solo: { S: 90, M: 70, L: 50, XL: 35 },
        withLargeGraphic: { S: 50, M: 40, L: 25, XL: 18 },
        withStandardGraphic: { S: 70, M: 55, L: 40, XL: 25 },
        withSmallGraphic: { S: 80, M: 65, L: 50, XL: 30 },
      }
    },
    colors: [
      { name: 'Crimson Red', hex: '#962828', image: '/products/iceflow-flipstraw-front.png', blankImage: '/products/iceflow-flipstraw-back.png', isLight: false },
      { name: 'Polar White', hex: '#EDF2F4', image: iceFlowImg, blankImage: '/products/iceflow-flipstraw-back.png', isLight: true },
      { name: 'Charcoal Black', hex: '#1C1C1C', image: '/products/iceflow-flipstraw-front.png', blankImage: '/products/iceflow-flipstraw-back.png', isLight: false }
    ]
  },
  {
    id: 'classic-camp-mug',
    handle: 'the-classic-legendary-camp-mug-12oz',
    name: 'The Classic Legendary Camp Mug 12 oz',
    description: 'Tough, rugged, and ready for campsite coffee or fireside evening drinks.',
    priceFormatted: 'IDR 450.000',
    priceAmount: 450000,
    currency: 'IDR',
    defaultImage: '/products/camp-mug-front.png',
    defaultBlankImage: '/products/camp-mug-back.png',
    gradientFrom: '#516375',
    gradientTo: '#bcd1e6',
    sizes: ['12 oz'],
    engravingProfile: {
      zoneWidth: 170,
      zoneHeight: 180,
      zoneTop: '70%',
      maxSoloGraphicHeight: 120,
      largeGraphicHeight: 120,
      standardGraphicHeight: 90,
      smallGraphicHeight: 70,
      charLimits: {
        solo: { S: 70, M: 55, L: 40, XL: 25 },
        withLargeGraphic: { S: 40, M: 30, L: 20, XL: 15 },
        withStandardGraphic: { S: 55, M: 45, L: 30, XL: 20 },
        withSmallGraphic: { S: 65, M: 50, L: 35, XL: 22 },
      }
    },
    colors: [
      { name: 'Fog Blue', hex: '#8A9FA8', image: '/products/camp-mug-front.png', blankImage: '/products/camp-mug-back.png', isLight: true },
      { name: 'Hammertone Green', hex: '#3E5844', image: campMugImg, blankImage: '/products/camp-mug-back.png', isLight: false },
      { name: 'Matte Black', hex: '#1A1A1A', image: '/products/camp-mug-front.png', blankImage: '/products/camp-mug-back.png', isLight: false }
    ]
  },
  {
    id: 'cafe-travel-mug',
    handle: 'the-cafe-to-go-travel-mug-16oz',
    name: 'The Café-To-Go Travel Mug 16 oz',
    description: 'Commuter travel mug with built-in top carry loop and leak-resistant sip lid.',
    priceFormatted: 'IDR 550.000',
    priceAmount: 550000,
    currency: 'IDR',
    defaultImage: '/products/cafe-travel-mug-front.png',
    defaultBlankImage: '/products/cafe-travel-mug-back.png',
    gradientFrom: '#675b75',
    gradientTo: '#c3bfd6',
    sizes: ['16 oz'],
    engravingProfile: {
      zoneWidth: 160,
      zoneHeight: 240,
      zoneTop: '62%',
      maxSoloGraphicHeight: 150,
      largeGraphicHeight: 150,
      standardGraphicHeight: 110,
      smallGraphicHeight: 85,
      charLimits: {
        solo: { S: 80, M: 65, L: 45, XL: 30 },
        withLargeGraphic: { S: 45, M: 35, L: 22, XL: 16 },
        withStandardGraphic: { S: 65, M: 50, L: 35, XL: 22 },
        withSmallGraphic: { S: 75, M: 60, L: 42, XL: 28 },
      }
    },
    colors: [
      { name: 'Purple Dust', hex: '#675B75', image: '/products/cafe-travel-mug-front.png', blankImage: '/products/cafe-travel-mug-back.png', isLight: false },
      { name: 'Warm Terracotta', hex: '#794c3a', image: cafeTumblerImg, blankImage: '/products/cafe-travel-mug-back.png', isLight: false }
    ]
  },
  {
    id: 'classic-stacking-pint',
    handle: 'the-classic-stacking-beer-pint-16oz',
    name: 'The Classic Stacking Beer Pint 16 oz',
    description: 'Infinitely stackable stainless steel pint cup designed to keep beverages frosty without breaking.',
    priceFormatted: 'IDR 350.000',
    priceAmount: 350000,
    currency: 'IDR',
    defaultImage: '/products/stacking-pint-front.png',
    defaultBlankImage: '/products/stacking-pint-back.png',
    gradientFrom: '#7a8e9e',
    gradientTo: '#dbe7f2',
    sizes: ['16 oz'],
    engravingProfile: {
      zoneWidth: 160,
      zoneHeight: 220,
      zoneTop: '66%',
      maxSoloGraphicHeight: 140,
      largeGraphicHeight: 140,
      standardGraphicHeight: 105,
      smallGraphicHeight: 80,
      charLimits: {
        solo: { S: 80, M: 60, L: 40, XL: 25 },
        withLargeGraphic: { S: 45, M: 30, L: 20, XL: 15 },
        withStandardGraphic: { S: 60, M: 45, L: 30, XL: 20 },
        withSmallGraphic: { S: 70, M: 55, L: 35, XL: 22 },
      }
    },
    colors: [
      { name: 'Pale Periwinkle', hex: '#9BAEC2', image: '/products/stacking-pint-front.png', blankImage: '/products/stacking-pint-back.png', isLight: true },
      { name: 'Hammertone Green', hex: '#637554', image: '/products/stacking-pint-front.png', blankImage: '/products/stacking-pint-back.png', isLight: false }
    ]
  },
  {
    id: 'transit-fliptop',
    handle: 'the-aerolight-transit-bottle-16oz',
    name: 'The AeroLight™ Transit Bottle 16 oz',
    description: 'Featherweight spun-steel construction that is 33% lighter with a locking leakproof flip-top cap.',
    priceFormatted: 'IDR 600.000',
    priceAmount: 600000,
    currency: 'IDR',
    defaultImage: '/products/transit-fliptop-front.png',
    defaultBlankImage: '/products/transit-fliptop-back.png',
    gradientFrom: '#dedede',
    gradientTo: '#f7f7f7',
    sizes: ['16 oz', '20 oz'],
    engravingProfile: {
      zoneWidth: 150,
      zoneHeight: 280,
      zoneTop: '58%',
      maxSoloGraphicHeight: 160,
      largeGraphicHeight: 160,
      standardGraphicHeight: 120,
      smallGraphicHeight: 90,
      charLimits: {
        solo: { S: 85, M: 65, L: 45, XL: 30 },
        withLargeGraphic: { S: 45, M: 35, L: 22, XL: 16 },
        withStandardGraphic: { S: 65, M: 50, L: 35, XL: 22 },
        withSmallGraphic: { S: 75, M: 60, L: 42, XL: 28 },
      }
    },
    colors: [
      { name: 'Polar White Speckle', hex: '#EDEDED', image: '/products/transit-fliptop-front.png', blankImage: '/products/transit-fliptop-back.png', isLight: true },
      { name: 'Matte Charcoal', hex: '#363839', image: '/products/transit-fliptop-front.png', blankImage: '/products/transit-fliptop-back.png', isLight: false }
    ]
  },
  {
    id: 'quick-flip-go',
    handle: 'the-quick-flip-go-bottle-24oz',
    name: 'The Quick Flip GO Bottle 24 oz',
    description: 'Push-button trigger action lid flips open with one hand. Packable, leakproof, and cupholder ready.',
    priceFormatted: 'IDR 650.000',
    priceAmount: 650000,
    currency: 'IDR',
    defaultImage: '/products/quick-flip-go-front.png',
    defaultBlankImage: '/products/quick-flip-go-back.png',
    gradientFrom: '#134448',
    gradientTo: '#79adb2',
    sizes: ['24 oz', '36 oz'],
    engravingProfile: {
      zoneWidth: 150,
      zoneHeight: 280,
      zoneTop: '58%',
      maxSoloGraphicHeight: 160,
      largeGraphicHeight: 160,
      standardGraphicHeight: 120,
      smallGraphicHeight: 90,
      charLimits: {
        solo: { S: 85, M: 65, L: 45, XL: 30 },
        withLargeGraphic: { S: 45, M: 35, L: 22, XL: 16 },
        withStandardGraphic: { S: 65, M: 50, L: 35, XL: 22 },
        withSmallGraphic: { S: 75, M: 60, L: 42, XL: 28 },
      }
    },
    colors: [
      { name: 'Spruce Teal', hex: '#1E4D51', image: '/products/quick-flip-go-front.png', blankImage: '/products/quick-flip-go-back.png', isLight: false },
      { name: 'Polar White', hex: '#EDF2F4', image: '/products/quick-flip-go-front.png', blankImage: '/products/quick-flip-go-back.png', isLight: true }
    ]
  },
  {
    id: 'iceflow-aerolight-fastflow',
    handle: 'the-iceflow-aerolight-fast-flow-bottle-24oz',
    name: 'The IceFlow™ AeroLight™ Fast Flow Bottle 24 oz',
    description: 'Spun-steel lightweight body with fast-pour spout and cap-holding carry handle.',
    priceFormatted: 'IDR 750.000',
    priceAmount: 750000,
    currency: 'IDR',
    defaultImage: '/products/aerolight-fastflow-front.png',
    defaultBlankImage: '/products/aerolight-fastflow-back.png',
    gradientFrom: '#5f4f6e',
    gradientTo: '#cebede',
    sizes: ['24 oz'],
    engravingProfile: {
      zoneWidth: 150,
      zoneHeight: 270,
      zoneTop: '56%',
      maxSoloGraphicHeight: 160,
      largeGraphicHeight: 160,
      standardGraphicHeight: 120,
      smallGraphicHeight: 90,
      charLimits: {
        solo: { S: 85, M: 65, L: 45, XL: 30 },
        withLargeGraphic: { S: 45, M: 35, L: 22, XL: 16 },
        withStandardGraphic: { S: 65, M: 50, L: 35, XL: 22 },
        withSmallGraphic: { S: 75, M: 60, L: 42, XL: 28 },
      }
    },
    colors: [
      { name: 'Orchid Purple', hex: '#6C597D', image: '/products/aerolight-fastflow-front.png', blankImage: '/products/aerolight-fastflow-back.png', isLight: false }
    ]
  },
  {
    id: 'iceflow-aerolight-flipstraw',
    handle: 'the-iceflow-aerolight-flip-straw-bottle-24oz',
    name: 'The IceFlow™ AeroLight™ Flip Straw Bottle 24 oz',
    description: 'Ultra-lightweight vacuum bottle with integrated folding straw and heavy-duty steel hinge loop.',
    priceFormatted: 'IDR 750.000',
    priceAmount: 750000,
    currency: 'IDR',
    defaultImage: '/products/aerolight-flipstraw-front.png',
    defaultBlankImage: '/products/aerolight-flipstraw-back.png',
    gradientFrom: '#1a2c47',
    gradientTo: '#7f9bbd',
    sizes: ['24 oz'],
    engravingProfile: {
      zoneWidth: 150,
      zoneHeight: 270,
      zoneTop: '56%',
      maxSoloGraphicHeight: 160,
      largeGraphicHeight: 160,
      standardGraphicHeight: 120,
      smallGraphicHeight: 90,
      charLimits: {
        solo: { S: 85, M: 65, L: 45, XL: 30 },
        withLargeGraphic: { S: 45, M: 35, L: 22, XL: 16 },
        withStandardGraphic: { S: 65, M: 50, L: 35, XL: 22 },
        withSmallGraphic: { S: 75, M: 60, L: 42, XL: 28 },
      }
    },
    colors: [
      { name: 'Navy Steel', hex: '#1B2F4E', image: '/products/aerolight-flipstraw-front.png', blankImage: '/products/aerolight-flipstraw-back.png', isLight: false }
    ]
  }
]
