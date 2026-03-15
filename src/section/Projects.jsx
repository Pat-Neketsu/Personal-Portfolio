import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "../Components/AnimatedBorderButton";

const projects = [
  {
    title: "ARS Hub",
    description:
      "A mobile application design to help manage and simplify the operation of stores",
    image: "/hero-bg-a.jpg",
    tags: ["C#", "Maui", "Mobile", "SQLite"],
    github: "https://github.com/Pat-Neketsu/ARS-Hub",
  },
  {
    title: "All or Nothing",
    description:
      "A offline mobile casino inspired game that doesnt cost you your house and life",
    image: "/hero-bg-a.jpg",
    tags: ["GDScript", "Godot", "SQLite"],
    github: "https://github.com/Pat-Neketsu/All-or-Nothing",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* BG Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wide uppercase animation-fade-in animation-delay-100">
            Projects
          </span>
          <h2 className="text-4xl  md:text-5sl font-bold mt-4 mb-6 animate-fade-in animation-delay-300 text-secondary">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              I have created.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-500">
            A section about the projects I have worked on and am working towards
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in animation-delay-700 md: row-span-1"
              style={{ animationDelay: `${(idx + 8) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className="absolute inset-0 bg-linear-to-t from-card via-card/60
                to-transparent opacity-60"
                />
                {/* Overlay links */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <Github />
                  </a>
                </div>
              </div>
              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm ">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border text-muted-foreground hover:border-primary/60 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* View all CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-900">
          <AnimatedBorderButton>
            View All Projects
            <ArrowUpRight />
          </AnimatedBorderButton>
        </div>
      </div>
    </section>
  );
};
