const Footer = ({ scrollToSection }) => {
  const handleClick = (e, href) => {
    e.preventDefault();
    scrollToSection(href);
  };

  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/tonypradipta" className="bx bxl-github" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.linkedin.com/in/i-putu-tonyco-satria-pradipta-b93365334/" className="bx bxl-linkedin-square" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://www.instagram.com/tonypradiptaa?igsh=MThlaTZxa2s5a2xo" className="bx bxl-instagram" target="_blank" rel="noopener noreferrer"></a>
        <a href="https://wa.me/085923159636" className="bx bxl-whatsapp" target="_blank" rel="noopener noreferrer"></a>
      </div>

      <ul className="list">
        <li><a href="#home" onClick={(e) => handleClick(e, '#home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleClick(e, '#about')}>About</a></li>
        <li><a href="#services" onClick={(e) => handleClick(e, '#services')}>Services</a></li>
        <li><a href="#projects" onClick={(e) => handleClick(e, '#projects')}>Projects</a></li>
        <li><a href="#contact" onClick={(e) => handleClick(e, '#contact')}>Contact</a></li>
      </ul>

      <p className="copyright">
        © 2025 Tony Pradipta | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;