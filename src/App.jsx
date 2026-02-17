import React from 'react';
import { Helmet } from 'react-helmet';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import AchievementsSection from '@/components/AchievementsSection';
import ExperiencesSection from '@/components/ExperiencesSection';
import ToolsSkillsSection from '@/components/ToolsSkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import CommunitySection from '@/components/CommunitySection';
import SocialLinksSection from '@/components/SocialLinksSection';
import ContactSection from '@/components/ContactSection';
import { Toaster } from '@/components/ui/toaster';
import { ThemeProvider } from '@/components/ThemeContext';
import ThemeToggle from '@/components/ThemeToggle';
import FloatingNavbar from '@/components/FloatingNavbar';

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Sonu Kapar - Software Engineer | Educator | Tech Influencer</title>
        <meta
          name="description"
          content="Portfolio of Sonu Kapar - Award-winning software engineer, educator, and tech influencer. Specializing in Android development, Kotlin, open source, and AI. TEDx speaker and community builder."
        />
      </Helmet>
      
      <div className="min-h-screen bg-theme-bg text-theme-text transition-colors duration-300">
        <FloatingNavbar />
        <ThemeToggle />
        <HeroSection />
        <AboutSection />
        <AchievementsSection />
        <ExperiencesSection />
        <ToolsSkillsSection />
        <ProjectsSection />
        <CommunitySection />
        <ContactSection />
        <SocialLinksSection />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;