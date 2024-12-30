import { projectsImages } from "../../assets/images";

export const ProjectsComponent = () => {
  return (
    <section className="portfolio" id="projects">
        <h2 className="heading">Latest <span>Project</span></h2>

        <div className="portfolio-container">
            <div className="portfolio-box">
                <img src={projectsImages.Projet1} alt="" />
                <div className="portfolio-layer">
                    <h4>Playable Piano</h4>
                    <p>Playable Piano is a web application where you can play piano music by clicking on the keyboard keys</p>
                    <a href="https://kientega-nourdine.github.io/Playable-piano/" target="_blank"><i className="bx bx-link-external"></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={projectsImages.Projet2} alt="" />
                <div className="portfolio-layer">
                    <h4>Web Desgin</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, assumenda!</p>
                    <a href="#"><i className="bx bx-link-external"></i></a>
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
            <div className="portfolio-box">
                <img src={projectsImages.Projet4} alt="" />
                <div className="portfolio-layer">
                    <h4>Web Desgin</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, assumenda!</p>
                    <a href="#"><i className="bx bx-link-external"></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={projectsImages.Projet5} alt="" />
                <div className="portfolio-layer">
                    <h4>Web Desgin</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, assumenda!</p>
                    <a href="#"><i className="bx bx-link-external"></i></a>
                </div>
            </div>
            <div className="portfolio-box">
                <img src={projectsImages.Projet6} alt="" />
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
