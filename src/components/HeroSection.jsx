import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Download } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useTheme } from './ThemeContext';
const HeroSection = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {
    toast
  } = useToast();
  const {
    theme
  } = useTheme();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleDownloadCV = () => {
    toast({
      title: "Downloading CV...",
      description: "Your download will start shortly."
    });
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-theme-bg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" alt="Professional workspace" className="w-full h-full object-cover" />
        <div className={`absolute inset-0 transition-colors duration-500 ${theme === 'dark' ? 'bg-gradient-to-br from-[#1a1a2e]/95 via-[#1a1a2e]/85 to-[#00d4ff]/20' : 'bg-gradient-to-br from-white/90 via-white/80 to-[#d4af37]/20'}`}></div>
      </div>

      {/* Hamburger Menu Toggle - Top Left */}
      <motion.div className="absolute top-6 left-6 z-50" initial={{
      opacity: 0,
      x: -20
    }} animate={{
      opacity: 1,
      x: 0
    }} transition={{
      duration: 0.6
    }}>
        <button onClick={toggleMenu} className="group flex items-center justify-center p-3 rounded-xl bg-theme-surface backdrop-blur-md border border-theme-border hover:bg-theme-surface/80 transition-all duration-300 shadow-lg hover:shadow-[#00d4ff]/20" aria-label="Toggle Menu">
          <motion.div animate={{
          rotate: isMenuOpen ? 90 : 0
        }} transition={{
          duration: 0.3
        }}>
            {isMenuOpen ? <X className="w-6 h-6 text-theme-text group-hover:text-[#00d4ff] transition-colors" /> : <Menu className="w-6 h-6 text-theme-text group-hover:text-[#d4af37] transition-colors" />}
          </motion.div>
        </button>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && <motion.div initial={{
        opacity: 0,
        x: -50
      }} animate={{
        opacity: 1,
        x: 0
      }} exit={{
        opacity: 0,
        x: -50
      }} transition={{
        duration: 0.3
      }} className="absolute top-20 left-6 z-40 bg-theme-surface backdrop-blur-xl border border-theme-border rounded-2xl p-6 min-w-[200px] shadow-2xl">
            <nav className="flex flex-col space-y-4">
              {['Home', 'About', 'Projects', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`} className="text-theme-text/80 hover:text-[#d4af37] font-medium transition-colors" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>)}
            </nav>
          </motion.div>}
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left order-1">
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.2
          }}>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 text-theme-text">
                <span className="gradient-text">Sonu Kapar</span>
              </h1>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.4
          }}>
              <p className="text-xl sm:text-2xl lg:text-3xl text-theme-text mb-6 font-semibold">
                Software Engineer | Educator | Tech Influencer
              </p>
            </motion.div>

            {/* Download CV Button */}
            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.5
          }} className="mb-8 flex justify-center md:justify-start">
              <button onClick={handleDownloadCV} className="group relative flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#d4af37] to-[#d4af37]/80 hover:to-[#d4af37] rounded-lg text-[#1a1a2e] font-bold shadow-lg shadow-[#d4af37]/20 hover:shadow-[#d4af37]/40 transform hover:scale-105 transition-all duration-300">
                <Download className="w-5 h-5 group-hover:animate-bounce" />
                <span>Download CV</span>
                <div className="absolute inset-0 rounded-lg bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 30
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.8,
            delay: 0.6
          }}>
              <p className="text-lg sm:text-xl text-theme-text/80 max-w-3xl mx-auto md:mx-0">
                Building the future through code, community, and innovation
              </p>
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div className="w-full md:w-1/2 flex justify-center md:justify-end order-2" initial={{
          opacity: 0,
          scale: 0.8
        }} animate={{
          opacity: 1,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37] to-[#00d4ff] rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
              <img src="https://horizons-cdn.hostinger.com/6ba94bdf-b74e-4beb-bd19-bf10249ee5ee/sonu-zIevD.jfif" alt="Sonu Kapar" className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-2xl border-4 border-theme-border transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(212,175,55,0.3)]" />
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10" initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      duration: 0.8,
      delay: 1
    }}>
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-[#d4af37]" />
        </div>
      </motion.div>
    </section>;
};
export default HeroSection;