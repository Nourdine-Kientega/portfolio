

// import '../assets/utils/portfolio.js';



import { useEffect } from "react";
import { LayoutComponent } from "./Layout/LayoutComponent";
import { AboutComponent } from "./sections/AboutComponent";
import { ContactComponent } from "./sections/ContactComponent";
import { HomeComponent } from "./sections/HomeComponent";
import { ProjectsComponent } from "./sections/ProjectsComponent";
import { ServicesComponent } from "./sections/ServicesComponent";
import { initScrollReveal, initTypedJs } from "../assets/utils/portfolioUtils.js";
import { SkillsComponent } from "./sections/SkillsComponent";
import CertificationsComponent from "./sections/CertificationsComponent";

// import '../assets/utils/portfolio.js';


export const HomePage = () => {

  useEffect(() => {
    // Initialiser ScrollReveal
    initScrollReveal();

    // Initialiser Typed.js et récupérer l'instance
    const typedInstance = initTypedJs('.multiple-text');

    // Nettoyer l'instance lors du démontage ou de la mise à jour
    return () => {
      if (typedInstance) {
        typedInstance.destroy(); // Supprimer l'ancienne instance
      }
    };
  }, []); // Exécuté une seule fois au chargement du composant


  return (
    <LayoutComponent>
      <HomeComponent />
      <AboutComponent />
      <SkillsComponent />
      <CertificationsComponent />
      <ServicesComponent />
      <ProjectsComponent />
      <ContactComponent />
    </LayoutComponent>
  )
};



// ├── HomeComponent.tsx
// ├── AboutComponent.tsx
// ├── SkillsComponent.tsx
// ├── ServicesComponent.tsx
// ├── ProjectsComponent.tsx
// └── ContactComponent.tsx