import { useState } from "react";
import Logo from '../../assets/images/logo.png';
import Slider from "../utils/Slider";

export const HeaderComponent = () => {

    const [isActive, setIsActive] = useState(false);
    const [slide, setSlide] = useState(true);

    const handleMenuClick = () => {
      setIsActive(!isActive); // Bascule l'état actif
    };

    const handleChangeMode = (state: boolean) => {

      setSlide(state);
      if(!state) {
        document.body.classList.add('light');
      } else {
        document.body.classList.remove('light');
      }

      console.log(state ? 'Dark' : 'Light');
    };

  return (
    <header className="header">
        <a href="/" className="logo">
          <img src={Logo} alt="Logo icon" />
        </a>

      {/* Icône du menu */}
      <i
        className={`bx ${isActive ? 'bx-x' : 'bx-menu'}`}
        id="menu-icon"
        onClick={handleMenuClick}
      ></i>

      {/* Navigation */}
      <nav className={`navbar ${isActive ? 'active' : ''}`}>
        <a href="#home">Accueil</a>
        <a href="#about">À propos</a>
        <a href="#skills">Compétences</a>
        <a href="#certifications">Certifications</a>
        <a href="#services">Services</a>
        <a href="#projects">Projets</a>
        <a href="#contact">Contact</a>
      </nav>

        {/* Sliders */}
      <div className="sliders">
        <Slider isSlided={slide} options={['Dark', 'Light']} onChangeValue={(e) => handleChangeMode(e)}/>
      </div>
    </header>
  )
};
