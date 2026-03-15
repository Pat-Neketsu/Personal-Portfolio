import {
  Coffee,
  Code2,
  MonitorSmartphone,
  Database,
  FileCode,
  Palette,
  Zap,
  Gamepad2,
} from "lucide-react";

const skill = [
  {
    name: "Java",
    level: 80,
    description: "The first programing language that have been thought to me",
    icon: Coffee,
  },
  {
    name: "C#",
    level: 80,
    description: "A contination of Java and a language like Java",
    icon: Code2,
  },
  {
    name: "Maui",
    level: 80,
    description: "A C# framework used to build cross-platform apps",
    icon: MonitorSmartphone,
  },
  {
    name: "SQLite",
    level: 75,
    description: "A light weight and local database used for systems",
    icon: Database,
  },
  {
    name: "HTML",
    level: 60,
    description: "A markup language used to build websites",
    icon: FileCode,
  },
  {
    name: "CSS",
    level: 55,
    description: "A styling langauge used to style websites",
    icon: Palette,
  },
  {
    name: "Javascript",
    level: 50,
    description: "A scripting language used to make a website dynamic",
    icon: Zap,
  },
  {
    name: "Godot",
    level: 30,
    description: "A Game engine used to build 2d and 3d cross plaform games",
    icon: Gamepad2,
  },
];
export const Skills = () => {
  return (
    <section className="py-32" id="skills">
      {/* Section Header */}
      <div className="container mx-auto px-6">
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-primary text-sm font-medium tracking-wide uppercase animate-fade-in animation-delay-100">
            Skill & Proficiency
          </span>
          <h2 className="text-4xl  md:text-5sl font-bold mt-4 mb-6 animate-fade-in animation-delay-300 text-secondary">
            Skills That I have Learned
            <span className="font-serif italic font-normal text-white">
              {" "}
              and my masteries in them.
            </span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {skill.map((skill, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl glow-border hover:-translate-y-4 transition-all duration-300 group animate-fade-in animation-delay-500"
              style={{ animationDelay: `${(idx + 8) * 100}ms` }}
            >
              <skill.icon className="text-primary mb-3 group-hover:text-secondary transition-colors duration-300" />
              <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                {skill.name}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 group-hover:text-foreground transition-colors duration-300">
                {skill.description}
              </p>
              {/* Progress Bar */}
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full bg-secondary transition-all duration-700 group-hover:bg-primary"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <div className="text-right text-sm mt-2 text-muted-foreground">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
