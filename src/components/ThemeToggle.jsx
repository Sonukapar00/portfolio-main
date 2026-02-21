import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from './ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.button
      onClick={toggleTheme}
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1, rotate: 15 }}
      whileTap={{ scale: 0.9 }}
      className="fixed top-6 right-6 z-50 p-3 rounded-full bg-theme-surface text-theme-text border border-theme-border shadow-lg hover:shadow-2xl transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      <motion.div
        key={theme}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {theme === 'light' ? (
          <Sun className="w-6 h-6 text-[#d4af37]" />
        ) : (
          <Moon className="w-6 h-6 text-[#00d4ff]" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;