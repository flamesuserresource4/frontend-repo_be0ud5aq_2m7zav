import React from 'react';
import { Clock, MapPin, Search } from 'lucide-react';

const Item = ({ icon: Icon, title, desc }) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 h-9 w-9 rounded-lg bg-neutral-200 text-neutral-800 grid place-items-center">
      <Icon size={18} />
    </div>
    <div>
      <h4 className="font-medium text-neutral-900">{title}</h4>
      <p className="text-neutral-600 text-sm">{desc}</p>
    </div>
  </div>
);

const ProblemSolution = () => {
  return (
    <section id="how-it-works" className="relative bg-[#F8F8F8]">
      {/* subtle background */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(1200px 400px at 10% 20%, rgba(0,0,0,0.03), transparent), radial-gradient(800px 300px at 90% 30%, rgba(0,0,0,0.04), transparent)'
      }} />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 [font-family:Comfortaa,Inter,ui-sans-serif]">
              The Problem
            </h2>
            <p className="mt-3 text-neutral-700 max-w-xl">
              Healthcare should be simple. Instead, patients wait weeks, travel far, and struggle to find the right specialist.
            </p>
            <div className="mt-8 space-y-6">
              <Item icon={Clock} title="Long wait times" desc="Appointments can take weeks when symptoms need attention now." />
              <Item icon={MapPin} title="Travel & availability" desc="Distance, transport, and schedules make care inconvenient." />
              <Item icon={Search} title="Finding specialists" desc="Hard to know who to see and when they're available." />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 [font-family:Comfortaa,Inter,ui-sans-serif]">
              The Appoint'd Solution
            </h2>
            <p className="mt-3 text-neutral-700 max-w-xl">
              Appoint'd bridges patients and doctors with AI-guided triage, instant video consults, and seamless follow-ups—so care is faster, clearer, and more human.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <div className="rounded-xl bg-white ring-1 ring-neutral-200 p-5">
                <p className="text-sm text-neutral-700">
                  Intelligent triage directs you to the right specialist in minutes.
                </p>
              </div>
              <div className="rounded-xl bg-white ring-1 ring-neutral-200 p-5">
                <p className="text-sm text-neutral-700">
                  Secure, high-quality video consults from anywhere.
                </p>
              </div>
              <div className="rounded-xl bg-white ring-1 ring-neutral-200 p-5">
                <p className="text-sm text-neutral-700">
                  Instant e-prescriptions delivered to your device.
                </p>
              </div>
              <div className="rounded-xl bg-white ring-1 ring-neutral-200 p-5">
                <p className="text-sm text-neutral-700">
                  All records organized in one secure place.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
