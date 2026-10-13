<<<<<<< HEAD

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

import logoLight from "../assets/logoLight.png";
import logoDark from "../assets/logoDark.png";

import {
  FiSun,
  FiMoon,
  FiMenu,
  FiX,
} from "react-icons/fi";

import "./Header.css";

const links = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Tech stack" },
  { href: "#projects", label: "Projects" },
=======
import { useTheme } from "../hooks/useTheme";

const links = [
  { href: "#stack", label: "Tech stack" },
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8
  { href: "#contact", label: "Contact" },
];

export default function Header() {
<<<<<<< HEAD
  const { theme, toggle } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const logo = theme === "dark" ? logoDark : logoLight;

  const isAllProjectsPage = location.pathname === "/projects";

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    // Keep Projects active on the complete projects page.
    if (isAllProjectsPage) {
      setActiveSection("#projects");
      return;
    }

    const sectionIds = ["about", "stack", "projects", "contact"];

    const updateActiveSection = () => {
      const header = document.querySelector(".site-header");
      const headerHeight = header?.offsetHeight ?? 56;
      const activationLine = headerHeight + 100;

      let currentSection = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);

        if (!section) continue;

        if (section.getBoundingClientRect().top <= activationLine) {
          currentSection = `#${id}`;
        }
      }

      const aboutSection = document.getElementById("about");

      if (
        aboutSection &&
        aboutSection.getBoundingClientRect().top > activationLine
      ) {
        currentSection = "";
      }

      const atPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5;

      if (atPageBottom) {
        currentSection = "#contact";
      }

      setActiveSection((previous) =>
        previous === currentSection ? previous : currentSection
      );
    };

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, [isAllProjectsPage, location.pathname]);

  useEffect(() => {
    closeMenu();
  }, [location.pathname]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-is-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-is-open");
    };
  }, [menuOpen]);

  const handleNavigation = (href) => {
    closeMenu();

    if (location.pathname !== "/") {
      navigate(`/${href}`);
      return;
    }

    setActiveSection(href);

    // Allow normal hash navigation on the home page.
    window.location.hash = href;
  };

  return (
    <header className="site-header" id="site-header">
      <div className="wrap">
        <a
          className="logo"
          href="/#about"
          aria-label="Go to About section"
          onClick={(event) => {
            event.preventDefault();
            handleNavigation("#about");
          }}
        >
          <img src={logo} alt="Moiz Ahmad Awan" />
        </a>

        <nav
          id="header-navigation"
          className={`header-nav ${menuOpen ? "menu-open" : ""}`}
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              className={
                activeSection === link.href ? "active-link" : ""
              }
              aria-current={
                activeSection === link.href ? "location" : undefined
              }
              onClick={(event) => {
                event.preventDefault();
                handleNavigation(link.href);
              }}
            >
              {link.label}
            </a>
          ))}

          <button
            className="theme-toggle"
            type="button"
            aria-label={
              theme === "dark"
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            title={theme === "dark" ? "Light mode" : "Dark mode"}
            onClick={() => {
              toggle();
              closeMenu();
            }}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
            <span className="mobile-theme-label">
              {theme === "dark" ? "Light theme" : "Dark theme"}
            </span>
          </button>

          <a
            className="get-in-touch"
            href="/#contact"
            onClick={(event) => {
              event.preventDefault();
              handleNavigation("#contact");
            }}
          >
            Start a Project
          </a>
        </nav>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
          aria-controls="header-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
=======
  const { toggle } = useTheme();

  return (
    <header>
      <div className="wrap">
        <a className="logo" href="#top">Moiz Ahmad Awan</a>
        <nav aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
          <button id="theme" type="button" aria-label="Toggle light or dark theme" onClick={toggle}>
            Theme
          </button>
        </nav>
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8
      </div>
    </header>
  );
}
