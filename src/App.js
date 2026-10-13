<<<<<<< HEAD

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
=======
import Header from "./components/Header";
import Hero from "./components/Hero";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <TechStack />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
>>>>>>> a8c4e0d019c8d133d6dcd5937eb37625b816c5a8
  );
}
