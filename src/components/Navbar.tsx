import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import React, { useState, useEffect } from "react";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState("About");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 glass" : "py-8 bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-3xl font-black tracking-tighter text-black uppercase border-2 border-black px-2 bg-white z-50"
          >
            RAC<span className="text-black">.</span>
          </motion.a>

          <div
            className="hidden md:flex gap-2 text-sm font-bold text-black uppercase tracking-widest bg-white border-2 border-black p-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
            onMouseLeave={() => setHoveredLink("About")}
          >
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 transition-colors"
                onMouseEnter={() => setHoveredLink(item.name)}
              >
                {hoveredLink === item.name && (
                  <motion.div
                    layoutId="pill"
                    className="absolute inset-0 bg-black"
                    style={{ borderRadius: 2 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                  />
                )}
                <span className={`relative z-10 ${hoveredLink === item.name ? 'text-white' : ''}`}>{item.name}</span>
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
            key={item.name}
            href={item.href}
            onClick={toggleMenu}
            className="text-4xl font-black text-black uppercase tracking-tighter"
          >
            {item.name}
          </a>
        ))}
      </motion.div>
    </>
  );
};