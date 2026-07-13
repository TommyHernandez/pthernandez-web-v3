import {
  LuRocket as Rocket,
  LuTrendingUp as TrendingUp,
  LuUsers as Users,
  LuCode as Code,
} from "react-icons/lu";

const ROLE_ACCENTS = [
  {
    bg: "var(--color-teal-soft)",
    text: "var(--color-teal-strong)",
    dot: "var(--color-teal)",
  },
  {
    bg: "var(--color-amber-soft)",
    text: "var(--color-amber-strong)",
    dot: "var(--color-amber)",
  },
  {
    bg: "var(--color-terracotta-soft)",
    text: "var(--color-terracotta-strong)",
    dot: "var(--color-terracotta)",
  },
  {
    bg: "var(--color-blue-soft)",
    text: "var(--color-blue-strong)",
    dot: "var(--color-blue)",
  },
];

export function Experience() {
  const journey = [
    {
      company: "IriusRisk",
      role: "Frontend Lead",
      period: "2021 – Present",
      icon: Rocket,
      story:
        "I led the migration to React, helped build the front-end team from scratch, and led and mentored it for four years; the team eventually grew to 13 people, including front-end and full-stack developers. I was also able to contribute to the development of some of the product’s most important features, which had a significant impact on customers. One of these was related to AI.",
      highlights: [
        {
          title: "Migrated Webpack → Vite",
          description:
            "Championed and executed the migration to Vite, transforming our development workflow and significantly reducing feedback loops.",
        },
        {
          title: "Custom Design System",
          description:
            "Built a comprehensive design system from scratch to eliminate duplicate code and accelerate feature development across the product.",
        },
        {
          title: "Architectural Standards",
          description:
            "Introduced modern state management patterns and coding standards that improved quality and team collaboration.",
        },
      ],
      stack: ["React", "TypeScript", "Vite", "Design Systems"],
      keyLearning:
        "Leadership is about making strategic technical decisions that enable the entire team to succeed.",
    },
    {
      company: "Unit4",
      role: "Senior Frontend Developer",
      period: "2020 – 2021",
      icon: TrendingUp,
      story:
        "Mastered the art of building scalable applications for complex corporate environments.",
      highlights: [
        {
          title: "Enterprise Portals",
          description:
            "Architected and developed enterprise-grade portals using Angular, handling thousands of concurrent users across multiple business units.",
        },
        {
          title: "Performance Optimization",
          description:
            "Implemented lazy loading, code splitting, and smart caching strategies to ensure smooth performance with massive datasets.",
        },
        {
          title: "Modular Architecture",
          description:
            "Designed a modular architecture that let different teams work independently while maintaining system cohesion.",
        },
      ],
      stack: ["Angular", "TypeScript", "RxJS", "NgRx"],
      keyLearning:
        "Scale isn't just about users — it's about creating systems that multiple teams can evolve without stepping on each other.",
    },
    {
      company: "BestSecret & Accenture",
      role: "Fullstack Developer & Mentor",
      period: "2018 – 2019",
      icon: Users,
      story:
        "Proved my adaptability across different tech stacks while giving back through mentorship.",
      highlights: [
        {
          title: "Multi-Stack Mastery",
          description:
            "Seamlessly transitioned between Vue.js at BestSecret for e-commerce features, React for internal tools, and Flutter for mobile experiments.",
        },
        {
          title: "Mentoring",
          description:
            "Mentored junior developers and bootcamp students at Accenture, helping them transition into professional roles.",
        },
        {
          title: "E-commerce Excellence",
          description:
            "Built critical e-commerce features handling thousands of transactions, from product catalogs to checkout flows.",
        },
      ],
      stack: ["Vue.js", "React", "Flutter", "PHP"],
      keyLearning:
        "The best developers aren't loyal to a single framework — they choose the right tool and help others grow.",
    },
    {
      company: "Arminet",
      role: "Fullstack Developer",
      period: "2015 – 2018",
      icon: Code,
      story:
        "Where it all began — building complete web solutions from database to interface.",
      highlights: [
        {
          title: "PHP & MySQL",
          description:
            "Started fullstack with PHP and MySQL, learning how servers, databases, and frontends work together. That full-picture understanding still shapes my frontend decisions today.",
        },
        {
          title: "End-to-End Ownership",
          description:
            "Owned entire features from database design through API development to user interface.",
        },
        {
          title: "Transition to Modern Frontend",
          description:
            "Witnessed and participated in the shift from jQuery to modern frameworks, understanding both paradigms deeply.",
        },
      ],
      stack: ["PHP", "MySQL", "JavaScript", "jQuery"],
      keyLearning:
        "Understanding the backend makes you a better frontend developer. Knowing the server helps you build better interfaces.",
    },
  ];

  return (
    <section
      id="experience"
      className="py-28 px-6 bg-white relative overflow-hidden"
    >
      <div
        className="absolute -top-10 -left-10 w-72 h-72 opacity-[0.04]"
        style={{
          background: "var(--color-teal)",
          borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <p className="text-xs font-semibold tracking-widest uppercase text-subtle mb-5">
          Career Journey
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-ink leading-tight">
            A decade of growth.
          </h2>
          <p className="text-subtle font-light max-w-xs md:text-right">
            From fullstack foundations to frontend leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-2.75 top-0 bottom-0 w-px bg-ink/8 hidden md:block" />

          <div className="space-y-10">
            {journey.map((exp, index) => {
              const Icon = exp.icon;
              const accent = ROLE_ACCENTS[index];
              return (
                <div key={index} className="relative flex gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div
                      className="w-5.5 h-5.5 rounded-full border-2 border-white shadow-sm shrink-0 mt-5"
                      style={{ background: accent.dot }}
                    />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-surface rounded-2xl border border-ink/7 hover:shadow-md transition-shadow duration-300 overflow-hidden">
                    <div className="h-1" style={{ background: accent.dot }} />
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                        <div className="flex items-start gap-4">
                          <div
                            className="p-3 rounded-xl shrink-0"
                            style={{ background: accent.bg }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: accent.text }}
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-ink">
                              {exp.company}
                            </h3>
                            <p className="text-teal font-semibold text-sm">
                              {exp.role}
                            </p>
                            <p className="text-xs text-subtle font-light mt-0.5">
                              {exp.period}
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="text-muted italic text-sm font-light leading-relaxed mb-6">
                        &ldquo;{exp.story}&rdquo;
                      </p>

                      {/* Highlights */}
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        {exp.highlights.map((h, hIdx) => (
                          <div
                            key={hIdx}
                            className="bg-white rounded-xl p-4 border border-ink/7"
                          >
                            <h4 className="text-xs font-bold text-ink mb-2">
                              {h.title}
                            </h4>
                            <p className="text-xs text-subtle font-light leading-relaxed">
                              {h.description}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Stack chips */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-surface-muted text-muted rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div
                        className="border-l-2 pl-4 py-1"
                        style={{ borderColor: accent.dot }}
                      >
                        <p className="text-xs text-muted font-light leading-relaxed">
                          <span className="font-semibold text-ink">
                            Key Learning:{" "}
                          </span>
                          {exp.keyLearning}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
