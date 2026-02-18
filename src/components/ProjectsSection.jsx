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
      title: "Crypto Coin Tracker",
      description: "Developed a responsive web application that displays real-time data for 100+ cryptocurrencies, including current price, market capitalization, and percentage change, enhancing user engagement and overall user experience.",
      tech: ["React.js", "JavaScript", "HTML", "CSS", "REST API"],
      category: "Android",
      github: "https://github.com/Sonukapar00/Crypto_Price_Tracker-main",
      demo: "https://your-demo-link-here.com" // Add your live demo link
    },
    {
      title: "Weather Predictions App",
      description: "A responsive weather application that provides real-time weather updates for 1,00+ cities worldwide. Optimized data handling to reduce load times by 50% and designed a user-friendly interface that improved user engagement by 30%.",
      tech: ["JavaScript", "HTML", "CSS", "Weather API"],
      category: "Android",
      github: "https://github.com/Sonukapar00/Weather-app-main",
      demo: "https://your-weather-demo-link.com"
    },
    {
      title: "Full-Stack Mern-ToDo-App ",
      description: "A full-stack MERN Todo application with a decoupled frontend and backend architecture. The frontend is built with React for a fast and responsive user interface, while the backend uses Node.js and Express to provide RESTful APIs and manage data efficiently. The application supports complete CRUD operations with a scalable and maintainable code structure.",
      tech: ["MongoDB",  "Express.js",  "React.js",  "Node.js",  "JavaScript",  "Vite",  "HTML",  "CSS"],
      category: "Open Source",
      github: "https://github.com/Sonukapar00/mern-todo-app",
      demo: "https://your-todo-app-demo.com"
    },
    {
      title: "Classification of chest X-ray Abnormalities",
      description: "Built a machine learning model to classify chest X-ray abnormalities, achieving 92% accuracy and 90% precision. Applied advanced analytics for data insights and visualized results using interactive dashboards.",
      tech: ["Python", "Machine Learning", "Data Analysis", "Power BI"],
      category: "AI ML",
      github: "https://github.com/your-username/xray-classification",
      demo: "https://your-xray-demo-link.com"
    },
    {
      title: "Super-Market-sales-dashboard",
      description: "An interactive sales analytics dashboard built to analyze supermarket sales performance and key business metrics. The dashboard provides insights into revenue trends, regional performance, and product-level analysis, helping stakeholders make data-driven decisions and optimize business operations.",
      tech: ["Power BI", "PostgreSQL", "Data Analysis", "Data Visualization", "Business Intelligence"],
      category: "Data Analysis",
      github: "https://github.com/Sonukapar00/Super-Market-sales-dashboard",
      demo: "https://your-dashboard-demo.com"
    },
    {
      title: "Music_Store_Analysis ",
      description: "Performed comprehensive data analysis on a music store database using SQL to answer key business questions related to sales, customers, and artist performance. Designed and executed complex queries involving joins, subqueries, aggregations, and filtering to extract actionable insights for business decision-making.",
      tech: ["PostgreSQL", "SQL", "Data Analysis", "Data Modeling"],
      category: "Data Analysis",
      github: "https://github.com/Sonukapar00/Music_Store_Analysis",
      demo: "https://your-analysis-demo.com"
    },
    {
      title: "Coming Soon ",
      description: "We are currently working on this project. Stay tuned for updates. It will be an innovative solution that leverages cutting-edge technologies to solve real-world problems.",
      tech: ["Soon", "Soon", "Soon", "Soon"],
      category: "Android"
    },
    {
      title: "Coming Soon ",
      description: "We are currently working on this project. Stay tuned for updates. It will be an innovative solution that leverages cutting-edge technologies to solve real-world problems.",
      tech: ["Soon", "Soon", "Soon", "Soon"],
      category: "Open Source"
    }
  ];

  const handleLinkClick = (project, type) => {
    const url = project?.[type];
    if (!url) {
      toast({
        title: "⚠️ Link Not Available",
        description: "The requested link is not available for this project.",
      });
      return;
    }

    try {
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (err) {
      toast({
        title: "❌ Could Not Open Link",
        description: "An error occurred while opening the link.",
      });
    }
  };

  return (
    <section id="projects" ref={ref} className="section-spacing bg-theme-bg py-20 transition-colors duration-300">
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
                    onClick={() => handleLinkClick(project, 'github')}
                    className="flex items-center gap-2 px-4 py-2 bg-[#d4af37]/10 hover:bg-[#d4af37]/20 text-[#d4af37] rounded-lg text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </button>
                  <button
                    onClick={() => handleLinkClick(project, 'demo')}
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