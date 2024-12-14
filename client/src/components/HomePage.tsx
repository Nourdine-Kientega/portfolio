
import { LayoutComponent } from "./Layout/LayoutComponent";
import { AboutComponent } from "./sections/AboutComponent";
import { ContactComponent } from "./sections/ContactComponent";
import { HomeComponent } from "./sections/HomeComponent";
import { ProjectsComponent } from "./sections/ProjectsComponent";
import { ServicesComponent } from "./sections/ServicesComponent";

// import '../assets/utils/portfolio.js';


export const HomePage = () => {

  return (
    <LayoutComponent>
      <HomeComponent />
      <AboutComponent />
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