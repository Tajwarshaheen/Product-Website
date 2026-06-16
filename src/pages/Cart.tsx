import React from 'react';
import { useCart } from '../context/CartContext';
import { useRouter } from '../context/RouterContext';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice } = useCart();
  const { navigate } = useRouter();

  if (items.length === 0) {
    return (
      <div className="flex-grow flex flex-col items-center justify-center p-8 bg-gray-50 min-h-[60vh]">
        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-sm mb-6 border border-gray-100 text-gray-300">
          <ShoppingBag className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-8 max-w-sm text-center">
          Looks like you haven't added anything to your cart yet. Discover our premium collection.
        </p>
        <button 
          onClick={() => navigate({ path: 'products' })}
          className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors"
        >
          Explore Products
        </button>
      </div>
    );
  }

  return (
    <div className="w-full bg-white pt-12 pb-24 min-h-[70vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="font-display text-3xl font-bold tracking-tight mb-10 text-gray-900">Your Cart</h1>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Cart Items */}
          <div className="w-full lg:w-2/3">
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={item.product.id} className="flex py-6 border-b border-gray-100 last:border-0 last:pb-0">
                  <div className="h-28 w-24 flex-shrink-0 overflow-hidden rounded-xl bg-gray-50 border border-gray-100">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-6 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <h3 className="leading-tight">
                          <button onClick={() => navigate({ path: 'product', id: item.product.id })} className="hover:text-gray-600 transition-colors">
                            {item.product.name}
                          </button>
                        </h3>
                        <p className="ml-4">${(item.product.price * item.quantity).toFixed(2)}</p>
                      </div>
                      <p className="mt-1 text-sm text-gray-500">{item.product.category}</p>
                    </div>
                    
                    <div className="flex flex-1 items-end justify-between text-sm mt-4">
                      <div className="flex border border-gray-200 rounded-lg overflow-hidden">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-3 py-1 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
                        >
                          -
                        </button>
                        <div className="px-3 py-1 bg-white font-medium min-w-[32px] text-center">
                          {item.quantity}
                        </div>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 py-1 bg-gray-50 text-gray-600 hover:bg-gray-100 hover:text-black transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <div className="flex">
                        <button 
                          onClick={() => removeFromCart(item.product.id)}
                          type="button" 
                          className="font-medium text-gray-400 hover:text-red-500 transition-colors flex items-center"
                        >
                          <Trash2 className="w-4 h-4 mr-1" />
                          <span className="sr-only">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-3xl border border-gray-100 sticky top-24">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Order summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Subtotal</p>
                  <p className="font-medium text-gray-900">${totalPrice.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Shipping estimate</p>
                  <p className="font-medium text-green-600">Free</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <p>Tax estimate</p>
                  <p className="font-medium text-gray-900">Calculated at checkout</p>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6 mb-8">
                <div className="flex justify-between text-base font-bold text-gray-900">
                  <p>Estimated Total</p>
                  <p>${totalPrice.toFixed(2)}</p>
                </div>
              </div>
              
              <button className="w-full bg-black text-white px-6 py-4 rounded-full font-semibold hover:bg-gray-800 transition-colors shadow-lg shadow-black/10 flex items-center justify-center group">
                Checkout
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{' '}
                  <button
                    type="button"
                    className="font-medium text-black hover:text-gray-600 underline"
                    onClick={() => navigate({ path: 'products' })}
                  >
                    Continue Shopping
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
