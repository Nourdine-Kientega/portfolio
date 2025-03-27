import { ProjectsImages } from "../../assets";
import { ProjectItem } from "../items/ProjectItem";

export const ProjectsSection = () => {
    // Project data with fake data
    const projects = [
      {
        src: ProjectsImages.Projet1,
        alt: "Portfolio 1",
        description: "Cette application permet de calculer rapidement les moyennes des élèves grâce à une interface simple et intuitive.",
        title: "Mon bulletin",
        link: "#"
      },
      {
        src: ProjectsImages.Projet5,
        alt: "Portfolio 5",
        description: "Un projet interactif qui montre comment construire une API RESTful avec Node.js et Express.",
        title: "API RESTful",
        link: "#"
      },
      {
        src: ProjectsImages.Projet6,
        alt: "Portfolio 6",
        description: "Une application mobile pour gérer des listes de tâches et des rappels, construite avec React Native.",
        title: "To-Do App",
        link: "#"
      }
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        Mes Derniers <span>Projets</span>
      </h2>

        {/* Project list */}
        <div className="projects-container">
            {projects.map((project, index) => (
                <ProjectItem key={index} {...project} />
            ))}
        </div>
        
    </section>
  );
};
