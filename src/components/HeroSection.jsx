import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Download } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useTheme } from "./ThemeContext";

const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toast } = useToast();
  const { theme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // ✅ Resume Download Function
  const handleDownloadCV = () => {
    toast({
      title: "Downloading CV...",
      description: "Your download will start shortly.",
    });

    setTimeout(() => {
      window.open("/Sonu_Kapar_Resume.pdf", "_blank");
    }, 500);
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-theme-bg"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
          alt="Professional workspace"
          className="w-full h-full object-cover"
        />
        <div
          className={`absolute inset-0 transition-colors duration-500 ${
            theme === "dark"
              ? "bg-gradient-to-br from-[#1a1a2e]/95 via-[#1a1a2e]/85 to-[#00d4ff]/20"
              : "bg-gradient-to-br from-white/90 via-white/80 to-[#d4af37]/20"
          }`}
        ></div>
      </div>

      {/* Hamburger Menu */}
      <motion.div
        className="absolute top-6 left-6 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <button
          onClick={toggleMenu}
          className="group flex items-center justify-center p-3 rounded-xl bg-theme-surface backdrop-blur-md border border-theme-border hover:bg-theme-surface/80 transition-all duration-300 shadow-lg hover:shadow-[#00d4ff]/20"
          aria-label="Toggle Menu"
        >
          <motion.div
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-theme-text group-hover:text-[#00d4ff]" />
            ) : (
              <Menu className="w-6 h-6 text-theme-text group-hover:text-[#d4af37]" />
            )}
          </motion.div>
        </button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="absolute top-20 left-6 z-40 bg-theme-surface backdrop-blur-xl border border-theme-border rounded-2xl p-6 min-w-[200px] shadow-2xl"
          >
            <nav className="flex flex-col space-y-4">
              {[
                ["Home", "home"],
                ["About", "about"],
                ["Achievements", "achievements"],
                ["Experiences", "speaking"],
                ["Tools", "tools"],
                ["Projects", "projects"],
                ["Contact", "contact"],
              ].map(([label, id]) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-theme-text/80 hover:text-[#d4af37] font-medium transition-colors"
                >
                  {label}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-theme-text"
            >
              <span className="gradient-text">Sonu Kapar</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl lg:text-3xl text-theme-text mb-6 font-semibold"
            >
              Software Engineer | Educator | Tech Influencer
            </motion.p>

            {/* Download CV */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 flex justify-center md:justify-start"
            >
              <button
                onClick={handleDownloadCV}
                className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#d4af37]/80 rounded-lg font-bold text-[#1a1a2e] shadow-lg hover:scale-105 transition-all"
              >
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
              </button>
            </motion.div>

            <p className="text-lg text-theme-text/80">
              Building the future through code, community, and innovation
            </p>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 flex justify-center"
          >
            <img
              src="https://horizons-cdn.hostinger.com/6ba94bdf-b74e-4beb-bd19-bf10249ee5ee/sonu-zIevD.jfif"
              alt="Sonu Kapar"
              className="w-72 h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-theme-border"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown className="w-8 h-8 text-[#d4af37]" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
