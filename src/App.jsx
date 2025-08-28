import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import Membership from './components/Membership';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white text-slate-800">
      <NavBar />
      <main>
        <Hero />
        <Membership />
        <Contact />
      </main>
    </div>
  );
}

export default App;
