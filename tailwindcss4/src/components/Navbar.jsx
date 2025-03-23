import logo from "../assets/react.svg";
import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      {/* Logo Section */}
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" />
      </div>

      {/* Icons Section */}
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* Résumé Icon (PDF example) */}
        <a
          href="https://docs.google.com/document/d/1H6vTtv7WY1DAjtFAVfABAvw-419NBoEu/edit?usp=sharing&ouid=103069800052482120825&rtpof=true&sd=true" // or link to your external résumé URL
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaFileAlt />
        </a>
        
        {/* LinkedIn Icon */}
        <a
          href="https://www.linkedin.com/in/jimingc"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaLinkedin />
        </a>

        {/* GitHub Icon */}
        <a
          href="https://github.com/Jiming-C"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500"
        >
          <FaGithub />
        </a>

 
      </div>
    </nav>
  );
};

export default Navbar;
