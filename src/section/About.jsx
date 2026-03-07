import { BrainCircuit, Code2, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing maintainable, scalable and user freindly using accepted software design pattern",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Staying ahead with the latest technologies along with the best practices",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with other people to get the job done and done well",
  },
  {
    icon: BrainCircuit,
    title: "Critical Thinker",
    description:
      "Solves and come up with creative way to solve them with quick thinking",
  },
];

export const About = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="about">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in animation-delay-100">
              <span className="text-secondary-foreground txt-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:5xl font-bold leading-tight animate-fade-in animation-delay-300 text-secondary">
              Learning while building,
              <span className="font-serif italic font-normal text-secondary-foreground">
                improving from mistakes.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-500">
              <p>
                A student developer passionate about learning how software works
                and applying my knowledge to build applications that help solve
                a real problem in real life. Qurious about how things work under
                the hood, continuously learning to become a better person.
              </p>
              <p>
                Enjoys exploring and experimenting with different technologies
                to help improve my problem solving skills. And learn more about
                the ever growing world of technology. My gole is to keep up and
                improve my skill with the ever growing needs in the world.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-700">
              <p className="text-lg font-medium italic text-foreground">
                My mission is to create software that solve actual problems, a
                software that users will have a good time using, and to grow my
                skill and knowledge in order to be able to create better
                software than the previous one.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="grid sm:grid-cols-2 gap-6 pt-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 8) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/30 flex items-center justify-center mb-4 hover:bg-primary/50">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
