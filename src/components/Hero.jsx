import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1471286174890-9c112ffca5b0?q=80&w=2070&auto=format&fit=crop"
          alt="Golden Gate Bridge near golf course"
          className="h-full w-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-white/0 pointer-events-none" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-28 pb-24">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Golf above the fog — in the heart of San Francisco
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/90">
            Nestled beside the Presidio and moments from the Golden Gate Bridge, Presidio Links offers championship play, ocean-kissed breezes, and a timeless club experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#membership" className="px-6 py-3 rounded-full bg-emerald-600 text-white font-medium hover:bg-emerald-700">Explore Membership</a>
            <a href="#about" className="px-6 py-3 rounded-full bg-white/10 ring-1 ring-white/30 text-white hover:bg-white/20">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
