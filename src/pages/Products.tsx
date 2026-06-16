import React, { useState } from 'react';
import { products } from '../data';
import { useRouter } from '../context/RouterContext';

export function Products() {
  const { navigate } = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="w-full bg-white pt-12 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4">Engineering Elegance</h1>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Our complete collection of audio and minimalist technology, designed to integrate seamlessly into your life.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === cat 
                  ? 'bg-black text-white shadow-md' 
                  : 'bg-gray-50 text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map((product) => (
            <div 
              key={product.id} 
              className="group cursor-pointer flex flex-col"
              onClick={() => navigate({ path: 'product', id: product.id })}
            >
              <div className="bg-gray-50 rounded-2xl aspect-[4/5] overflow-hidden mb-6 relative border border-gray-100">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {!product.inStock && (
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-black px-3 py-1 text-xs font-semibold rounded-full uppercase tracking-wider">
                    Sold Out
                  </div>
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
              </div>
              <div className="flex flex-col space-y-1">
                <div className="flex justify-between items-start">
                  <h3 className="font-medium text-lg text-gray-900 group-hover:text-black transition-colors">
                    {product.name}
                  </h3>
                  <span className="font-medium text-gray-900 ml-4">${product.price}</span>
                </div>
                <p className="text-gray-500 text-sm">{product.category}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
