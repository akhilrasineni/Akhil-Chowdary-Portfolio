import React from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../types";

export const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  // Monochrome sketch patterns/colors
  const colors = ["bg-gray-100", "bg-gray-200", "bg-white"];
  const headerColor = colors[index % colors.length];

    return (
    <motion.div 
      className="group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative h-full flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 overflow-hidden">
        
        {/* Retro Window Header */}
        <div className={`h-12 ${headerColor} border-b-4 border-black flex items-center px-4 gap-3`}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
            <div className="w-3 h-3 rounded-full bg-black border-2 border-black"></div>
          </div>
          <div className="ml-auto font-mono text-xs font-black uppercase tracking-widest text-black">
            PROJECT_0{index + 1}.SKETCH
          </div>
        </div>

        {/* Image Container */}
        <div className="aspect-video border-b-4 border-black relative overflow-hidden bg-gray-100">
           {/* Paper Texture Overlay */}
           <div className="absolute inset-0 opacity-[0.1] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply z-20"></div>
           <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-grow bg-white relative">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
          
          <h3 className="text-3xl font-black mb-3 text-black uppercase tracking-tighter relative z-10">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-[10px] font-bold font-mono uppercase bg-white text-black border-2 border-black hover:bg-black hover:text-white transition-colors">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-600 font-bold text-sm mb-8 line-clamp-3 flex-grow border-l-4 border-black pl-4 leading-relaxed relative z-10">
            {project.description}
          </p>

          <div className="flex gap-3 mt-auto pt-4 border-t-4 border-gray-100 relative z-10">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black text-white font-black text-sm uppercase hover:bg-white hover:text-black border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              Live Demo <ExternalLink className="w-4 h-4" />
            </a>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-white border-2 border-black font-bold text-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                <Github className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};