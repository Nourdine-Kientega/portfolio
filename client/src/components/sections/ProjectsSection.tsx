import { ProjectsImages } from "../../assets";
import { ProjectItem } from "../items/ProjectItem";

export const ProjectsSection = () => {
    // Project data with fake data
const projects = [
    {
      src: ProjectsImages.Projet1,
      alt: "Portfolio 1",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam eum aliquid sint?",
      title: "Mon bulletin",
      link: "#"
    },
    {
      src: ProjectsImages.Projet2,
      alt: "Portfolio 2",
      description: "A brief overview of this second project, showcasing the technology stack and functionality.",
      title: "Projet React",
      link: "#"
    },
    {
      src: ProjectsImages.Projet3,
      alt: "Portfolio 3",
      description: "This is a description of the third project, an e-commerce website with great features.",
      title: "E-Commerce App",
      link: "#"
    },
    {
      src: ProjectsImages.Projet4,
      alt: "Portfolio 4",
      description: "A real-time chat application with WebSocket integration and a sleek UI design.",
      title: "Chat App",
      link: "#"
    },
    {
      src: ProjectsImages.Projet5,
      alt: "Portfolio 5",
      description: "An interactive project that shows how to build a RESTful API with Node.js and Express.",
      title: "RESTful API",
      link: "#"
    },
    {
      src: ProjectsImages.Projet6,
      alt: "Portfolio 6",
      description: "A mobile application for managing to-do lists and reminders, built with React Native.",
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
