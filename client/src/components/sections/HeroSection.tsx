import { DefaultAssets } from "../../assets";
import { CVLink } from "../items/CVLink";
import { SocialMediaLink } from "../items/SocialMediaLink";

export const HeroSection = () => {

  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <h3>Salut, moi c'est</h3>
        <h1>Nourdine Kientega</h1>
        <h3>
          et je suis <span className="multiple-text"></span>
        </h3>
        <p>
          Développeur Full Stack en auto-formation, je construis des projets concrets en frontend 
          et backend. Toujours en quête d’amélioration, j’apprends en pratiquant 
          pour créer des solutions efficaces et bien structurées.
        </p>

        {/* Social media links */}
        <div className="social-media">
          <SocialMediaLink href={`facebook/`} title="Facebook" iconClassName="bx bxl-facebook" />
          <SocialMediaLink href={`whatsapp/`} title="WhatsApp" iconClassName="bx bxl-whatsapp" />
          <SocialMediaLink href={`linkedin/`} title="LinkedIn" iconClassName="bx bxl-linkedin" />
          <SocialMediaLink href={`github/`} title="GitHub" iconClassName="bx bxl-github" />
        </div>

        {/* cv links */}
        <div className="cv">
          <CVLink href={'cv/Kientega-Nourdine.pdf'} downloadTitle="CV Kientega Nourdine.pdf" label="Télécharger mon CV" />
          <CVLink href={'https://nourdine-kientega.github.io/cv/'} label="Voir mon CV en ligne" />
        </div>

      </div>
      <div className="hero-img">
        <img src={DefaultAssets.Profil} alt="Image de Nourdine Kientega" />
      </div>
    </section>
  );
};
