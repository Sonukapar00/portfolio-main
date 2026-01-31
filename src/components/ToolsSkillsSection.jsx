import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code2,
  FileCode2,
  Coffee,
  FileJson,
  Atom,
  Server,
  Database,
  Terminal,
  Layers,
  Webhook,
  Plug,
  Send,
  ShieldCheck
} from "lucide-react";

/* ===================== ANIMATIONS ===================== */

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.85 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 100, damping: 12 }
  }
};

const ToolsSkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  /* ===================== SKILLS DATA ===================== */

  const frontendSkills = [
    { name: "HTML5", icon: FileCode2, color: "from-orange-400 to-red-500" },
    { name: "CSS3", icon: Layers, color: "from-blue-400 to-blue-600" },
    { name: "JavaScript", icon: FileJson, color: "from-yellow-400 to-yellow-600" },
    { name: "React JS", icon: Atom, color: "from-cyan-400 to-blue-500" }
  ];

  const backendSkills = [
    { name: "Node JS", icon: Server, color: "from-green-400 to-emerald-600" },
    { name: "Express JS", icon: Terminal, color: "from-gray-400 to-gray-600" },
    { name: "Java", icon: Coffee, color: "from-red-500 to-pink-600" },
    { name: "Python", icon: Code2, color: "from-blue-400 to-yellow-400" }
  ];

  const databaseSkills = [
    { name: "SQL", icon: Database, color: "from-indigo-400 to-purple-600" },
    { name: "MySQL", icon: Database, color: "from-blue-500 to-indigo-600" },
    { name: "PostgreSQL", icon: Database, color: "from-cyan-500 to-blue-600" },
    { name: "MongoDB", icon: Database, color: "from-green-500 to-emerald-700" }
  ];

  const apiSkills = [
    { name: "REST APIs", icon: Webhook, color: "from-purple-400 to-fuchsia-600" },
    { name: "API Integration", icon: Plug, color: "from-teal-400 to-cyan-600" },
    { name: "Postman", icon: Send, color: "from-orange-400 to-red-500" },
    { name: "JWT Authentication", icon: ShieldCheck, color: "from-emerald-400 to-green-600" }
  ];

  /* ===================== SKILL GRID ===================== */

  const SkillGrid = ({ title, skills }) => (
    <>
      <h3 className="text-2xl font-bold text-theme-text mb-10 text-center">
        {title}
      </h3>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-12 justify-items-center mb-20"
      >
        {skills.map((skill, index) => {
          const Icon = skill.icon;
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group flex flex-col items-center cursor-pointer"
            >
              <div
                className={`relative w-24 h-24 rounded-full bg-gradient-to-br ${skill.color}
                flex items-center justify-center shadow-lg
                transition-all duration-500
                group-hover:scale-105`}
              >
                <div
                  className={`absolute inset-0 rounded-full bg-gradient-to-br ${skill.color}
                  opacity-20 blur-xl group-hover:opacity-40 transition-opacity`}
                />

                <Icon
                  className="relative w-10 h-10 text-white
                  transition-transform duration-500
                  group-hover:rotate-[360deg] group-hover:scale-110"
                />
              </div>

              <span className="mt-4 font-semibold text-theme-text text-center group-hover:text-[#d4af37] transition-colors">
                {skill.name}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
    </>
  );

  /* ===================== JSX ===================== */

  return (
    <section
      ref={ref}
      className="section-spacing bg-theme-bg-secondary py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 text-theme-text">
            Tools & <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-theme-muted text-lg max-w-2xl mx-auto">
            A well-structured full-stack skill set for modern application development
          </p>
        </motion.div>

        <SkillGrid title="Frontend Tools & Skills" skills={frontendSkills} />
        <SkillGrid title="Backend Tools & Skills" skills={backendSkills} />
        <SkillGrid title="Database Tools" skills={databaseSkills} />
        <SkillGrid title="API & Integration Tools" skills={apiSkills} />

      </div>
    </section>
  );
};

export default ToolsSkillsSection;