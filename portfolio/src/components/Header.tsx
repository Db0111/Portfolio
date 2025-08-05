import { Moon, Sun } from "lucide-react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = ({
  isDarkMode,
  toggleDarkMode,
}: {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}) => {
  const navigate = useNavigate();
  const navToHome = () => navigate("/");
  const navToAboutMe = () => navigate("/about-me");
  const navToProjects = () => navigate("/projects");
  const navToContact = () => navigate("/contact");
  return (
    <header className="header">
      <h2>DB's Portfolio</h2>
      <nav className="nav-bar">
        <a onClick={navToHome}>Home</a>
        <a onClick={navToAboutMe}>About Me</a>
        <a onClick={navToProjects}>Projects</a>
        <a onClick={navToContact}>Contact</a>
        <button onClick={toggleDarkMode}>
          {isDarkMode ? <Sun /> : <Moon />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
