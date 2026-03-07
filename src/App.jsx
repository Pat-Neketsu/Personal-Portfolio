import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/section/Hero";
import { About } from "@/section/About";
import { Projects } from "@/section/Projects";
import { Education } from "@/section/Education";
import { Skills } from "@/section/Skills";
import { Contact } from "@/section/Contact";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </div>
  );
}

export default App