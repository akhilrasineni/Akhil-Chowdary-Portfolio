import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../types";

export const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = clientX - left;
    const y = clientY - top;
    const rotateX = (y / height - 0.5) * -20; // Tilt intensity
    const rotateY = (x / width - 0.5) * 20;  // Tilt intensity
    setRotate({ x: rotateX, y: rotateY });

    const glareX = (x / width) * 100;
    const glareY = (y / height) * 100;
    setGlare({ x: glareX, y: glareY, opacity: 0.15 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
    setGlare({ x: 50, y: 50, opacity: 0 });
  };

  const colors = ["bg-gray-100", "bg-gray-200", "bg-white"];
  const headerColor = colors[index % colors.length];

  return (
    <motion.div
      className="group h-full"
      style={{ perspective: "1200px" }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="relative h-full flex flex-col bg-white border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glare.x}% ${glare.y}%, rgba(255, 255, 255, 0.6), transparent)`,
            opacity: glare.opacity,
          }}
        />
        
        <div className={`h-12 ${headerColor} border-b-4 border-black flex items-center px-4 gap-3`}>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-white border-2 border-black"></div>
            <div className="w-3 h-3 rounded-full bg-black border-2 border-black"></div>
          </div>
          <div className="ml-auto font-mono text-xs font-black uppercase tracking-widest text-black">
            PROJECT_0{index + 1}.SKETCH
          </div>
        </div>

        <div className="aspect-video border-b-4 border-black relative overflow-hidden bg-gray-100">
           <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale contrast-125 transition-all duration-500"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="p-6 flex flex-col flex-grow bg-white relative">
          <h3 className="text-3xl font-display font-bold mb-3 text-black uppercase tracking-tighter relative z-10">{project.title}</h3>
          
          <div className="flex flex-wrap gap-2 mb-6 relative z-10">
            {project.tags.map(tag => (
              <span key={tag} className="px-2 py-1 text-[10px] font-bold font-mono uppercase bg-white text-black border-2 border-black">
                {tag}
              </span>
            ))}
          </div>

          <p className="text-gray-700 font-bold text-sm mb-8 line-clamp-3 flex-grow border-l-4 border-black pl-4 leading-relaxed relative z-10">
            {project.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-auto pt-4 border-t-4 border-gray-100 relative z-10">
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-black text-white font-black text-sm uppercase hover:bg-white hover:text-black border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              View Live <ExternalLink className="w-4 h-4" />
            </a>
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white text-black font-black text-sm uppercase hover:bg-black hover:text-white border-2 border-black transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                Source Code <Github className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};