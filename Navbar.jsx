function Navbar({darkMode, setDarkMode}) {
  return (
    <header className="header">
      <h2 className="logo">Sriyaa.</h2>

      <nav className="nav-menu">
        <ul className="navbar">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certificates">Certifications</a></li>
          <li><a href="#contact">Contact</a></li> 
          <li><button className={darkMode ? "theme-toggle active" :"theme-toggle"} onClick={() => setDarkMode(!darkMode)}
            aria-label="Toggle dark mode">
          <span className="toggle-sun">☀️</span>
          <span className="toggle-moon">🌙</span>
          <span className="toggle-circle"></span>
        </button>
        </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;