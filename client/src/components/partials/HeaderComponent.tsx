
import { useEffect, useState } from "react";
import { DefaultAssets } from "../../assets";
import { ThemeSwitcher } from "../utils/ThemeSwitcher";

export const HeaderComponent = () => {

  const [activeSection, setActiveSection] = useState("");

  const [menuIsActive, SetMenuIsActive] = useState(false);
  
  const handleClickMenu = () => {

    document.querySelector(".navbar")?.classList.toggle('active');
    SetMenuIsActive(!menuIsActive);
  };

  useEffect(() => {

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header">
      {/* Logo image  */}
      <a href="/" className="logo">
        <img src={DefaultAssets.Logo} alt="Logo icon" />
      </a>

      {/* Navigation */}
      <nav className="navbar">
      <a href="#hero" className={activeSection === "hero" ? "active" : ""}>Accueil</a>
      <a href="#about" className={activeSection === "about" ? "active" : ""}>À propos</a>
      <a href="#skills" className={activeSection === "skills" ? "active" : ""}>Compétences</a>
      <a href="#certifications" className={activeSection === "certifications" ? "active" : ""}>Certifications</a>
      <a href="#services" className={activeSection === "services" ? "active" : ""}>Services</a>
      <a href="#projects" className={activeSection === "projects" ? "active" : ""}>Projets</a>
      <a href="#contact" className={activeSection === "contact" ? "active" : ""}>Contact</a>
    </nav>

      <div className="menu-theme">
        <ThemeSwitcher themes={['dark', 'light']}/>

        {/* Menu icon */}
        <i className={menuIsActive ? 'menu-icon bx bx-x close-icon' : "menu-icon bx bx-menu"} onClick={() => handleClickMenu()}></i>
      </div>
      {/* Dark / Light mode */}
    </header>
  );
};
