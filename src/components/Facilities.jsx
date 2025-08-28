import React from 'react';
import { Flag, Users, Star, MapPin } from 'lucide-react';

const features = [
  {
    icon: Flag,
    title: 'Championship Course',
    desc: 'Tree-lined fairways, sculpted bunkers, and greens that test every part of your game.',
  },
  {
    icon: Users,
    title: 'Lessons & Clinics',
    desc: 'PGA-certified pros for private instruction, junior academy, and on-course playing lessons.',
  },
  {
    icon: Star,
    title: 'Clubhouse & Dining',
    desc: 'Coastal Californian cuisine, fireside lounge, and terrace views of the Golden Gate.',
  },
  {
    icon: MapPin,
    title: 'Presidio Location',
    desc: 'Minutes from the Marina and Pacific Heights with ample on-site parking and valet.',
  },
];

const Facilities = () => {
  return (
    <section id="facilities" className="py-20 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold">The Course. The Club. The City.</h2>
          <p className="mt-3 text-slate-600">Designed to be both strategic and scenic, our course rewards precision while our amenities deliver effortless comfort from first tee to last putt.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1496439786094-e6970fb1e74a?q=80&w=2000&auto=format&fit=crop"
              alt="Fairway with cypress trees and bunkers"
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl">Practice Facilities</h3>
              <p className="mt-2 text-slate-600 text-sm">Full-length range with TrackMan bays, chipping complex, and a dedicated putting lab to dial in your stroke.</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
            <img
              src="https://images.unsplash.com/photo-1543871595-e11129e27139?q=80&w=2000&auto=format&fit=crop"
              alt="Elegant clubhouse terrace dining"
              className="h-80 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="font-semibold text-xl">Events & Outings</h3>
              <p className="mt-2 text-slate-600 text-sm">From member-guest tournaments to weddings, our events team crafts memorable experiences on and off the course.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Facilities;
