import { ServiceItem } from "../items/ServiceItem";

export const ServicesSection = () => {

  const services = [
    {
      iconClassName: "bx bx-laptop",
      title: "Développement Frontend",
      content: "Je propose des solutions en développement web frontend, en alliant design moderne et expérience utilisateur optimisée. Passionné par les interfaces intuitives et responsives, j’utilise mes compétences en design et développement pour créer des sites dynamiques et bien structurés. Mon portfolio en est un exemple concret."
    },
    {
      iconClassName: "bx bx-server",
      title: "Développement Backend",
      content: "En backend, je travaille sur la création de solutions solides et sécurisées des projets. J’utilise mes compétences pour développer des fonctionnalités efficaces et gérer des bases de données, tout en m’assurant que l’architecture soit fiable et scalable. Je continue à approfondir mes connaissances pour offrir des solutions toujours plus performantes."
    },
    {
      iconClassName: "bx bx-mobile",
      title: "Développement Mobile",
      content: "Je m’intéresse également au développement mobile, où je me concentre sur la création d’applications mobiles intuitives et performantes. Bien que je sois encore en apprentissage, je suis passionné par ce domaine et cherche à répondre aux besoins spécifiques des utilisateurs tout en continuant à affiner mes compétences pour offrir des solutions mobiles efficaces."
    }
  ];
  
  return (
    <section className="services" id="services">
      <h2 className="heading">
        Mes <span>Services</span>
      </h2>

      {/* Service items list */}
      <div className="services-container">
        {services.map((service, index) => (
          <ServiceItem key={index} {...service} />
        ))}
      </div>
      
    </section>
  );
};
