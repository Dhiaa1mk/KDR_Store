export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  images: string[];
  description: string;
  sizes: string[];
  colors: string[];
  stock: number;
  isNew?: boolean;
  isBestSeller?: boolean;
}

export const categories = [
  { id: 'all', name: 'Tout' },
  { id: 't-shirts', name: 'T-Shirts' },
  { id: 'hoodies', name: 'Hoodies' },
  { id: 'vestes', name: 'Vestes' },
  { id: 'pantalons', name: 'Pantalons' },
  { id: 'accessoires', name: 'Accessoires' },
];

export const products: Product[] = [
  {
    id: '1',
    name: 'T-Shirt KDR Signature Noir',
    category: 't-shirts',
    price: 89,
    image: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=800&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
      'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800&q=80',
    ],
    description: 'T-shirt premium en coton avec logo KDR métallique argenté. Coupe moderne et confortable pour un style streetwear haut de gamme.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Blanc', 'Gris'],
    stock: 45,
    isNew: true,
    isBestSeller: true,
  },
  {
    id: '2',
    name: 'Hoodie Oversized KDR',
    category: 'hoodies',
    price: 159,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    ],
    description: 'Hoodie oversized en molleton premium avec broderie KDR argentée. Style urbain et confort maximal.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Gris Foncé', 'Blanc Cassé'],
    stock: 32,
    isBestSeller: true,
  },
  {
    id: '3',
    name: 'Veste Bomber KDR Limited',
    category: 'vestes',
    price: 249,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=800&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    ],
    description: 'Veste bomber édition limitée avec patch KDR métallique. Tissu technique imperméable et design streetwear premium.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Kaki', 'Marine'],
    stock: 18,
    isNew: true,
  },
  {
    id: '4',
    name: 'Pantalon Cargo KDR',
    category: 'pantalons',
    price: 129,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
    ],
    description: 'Pantalon cargo streetwear avec multiples poches et détails argentés. Coupe moderne et confortable.',
    sizes: ['28', '30', '32', '34', '36', '38'],
    colors: ['Noir', 'Gris', 'Olive'],
    stock: 28,
    isBestSeller: true,
  },
  {
    id: '5',
    name: 'Casquette KDR Signature',
    category: 'accessoires',
    price: 59,
    image: 'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&q=80',
      'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?w=800&q=80',
      'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=800&q=80',
    ],
    description: 'Casquette snapback avec logo KDR brodé en fil argenté métallique. Accessoire streetwear essentiel.',
    sizes: ['Unique'],
    colors: ['Noir', 'Blanc', 'Gris'],
    stock: 56,
    isNew: true,
  },
  {
    id: '6',
    name: 'T-Shirt KDR Print Argent',
    category: 't-shirts',
    price: 95,
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80',
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=800&q=80',
    ],
    description: 'T-shirt avec grand print KDR argenté métallisé au dos. Édition limitée streetwear premium.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Gris Foncé'],
    stock: 38,
    isNew: true,
  },
  {
    id: '7',
    name: 'Hoodie Zippé KDR Pro',
    category: 'hoodies',
    price: 179,
    image: 'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
    ],
    description: 'Hoodie zippé technique avec zip métallique argenté et multiples détails KDR. Performance et style.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Gris', 'Marine'],
    stock: 24,
  },
  {
    id: '8',
    name: 'Veste Coach KDR',
    category: 'vestes',
    price: 199,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=800&q=80',
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      'https://images.unsplash.com/photo-1495105787522-5334e3ffa0ef?w=800&q=80',
    ],
    description: 'Veste coach classique avec logo KDR brodé. Style streetwear intemporel et qualité premium.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Blanc', 'Bordeaux'],
    stock: 22,
    isBestSeller: true,
  },
  {
    id: '9',
    name: 'Pantalon Jogger KDR',
    category: 'pantalons',
    price: 119,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=800&q=80',
      'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?w=800&q=80',
    ],
    description: 'Jogger streetwear avec cordon de serrage argenté KDR. Confort ultime et style urbain.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Gris', 'Bleu Nuit'],
    stock: 42,
  },
  {
    id: '10',
    name: 'Sac à Dos KDR Urban',
    category: 'accessoires',
    price: 149,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=800&q=80',
      'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=800&q=80',
    ],
    description: 'Sac à dos technique avec logo KDR métallique. Multiples compartiments et confort optimal.',
    sizes: ['Unique'],
    colors: ['Noir', 'Gris Foncé'],
    stock: 34,
  },
  {
    id: '11',
    name: 'T-Shirt KDR Blanc Cassé',
    category: 't-shirts',
    price: 89,
    image: 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?w=800&q=80',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800&q=80',
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&q=80',
    ],
    description: 'T-shirt blanc cassé avec logo KDR noir et argenté. Style minimaliste premium.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blanc Cassé', 'Beige', 'Gris Clair'],
    stock: 51,
  },
  {
    id: '12',
    name: 'Hoodie KDR Graphique',
    category: 'hoodies',
    price: 169,
    image: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=800&q=80',
      'https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=800&q=80',
      'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&q=80',
    ],
    description: 'Hoodie avec design graphique KDR argenté au dos. Édition spéciale streetwear.',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Noir', 'Charcoal'],
    stock: 29,
    isNew: true,
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Amine K.',
    rating: 5,
    comment: 'Qualité exceptionnelle ! Le hoodie KDR est super confortable et le design est incroyable.',
    date: '2026-06-05',
  },
  {
    id: '2',
    name: 'Mehdi B.',
    rating: 5,
    comment: 'Livraison rapide, produit conforme. Le style KDR est vraiment unique !',
    date: '2026-06-03',
  },
  {
    id: '3',
    name: 'Yassine T.',
    rating: 5,
    comment: 'Meilleure marque streetwear en Tunisie. Le service client est au top !',
    date: '2026-05-28',
  },
  {
    id: '4',
    name: 'Karim M.',
    rating: 5,
    comment: 'Les détails argentés KDR donnent un look premium. Je recommande à 100% !',
    date: '2026-05-25',
  },
];
