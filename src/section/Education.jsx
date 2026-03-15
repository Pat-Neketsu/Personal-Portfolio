const education = [
  {
    education: "Elementary Education",
    name: "Sual Central School",
    year: "Kindergarten - Grade 1",
    achivements:
      "Best in Class both in math and languages, got to regional Math contest",
    reflections: "The time i learned the foundation of this world",
    current: false,
  },
  {
    education: "Elementary Education",
    name: "Bolitoc Elementary School Main",
    year: "Grade 2 - Grade 6",
    achivements: "Always the top of the Class Focused on chracter growth",
    reflections: "The time where education comes second due to freinds",
    current: false,
  },
  {
    education: "Secondary Education",
    name: "Ilocos Norte College of Arts and Trade",
    year: "Grade 7 - Grade 9",
    achivements: "Multitask Multiple TVL subjects",
    reflections: "The darkest point in my life but still I managed",
    current: false,
  },
  {
    education: "Secondary to Senior High Education",
    name: "Sual National Highschool",
    year: "Grade 10 - Grade 12 as SMAW Graduate",
    achivements: "Best in SMAW, With high honors",
    reflections: "The best time in my learning journey as a student",
    current: false,
  },
  {
    education: "Teriary Education",
    name: "STI Alaminos",
    year: "1st to 2nd year",
    achivements: "Consistent high grades",
    reflections:
      "College is when the word CRAMMING introduce itself to me but Im still standing",
    current: true,
  },
];
export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Secton Header */}
        <div className="max-w-3wl mb-16 text-center">
          <span className="text-primary text-sm font-medium tracking-wider uppercase animate-fade-in animation-delay-100">
            Education Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-300 text-secondary">
            Journey that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              define me.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-500">
            A timeline of my educational journey, from start to where I am now
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-secondary/70 via-secondary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Education Items */}
          <div className="space-y-12">
            {education.map((education, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in animation-delay-100"
                style={{ animationDelay: `${(idx + 8) * 100}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-secondary rounded-full -translate-x-1/2 ring-2 ring-primary z-10">
                  {education.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping"/>}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${idx % 2 === 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}
                >
                  <div
                    className={`glass pd-6 rounded-2xl border border-primary/50 hover:border-secondary transition-all duration-500 p-5`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {education.education}
                    </span>
                    <h3 className="text-secondary text-3xl">
                      {education.name}
                    </h3>
                    <p className="text-xl font-semibold mt-1">
                      {education.year}
                    </p>
                    <p className="text-muted-foreground text-lg mt-1">
                      {education.achivements}
                    </p>
                    <p className="text-muted-foreground text-sm mt-1">
                      {education.reflections}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
