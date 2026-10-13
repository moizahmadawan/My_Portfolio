<<<<<<< HEAD

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
=======
const lines = ["I build fast,", "pixel-perfect", "web apps."];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <h1 aria-label={lines.join(" ")}>
          {lines.map((line) => (
            <span key={line}><i>{line}</i></span>
          ))}
        </h1>
        <p className="lead">
          <b>Malik Moiz Ahmad Awan</b> — I bridge the gap between design and code. I take your Figma files and turn them into clean, responsive, high-performance web and mobile apps. Whether it's a marketing site, a SaaS dashboard, or a mobile app, I focus on pixel-perfect UI, smooth interactions, and code that's easy to maintain. 
        </p>
        <div className="btns">
          <a className="btn p" href="#projects">See my projects</a>
          <a className="btn" href="#contact">Get in touch</a>
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8
