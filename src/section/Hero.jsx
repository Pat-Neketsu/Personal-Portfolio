import { Button } from "@/components/Button";
import { ArrowRight, ChevronDown, Github, Linkedin } from "lucide-react";
/* eslint-disable no-unused-vars */

const skills = [
  "C#",
  "Java",
  "HTML",
  "CSS",
  "JavaScript",
  "SQLite",
  "React",
  "Tailwind CSS",
  "Maui",
  "MSSQL",
  "Godot",
  "GDScript",
];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg-a.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/30 via-background/60 to-background/80" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#0AE3F2",
              // eslint-disable-next-line react-hooks/purity
              left: `${Math.random() * 100}%`,
              // eslint-disable-next-line react-hooks/purity
              top: `${Math.random() * 100}%`,
              // eslint-disable-next-line react-hooks/purity
              animation: `slow-drift ${15 + Math.random() * 10}s ease-in-out infinite`,
              // eslint-disable-next-line react-hooks/purity
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in animation-delay-100">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Software Developer - Mobile Development Specialist
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4 ">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fade-in animation-delay-300">
                Creating <span className="text-primary glow-text">DIGITAL</span>
                <br />
                moments with
                <br />
                <span className="font-serif italic font-normal text-whtite">
                  functionality
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-500">
                Hi, Im Justine Artates - a software developer with experience in
                building mobile application using C# and Java. Currently
                learning web development using languages like HTML, CSS and
                Javascript.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-700">
              <Button size="lg">
                Contact Me <ArrowRight />
              </Button>
              {/* Social Links */}
              <div className="flex items-center gap-4">
                <span className="text-2xl text-muted-foreground">
                  Follow me:{" "}
                </span>
                {[
                  { icon: Github, href: "https://github.com/Pat-Neketsu" },
                  {
                    icon: Linkedin,
                    href: "https://www.linkedin.com/in/justine-artates-8280b7383/",
                  },
                ].map((social, idx) => (
                  <a
                    href={social.href}
                    key={idx}
                    target="blank"
                    className="p-2 rounded-full glass hover:bg-primary/20 hover:text-primary transition-all duration-200"
                  >
                    {<social.icon />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Profile image */}
          <div className="ralative animate-fade-in animation-delay-1100">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 rounded-3xl bg-linear-to-br from-primary/40 via-transparent
               to-primary/20 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border animate-fade-in animation-delay-1500">
                <img
                  src="/profile.jpg"
                  alt="Justine Artates"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* FLoating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="text-2xl font-bold text-primary">IT</div>
                  <div className="text-xs text-muted-foreground">Student</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-900">
          <p className="tex-sm text-muted-foreground mb-6 text-center">
            Technologies that I worked with
          </p>
          <div className="relative overflow-hidden">
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/30 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-900">
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary-foreground"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};
