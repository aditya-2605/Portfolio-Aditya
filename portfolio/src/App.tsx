import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import GitHubActivity from "@/components/GitHubActivity";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const getInitialTheme = (): "dark" | "light" => {
  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};

export default function App() {
  const [theme, setTheme] = useState<"dark" | "light">(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    window.localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <Navbar
        theme={theme}
        onToggleTheme={() => setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"))}
      />
      <main id="main-content">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <GitHubActivity />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
