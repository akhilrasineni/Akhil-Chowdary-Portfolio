import { motion } from "motion/react";

export const Marquee = ({ items }: { items: string[] }) => {
  return (
    <div className="relative flex overflow-hidden py-4 group bg-white transform origin-left -rotate-3">
      <div className="flex animate-marquee whitespace-nowrap gap-12">
        {[...items, ...items].map((item, i) => (
          <div key={i} className="text-5xl md:text-7xl font-black text-transparent stroke-text uppercase tracking-tighter hover:text-black transition-colors cursor-default" style={{ WebkitTextStroke: "2px black" }}>
            {item} <span className="text-black">.</span>
          </div>
        ))}
      </div>
    </div>
  );
};