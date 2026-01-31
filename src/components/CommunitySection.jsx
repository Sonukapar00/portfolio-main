import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, Heart, BookOpen, MessageCircle } from 'lucide-react';

const CommunitySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "50K+", label: "Social Media Followers" },
    { value: "10K+", label: "Mentees Worldwide" },
    { value: "100+", label: "Workshops Conducted" },
    { value: "15+", label: "Active Communities" }
  ];

  const initiatives = [
    {
      icon: BookOpen,
      title: "Tech Education Programs",
      description: "Free coding bootcamps and workshops for underprivileged students, making technology education accessible to all."
    },
    {
      icon: Users,
      title: "Mentorship Network",
      description: "One-on-one mentoring for aspiring developers, guiding them from fundamentals to advanced concepts."
    },
    {
      icon: Heart,
      title: "Women in Tech Initiative",
      description: "Empowering women to pursue careers in technology through support, resources, and community building."
    },
    {
      icon: MessageCircle,
      title: "Developer Community Hub",
      description: "Active online communities fostering collaboration, knowledge sharing, and peer-to-peer learning."
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
            <span className="gradient-text">Community</span> Impact
          </h2>
          <p className="text-theme-muted text-lg max-w-2xl mx-auto">
            Building inclusive communities and empowering the next generation of developers
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-effect rounded-2xl p-6 text-center hover:shadow-xl hover:shadow-[#d4af37]/10 transition-shadow"
            >
              <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-theme-muted">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Image and Initiatives */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1 border border-theme-border"
          >
            <img
              src="https://images.unsplash.com/photo-1565841327798-694bc2074762"
              alt="Community engagement"
              className="w-full h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </motion.div>

          {/* Initiatives */}
          <div className="space-y-6 order-1 lg:order-2">
            {initiatives.map((initiative, index) => {
              const Icon = initiative.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass-effect rounded-2xl p-6 hover:shadow-xl hover:shadow-[#00d4ff]/10"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#00d4ff]/20 p-3 rounded-xl flex-shrink-0">
                      <Icon className="w-6 h-6 text-[#d4af37]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-theme-text mb-2">{initiative.title}</h3>
                      <p className="text-theme-muted">{initiative.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;