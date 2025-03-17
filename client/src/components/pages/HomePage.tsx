import '../../assets/styles/portfolio.css';
import { initScrollReveal, initTypedJs } from '../../assets/js/portfolio';

import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { SkillsSection } from "../sections/SkillsSection";
import { LayoutComponent } from "../partials/LayoutComponent";
import { CertificationsSection } from "../sections/CertificationsSection";
import { ServicesSection } from '../sections/ServicesSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ContactSection } from '../sections/ContactSection';
import { useEffect } from 'react';


export const HomePage = () => {


  useEffect(() => {

    // Start ScrollReveal animation
    initScrollReveal();

    // Star multiple text animation
    const typedInstance = initTypedJs('.multiple-text');

    // clean typed.js background
    return () => {
      if (typedInstance) {
        typedInstance.destroy();
      }
    };
  }, []);

  return (
    <LayoutComponent>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <CertificationsSection />
        <ServicesSection />
        <ProjectsSection />
        <ContactSection />
    </LayoutComponent>
  )
};
