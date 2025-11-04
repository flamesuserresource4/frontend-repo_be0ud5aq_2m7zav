import React from 'react';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import Features from './components/Features';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F8F8] text-neutral-900 [font-family:Inter,ui-sans-serif]">
      <Hero />
      <ProblemSolution />
      <Features />
      <Testimonials />

      {/* CTA Footer */}
      <section id="get-started" className="bg-white">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="rounded-3xl bg-neutral-50 ring-1 ring-neutral-200 p-12 grid grid-cols-3 gap-10 items-center">
            <div className="col-span-2">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-xl bg-neutral-900 grid place-items-center">
                  <span className="text-white text-lg font-semibold">a</span>
                </div>
                <span className="text-neutral-900 text-xl font-semibold tracking-tight [font-family:Comfortaa,Inter,ui-sans-serif]">
                  Appoint'd
                </span>
              </div>
              <h3 className="mt-5 text-3xl font-semibold tracking-tight [font-family:Comfortaa,Inter,ui-sans-serif]">
                Ready for Smarter Healthcare?
              </h3>
              <p className="mt-2 text-neutral-700 max-w-2xl">
                Join thousands choosing calm, convenient care. Create your account in minutes and book your first consultation today.
              </p>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-xl bg-teal-600 hover:bg-teal-700 text-white px-7 py-4 text-base font-medium shadow-lg shadow-teal-900/20 transition-colors"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal footer */}
      <footer className="bg-[#F8F8F8] py-10">
        <div className="mx-auto max-w-7xl px-6 flex items-center justify-between text-sm text-neutral-500">
          <span>© {new Date().getFullYear()} Appoint'd. All rights reserved.</span>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-neutral-700">Privacy</a>
            <a href="#" className="hover:text-neutral-700">Terms</a>
            <a href="#" className="hover:text-neutral-700">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
