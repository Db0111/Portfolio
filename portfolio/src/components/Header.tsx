import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h2>DB's Portfolio</h2>
      <nav className="nav-bar">
        <a href="#about-me">About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
