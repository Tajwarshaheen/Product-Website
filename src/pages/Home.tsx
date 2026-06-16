import React from 'react';
import { products, testimonials } from '../data';
import { useRouter } from '../context/RouterContext';
import { ArrowRight, Star, Truck, ShieldCheck, RefreshCcw } from 'lucide-react';

export function Home() {
  const { navigate } = useRouter();
  const featuredProducts = products.slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-black text-white h-[85vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 opacity-60">
          <img 
            src="https://images.unsplash.com/photo-1550009158-9effb619a637?q=80&w=2073&auto=format&fit=crop" 
            alt="Premium electronics" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter leading-tight mb-6 mt-16 motion-preset-slide-up motion-duration-1000">
              Form follows <br/>function.
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-lg font-light leading-relaxed motion-preset-slide-up motion-delay-200 motion-duration-1000">
              Discover audio and minimalist tech engineered for the modern aesthetic. Experience clarity in every detail.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 motion-preset-slide-up motion-delay-300">
              <button 
                onClick={() => navigate({ path: 'products' })}
                className="bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center justify-center w-fit"
              >
                Explore Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button 
                onClick={() => navigate({ path: 'about' })}
                className="bg-transparent text-white border border-white/30 px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors flex items-center justify-center w-fit"
              >
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight mb-2">Featured Highlights</h2>
              <p className="text-gray-500">Curated essentials for your daily routine.</p>
            </div>
            <button 
              onClick={() => navigate({ path: 'products' })}
              className="text-sm font-medium hover:text-gray-600 hidden sm:flex items-center"
            >
              View all <ArrowRight className="ml-1 w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <div 
                key={product.id} 
                onClick={() => navigate({ path: 'product', id: product.id })}
                className="group cursor-pointer flex flex-col"
              >
                <div className="bg-gray-50 rounded-2xl aspect-[4/5] overflow-hidden mb-6 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-lg text-gray-900 group-hover:text-black transition-colors">{product.name}</h3>
                    <p className="text-gray-500 text-sm mt-1">{product.category}</p>
                  </div>
                  <span className="font-medium bg-gray-100 px-3 py-1 rounded-full text-sm">${product.price}</span>
                </div>
              </div>
            ))}
          </div>
          
          <button 
            onClick={() => navigate({ path: 'products' })}
            className="mt-8 w-full sm:hidden border border-gray-200 text-black px-6 py-3 rounded-full font-medium hover:bg-gray-50 transition-colors"
          >
            View all products
          </button>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                <Truck className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Free Express Shipping</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Complimentary 2-day delivery on all orders over $150. Carefully packaged and fully tracked.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                <ShieldCheck className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2">2-Year Warranty</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                Our products are built to last. Enjoy peace of mind with our comprehensive global warranty.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-start">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100">
                <RefreshCcw className="w-5 h-5 text-black" />
              </div>
              <h3 className="font-semibold text-lg mb-2">30-Day returns</h3>
              <p className="text-gray-500 leading-relaxed text-sm">
                If you aren't completely satisfied, return it within 30 days for a full refund. No questions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight mb-16">The Verdict</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map(t => (
              <div key={t.id} className="bg-gray-50 p-8 rounded-3xl text-left border border-gray-100">
                <div className="flex space-x-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-black text-black" />
                  ))}
                </div>
                <p className="text-gray-800 text-lg mb-8 font-medium leading-relaxed">&quot;{t.text}&quot;</p>
                <div>
                  <p className="font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
