import { DefaultAssets } from "../../assets";

export const AboutSection = () => {
  return (
    <section className="about" id="about">
      <div className="about-img">
        <img src={DefaultAssets.aboutImg} alt="" />
      </div>

      <div className="about-content">
        <h2 className="heading">
          À propos de <span>moi</span>
        </h2>
        <h3>Développeur Full Stack Junior</h3>
        <p>
          Je me suis lancé dans l'apprentissage du développement web avec une
          approche pratique et autodidacte. Depuis le début de mon parcours, je
          me suis concentré sur l'acquisition de compétences solides en frontend
          et en backend, ce qui me permet de travailler sur des projets de bout
          en bout. <br />
          Mon objectif à long terme est de continuer à évoluer en tant que
          développeur full-stack, en approfondissant mes connaissances tant en
          frontend qu'en backend, afin de devenir un expert capable de gérer
          tous les aspects d'un projet web. J'aime relever des défis techniques
          et travailler sur des projets variés qui me permettent d'élargir mes
          compétences tout en contribuant à l'innovation numérique.
        </p>
      </div>
    </section>
  );
};
