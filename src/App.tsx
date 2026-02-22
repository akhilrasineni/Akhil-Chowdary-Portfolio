import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { ArtisticExperience } from "./components/ArtisticExperience";
import { ProjectCard } from "./components/ProjectCard";
import { projects, experiences } from "./data";



// --- Components ---











export default function App() {
  

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white selection:bg-black selection:text-white"
    >
      <Navbar />
      
      <main className="mt-16">
        <Hero />
        <section className="bg-white my-16 h-32 overflow-hidden">
          <Marquee items={["C#", "VB.NET", ".NET Core", "ASP.NET MVC", "Web API", "PostgreSQL", "MS SQL Server", "NUnit", "BDD", "GitHub Copilot", "Vibe Coding", "Git", "REST API", "React", "TypeScript"]} />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-[#f0f0f0] relative">
          {/* Dot Pattern Background */}
          <div className="absolute inset-0 bg-[radial-gradient(#000000_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.05]" />
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6">
                <div>
                  <div className="inline-block px-4 py-1 bg-white text-black font-mono text-xs font-bold uppercase tracking-widest mb-4 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    Selected Works
                  </div>
                  <h3 className="text-5xl md:text-8xl font-display font-bold tracking-tighter text-black">
                    FEATURED <br /> 
                    <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "2px black" }}>PROJECTS</span>
                  </h3>
                </div>
                <a href="https://github.com/akhilrasineni?tab=repositories" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 px-6 py-3 bg-white border-2 border-black font-bold text-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                  View All <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {projects.map((project, i) => (
                <ProjectCard key={i} project={project} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 px-6 bg-[#f0f0f0]">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-4">About me</h2>
              <h3 className="text-5xl md:text-7xl font-display font-bold mb-16 md:mb-20 tracking-tighter text-gray-900">A little bit <br /> about me</h3>
            </motion.div>
            <div className="max-w-4xl mx-auto">
              {experiences.map((exp, i) => (
                <ArtisticExperience key={i} exp={exp} index={i} />
              ))}
            </div>
            <div className="text-center mt-16">
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white font-black uppercase tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                View My Resume
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 px-6 relative overflow-hidden bg-black text-white border-t-4 border-white">
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-1 bg-black text-white font-mono text-xs font-bold uppercase tracking-widest mb-8 border-2 border-white shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)]">
                [ Contact ]
              </div>
              <h3 className="text-5xl md:text-9xl font-display font-bold mb-12 tracking-tighter text-transparent stroke-text" style={{ WebkitTextStroke: "2px white" }}>
                Get In Touch.
              </h3>
              <a 
                href="mailto:rasineniakhil@zohomail.com" 
                className="inline-flex items-center gap-4 text-xl md:text-4xl font-bold hover:underline decoration-2 underline-offset-8 transition-colors group"
              >
                rasineniakhil@zohomail.com
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t-4 border-white bg-black text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="text-white/60 text-sm font-bold">
            © {new Date().getFullYear()} AKHIL RASINENI. All rights reserved.
          </div>
          <div className="flex gap-8 text-sm font-bold text-white/60">
            <a href="https://github.com/akhilrasineni" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">GitHub</a>
            <a href="https://www.linkedin.com/in/akhil-rasineni-022966158/" target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline transition-colors">LinkedIn</a>
          </div>
        </motion.div>
      </footer>
    </motion.div>
  );
}
