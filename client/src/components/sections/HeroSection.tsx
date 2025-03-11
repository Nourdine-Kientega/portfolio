import { DefaultAssets } from "../../assets";
import { CVLink } from "../items/cvLink";
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
          Je suis un développeur full stack junior en auto-formation, je
          travaille principalement en frontend et backend, et je m'efforce de
          toujours améliorer mes compétences pour offrir des solutions complètes
          et bien structurées. En tant que développeur frontend, je maîtrise des
          technologies comme HTML, CSS, JavaScript, et React, me permettant de
          créer des interfaces utilisateurs modernes et réactives. Côté backend,
          je travaille avec des outils comme Node.js et des bases de données
          telles que PostgreSQL et MongoDB.
        </p>

        {/* Social media links */}
        <div className="social-media">
          <SocialMediaLink href="https://www.facebook.com/profile.php?id=100084107022127" title="Facebook" iconClassName="bx bxl-facebook" />
          <SocialMediaLink href="https://wa.me/+22674070440" title="WhatsApp" iconClassName="bx bxl-whatsapp" />
          <SocialMediaLink href="https://www.linkedin.com/in/nourdine-kientega-6660a8270" title="LinkedIn" iconClassName="bx bxl-linkedin" />
        </div>

        {/* cv links */}
        <div className="cv">
          <CVLink href={DefaultAssets.cv} downloadTitle="CV Kientega Nourdine.pdf" label="Télécharger mon CV" />
          <CVLink href={'https://nourdine-kientega.github.io/cv/'} label="Voir mon CV en ligne" />
        </div>

      </div>
      <div className="hero-img">
        <img src={DefaultAssets.Profil} alt="Image de Nourdine Kientega" />
      </div>
    </section>
  );
};
