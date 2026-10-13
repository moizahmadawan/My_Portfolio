import './About.css'
import profileImage from "../assets/profile.jpeg";

const education = [
  {
    when: "2022 – 2026",
    title: "BS Computer Science",
    text: "University of Gujrat, Pakistan",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2>About Me</h2>


<div className="about-grid">
  {/* Left: Profile Picture */}
  <div className="about-image">
    <img
      src={profileImage}
      alt="Malik Moiz Ahmad Awan"
      loading="lazy"
    />
  </div>

  {/* Right: Bio + Education */}
  <div className="about-right">
    <div className="about-content">
      <h3>Hi, I'm Malik Moiz Ahmad Awan</h3>
      <p>
I’m a passionate Computer Science graduate and Full Stack Developer dedicated to building innovative, high-performance web applications and seamless mobile experiences. With a strong foundation in modern web technologies, I turn complex challenges into elegant, scalable, and user-centric solutions. I’m continuously expanding my expertise, exploring AI-driven technologies, and creating meaningful digital products that combine functionality, creativity, and exceptional user experience.
      </p>
    </div>

    <div className="about-education">
      <h3>Education</h3>

      <ol className="tl">
        {education.map((item) => (
          <li key={item.title}>
            <small>{item.when}</small>
            <b>{item.title}</b>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </div>
</div>
      </div>
    </section>
  );
}

