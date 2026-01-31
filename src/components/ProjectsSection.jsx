import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();

  const projects = [
    {
      title: "KotlinFlow Manager",
      description: "Advanced state management library for Android using Kotlin Coroutines and Flow, enabling reactive and efficient data handling.",
      tech: ["Kotlin", "Android", "Coroutines", "Flow"],
      category: "Android"
    },
    {
      title: "AI-Powered Chat App",
      description: "Real-time messaging application with AI-driven smart replies and sentiment analysis using Kotlin and ML Kit.",
      tech: ["Kotlin", "Firebase", "ML Kit", "Jetpack Compose"],
      category: "Android"
    },
    {
      title: "Open Source UI Toolkit",
      description: "Comprehensive collection of customizable Material Design components for Android developers, with 500+ GitHub stars.",
      tech: ["Kotlin", "Material Design", "AndroidX"],
      category: "Open Source"
    },
    {
      title: "DevHub Community Platform",
      description: "Community-driven platform connecting developers worldwide for knowledge sharing, mentorship, and collaboration.",
      tech: ["Kotlin", "Room", "WorkManager", "Navigation"],
      category: "Open Source"
    },
    {
      title: "Smart Task Scheduler",
      description: "ML-powered productivity app that learns user patterns and optimizes task scheduling for maximum efficiency.",
      tech: ["Kotlin", "TensorFlow Lite", "Room", "MVVM"],
      category: "AI/ML"
    },
    {
      title: "Code Review Assistant",
      description: "AI-driven tool that analyzes code quality, suggests improvements, and automates review processes for development teams.",
      tech: ["Python", "NLP", "REST API", "CI/CD"],
      category: "AI/ML"
    },
    {
      title: "Fitness Tracker Pro",
      description: "Comprehensive health and fitness tracking app with real-time analytics and personalized workout recommendations.",
      tech: ["Kotlin", "HealthConnect", "Compose", "MPAndroidChart"],
      category: "Android"
    },
    {
      title: "Kotlin DSL Builder",
      description: "Type-safe builder library leveraging Kotlin DSL for creating complex UI layouts with minimal boilerplate code.",
      tech: ["Kotlin", "DSL", "Gradle", "Android"],
      category: "Open Source"
    }
  ];

  const handleLinkClick = (type) => {
    toast({
      title: "🚧 Feature Not Implemented",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀"
    });
  };

  return (
    <section ref={ref} className="section-spacing bg-theme-bg py-20 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-theme-text">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-theme-muted text-lg max-w-2xl mx-auto">
            Building innovative solutions that make a difference
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="glass-effect rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-[#00d4ff]/10 group cursor-pointer"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1701074463673-f50a5dfcc1b3"
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
                
                {/* Category Badge */}
                <div className="absolute top-3 right-3 bg-[#d4af37]/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-[#1a1a2e]">
                  {project.category}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-theme-text mb-3 group-hover:text-[#d4af37] transition-colors">
                  {project.title}
                </h3>
                <p className="text-theme-muted text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-[#00d4ff]/10 text-[#00d4ff] text-xs rounded-full border border-[#00d4ff]/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <button
                    onClick={() => handleLinkClick('github')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 hover:bg-[#d4af37]/20 text-[#d4af37] rounded-lg text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick('demo')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#00d4ff]/10 hover:bg-[#00d4ff]/20 text-[#00d4ff] rounded-lg text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;