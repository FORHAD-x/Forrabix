export type Category =
  | 'DROP SHOULDER'
  | 'OVERSIZED TEE'
  | 'HOODIE'
  | 'LONGSLEEVE';

export type PriceRange = 'UNDER $40' | '$40-$70' | 'OVER $70';

export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: Category; // ✅ FIXED
  type: 'tee' | 'hoodie';
  colors: string[];
  sizes?: string[]; // 🔥 ADD (S, M, L, XL)
  badge?: 'NEW' | 'SALE';
  image: string;
  hoverImage?: string; // 🔥 ADD (premium effect)
}

export const products: Product[] = [
  {
    id: 1,
    name: 'CORE DROP SHOULDER',
    category: 'DROP SHOULDER',
    price: 55,
    badge: 'NEW',
    colors: ['#1a1a1a', '#888'],
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'tee',
    image: '/image.png', // ✅ FIXED
    hoverImage: '/image.png',
  },
  {
    id: 2,
    name: 'WASHED BLACK DS TEE',
    category: 'DROP SHOULDER',
    price: 42,
    originalPrice: 60,
    badge: 'SALE',
    colors: ['#555', '#888'],
    sizes: ['M', 'L', 'XL'],
    type: 'tee',
    image: '/image.png',
    hoverImage: '/images/p2-hover.jpg',
  },
  {
    id: 3,
    name: 'VOID OVERSIZED TEE',
    category: 'OVERSIZED TEE',
    price: 38,
    colors: ['#1a1a1a', '#444'],
    sizes: ['S', 'M', 'L'],
    type: 'tee',
    image: '/image.png',
  },
  {
    id: 4,
    name: 'CEMENT HOODIE DS',
    category: 'HOODIE',
    price: 85,
    badge: 'NEW',
    colors: ['#c4a882', '#888'],
    sizes: ['M', 'L', 'XL'],
    type: 'hoodie',
    image: '/image.png',
  },
  {
    id: 5,
    name: 'RAW HEM LONGSLEEVE',
    category: 'LONGSLEEVE',
    price: 35,
    originalPrice: 48,
    badge: 'SALE',
    colors: ['#888', '#555', '#333'],
    sizes: ['S', 'M', 'L'],
    type: 'tee',
    image: '/image.png',
    hoverImage: '/image.png',
  },
  {
    id: 6,
    name: 'CORE DROP SHOULDER',
    category: 'DROP SHOULDER',
    price: 55,
    badge: 'NEW',
    colors: ['#1a1a1a', '#888'],
    sizes: ['S', 'M', 'L', 'XL'],
    type: 'tee',
    image: '/image.png', // ✅ FIXED
    hoverImage: '/image.png',
  },
  {
    id: 7,
    name: 'WASHED BLACK DS TEE',
    category: 'DROP SHOULDER',
    price: 42,
    originalPrice: 60,
    badge: 'SALE',
    colors: ['#555', '#888'],
    sizes: ['M', 'L', 'XL'],
    type: 'tee',
    image: '/image.png',
    hoverImage: '/images/p2-hover.jpg',
  },
  {
    id: 8,
    name: 'VOID OVERSIZED TEE',
    category: 'OVERSIZED TEE',
    price: 38,
    colors: ['#1a1a1a', '#444'],
    sizes: ['S', 'M', 'L'],
    type: 'tee',
    image: '/image.png',
  },
  {
    id: 9,
    name: 'CEMENT HOODIE DS',
    category: 'HOODIE',
    price: 85,
    badge: 'NEW',
    colors: ['#c4a882', '#888'],
    sizes: ['M', 'L', 'XL'],
    type: 'hoodie',
    image: '/image.png',
  },
  {
    id: 10,
    name: 'RAW HEM LONGSLEEVE',
    category: 'LONGSLEEVE',
    price: 35,
    originalPrice: 48,
    badge: 'SALE',
    colors: ['#888', '#555', '#333'],
    sizes: ['S', 'M', 'L'],
    type: 'tee',
    image: '/image.png',
    hoverImage: '/image.png',
  },
  // rest same pattern...
];