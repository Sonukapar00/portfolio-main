import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Award, Trophy, Star, Sparkles, Crown } from 'lucide-react';

const AchievementsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    {
      icon: Crown,
      title: "LinkedIn Top Voice",
      description: "Recognition for thought leadership and impactful content creation in technology",
      year: "2024"
    },
    {
      icon: Trophy,
      title: "International Open Source Awardee",
      description: "Global recognition for outstanding contributions to open source community",
      year: "2023"
    },
    {
      icon: Star,
      title: "Google Connect Winner 2019",
      description: "Selected by Google for innovation and excellence in technology",
      year: "2019"
		},
		{
			icon: Star,
			title: "Google Connect Winner 2019",
			description: "Selected by Google for innovation and excellence in technology",
			year: "2019"
		},
    {
      icon: Sparkles,
      title: "SIP Winner",
      description: "Excellence in Summer Internship Program for outstanding performance",
      year: "2020"
    },
    {
      icon: Award,
      title: "21U21 Awardee",
      description: "Recognized as one of the top 21 young innovators under 21",
      year: "2021"
    }
  ];

  return (
    <section ref={ref} id="achievements" className="section-spacing bg-theme-bg-secondary py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-theme-text">
            <span className="gradient-text">Achievements</span> & Recognition
          </h2>
          <p className="text-theme-muted text-lg max-w-2xl mx-auto">
            Honored to be recognized by leading organizations and communities worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass-effect rounded-2xl p-6 hover:shadow-2xl hover:shadow-[#d4af37]/20 cursor-pointer group"
              >
                <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#00d4ff]/20 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                
                <h3 className="text-xl font-bold text-theme-text mb-2">{achievement.title}</h3>
                <p className="text-theme-muted text-sm mb-3">{achievement.description}</p>
                <div className="text-[#d4af37] font-semibold text-sm">{achievement.year}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;