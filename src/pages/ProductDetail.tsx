import React, { useState } from 'react';
import { products } from '../data';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { ArrowLeft, Check, Plus, Minus } from 'lucide-react';

export function ProductDetail({ id }: { id: string }) {
  const { navigate } = useRouter();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-bold mb-4">Product not found</h2>
        <button 
          onClick={() => navigate({ path: 'products' })}
          className="text-black underline hover:text-gray-600"
        >
          Return to products
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="w-full bg-white pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <button 
          onClick={() => navigate({ path: 'products' })}
          className="flex items-center text-sm font-medium text-gray-500 hover:text-black mb-12 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to all products
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Images */}
          <div className="flex flex-col space-y-4">
            <div className="bg-gray-50 rounded-3xl aspect-[4/5] lg:aspect-square overflow-hidden border border-gray-100 relative">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col pt-4 lg:pt-12">
            <div className="mb-2 flex items-center space-x-2 text-sm text-gray-500">
              <span className="uppercase tracking-wider font-semibold">{product.category}</span>
            </div>
            
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-gray-900">
              {product.name}
            </h1>
            
            <p className="text-2xl font-medium text-gray-900 mb-8">${product.price.toFixed(2)}</p>
            
            <div className="prose prose-gray max-w-none mb-10">
              <p className="text-gray-600 leading-relaxed text-lg">
                {product.description}
              </p>
              
              <ul className="mt-8 space-y-3">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-gray-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-gray-100 py-8 mt-auto">
              {product.inStock ? (
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  {/* Quantity */}
                  <div className="flex items-center justify-between border border-gray-200 rounded-full px-4 py-3 sm:w-1/3">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="text-gray-500 hover:text-black p-1"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-medium text-gray-900 w-8 text-center">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="text-gray-500 hover:text-black p-1"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  
                  {/* Add Button */}
                  <button 
                    onClick={handleAddToCart}
                    className={`flex-1 rounded-full px-8 py-4 font-semibold text-center transition-all flex items-center justify-center
                      ${added 
                        ? 'bg-green-600 text-white hover:bg-green-700' 
                        : 'bg-black text-white hover:bg-gray-800 shadow-lg shadow-black/10'
                      }`}
                  >
                    {added ? (
                      <>
                        <Check className="w-5 h-5 mr-2" />
                        Added to Cart
                      </>
                    ) : (
                      'Add to Cart'
                    )}
                  </button>
                </div>
              ) : (
                <div className="bg-gray-100 text-gray-500 text-center py-4 rounded-full font-medium">
                  Currently Out of Stock
                </div>
              )}
            </div>
            
          </div>
        </div>

      </div>
    </div>
  );
}
