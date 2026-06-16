import React from 'react';

export function About() {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gray-50 border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-gray-900">
            Designing quiet logic.
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            We believe technology should fit beautifully into your life, not complicate it. At Tajwar, we strip away the unnecessary to reveal pure functionality.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=2070&auto=format&fit=crop" 
                alt="Workspace" 
                className="rounded-3xl w-full object-cover aspect-square shadow-sm"
              />
            </div>
            <div className="order-1 lg:order-2 lg:pl-10">
              <h2 className="font-display text-3xl font-bold mb-6">Our Mission</h2>
              <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed text-lg">
                <p className="mb-6">
                  Founded in 2021 by a team of industrial designers and sound engineers, Tajwar started with a simple question: why do most electronics look like toys or professional gear? Where is the elegance?
                </p>
                <p>
                  Our mission is to create consumer electronics that double as interior design elements. We use premium, sustainable materials—anodized aluminum, tempered glass, organic fabrics—and house industry-leading technology inside minimalist forms.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">The Tajwar Standard</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4 font-display font-light">01</div>
              <h3 className="text-xl font-bold mb-4">Material Truth</h3>
              <p className="text-gray-400 font-light leading-relaxed w-5/6">
                If it looks like metal, it's metal. We refuse to use painted plastics or faux finishes. Authencity in every component.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4 font-display font-light">02</div>
              <h3 className="text-xl font-bold mb-4">Silent Intelligence</h3>
              <p className="text-gray-400 font-light leading-relaxed w-5/6">
                Our features shouldn't demand your attention until you need them. No aggressive LEDs, no unnecessary beeps.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4 font-display font-light">03</div>
              <h3 className="text-xl font-bold mb-4">Built for Decades</h3>
              <p className="text-gray-400 font-light leading-relaxed w-5/6">
                In an era of planned obsolescence, we engineer our devices to last, with replaceable batteries and classic designs.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
