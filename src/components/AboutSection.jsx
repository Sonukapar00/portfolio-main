import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "50+", label: "Open Source Contributions" },
    { value: "10K+", label: "Community Members Mentored" }
  ];

  return (
    <section id="about" ref={ref} className="section-spacing bg-theme-bg py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl border border-theme-border">
              <img
                src="https://images.unsplash.com/photo-1688019405281-e23fb100433d"
                alt="Sonu Kapar - Professional portrait"
                className="w-full h-[500px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-[#d4af37] to-[#00d4ff] rounded-2xl -z-10 opacity-30"></div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-theme-text">
              About <span className="gradient-text">Me</span>
            </h2>
            
            <div className="space-y-4 text-theme-muted text-lg">
              <p>
                With over <span className="gradient-text font-semibold">5 years of expertise</span> in Android development, 
                I specialize in crafting elegant, scalable mobile solutions using Kotlin.
              </p>
              
              <p>
                As an <span className="gradient-text font-semibold">open source contributor</span> and 
                <span className="gradient-text font-semibold"> AI enthusiast</span>, I'm passionate about 
                leveraging cutting-edge technologies to solve real-world problems and empower developers worldwide.
              </p>
              
              <p>
                Beyond coding, I'm deeply committed to <span className="gradient-text font-semibold">education and community building</span>, 
                mentoring thousands of aspiring developers and sharing knowledge through workshops, talks, and digital platforms.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-theme-muted">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;