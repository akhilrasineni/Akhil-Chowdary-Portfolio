import { motion } from "motion/react";

export const Marquee = ({ items }: { items: string[] }) => {
  return (
    <div className="relative h-full w-full flex items-center justify-center bg-black">
      <motion.div
        className="flex whitespace-nowrap gap-12 transform -rotate-2"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ ease: 'linear', duration: 40, repeat: Infinity, repeatType: 'loop' }}
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="text-5xl md:text-7xl font-black text-transparent uppercase tracking-tighter cursor-default" style={{ WebkitTextStroke: "2px white" }}>
            {item} <span className="text-white">.</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};