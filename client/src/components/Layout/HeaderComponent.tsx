import { useState } from "react";

export const HeaderComponent = () => {

    const [isActive, setIsActive] = useState(false);

    const handleMenuClick = () => {
      setIsActive(!isActive); // Bascule l'état actif
    };

  return (
    <header className="header">
        <a href="#" className="logo">Portfolio</a>

      {/* Icône du menu */}
      <i
        className={`bx ${isActive ? 'bx-x' : 'bx-menu'}`}
        id="menu-icon"
        onClick={handleMenuClick}
      ></i>

      {/* Navigation */}
      <nav className={`navbar ${isActive ? 'active' : ''}`}>
            <a href="#home" className="active">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#portfolio">Portfolio</a>
            <a href="#contact">Contact</a>
        </nav>
    </header>
  )
};
