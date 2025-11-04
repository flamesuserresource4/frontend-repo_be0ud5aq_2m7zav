import React from 'react';
import { Brain, Video, FileText, Folder, Activity } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, hint }) => (
  <div className="group rounded-2xl bg-white ring-1 ring-neutral-200 p-6 hover:shadow-xl transition-shadow">
    <div className="h-11 w-11 rounded-xl bg-neutral-100 text-neutral-800 grid place-items-center">
      <Icon size={20} />
    </div>
    <h3 className="mt-4 text-lg font-semibold text-neutral-900">{title}</h3>
    <p className="mt-2 text-neutral-600 text-sm">{desc}</p>
    {hint && <p className="mt-3 text-xs text-neutral-500">{hint}</p>}
  </div>
);

const WhyUsPoint = ({ text }) => (
  <li className="flex items-center gap-3 text-sm text-neutral-800">
    <span className="h-2 w-2 rounded-full bg-teal-500" />
    {text}
  </li>
);

const Features = () => {
  return (
    <section className="relative bg-[#F8F8F8]">
      <div className="absolute inset-0 pointer-events-none" style={{
        background:
          'linear-gradient(180deg, rgba(0,0,0,0.02), rgba(0,0,0,0) 40%), radial-gradient(600px 300px at 80% 10%, rgba(0,0,0,0.04), transparent)'
      }} />

      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <div className="grid grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 [font-family:Comfortaa,Inter,ui-sans-serif]">
              Key Features
            </h2>
            <div className="mt-8 grid grid-cols-2 gap-6">
              <FeatureCard
                icon={Brain}
                title="AI Symptom Checker"
                desc="Intelligent triage guides you to the right specialist and prepares you before the call."
                hint="Subtle visual AI elements indicate analysis—no robots, just calm clarity."
              />
              <FeatureCard
                icon={Video}
                title="Video Consultations"
                desc="Connect face-to-face with verified doctors in secure, high-quality calls."
                hint="Clean interface with focus on people, not widgets."
              />
              <FeatureCard
                icon={FileText}
                title="Digital Prescriptions"
                desc="Receive valid e-prescriptions instantly in your app after the consult."
              />
              <FeatureCard
                icon={Folder}
                title="Documents & Records"
                desc="Your history, labs, and notes organized and accessible whenever you need."
              />
              <FeatureCard
                icon={Activity}
                title="Device Integration (Optional)"
                desc="Connect wearables and home devices for a fuller picture of your health."
              />
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-2xl font-semibold text-neutral-900 [font-family:Comfortaa,Inter,ui-sans-serif]">
              Why Choose Appoint'd?
            </h3>
            <ul className="mt-6 space-y-4">
              <WhyUsPoint text="Verified Doctors: Rigorous NMC checks ensure trusted care." />
              <WhyUsPoint text="AI-Powered Efficiency: Smarter care, faster appointments." />
              <WhyUsPoint text="Secure & Compliant: Your data is private, always." />
              <WhyUsPoint text="Patient-Centric Design: Intuitive and easy for everyone." />
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
