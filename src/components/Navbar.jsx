import React from 'react';
import { MapPin } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur bg-white/70 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">SF</span>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold">Golden Gate Golf Club</span>
              <span className="text-xs text-slate-500">San Francisco, CA</span>
            </div>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a href="#facilities" className="hover:text-emerald-700 transition">Facilities</a>
            <a href="#membership" className="hover:text-emerald-700 transition">Membership</a>
            <a href="#contact" className="hover:text-emerald-700 transition">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center text-slate-600 text-sm">
              <MapPin className="h-4 w-4 mr-1 text-emerald-600" /> Presidio, SF
            </div>
            <a href="#membership" className="inline-flex items-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500">Join</a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
