
export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'beads' | 'sandals';
  gender: 'male' | 'female' | 'unisex';
  images: string[];
  colors?: string[];
  sizes?: string[];
  featured?: boolean;
  new?: boolean;
  rating?: number;
  reviews?: number;
};

export const products: Product[] = [
  {
    id: '1',
    name: 'Traditional Waist Beads',
    price: 24.99,
    description: 'Handcrafted traditional waist beads made with premium glass beads and natural stones. These colorful beads are perfect for celebrating African culture and heritage.',
    category: 'beads',
    gender: 'female',
    images: [
      'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['multicolor', 'red', 'blue'],
    featured: true,
    rating: 4.8,
    reviews: 124
  },
  {
    id: '2',
    name: 'Ankh Pendant Necklace',
    price: 34.99,
    description: 'Beautiful Ankh pendant necklace made with wooden beads and brass. The Ankh symbol represents life and immortality in ancient Egyptian culture.',
    category: 'beads',
    gender: 'unisex',
    images: [
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['brown', 'black', 'gold'],
    new: true,
    rating: 4.7,
    reviews: 86
  },
  {
    id: '3',
    name: 'Men\'s Leather Sandals',
    price: 49.99,
    description: 'Handcrafted men\'s leather sandals made with genuine leather and durable rubber soles. Perfect for casual wear and warm weather.',
    category: 'sandals',
    gender: 'male',
    images: [
      'https://images.unsplash.com/photo-1564605255979-0a0a57a2dd98?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1594549181132-9045fed330ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['brown', 'black'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    featured: true,
    rating: 4.9,
    reviews: 215
  },
  {
    id: '4',
    name: 'Women\'s Beaded Sandals',
    price: 44.99,
    description: 'Elegant women\'s sandals decorated with traditional glass beads. These comfortable sandals combine traditional craftsmanship with modern design.',
    category: 'sandals',
    gender: 'female',
    images: [
      'https://images.unsplash.com/photo-1621265040771-e30bf2a68151?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1562273138-f46be4ebdf33?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['tan', 'red', 'black'],
    sizes: ['36', '37', '38', '39', '40', '41'],
    featured: true,
    rating: 4.6,
    reviews: 178
  },
  {
    id: '5',
    name: 'Beaded Bracelet Set',
    price: 19.99,
    description: 'Set of 3 handcrafted beaded bracelets made with natural stones and glass beads. Perfect for stacking or wearing individually.',
    category: 'beads',
    gender: 'unisex',
    images: [
      'https://images.unsplash.com/photo-1602173574767-37ac01994b2c?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['multicolor', 'earth tones', 'blue tones'],
    new: true,
    rating: 4.5,
    reviews: 92
  },
  {
    id: '6',
    name: 'Children\'s Casual Sandals',
    price: 29.99,
    description: 'Durable and comfortable children\'s sandals made with soft leather and flexible soles. Perfect for active kids.',
    category: 'sandals',
    gender: 'unisex',
    images: [
      'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1595341595379-cf1cd0ed7ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['brown', 'blue', 'pink'],
    sizes: ['28', '29', '30', '31', '32', '33', '34', '35'],
    rating: 4.7,
    reviews: 143
  },
  {
    id: '7',
    name: 'Statement Beaded Necklace',
    price: 39.99,
    description: 'Bold statement necklace featuring handcrafted wooden and brass beads. This eye-catching piece adds a touch of African elegance to any outfit.',
    category: 'beads',
    gender: 'female',
    images: [
      'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1630283056526-07559b3d9d1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['brown', 'gold', 'multicolor'],
    featured: true,
    rating: 4.8,
    reviews: 76
  },
  {
    id: '8',
    name: 'Men\'s Dress Sandals',
    price: 59.99,
    description: 'Elegant men\'s dress sandals crafted from premium leather with sophisticated design details. Perfect for formal occasions in warm weather.',
    category: 'sandals',
    gender: 'male',
    images: [
      'https://images.unsplash.com/photo-1562183241-840b8af0721e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60',
      'https://images.unsplash.com/photo-1624378439575-d8705ad7b647?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=60'
    ],
    colors: ['black', 'brown'],
    sizes: ['40', '41', '42', '43', '44', '45'],
    new: true,
    rating: 4.7,
    reviews: 58
  }
];

export const getProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.featured);
};

export const getNewArrivals = () => {
  return products.filter(product => product.new);
};

export const getRelatedProducts = (currentProduct: Product) => {
  return products.filter(
    product => 
      product.id !== currentProduct.id && 
      (product.category === currentProduct.category || 
       product.gender === currentProduct.gender)
  ).slice(0, 4);
};
