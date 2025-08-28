import React, { useState } from 'react';

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const items = [
    { href: '#about', label: 'About' },
    { href: '#membership', label: 'Membership' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-emerald-100">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-bold">SF</span>
          <span className="font-semibold tracking-tight text-slate-900">Presidio Links Golf Club</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {items.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-slate-700 hover:text-emerald-700 transition-colors">
              {item.label}
            </a>
          ))}
          <a href="#contact" className="px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors">Book a Tour</a>
        </nav>

        <button aria-label="Open menu" onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-slate-200">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-700">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-emerald-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3">
            {items.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="text-slate-700 py-2">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="px-4 py-2 text-center rounded-full bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 transition-colors">Book a Tour</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default NavBar;
