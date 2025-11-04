import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, text, avatar }) => (
  <div className="rounded-2xl bg-white ring-1 ring-neutral-200 p-6">
    <div className="flex items-center gap-3">
      <img src={avatar} alt={name} className="h-10 w-10 rounded-full object-cover" />
      <div>
        <p className="text-sm font-medium text-neutral-900">{name}</p>
        <div className="flex items-center gap-0.5 text-teal-600">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={14} fill="currentColor" />
          ))}
        </div>
      </div>
    </div>
    <p className="mt-4 text-neutral-700 text-sm">{text}</p>
  </div>
);

const Testimonials = () => {
  const data = [
    {
      name: 'Aisha K.',
      text: "Appoint'd saved me hours. I spoke to a specialist the same day.",
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop',
    },
    {
      name: 'Daniel R.',
      text: 'The AI triage was spot on and the doctor was incredibly helpful.',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop',
    },
    {
      name: 'Priya S.',
      text: 'Got my prescription within minutes after the call. Seamless experience.',
      avatar:
        'https://images.unsplash.com/photo-1558898479-33c0057a5d12?q=80&w=200&auto=format&fit=crop',
    },
    {
      name: 'Marcos T.',
      text: 'Clean, easy interface. Felt private and professional throughout.',
      avatar:
        'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop',
    },
  ];

  return (
    <section className="relative bg-[#F8F8F8]">
      <div className="relative mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-neutral-900 [font-family:Comfortaa,Inter,ui-sans-serif]">
          What Our Patients Say
        </h2>
        <div className="mt-8 grid grid-cols-4 gap-6">
          {data.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
