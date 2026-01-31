import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Newspaper, Quote } from 'lucide-react';

const MediaSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      publication: "The Better India",
      title: "Tech Leader Empowering Communities",
      quote: "Sonu Kapar is breaking stereotypes and inspiring the next generation of developers through her innovative approach to education and community building.",
      year: "2024"
    },
    {
      publication: "Outlook India",
      title: "Rising Stars in Technology",
      quote: "Featured among India's most influential young tech leaders, Sonu's contributions to open source and Android development are reshaping the industry.",
      year: "2023"
    },
    {
      publication: "Vogue India",
      title: "Women Changing the Tech Landscape",
      quote: "From code to community, Sonu Kapar exemplifies how passion and dedication can transform the technology ecosystem and inspire thousands.",
      year: "2023"
    }
  ];

  return (
    <section ref={ref} className="section-spacing bg-theme-bg-secondary py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-theme-text">
            <span className="gradient-text">Media</span> Features
          </h2>
          <p className="text-theme-muted text-lg max-w-2xl mx-auto">
            Recognized by leading publications for impact and innovation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-effect rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#d4af37]/20 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#00d4ff]/20 p-2 rounded-lg">
                  <Newspaper className="w-5 h-5 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#d4af37]">{feature.publication}</h3>
                  <span className="text-xs text-theme-muted">{feature.year}</span>
                </div>
              </div>
              
              <h4 className="text-xl font-bold text-theme-text mb-3">{feature.title}</h4>
              
              <div className="relative">
                <Quote className="w-6 h-6 text-[#00d4ff]/30 absolute -top-2 -left-2" />
                <p className="text-theme-muted italic pl-6">{feature.quote}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaSection;