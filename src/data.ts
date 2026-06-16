import { Product } from './types';

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Tajwar Echo Premium Headphones',
    price: 299.00,
    description: 'Immerse yourself in pure sound with our flagship over-ear noise-canceling headphones. Crafted with aerospace-grade aluminum and memory foam for all-day comfort.',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop',
    features: ['Active Noise Cancellation', '40-Hour Battery Life', 'Bluetooth 5.3', 'High-Res Audio Certified'],
    inStock: true,
    rating: 4.8,
  },
  {
    id: 'p2',
    name: 'Tajwar Aura Smart Speaker',
    price: 149.00,
    description: 'The elegant smart speaker that fills any room with rich 360-degree sound. Adapts to its surroundings for the perfect acoustic profile.',
    category: 'Smart Home',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=2070&auto=format&fit=crop',
    features: ['360° Spatial Audio', 'Voice Assistant Built-in', 'Multi-room Sync', 'Fabric Mesh Finish'],
    inStock: true,
    rating: 4.6,
  },
  {
    id: 'p3',
    name: 'Tajwar Horizon Smartwatch',
    price: 249.00,
    description: 'A minimalist timepiece that does maximalism regarding features. Advanced health tracking in a stunning edge-to-edge titanium casing.',
    category: 'Wearables',
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=1964&auto=format&fit=crop',
    features: ['Sapphire Glass', 'ECG & Oxygen Monitor', 'Always-on Display', '7-Day Battery'],
    inStock: true,
    rating: 4.9,
  },
  {
    id: 'p4',
    name: 'Tajwar Core Power Bank',
    price: 79.00,
    description: 'Slim, fast-charging, and elegant. The Tajwar Core keeps your devices powered wherever you go, wrapped in a sleek matte finish.',
    category: 'Accessories',
    image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?q=80&w=2070&auto=format&fit=crop',
    features: ['20,000 mAh Capacity', '65W Fast Charging', 'Dual USB-C Ports', 'LED Status Ring'],
    inStock: true,
    rating: 4.7,
  },
  {
    id: 'p5',
    name: 'Tajwar Nova Desk Lamp',
    price: 129.00,
    description: 'Architectural lighting designed for focus. Adjust color temperature and brightness effortlessly with a simple touch.',
    category: 'Smart Home',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=1974&auto=format&fit=crop',
    features: ['Adjustable Color Temp', 'Qi Wireless Charging Base', 'Minimalist Aluminum Body', 'Eye-Care LED'],
    inStock: true,
    rating: 4.8,
  },
  {
    id: 'p6',
    name: 'Tajwar Pulse Wireless Earbuds',
    price: 179.00,
    description: 'Ultra-compact earbuds delivering massive sound. Ergonomically designed to stay secure during any activity.',
    category: 'Audio',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=2064&auto=format&fit=crop',
    features: ['Transparency Mode', 'Sweat & Water Resistant', '24-Hour Battery with Case', 'Custom EQ App'],
    inStock: true,
    rating: 4.5,
  }
];

export const testimonials = [
  {
    id: 't1',
    name: 'Sarah Jenkins',
    role: 'Creative Director',
    text: 'The Echo headphones completely changed my workflow. The noise cancellation is unreal, and they look gorgeous on my desk.',
    rating: 5,
  },
  {
    id: 't2',
    name: 'Marcus Chen',
    role: 'Tech Reviewer',
    text: 'Tajwar strikes the perfect balance between high-end aesthetics and serious performance. Highly recommended.',
    rating: 5,
  },
  {
    id: 't3',
    name: 'Elena Rodriguez',
    role: 'Architect',
    text: 'I bought the Nova Desk Lamp for my studio. It is functional art. The lighting quality is superb for late-night drafting.',
    rating: 4,
  }
];
