import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight, Github, Mail } from "lucide-react";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <section 
      id="about" 
      className="min-h-screen flex items-center pt-20 px-6 relative overflow-hidden bg-white"
    >
      {/* Paper Texture */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-multiply"></div>
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div variants={item} className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest mb-8 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <span className="w-2 h-2 bg-black animate-pulse"></span>
            System Online
          </motion.div>
          
          <motion.h1 variants={item} className="text-6xl md:text-9xl font-black leading-[0.9] mb-8 tracking-tighter text-black">
            DIGITAL <br /> 
            <span className="text-transparent stroke-text" style={{ WebkitTextStroke: "2px black", color: "transparent" }}>ARCHITECT</span>
          </motion.h1>
          
          <motion.p variants={item} className="text-lg md:text-xl text-black max-w-lg mb-10 leading-relaxed font-mono border-l-4 border-black pl-6">
            // Full Stack Developer <br/>
            // Designing systems with precision <br/>
            // and creative chaos.
          </motion.p>
          
          <motion.div variants={item} className="flex gap-4">
            <a href="#projects" className="group flex items-center gap-2 px-8 py-4 bg-black text-white font-black uppercase tracking-widest hover:bg-white hover:text-black border-2 border-black transition-all shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
              View Projects
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <div className="flex gap-2">
              {[Github, Mail].map((Icon, i) => (
                <a key={i} href={i === 0 ? "https://github.com/akhilrasineni" : "mailto:rasineniakhil@zohomail.com"} target="_blank" rel="noopener noreferrer" className="p-4 bg-white border-2 border-black text-black hover:bg-black hover:text-white transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative aspect-square md:h-[500px] border-4 border-black bg-white p-4 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] md:shadow-[16px_16px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="absolute top-0 left-0 w-full h-full border-b-2 border-r-2 border-black/10 pointer-events-none grid grid-cols-4 grid-rows-4">
             {[...Array(16)].map((_, i) => <div key={i} className="border-t-2 border-l-2 border-black/5"></div>)}
          </div>
          
          <img 
            src="https://media.giphy.com/media/3o7aD2saalBwwftBIY/giphy.gif" 
            alt="Technical Sketch Animation" 
            className="w-full h-full object-cover grayscale contrast-125"
            referrerPolicy="no-referrer"
          />
          
          {/* Corner Accents */}
          <div className="absolute -top-2 -left-2 w-4 h-4 bg-black"></div>
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-black"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-black"></div>
          <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-black"></div>
        </motion.div>
      </div>
    </section>
  );
};