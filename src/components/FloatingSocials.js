
import {
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import "./FloatingSocials.css";

export default function FloatingSocials() {
  return (
    <div className="floating-socials">
      <a
        href="https://www.linkedin.com/in/malikmoizahmad/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <FaLinkedinIn />
      </a>

      <a
        href="https://github.com/moizahmadawan"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="GitHub"
        title="GitHub"
      >
        <FaGithub />
      </a>

      <a
        href="mailto:moizahmad334455@gmail.com"
        aria-label="Email"
        title="Email me"
      >
        <FiMail />
      </a>
    </div>
  );
}
