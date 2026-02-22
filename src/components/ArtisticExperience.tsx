import React from "react";
import { motion } from "motion/react";
import { Briefcase } from "lucide-react";
import { Experience } from "../types";

export const ArtisticExperience: React.FC<{ exp: Experience; index: number }> = ({ exp, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0 group"
    >
      {/* Mobile Left Border */}
      <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-black md:hidden"></div>
      <div className="absolute left-[-5px] top-0 w-3 h-3 bg-white border-2 border-black rounded-full md:hidden"></div>

      <div className="md:grid md:grid-cols-[200px_1fr] gap-8 items-start">
        {/* Time Period (Left Column) */}
        <div className="hidden md:flex items-center justify-end pr-8 border-r-2 border-black h-full relative py-2">
          <div className="absolute right-[-5px] top-6 w-2 h-2 bg-black rounded-full"></div>
          <span className="font-mono font-bold text-sm tracking-widest uppercase">{exp.period}</span>
        </div>

        {/* Content Card (Right Column) */}
        <div className="relative bg-white border-2 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-all duration-300">
          {/* Mobile Period */}
          <div className="md:hidden font-mono font-bold text-xs tracking-widest uppercase mb-2 text-gray-500">{exp.period}</div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b-2 border-black/5 pb-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-black text-black uppercase tracking-tighter">{exp.company}</h3>
              <div className="text-lg font-bold text-gray-600 font-mono">{exp.role}</div>
            </div>
            <div className="hidden md:block">
              <Briefcase className="w-6 h-6 text-black" />
            </div>
          </div>

          <ul className="space-y-3">
            {exp.description.map((item, i) => (
              <li key={i} className="text-sm text-black flex gap-3 font-medium leading-relaxed">
                <span className="text-black font-bold mt-1">→</span>
                {item}
              </li>
            ))}
          </ul>
          
          {/* Decorative Corner */}
          <div className="absolute top-0 right-0 w-4 h-4 border-l-2 border-b-2 border-black bg-white"></div>
        </div>
      </div>
    </motion.div>
  );
};