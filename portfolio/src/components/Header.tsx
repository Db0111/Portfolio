import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const navToHome = () => navigate("/");
  const navToAboutMe = () => navigate("/about-me");
  return (
    <div className="header">
      <h2>DB's Portfolio</h2>
      <nav className="nav-bar">
        <a onClick={navToHome}>Home</a>
        <a onClick={navToAboutMe}>About Me</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  );
};

export default Header;
