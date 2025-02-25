// import { DefaultAssets } from "../assets";

import { DefaultAssets } from "../../assets";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";

export const HeaderComponent = () => {
  return (
    <header className="header">
      {/* Logo image  */}
      <a href="/" className="logo">
        <img src={DefaultAssets.Logo} alt="Logo icon" />
      </a>

      {/* Navigation */}
      <nav className={`navbar`}>
        <a href="#hero">Accueil</a>
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#certifications">Certifications</a>
        <a href="#services">Services</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>

      {/* Dark / Light mode */}
      <ThemeSwitcher />
    </header>
  );
};
