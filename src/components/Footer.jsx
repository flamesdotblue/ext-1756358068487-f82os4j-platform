import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-emerald-600 text-white font-semibold">SF</span>
              <span className="font-semibold">Golden Gate Golf Club</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Private golf club offering championship play, practice facilities, and refined hospitality in the Presidio.</p>
          </div>
          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-emerald-700" />(415) 555-0199</li>
              <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-emerald-700" />membership@goldengategc.com</li>
              <li className="flex items-start gap-2"><MapPin className="h-4 w-4 text-emerald-700 mt-0.5" />34 Arguello Blvd, Presidio, San Francisco, CA</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Hours</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Mon–Fri: 6:30a–9:00p</li>
              <li>Sat–Sun: 6:00a–9:00p</li>
              <li>Restaurant: 11:30a–9:00p</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold">Follow</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-emerald-700">Instagram</a></li>
              <li><a href="#" className="hover:text-emerald-700">Facebook</a></li>
              <li><a href="#" className="hover:text-emerald-700">X (Twitter)</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Golden Gate Golf Club. All rights reserved.</p>
          <div className="mt-2 sm:mt-0 flex items-center gap-4">
            <a href="#" className="hover:text-slate-700">Privacy</a>
            <a href="#" className="hover:text-slate-700">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
