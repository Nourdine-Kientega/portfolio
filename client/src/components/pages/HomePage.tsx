import '../assets/styles/portfolio.css';

// Page sections
import { HeroSection } from "../sections/HeroSection";
import { AboutSection } from "../sections/AboutSection";
import { SkillsSection } from "../sections/SkillsSection";
import { LayoutComponent } from "../partials/LayoutComponent";
import { CertificationsSection } from "../sections/CertificationsSection";
import { ServicesSection } from '../sections/ServicesSection';
import { ProjectsSection } from '../sections/ProjectsSection';
import { ContactSection } from '../sections/ContactSection';

export const HomePage = () => {
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
