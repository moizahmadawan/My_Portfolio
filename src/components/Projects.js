<<<<<<< HEAD

import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { projects } from "../data/projects";
import "./Projects.css";

import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiShare2,
  FiSearch,
  FiX,
  FiFolder,
  FiArrowLeft,
  FiLock ,
} from "react-icons/fi";

const categories = [
  "All",
  "Website",
  "Mobile App",
  "AI Project",
  "Browser Extension",
];

function ProjectCard({ project }) {
  const handleShare = async () => {
    const url = `${window.location.origin}/projects/${project.id}`;

    try {
      if (navigator.share) {
        await navigator.share({
          title: project.title,
          text: project.summary,
          url,
        });
      } else if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(url);
        alert("Project link copied!");
      } else {
        window.prompt("Copy project link:", url);
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Unable to share project:", error);
      }
    }
  };

  return (
    <article
      className="project-card"
      id={`project-${project.id}`}
    >
      <div className={`project-thumb ${project.thumbClass || ""}`}>
        {project.thumb ? (
          <img
            src={project.thumb}
            alt={`${project.title} thumbnail`}
            className="project-thumbnail"
            loading="lazy"
          />
        ) : (
          <div className="project-thumbnail-placeholder">
            <span>{project.title}</span>
          </div>
        )}


      </div>

      <div className="project-body">
        <div className="project-meta">
          <span className="project-preview-label">
          {project.type || project.category || "Project"}
        </span>
          <span className="project-type">
            {project.category}
          </span>

          {project.role && (
            <span className="project-role">
              {project.role}
            </span>
          )}
        </div>

        <h3 className="project-title">{project.title}</h3>

        <p className="project-summary">{project.summary}</p>

        <div className="project-tech">
          <span className="project-section-label">TECH STACK</span>

          <div className="project-tags">
            {(project.tags || []).map((tech) => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </div>

        <div className="project-actions">
          <Link
            className="project-details-btn"
            to={`/projects/${project.id}`}
          >
            View Details <FiArrowUpRight />
          </Link>
 
 
          <div className="project-icon-actions">
          {project.privacyType && (
            <span className="project-private-badge">
            <FiLock /> {project.privacyType}
            </span>
             )}    
             {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-btn"
                aria-label={`GitHub for ${project.title}`}
                title="GitHub"
              >
                <FiGithub />
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-icon-btn"
                aria-label={`Live demo for ${project.title}`}
                title="Live Demo"
              >
                <FiExternalLink />
              </a>
            )}

            <button
              type="button"
              onClick={handleShare}
              className="project-icon-btn"
              aria-label={`Share ${project.title}`}
              title="Share project"
            >
              <FiShare2 />
            </button>
          </div>
=======
import { projects } from "../data/projects";
import type { Project } from "../types";

function ProjectCard({ project }: { project: Project }) {
  const { caseStudy: c } = project;
  return (
    <article className="card">
      <div className={`thumb ${project.thumbClass}`} role="img" aria-label="Project preview" />
      <div className="cb">
        <h3>{project.title}</h3>
        <p>{project.summary}</p>
        <div className="tags">
          {project.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <details>
          <summary>Case study</summary>
          <div>
            <b>Problem:</b> {c.problem}<br />
            <b>Solution:</b> {c.solution}<br />
            <b>Result:</b> {c.result}
          </div>
        </details>
        <div className="links">
          {project.links.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
<<<<<<< HEAD
  const location = useLocation();

  const isAllProjectsPage =
    location.pathname.replace(/\/+$/, "") === "/projects";

  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [isMobile, setIsMobile] = useState(
    () => window.matchMedia("(max-width: 760px)").matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 760px)");

    const handleScreenChange = (event) => {
      setIsMobile(event.matches);
    };

    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleScreenChange);

    return () => {
      mediaQuery.removeEventListener("change", handleScreenChange);
    };
  }, []);

  const limit = isMobile ? 3 : 4;

 
  const filteredProjects = projects.filter((project) => {
    const type = (project.type || "").toLowerCase();
    const category = (project.category || "").toLowerCase();

    
const matchesCategory =
  activeCategory === "All" ||
  (activeCategory === "Website" &&
    (type.includes("website") ||
      type.includes("web application") ||
      type.includes("web app") ||
      type.includes("full-stack web") ||
      type.includes("web development"))) ||
  (activeCategory === "Mobile App" &&
    (type.includes("mobile app") ||
      type.includes("react native"))) ||
  (activeCategory === "AI Project" &&
    (type.includes("ai") ||
      type.includes("artificial intelligence") ||
      type.includes("computer vision") ||
      type.includes("machine learning") ||
      type.includes("face recognition") ||
      (!type.includes("browser extension") &&
        category.includes("ai project")))) ||
  (activeCategory === "Browser Extension" &&
    (type.includes("browser extension") ||
      type.includes("extension")));


    const searchableText = [
      project.title,
      project.summary,
      project.category,
      project.role,
      project.type,
      ...(project.tags || []),
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

    const matchesSearch = searchableText.includes(
      search.trim().toLowerCase()
    );

    return matchesCategory && matchesSearch;
  });


  const visibleProjects = isAllProjectsPage
    ? filteredProjects
    : filteredProjects.slice(0, limit);

  const hasMoreProjects =
    !isAllProjectsPage && filteredProjects.length > limit;

  return (
    <section
      id="projects"
      className={`projects-section ${
        isAllProjectsPage ? "all-projects-page" : ""
      }`}
    >
      <div className="wrap">
        <div className="projects-heading">
          <div className="projects-heading-content">
            {isAllProjectsPage && (
              <Link to="/#projects" className="projects-back-link">
                <FiArrowLeft />
                Back to Portfolio
              </Link>
            )}

            <span className="projects-eyebrow">
              {isAllProjectsPage ? "MY COMPLETE WORK" : "SELECTED WORK"}
            </span>

            <h2>
              {isAllProjectsPage
                ? "All Projects"
                : "Projects I've Built"}
            </h2>

            <p className="sub">
              {isAllProjectsPage
                ? "Explore all my websites, mobile apps, AI projects and browser extensions."
                : "Explore my websites, mobile apps, AI projects and browser extensions."}
            </p>
          </div>
        </div>

        <div className="project-discovery">
          <div className="project-search">
            <FiSearch aria-hidden="true" />

            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search projects or technologies..."
              aria-label="Search projects"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="project-clear-search"
              >
                <FiX />
              </button>
            )}
          </div>

          <div
            className="project-filters"
            aria-label="Filter projects by category"
          >
            {categories.map((category) => (
              <button
                type="button"
                key={category}
                className={
                  activeCategory === category
                    ? "project-filter active"
                    : "project-filter"
                }
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
              >
                {category === "Website"
                  ? "Websites"
                  : category === "Mobile App"
                  ? "Mobile Apps"
                  : category === "AI Project"
                  ? "AI Projects"
                  : category === "Browser Extension"
                  ? "Extensions"
                  : category}
              </button>
            ))}
          </div>

          <div className="project-discovery-footer">
            <p className="project-results-count" aria-live="polite">
              {isAllProjectsPage
                ? `Showing ${visibleProjects.length} of ${filteredProjects.length} projects`
                : `Showing ${visibleProjects.length} of ${filteredProjects.length} matching projects`}
            </p>

            <a
              className="projects-github-link"
              href="https://github.com/moizahmadawan"
              target="_blank"
              rel="noopener noreferrer"
            >
              More on GitHub <FiArrowUpRight />
            </a>
          </div>
        </div>

        {visibleProjects.length > 0 ? (
          <div className="projects-grid">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <div className="projects-empty">
            <FiSearch aria-hidden="true" />

            <h3>No projects found</h3>

            <p>
              Try another keyword or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setActiveCategory("All");
              }}
            >
              Clear filters
            </button>
          </div>
        )}

        {hasMoreProjects && (
          <div className="projects-view-more">
            <Link to="/projects" className="projects-view-more-btn">
              <FiFolder />
              View More Projects
              <FiArrowUpRight />
            </Link>

            <p>Explore all projects and their details</p>
          </div>
        )}

        {isAllProjectsPage && (
          <div className="projects-back-bottom">
            <Link to="/#projects" className="projects-back-bottom-btn">
              <FiArrowLeft />
              Back to Portfolio
            </Link>
          </div>
        )}
=======
  return (
    <section id="projects">
      <div className="wrap">
        <h2>Projects</h2>
        <p className="sub">Sample cards — replace the text, tags and links with your real projects.</p>
        <div className="grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8
      </div>
    </section>
  );
}
