import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "2+", label: "Years of Practical Experience" },
    { value: "20+", label: "Real-World Projects" },
    { value: "300+", label: "DSA & JavaScript Problems Solved" }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-spacing bg-theme-bg py-20 transition-colors duration-300"
    >
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
                alt="Sonu Kapar - Full Stack Developer"
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
                I’m a <span className="gradient-text font-semibold">Full-Stack Software Engineer</span> with hands-on
                experience in building modern, responsive, and scalable web applications using React, JavaScript,
                Node.js, and REST APIs.
              </p>

              <p>
                I’ve worked across the stack — crafting clean UI experiences on the frontend and developing efficient,
                secure backend logic — while also leveraging
                <span className="gradient-text font-semibold"> SQL, Power BI, and data analysis</span> to turn raw
                data into meaningful insights.
              </p>

              <p>
                I strongly believe in <span className="gradient-text font-semibold">consistent growth and discipline</span>.
                From solving DSA problems daily to refining system design and communication skills, I focus on becoming a
                better engineer every single day — not just someone who writes code, but someone who builds reliable
                solutions.
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
                  <div className="text-3xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-theme-muted">
                    {stat.label}
                  </div>
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
