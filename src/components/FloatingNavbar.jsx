import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const FloatingNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Achievements", id: "achievements" },
    { label: "Experiences", id: "speaking" },
    { label: "Tools", id: "tools" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Highlight active section
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top >= -100 && rect.top <= window.innerHeight / 2) {
            setActiveSection(id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Floating Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-8 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
          scrolled ? "top-4" : "top-8"
        }`}
      >
        <div
          className={`px-6 py-3 rounded-full backdrop-blur-xl border border-theme-border shadow-2xl transition-all duration-300 ${
            scrolled
              ? "bg-theme-surface/90 shadow-[0_0_30px_rgba(212,175,55,0.3)]"
              : "bg-theme-surface/80"
          }`}
        >
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                  activeSection === item.id
                    ? "bg-[#d4af37] text-[#1a1a2e] shadow-lg"
                    : "text-theme-text/80 hover:text-theme-text hover:bg-theme-border/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-theme-text hover:text-[#d4af37] transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 10 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-48 rounded-2xl bg-theme-surface/95 backdrop-blur-xl border border-theme-border shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-300 ${
                    activeSection === item.id
                      ? "bg-[#d4af37] text-[#1a1a2e]"
                      : "text-theme-text/80 hover:text-theme-text hover:bg-theme-border/50"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default FloatingNavbar;
