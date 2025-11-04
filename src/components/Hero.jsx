import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] w-full bg-[#0f1113] text-white overflow-hidden">
      {/* Spline background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay to create calm clinical feel and ensure contrast */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-8 pb-20 flex flex-col justify-between h-full">
        {/* Top brand bar */}
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-white/10 ring-1 ring-white/20 grid place-items-center">
            <span className="text-white text-lg font-semibold">a</span>
          </div>
          <span className="text-white/90 text-xl font-semibold tracking-tight [font-family:Comfortaa,Inter,ui-sans-serif]">
            Appoint'd
          </span>
        </div>

        {/* Headline */}
        <div className="mt-16 max-w-3xl">
          <h1 className="text-5xl leading-tight font-semibold tracking-tight [font-family:Comfortaa,Inter,ui-sans-serif]">
            Expert Care, Instantly. Your Health, Accelerated by AI.
          </h1>
          <p className="mt-5 text-lg text-white/80 max-w-2xl">
            Secure video consultations, intelligent triage, and personalized care. Connect with verified doctors anytime, anywhere.
          </p>

          <div className="mt-8 flex items-center gap-5">
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 rounded-lg bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 text-base font-medium shadow-lg shadow-teal-900/30 transition-colors"
            >
              Find a Doctor Now
              <ArrowRight size={18} />
            </a>
            <a href="#how-it-works" className="text-white/90 hover:text-white underline underline-offset-4">
              How it Works
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-2xl">
          {[
            'Verified Doctors',
            'Secure & Compliant',
            'AI-Powered Efficiency',
          ].map((item) => (
            <div key={item} className="rounded-xl bg-white/5 backdrop-blur ring-1 ring-white/10 px-4 py-3 text-sm text-white/85">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
