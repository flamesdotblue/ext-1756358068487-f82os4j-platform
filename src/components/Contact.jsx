import React, { useState } from 'react';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Book a tour</h2>
            <p className="mt-3 text-slate-600">Come walk the fairways, visit our practice facilities, and meet the team. We’ll tailor your visit around what matters to you.</p>
            <div className="mt-6 rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                <div>
                  <dt className="text-slate-500">Address</dt>
                  <dd className="text-slate-800">99 Arguello Blvd, San Francisco, CA 94118</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Hours</dt>
                  <dd className="text-slate-800">Mon–Sun, 6:30am – 8:00pm</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Phone</dt>
                  <dd className="text-slate-800">(415) 555‑0199</dd>
                </div>
                <div>
                  <dt className="text-slate-500">Email</dt>
                  <dd className="text-slate-800">hello@presidiolinks.com</dd>
                </div>
              </dl>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm">
            {submitted ? (
              <div className="text-center py-10">
                <svg className="mx-auto h-10 w-10 text-emerald-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 1 1 1.414-1.414l2.793 2.793 6.543-6.543a1 1 0 0 1 1.414 0z" clipRule="evenodd" /></svg>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">Request received</h3>
                <p className="mt-1 text-sm text-slate-600">Our team will reach out within one business day to confirm your visit.</p>
              </div>
            ) : (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-slate-600">First name</label>
                    <input required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                  <div>
                    <label className="text-sm text-slate-600">Last name</label>
                    <input required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm text-slate-600">Email</label>
                    <input type="email" required className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm text-slate-600">Preferred date</label>
                    <input type="date" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" />
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-sm text-slate-600">What would you like to see?</label>
                    <textarea rows="4" className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder="Course, range, dining, events…" />
                  </div>
                </div>
                <button type="submit" className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-white font-medium hover:bg-emerald-700">Request a Tour</button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
