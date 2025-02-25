import { ProjectsImages } from "../../assets";

export const ProjectsSection = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="heading">
        Mes Derniers <span>Projets</span>
      </h2>

        <div className="projects-container">

            <div className="project-box">
                <img className="img" src={ProjectsImages.Projet1} alt="" />

                <div className="data">
                    <span className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. numquam eum aliquid sint?</span>
                    <h2 className="title">Mon bulletin</h2>
                    <a href="#" className="button">En savoir plus</a>
                </div>
            </div>

            <div className="project-box">
                <img className="img" src={ProjectsImages.Projet1} alt="" />

                <div className="data">
                    <span className="description">This is a description of the card project presentation !</span>
                    <h2 className="title">Title of the card</h2>
                    <a href="#" className="button">En savoir plus</a>
                </div>
            </div>

            <div className="project-box">
                <img className="img" src={ProjectsImages.Projet1} alt="" />

                <div className="data">
                    <span className="description">This is a description of the card project presentation !</span>
                    <h2 className="title">Title of the card</h2>
                    <a href="#" className="button">En savoir plus</a>
                </div>
            </div>

            <div className="project-box">
                <img className="img" src={ProjectsImages.Projet1} alt="" />

                <div className="data">
                    <span className="description">This is a description of the card project presentation !</span>
                    <h2 className="title">Title of the card</h2>
                    <a href="#" className="button">En savoir plus</a>
                </div>
            </div>
            
            <div className="project-box">
                <img className="img" src={ProjectsImages.Projet1} alt="" />

                <div className="data">
                    <span className="description">This is a description of the card project presentation !</span>
                    <h2 className="title">Title of the card</h2>
                    <a href="#" className="button">En savoir plus</a>
                </div>
            </div>
            
        </div>
    </section>
  );
};
