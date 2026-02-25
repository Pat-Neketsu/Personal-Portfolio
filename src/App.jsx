import { Navbar } from "@/layout/Navbar"
import { Hero } from "@/section/Hero";
import { About } from "@/section/About";
import { Projects } from "@/section/Projects";
import { Experience } from "@/section/Experience";
import { Testimonial } from "@/section/Testimonial";
import { Contact } from "@/section/Contact";


function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Testimonial />
        <Contact />
      </main>
    </div>
  );
}

export default App