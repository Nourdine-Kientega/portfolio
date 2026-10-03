import '../assets/styles/portfolio.css';
import { LayoutComponent } from '../components/partials/LayoutComponent.';
import { AboutSection } from '../components/sections/AboutSection';
import { CertificationsSection } from '../components/sections/CertificationSection';
import { ContactSection } from '../components/sections/ContactSection';
import { HeroSection } from '../components/sections/HeroSection';
import { ProjectsSection } from '../components/sections/ProjectsSection';
import { ServicesSection } from '../components/sections/ServicesSection';
import { SkillsSection } from '../components/sections/SkillsSection';

const HomePage = () => {
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
}

export default HomePage;