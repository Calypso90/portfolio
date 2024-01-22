import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

export default function NavBar() {
  return (
    <div id="navbar">
      <div>
        <p id="name">CALYPSO HERNANDEZ</p>
      </div>
      <div id="title-linksBox">
        <p id="title">FULL STACK DEVELOPER</p>
        <p id="links">
          <a href="https://github.com/Calypso90">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/calypso-hernandez/">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/calypso_coding/">
            <FaInstagramSquare />
          </a>
        </p>
      </div>
    </div>
  );
}
