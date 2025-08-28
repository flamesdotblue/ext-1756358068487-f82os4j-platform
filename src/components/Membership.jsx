import React from 'react';

const tiers = [
  {
    name: 'Weekday',
    price: '$149/mo',
    perks: [
      'Unlimited weekday play',
      '7-day advance booking',
      'Range access',
      'Member events access',
    ],
    popular: false,
  },
  {
    name: 'Full',
    price: '$229/mo',
    perks: [
      'Unlimited play, any day',
      '14-day advance booking',
      'Guests at preferred rates',
      'Locker + bag storage',
    ],
    popular: true,
  },
  {
    name: 'Young Professional',
    price: '$119/mo',
    perks: [
      'Age 21–35',
      'Unlimited weekday play',
      'Range and practice access',
      'League nights',
    ],
    popular: false,
  },
];

const Membership = () => {
  return (
    <section id="membership" className="py-20 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Memberships built for the Bay</h2>
          <p className="mt-3 text-slate-600">Flexible tiers, generous access, and inclusive programming for every golfer.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border p-6 shadow-sm bg-white ${t.popular ? 'border-emerald-300 ring-2 ring-emerald-200' : 'border-emerald-100'}`}>
              <div className="flex items-baseline justify-between">
                <h3 className="text-lg font-semibold text-slate-900">{t.name}</h3>
                {t.popular && <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded-full">Most Popular</span>}
              </div>
              <p className="mt-2 text-3xl font-semibold text-slate-900">{t.price}</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {t.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-emerald-600 mt-0.5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.793 2.793 6.543-6.543a1 1 0 0 1 1.414 0z" clipRule="evenodd" /></svg>
                    <span>{perk}</span>
                  </li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700">Join Waitlist</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
