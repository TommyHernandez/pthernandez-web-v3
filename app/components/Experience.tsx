import {
  LuRocket as Rocket,
  LuTrendingUp as TrendingUp,
  LuUsers as Users,
  LuCode as Code,
  LuArrowRight as ArrowRight,
} from "react-icons/lu";

const ROLE_ACCENTS = [
  { bg: "#D1E8E0", text: "#2D5C4F", dot: "#5B8A7A" },
  { bg: "#F5EBC2", text: "#6B5810", dot: "#C9A736" },
  { bg: "#F2DEDA", text: "#7A3D35", dot: "#C2857A" },
  { bg: "#D4E3EF", text: "#2B4F6A", dot: "#5B8AAA" },
];

export function Experience() {
  const journey = [
    {
      company: "IriusRisk",
      role: "Frontend Lead",
      period: "2023 – Present",
      theme: "Leadership & Technical Decision-Making",
      icon: Rocket,
      story:
        "Leading frontend architecture and making crucial technical decisions that shape product development.",
      highlights: [
        {
          title: "Migrated Webpack → Vite",
          description:
            "Championed and executed the migration to Vite, transforming our development workflow and significantly reducing feedback loops.",
          impact: "70% faster builds",
        },
        {
          title: "Custom Design System",
          description:
            "Built a comprehensive design system from scratch to eliminate duplicate code and accelerate feature development across the product.",
          impact: "40% faster features",
        },
        {
          title: "Architectural Standards",
          description:
            "Introduced modern state management patterns and coding standards that improved quality and team collaboration.",
          impact: "Team productivity ↑",
        },
      ],
      stack: ["React", "TypeScript", "Vite", "Design Systems"],
      keyLearning:
        "Leadership is about making strategic technical decisions that enable the entire team to succeed.",
    },
    {
      company: "Unit4",
      role: "Senior Frontend Developer",
      period: "2021 – 2023",
      theme: "Scalability & Enterprise Architecture",
      icon: TrendingUp,
      story:
        "Mastered the art of building scalable applications for complex corporate environments.",
      highlights: [
        {
          title: "Enterprise Portals",
          description:
            "Architected and developed enterprise-grade portals using Angular, handling thousands of concurrent users across multiple business units.",
          impact: "5 000+ daily users",
        },
        {
          title: "Performance Optimization",
          description:
            "Implemented lazy loading, code splitting, and smart caching strategies to ensure smooth performance with massive datasets.",
          impact: "3× faster load times",
        },
        {
          title: "Modular Architecture",
          description:
            "Designed a modular architecture that let different teams work independently while maintaining system cohesion.",
          impact: "60% fewer merge conflicts",
        },
      ],
      stack: ["Angular", "TypeScript", "RxJS", "NgRx"],
      keyLearning:
        "Scale isn't just about users — it's about creating systems that multiple teams can evolve without stepping on each other.",
    },
    {
      company: "BestSecret & Accenture",
      role: "Fullstack Developer & Mentor",
      period: "2018 – 2021",
      theme: "Versatility & Knowledge Sharing",
      icon: Users,
      story:
        "Proved my adaptability across different tech stacks while giving back through mentorship.",
      highlights: [
        {
          title: "Multi-Stack Mastery",
          description:
            "Seamlessly transitioned between Vue.js at BestSecret for e-commerce features, React for internal tools, and Flutter for mobile experiments.",
          impact: "3 stacks in production",
        },
        {
          title: "Mentoring",
          description:
            "Mentored junior developers and bootcamp students at Accenture, helping them transition into professional roles.",
          impact: "12+ devs mentored",
        },
        {
          title: "E-commerce Excellence",
          description:
            "Built critical e-commerce features handling thousands of transactions, from product catalogs to checkout flows.",
          impact: "Millions in transactions",
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
      theme: "Fullstack Roots & Foundation",
      icon: Code,
      story:
        "Where it all began — building complete web solutions from database to interface.",
      highlights: [
        {
          title: "PHP & MySQL Foundation",
          description:
            "Started fullstack with PHP and MySQL, learning how servers, databases, and frontends work together. That full-picture understanding still shapes my frontend decisions today.",
          impact: "Complete fullstack vision",
        },
        {
          title: "End-to-End Ownership",
          description:
            "Owned entire features from database design through API development to user interface.",
          impact: "20+ complete features shipped",
        },
        {
          title: "Transition to Modern Frontend",
          description:
            "Witnessed and participated in the shift from jQuery to modern frameworks, understanding both paradigms deeply.",
          impact: "Mastered the transition",
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
        className="absolute top-[-40px] left-[-40px] w-72 h-72 opacity-[0.04]"
        style={{
          background: "#5B8A7A",
          borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
        }}
      />

      <div className="max-w-5xl mx-auto relative">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-5">
          Career Journey
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-[#1C1917] leading-tight">
            A decade of growth.
          </h2>
          <p className="text-[#78716C] font-light max-w-xs md:text-right">
            From fullstack foundations to frontend leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-[11px] top-0 bottom-0 w-px bg-[rgba(28,25,23,0.08)] hidden md:block" />

          <div className="space-y-10">
            {journey.map((exp, index) => {
              const Icon = exp.icon;
              const accent = ROLE_ACCENTS[index];
              return (
                <div key={index} className="relative flex gap-8">
                  {/* Timeline dot */}
                  <div className="hidden md:flex flex-col items-center">
                    <div
                      className="w-[22px] h-[22px] rounded-full border-2 border-white shadow-sm flex-shrink-0 mt-5"
                      style={{ background: accent.dot }}
                    />
                  </div>

                  {/* Card */}
                  <div className="flex-1 bg-[#FDFBF7] rounded-2xl border border-[rgba(28,25,23,0.07)] hover:shadow-md transition-shadow duration-300 overflow-hidden">
                    <div className="h-1" style={{ background: accent.dot }} />
                    <div className="p-8">
                      {/* Header */}
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                        <div className="flex items-start gap-4">
                          <div
                            className="p-3 rounded-xl flex-shrink-0"
                            style={{ background: accent.bg }}
                          >
                            <Icon
                              className="w-5 h-5"
                              style={{ color: accent.text }}
                            />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-[#1C1917]">
                              {exp.company}
                            </h3>
                            <p className="text-[#5B8A7A] font-semibold text-sm">
                              {exp.role}
                            </p>
                            <p className="text-xs text-[#78716C] font-light mt-0.5">
                              {exp.period}
                            </p>
                          </div>
                        </div>
                        <span
                          className="self-start text-xs font-semibold px-3 py-1.5 rounded-full"
                          style={{ background: accent.bg, color: accent.text }}
                        >
                          {exp.theme}
                        </span>
                      </div>

                      <p className="text-[#44403C] italic text-sm font-light leading-relaxed mb-6">
                        "{exp.story}"
                      </p>

                      {/* Highlights */}
                      <div className="grid md:grid-cols-3 gap-4 mb-6">
                        {exp.highlights.map((h, hIdx) => (
                          <div
                            key={hIdx}
                            className="bg-white rounded-xl p-4 border border-[rgba(28,25,23,0.07)]"
                          >
                            <h4 className="text-xs font-bold text-[#1C1917] mb-2">
                              {h.title}
                            </h4>
                            <p className="text-xs text-[#78716C] font-light leading-relaxed mb-3">
                              {h.description}
                            </p>
                            <span
                              className="inline-block px-2.5 py-1 text-xs font-semibold rounded-full"
                              style={{
                                background: accent.bg,
                                color: accent.text,
                              }}
                            >
                              {h.impact}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Stack chips */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {exp.stack.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-[#EDE9E0] text-[#44403C] rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Key Learning */}
                      <div
                        className="border-l-2 pl-4 py-1"
                        style={{ borderColor: accent.dot }}
                      >
                        <p className="text-xs text-[#44403C] font-light leading-relaxed">
                          <span className="font-semibold text-[#1C1917]">
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

        {/* Bottom summary */}
        <div className="mt-16 bg-[#F7F4EE] rounded-2xl p-10 border border-[rgba(28,25,23,0.07)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-[#1C1917] mb-3">
                The Journey Continues
              </h3>
              <p className="text-[#44403C] font-light leading-relaxed mb-6 max-w-lg">
                From building my first PHP application to leading frontend
                teams, every experience has shaped how I approach problems
                today. I bring fullstack understanding to frontend work — and
                that makes all the difference.
              </p>
              <div className="flex gap-10">
                {[
                  { v: "10+", l: "Years" },
                  { v: "50+", l: "Projects" },
                  { v: "12+", l: "Mentored" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-3xl font-bold text-[#1C1917]">
                      {s.v}
                    </div>
                    <div className="text-xs text-[#78716C] font-medium">
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <a href="#contact">
              <button className="flex-shrink-0 inline-flex items-center gap-2 px-7 py-3.5 bg-[#1C1917] text-[#F7F4EE] rounded-xl text-sm font-semibold hover:bg-[#2D2923] transition-colors group">
                Let's Work Together
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
