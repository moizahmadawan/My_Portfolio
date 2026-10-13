
import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ProjectDetails from "./pages/ProjectDetails";
import FloatingSocials from "./components/FloatingSocials";
import WhatsAppChat from "./components/WhatsAppChat";

import "./App.css";

function Home() {
  useEffect(() => {
    if (window.location.hash === "#projects") {
      requestAnimationFrame(() => {
        document.getElementById("projects")?.scrollIntoView({
          behavior: "smooth",
        });
      });
    }
  }, []);

  return (
    <>
      <Header />
      <FloatingSocials />
      <WhatsAppChat />

      <main id="top">
        <Hero />
        <About />
        <TechStack />
        <Projects />
        <Contact />
      </main>
    </>
  );
}

function AllProjects() {
  return (
    <>
      <Header />
      <FloatingSocials />
      <WhatsAppChat />

      <main id="top">
        <Projects />
      </main>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/projects"
          element={<AllProjects />}
        />

        <Route
          path="/projects/:id"
          element={
            <>
              <Header />
              <FloatingSocials />
              <WhatsAppChat />
              <ProjectDetails />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
