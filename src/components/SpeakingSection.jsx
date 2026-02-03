import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Mic2, Calendar } from "lucide-react";

const SpeakingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const events = [
    {
      name: "COGNORISE INFOTECH",
      topic: "The Future of AI in Mobile Development",
      date: "March 2024",
      description:
        "Exploring how artificial intelligence is transforming mobile application development and user experiences.",
      skills: ["AI", "Mobile Development", "Machine Learning", "App Architecture"]
    },
    {
      name: "COGNORISE INFOTECH",
      topic: "Empowering Women in Technology",
      date: "November 2023",
      description:
        "Sharing insights on breaking barriers and creating inclusive tech communities that foster diversity and innovation.",
      skills: ["Leadership", "Diversity & Inclusion", "Tech Communities"]
    },
    {
      name: "MERISKILLS",
      topic: "Open Source: Building Together",
      date: "August 2023",
      description:
        "Discussing the power of collaborative development and how open source communities shape the future of technology.",
      skills: ["Open Source", "GitHub", "Collaboration", "Community Building"]
    }
  ];

  return (
    <section
      ref={ref}
      id="speaking"
      className="section-spacing bg-theme-bg py-20 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-theme-text">
            <span className="gradient-text">Internship</span> & Experiences
          </h2>
          <p className="text-theme-muted text-lg max-w-2xl mx-auto">
            Real-world experience, learning, and industry exposure
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl lg:sticky lg:top-8 border border-theme-border"
          >
            <img
              src="https://images.unsplash.com/photo-1699962700166-2b8294ea56f9"
              alt="Experience"
              className="w-full h-[400px] lg:h-[500px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          </motion.div>

          {/* Experience Cards */}
          <div className="space-y-6">
            {events.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
                className="glass-effect rounded-2xl p-6 hover:shadow-xl hover:shadow-[#00d4ff]/10"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#00d4ff]/20 p-3 rounded-xl">
                    <Mic2 className="w-6 h-6 text-[#d4af37]" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-theme-text mb-1">
                      {event.name}
                    </h3>

                    <p className="text-lg gradient-text font-semibold mb-3">
                      {event.topic}
                    </p>

                    <p className="text-theme-muted mb-4">
                      {event.description}
                    </p>

                    {/* Skills / Tools */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {event.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm rounded-full
                          bg-[#00d4ff]/10 text-[#00d4ff]
                          border border-[#00d4ff]/30
                          hover:bg-[#00d4ff]/20 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[#d4af37] text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpeakingSection;