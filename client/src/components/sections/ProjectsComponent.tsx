import { projectsImages } from "../../assets/images";

export const ProjectsComponent = () => {
  return (
    <section className="portfolio" id="projects">
        <h2 className="heading">Mes Derniers <span>Projets</span></h2>

        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={projectsImages.Projet1} alt="" />
                <div className="portfolio-layer">
                    <h4>Playable Piano</h4>
                    <p>Playable Piano est une application web où vous pouvez jouer de la musique au piano en cliquant sur les touches du clavier.</p>
                    <a href="https://kientega-nourdine.github.io/Playable-piano/" target="_blank"><i className="bx bx-link-external"></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={projectsImages.Projet2} alt="" />
                <div className="portfolio-layer">
                    <h4>Online CV Nourdine Kientega</h4>
                    <p>
                        Le CV en ligne est un projet réalisé pour mettre en pratique mes compétences en développement web tout en exprimant ma créativité 
                        dans la conception d'une interface moderne et fonctionnelle.
                    </p>
                    <a href="https://nourdine-kientega.github.io/cv/" target="_blank"><i className="bx bx-link-external"></i></a>
                </div>
            </div>

            <div className="portfolio-box">
                <img src={projectsImages.Projet3} alt="" />
                <div className="portfolio-layer">
                    <h4>Web Desgin</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, assumenda!</p>
                    <a href="#"><i className="bx bx-link-external"></i></a>
                </div>
            </div>

        </div>
    </section>
  )
};
