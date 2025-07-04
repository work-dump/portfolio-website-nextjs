import About from "@/components/About";
import Experience from "@/components/Experience";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "../components/Contact";
// import Blog from "@/components/Blog";
import Certifications from "@/components/Certifications";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <div className="mb-24 sm:mb-40" />
      <About />
      <Projects />
      {/* <Blog /> */}
      <Skills />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}
