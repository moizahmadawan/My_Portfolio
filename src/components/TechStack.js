<<<<<<< HEAD
import './TechStack.css'
import { stack } from "../data/stack";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";

const icons = {
  React: SiReact,
  "React Native": SiReact,
  TypeScript: SiTypescript,
  JavaScript: SiJavascript,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  "Tailwind CSS": SiTailwindcss,
  Git: SiGit,
};

export default function TechStack() {
  return (
    <section id="stack">
      <div className="wrap">
        <h2>Tech Stack</h2>

        <div className="chips">
          {stack.map((skill) => {
            const Icon = icons[skill.name];

            return (
              <div className="chip" key={skill.name}>
                {Icon && <Icon className="chip-icon" />}
                <span>{skill.name}</span>
              </div>
            );
          })}
=======
import { useState } from "react";
import { stack } from "../data/stack";

const categories = Object.keys(stack);

export default function TechStack() {
  const [category, setCategory] = useState("Frontend");

  const pickCategory = (c) => {
    setCategory(c);
  };

  return (
    <section id="stack">
      <div className="wrap">
        <h2>Tech stack</h2>

        <p className="sub">
          Pick a category to see the technologies I use.
        </p>

        <div className="term">
          <div className="bar">
            <span className="dots" aria-hidden="true">
              <b />
              <b />
              <b />
            </span>

            <span>stack.json</span>
          </div>

          <div className="tabs" role="tablist">
            {categories.map((c) => (
              <button
                key={c}
                className="tab"
                type="button"
                role="tab"
                aria-selected={c === category}
                onClick={() => pickCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="chips">
            {stack[category].map((skill) => (
              <span key={skill.name} className="chip">
                {skill.name}
              </span>
            ))}
          </div>
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
