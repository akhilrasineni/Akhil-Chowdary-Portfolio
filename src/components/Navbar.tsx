import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = ["About", "Projects", "Experience", "Contact"];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 bg-white border-b-2 border-black" : "py-8 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a 
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-black tracking-tighter text-black uppercase border-2 border-black px-2 bg-white z-50"
          >
            RAC<span className="text-black">.</span>
          </motion.a>
          
          <div className="hidden md:flex gap-8 text-sm font-bold text-black uppercase tracking-widest">
            {navLinks.map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:underline decoration-2 underline-offset-4 transition-all"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="md:hidden z-50">
            <button onClick={toggleMenu} className="p-2 border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
              {isMenuOpen ? <X className="w-6 h-6 text-black" /> : <Menu className="w-6 h-6 text-black" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={{ opacity: 0, y: "-100%" }}
        animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? "0%" : "-100%" }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 bg-white z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
      >
        {navLinks.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={toggleMenu}
            className="text-4xl font-black text-black uppercase tracking-tighter"
          >
            {item}
          </a>
        ))}
      </motion.div>
    </>
  );
};