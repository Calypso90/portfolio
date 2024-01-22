import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaNpm } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";
import { FaSlack } from "react-icons/fa6";
import { FaTrello } from "react-icons/fa";
import { SiCanva } from "react-icons/si";
import Link from "next/link.js";

export default function Home() {
  return (
    <div id="aboutPage">
      <div id="aboutLeft">
        <img id="avatar" src="avatar.png" />
        <Link href={`/resume`}>
          <button>RESUME</button>
        </Link>
        <Link href={`/portfolio`}>
          <button>PORTFOLIO</button>
        </Link>
      </div>
      <div id="aboutRight">
        <p id="aboutMe">
          Hey, my name is Calypso and I'm transitioning from the arts into tech.
          I'm originally from South Florida and recently moved up to Georgia. I
          love building fun, user friendly web applications with clean designs .
          In my free time I enjoy gaming, painting, watching anime, exploring
          local spots, and learning something new.
        </p>
        <div id="tech">
          <p id="techTitle">TECH STACK</p>
          <p id="techStack">
            <IoLogoJavascript style={{ color: "#f0db4f" }} />
            <FaReact style={{ color: "#61dafb" }} />
            <FaHtml5 style={{ color: "#e44d26" }} />
            <FaCss3Alt style={{ color: "#1572b6" }} />
            <FaNodeJs style={{ color: "#83cd29" }} />
            <SiNextdotjs />
            <FaGitAlt style={{ color: "#f34f29" }} />
            <FaGithub style={{ color: "#7927d2" }} />
            <BiLogoPostgresql style={{ color: "#336791" }} />
            <FaNpm style={{ color: "#812829" }} />
            <FaPython style={{ color: "#3673a8" }} />
            <TbBrandVscode style={{ color: "#3c99d4" }} />
            <FaSlack style={{ color: "azure" }} />
            <FaTrello style={{ color: "#23719f" }} />
            <SiCanva style={{ color: "#00c4cc" }} />
          </p>
        </div>
      </div>
    </div>
  );
}
