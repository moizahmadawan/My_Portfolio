import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import Header from "../components/Header";


import {
  FiArrowLeft,
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiLayers,
  FiTarget,
  FiCheckCircle,
  FiImage,
} from "react-icons/fi";

import pet360Poster from "../assets/pet360-poster.jpeg";
import "./ProjectDetails.css";

export default function ProjectDetails() {
  const [showAllWeb, setShowAllWeb] = useState(false);
  const [showAllApp, setShowAllApp] = useState(false);
  const { id } = useParams();
  const project = projects.find((item) => item.id === id);
  const websiteScreens = Array.isArray(project.screenshots)
  ? []
  : project.screenshots?.website || [];

  const appScreens = Array.isArray(project.screenshots)
  ? project.screenshots
  : project.screenshots?.mobileApp || [];

  if (!project) {
    return (
      <>
        <Header />

        <main className="project-not-found">
          <h1>Project Not Found</h1>
          <p>This project doesn't exist or may have been removed.</p>

          <Link to="/#projects" className="detail-back-btn">
            <FiArrowLeft /> Back to Projects
          </Link>
        </main>
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="project-details-page">
        <div className="project-details-container">
          <Link to="/#projects" className="detail-back-link">
            <FiArrowLeft /> Back to Projects
          </Link>

          {/* Project Hero */}
          <header className="detail-hero">
            <div className="detail-eyebrow">
              {project.type || "Featured Project"}
            </div>

            <h1>{project.title}</h1>

            <p className="detail-summary">{project.summary}</p>
            
            <div className="detail-meta">
              {project.category && <span>{project.category}</span>}
              {project.role && <span>{project.role}</span>}
            </div>

            {/* Main Project Thumbnail */}
            <div
              className={`detail-preview ${project.thumbClass || ""}`}
            >
              {project.thumb ? (
                <img
                  src={project.thumb}
                  alt={`${project.title} project preview`}
                  className="detail-preview-image"
                />
              ) : (
                <div className="detail-preview-placeholder">
                  <FiImage />
                  <span>{project.title}</span>
                </div>
              )}
            </div>

            {/* Project Links */}
            <div className="detail-actions">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-primary-btn"
                >
                  <FiGithub />
                  View on GitHub
                  <FiArrowUpRight />
                </a>
              )}

              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-secondary-btn"
                >
                  <FiExternalLink />
                  Live Demo
                </a>
              )}
            </div>
          </header>

          {/* Project Overview */}
          <section className="detail-section">
            <div className="detail-section-heading">
              <FiLayers />
              <h2>Project Overview</h2>
            </div>

            <p>{project.summary}</p>

            <div className="detail-info-grid">
              <div className="detail-info-card">
                <span>PROJECT TYPE</span>
                <h3>{project.type || "Project"}</h3>
              </div>

              <div className="detail-info-card">
                <span>MY ROLE</span>
                <h3>{project.role || "Developer"}</h3>
              </div>

              <div className="detail-info-card">
                <span>PROJECT CATEGORY</span>
                <h3>{project.category || "General"}</h3>
              </div>
            </div>
          </section>

          {/* Problem and Solution */}
          <section className="detail-section">
            <div className="detail-section-heading">
              <FiTarget />
              <h2>Problem &amp; Solution</h2>
            </div>

            <div className="detail-story-grid">
              <article className="detail-story-card">
                <span className="detail-story-label">
                  THE PROBLEM
                </span>

                <h3>What needed to be solved?</h3>

                <p>
                  {project.caseStudy?.problem ||
                    "This project focuses on solving a practical user problem."}
                </p>
              </article>

              <article className="detail-story-card">
                <span className="detail-story-label">
                  THE SOLUTION
                </span>

                <h3>My approach</h3>

                <p>
                  {project.caseStudy?.solution ||
                    "The solution focuses on usability, maintainability, and a clear user experience."}
                </p>
              </article>
            </div>
          </section>

          {/* Technologies */}
          <section className="detail-section">
            <div className="detail-section-heading">
              <FiLayers />
              <h2>Technologies Used</h2>
            </div>

            <p className="detail-muted">
              Tools and technologies used in this project.
            </p>

            <div className="detail-tech-list">
              {(project.tags || []).map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </section>

          {/* Results */}
          <section className="detail-section">
            <div className="detail-section-heading">
              <FiCheckCircle />
              <h2>Results &amp; Progress</h2>
            </div>

            <div className="detail-result-card">
              <p>
                {project.caseStudy?.result ||
                  "Project outcomes and implementation details will be added as development progresses."}
              </p>
            </div>
          </section>


{/* Automatic Project Screenshot Gallery */}
{(websiteScreens.length > 0 || appScreens.length > 0) && (
  <section className="detail-section detail-gallery-section">

    {/* Website Gallery */}
    {websiteScreens.length > 0 && (
      <div className="detail-gallery-group">
        <div className="detail-section-heading">
          <FiImage />
          <h2>Website Screens</h2>
        </div>

        <p className="detail-muted">
          Explore website pages, features, and interface designs.
        </p>

        <div className="detail-screenshots-grid detail-web-grid">
          {(showAllWeb ? websiteScreens : websiteScreens.slice(0, 4))
            .map((screen, index) => (
              <figure className="detail-screenshot-card" key={screen.title + index}>
                <a
                  href={screen.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-screenshot-link"
                  aria-label={`Open ${screen.title} screenshot`}
                >
                  <img
                    src={screen.image}
                    alt={screen.title}
                    loading="lazy"
                  />
                </a>
                <figcaption>{screen.title}</figcaption>
              </figure>
            ))}
        </div>

        {websiteScreens.length > 4 && (
          <button
            type="button"
            className="detail-view-more"
            onClick={() => setShowAllWeb((prev) => !prev)}
          >
            {showAllWeb
              ? "Show Less"
              : `View More Images (${websiteScreens.length - 4} more)`}
          </button>
        )}
      </div>
    )}

    {/* Mobile App Gallery */}
    {appScreens.length > 0 && (
      <div className="detail-gallery-group">
        <div className="detail-section-heading">
          <FiImage />
          <h2>Mobile App Screens</h2>
        </div>

        <p className="detail-muted">
          Explore mobile app screens and user interface designs.
        </p>

        <div className="detail-screenshots-grid detail-app-grid">
          {(showAllApp ? appScreens : appScreens.slice(0, 3))
            .map((screen, index) => (
              <figure className="detail-screenshot-card" key={screen.title + index}>
                <a
                  href={screen.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="detail-screenshot-link"
                  aria-label={`Open ${screen.title} screenshot`}
                >
                  <img
                    src={screen.image}
                    alt={screen.title}
                    loading="lazy"
                  />
                </a>
                <figcaption>{screen.title}</figcaption>
              </figure>
            ))}
        </div>

        {appScreens.length > 3 && (
          <button
            type="button"
            className="detail-view-more"
            onClick={() => setShowAllApp((prev) => !prev)}
          >
            {showAllApp
              ? "Show Less"
              : `View More Images (${appScreens.length - 3} more)`}
          </button>
        )}
      </div>
    )}

  </section>
)}

{/* Pet360 FYP Poster — keep this separate from the gallery */}
{project.id === "pet360" && (
  <section className="detail-section">
    <div className="pet360-poster">
      <div className="detail-section-heading">
        <FiImage />
        <h2>Final Year Project Poster</h2>
      </div>

      <p className="detail-muted">
        Pet360 — Smart Pet Care Management System
      </p>

      <a
        href={pet360Poster}
        target="_blank"
        rel="noopener noreferrer"
        className="pet360-poster-link"
        aria-label="Open Pet360 project poster in full size"
      >
        <img
          src={pet360Poster}
          alt="Pet360 Bachelor's Final Year Project poster"
          loading="lazy"
        />
      </a>

      <p className="pet360-poster-caption">
        Bachelor's Final Year Project (FYP)
      </p>
    </div>
  </section>
)}

{/* Footer */}
<footer className="detail-footer">
  {project.github ? (
    <>
      <h2>Interested in this project?</h2>

      <p>
        Explore the source code or return to the portfolio to
        discover more projects.
      </p>

      <div className="detail-actions">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="detail-primary-btn"
        >
          <FiGithub />
          Source Code
        </a>

        <Link
          to="/#projects"
          className="detail-secondary-btn"
        >
          <FiArrowLeft />
          All Projects
        </Link>
      </div>
    </>
  ) : (
    <>
      <h2>Interested in Creating a Similar Project?</h2>

      <p>
        Have an idea for a website or application? Let's work
        together to turn your vision into reality.
      </p>

      <div className="detail-actions">
        <Link
          to="/#contact"
          className="detail-primary-btn"
        >
          Let's Work Together
        </Link>

        <Link
          to="/#projects"
          className="detail-secondary-btn"
        >
          <FiArrowLeft />
          All Projects
        </Link>
      </div>
    </>
  )}
</footer>

        </div>
      </main>
    </>
  );
}
