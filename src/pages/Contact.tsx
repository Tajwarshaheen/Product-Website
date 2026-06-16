import React, { useState } from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 500);
  };

  return (
    <div className="w-full bg-white pt-16 pb-24 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">Get in Touch</h1>
          <p className="text-gray-500 max-w-xl mx-auto">
            Questions about our products or your recent order? Our dedicated support team is ready to assist you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div className="flex flex-col">
            <h2 className="text-2xl font-bold mb-8 text-gray-900">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mr-6 flex-shrink-0 border border-gray-100">
                  <Mail className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Email us</h3>
                  <a href="mailto:support@tajwarelectronics.com" className="text-lg font-medium text-gray-900 hover:text-black hover:underline transition-all">
                    support@tajwarelectronics.com
                  </a>
                  <p className="text-gray-500 text-sm mt-1">We aim to reply within 24 hours.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mr-6 flex-shrink-0 border border-gray-100">
                  <Phone className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Call us</h3>
                  <a href="tel:+18005550199" className="text-lg font-medium text-gray-900 hover:text-black hover:underline transition-all">
                    (800) 555-0199
                  </a>
                  <p className="text-gray-500 text-sm mt-1">Mon-Fri from 9am to 6pm PST.</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mr-6 flex-shrink-0 border border-gray-100">
                  <MapPin className="w-5 h-5 text-gray-700" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-1">Headquarters</h3>
                  <p className="text-lg font-medium text-gray-900">
                    2300 Design District<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="mt-12 bg-gray-100 rounded-3xl w-full h-64 overflow-hidden relative">
              <img 
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop" 
                alt="Location Map" 
                className="w-full h-full object-cover grayscale opacity-70"
              />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="bg-black text-white px-4 py-2 rounded-full font-medium shadow-lg flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  Visit our Showroom
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-20">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Received</h3>
                <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly.</p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-black font-medium hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-shadow outline-none text-gray-900"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-shadow outline-none text-gray-900"
                    placeholder="jane@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-black focus:border-black transition-shadow outline-none text-gray-900 resize-none"
                    placeholder="How can we help you?"
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-black text-white px-6 py-4 rounded-xl font-medium hover:bg-gray-800 transition-colors shadow-lg shadow-black/10"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
