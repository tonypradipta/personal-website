import { useState } from 'react';

const Header = ({ activeSection, scrollToSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    scrollToSection(href);
  };

  return (
    <header className="header">
      <a href="#home" className="logo" onClick={(e) => handleNavClick(e, '#home')}>
        <span>tonypradipta{'{}'}</span>
      </a>

      <i 
        className={`bx ${menuOpen ? 'bx-x' : 'bx-menu'}`} 
        id="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      ></i>

      <nav className={`navbar ${menuOpen ? 'active' : ''}`}>
        <a 
          href="#home" 
          className={activeSection === 'home' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#home')}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#about')}
        >
          About
        </a>
        <a 
          href="#certified" 
          className={activeSection === 'certified' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#certified')}
        >
          Certify
        </a>
        <a 
          href="#services" 
          className={activeSection === 'services' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#services')}
        >
          Services
        </a>
        <a 
          href="#projects" 
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#projects')}
        >
          Projects
        </a>
        <a 
          href="#contact" 
          className={activeSection === 'contact' ? 'active' : ''}
          onClick={(e) => handleNavClick(e, '#contact')}
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;