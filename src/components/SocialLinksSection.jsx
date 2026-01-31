import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Github, Instagram, Mail } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const SocialLinksSection = () => {
  const { toast } = useToast();

  const socials = [
    { icon: Linkedin, name: "LinkedIn", color: "#0077B5" },
    { icon: Twitter, name: "Twitter", color: "#1DA1F2" },
    { icon: Github, name: "GitHub", color: "#333" },
    { icon: Instagram, name: "Instagram", color: "#E4405F" },
    { icon: Mail, name: "Email", color: "#EA4335" }
  ];

  const handleSocialClick = (name) => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section className="bg-theme-bg-secondary py-16 border-t border-theme-border transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <p className="text-2xl font-bold text-theme-text mb-2">Let's Stay Connected</p>
          <p className="text-theme-muted">Follow along on my journey and let's build something amazing together</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {socials.map((social, index) => {
            const Icon = social.icon;
            return (
              <motion.button
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSocialClick(social.name)}
                className="glass-effect p-4 rounded-xl hover:shadow-lg transition-all group"
                aria-label={social.name}
              >
                <Icon className="w-7 h-7 text-theme-text group-hover:text-[#d4af37] transition-colors" />
              </motion.button>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-theme-muted text-sm"
        >
          <p>© 2026 Sonu Kapar. All rights reserved.</p>
        </motion.div>
      </div>
    </section>
  );
};

export default SocialLinksSection;