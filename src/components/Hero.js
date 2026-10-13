
import "./Hero.css";
import { FiArrowUpRight } from "react-icons/fi";

const lines = ["Moiz Ahmad", "Full Stack", "Developer"];

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap">
        {/* Availability Status */}
        <div className="availability">
          <span className="status-dot"></span>
          Available
        </div>

        {/* Main Heading */}
        <h1 aria-label={lines.join(" ")}>
          {lines.map((line) => (
            <span key={line}>
              <i>{line}</i>
            </span>
          ))}
        </h1>

{/* Professional Title */}
<p className="hero-meta">
  Full Stack Developer · MERN Stack · React Native · AI-Powered Solutions
</p>

        {/* Introduction */}
        <p className="lead">
          Architecting high-performance digital experiences,
          specializing in React, Firebase, MERN stack, and
          modern web infrastructure.
        </p>

        {/* Action Buttons */}
        <div className="btns">
          <a className="btn p" href="#projects">
            Explore My Work
            <FiArrowUpRight aria-hidden="true" />
          </a>

          <a className="btn" href="#contact">
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}