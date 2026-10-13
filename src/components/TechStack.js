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
        </div>
      </div>
    </section>
  );
}

