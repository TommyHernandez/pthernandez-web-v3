/* Hallmark · macrostructure: Editorial timeline ledger · tone: editorial · anchor hue: teal
 * Open typographic entries hung off a spine — no cards, single accent, weighted lead role.
 */
import {
  LuRocket as Rocket,
  LuTrendingUp as TrendingUp,
  LuUsers as Users,
  LuCode as Code,
} from "react-icons/lu";

export function Experience() {
  const journey = [
    {
      company: "IriusRisk",
      role: "Frontend Lead",
      period: "2021 – Present",
      icon: Rocket,
      story:
        "I led the creation of the frontend team, growing it from just me to 12 people — 6 pure frontend engineers I helped hire and 6 full-stack developers. We changed the application’s UI while features kept shipping: for a time both UIs coexisted, with one framework embedded inside another. I set the foundations of the project — patterns, architecture, best practices, and pipelines — always focused on scalability, performance, and accessibility. We’ve also been embedding AI into our workflows since its rise, and even delivered a highly requested AI feature during a hackathon without being part of the AI team.",
      highlights: [
        {
          title: "Built & Led the Team",
          description:
            "Grew the frontend team from just me to 12 people — helping hire 6 frontend engineers and mentoring alongside 6 full-stack developers.",
        },
        {
          title: "Architecture & Foundations",
          description:
            "Set the project’s foundations — patterns, architecture, best practices, and pipelines — and led a live UI migration with both frameworks coexisting while features kept shipping.",
        },
        {
          title: "AI Innovation",
          description:
            "Embedded AI into our workflows early and delivered a highly requested AI feature during a hackathon, without being part of the AI team.",
        },
      ],
      stack: [
        "React",
        "TypeScript",
        "Vite",
        "Design Systems",
        "Zustand",
        "Performance Optimization",
      ],
      keyLearning:
        "Leadership is about making strategic technical decisions that enable the entire team to succeed.",
    },
    {
      company: "Unit4",
      role: "Senior Frontend Developer",
      period: "2020 – 2021",
      icon: TrendingUp,
      story:
        "Mastered the art of building scalable applications for complex corporate environments — enterprise-grade Angular portals serving multiple business units.",
      highlights: [
        {
          title: "Enterprise Portals",
          description:
            "Architected and developed enterprise-grade portals using Angular across multiple business units.",
        },
        {
          title: "Performance Optimization",
          description:
            "Implemented lazy loading, code splitting, and smart caching to keep large datasets smooth.",
        },
        {
          title: "Modular Architecture",
          description:
            "Designed a modular architecture that let different teams work independently while keeping the system cohesive.",
        },
      ],
      stack: ["Angular", "TypeScript", "RxJS", "NgRx"],
      keyLearning:
        "Scale isn’t just about users — it’s about creating systems that multiple teams can evolve without stepping on each other.",
    },
    {
      company: "BestSecret",
      role: "Fullstack Developer",
      period: "Oct 2019 – Aug 2020",
      icon: TrendingUp,
      story:
        "My first experience with a hybrid migration for a high-traffic online retailer, where one framework lives inside another. In this case we moved from Hybris to Vue, working with agile methodologies.",
      highlights: [
        {
          title: "E-commerce Features",
          description:
            "Built customer-facing e-commerce features, from product catalogs to checkout flows.",
        },
        {
          title: "Frontend with Vue.js",
          description:
            "Developed features with Vue.js, focused on smooth shopping and reliable checkout.",
        },
        {
          title: "High-Traffic Reliability",
          description:
            "Worked on features that had to stay fast and dependable under the demands of a busy platform.",
        },
      ],
      stack: ["Vue.js", "JavaScript", "TypeScript", "UX", "Flutter"],
      keyLearning:
        "In e-commerce, reliability and speed at checkout translate directly into real business impact.",
    },
    {
      company: "Accenture",
      role: "Fullstack Developer & Mentor",
      period: "Jan 2018 – Oct 2019",
      icon: Users,
      story:
        "I developed frontend features with a high bar for reliability and detail, becoming the team’s go-to person for technical decisions. We worked with agile methodologies and an extremely high standard for the finish and performance of the product.",
      highlights: [
        {
          title: "Multi-Stack Delivery",
          description:
            "Moved between React for internal tools and Flutter for mobile experiments, adapting to each project’s needs.",
        },
        {
          title: "Mentoring",
          description:
            "Mentored junior developers and bootcamp students, helping them transition into professional roles.",
        },
        {
          title: "Cross-Project Delivery",
          description:
            "Delivered features across varied client projects, ramping up quickly on unfamiliar codebases and stacks.",
        },
      ],
      stack: ["React", "JavaScript", "jQuery", "HTML", "CSS", "Bootstrap"],
      keyLearning:
        "The best developers aren’t loyal to a single framework — they choose the right tool and help others grow.",
    },
    {
      company: "Arminet",
      role: "Fullstack Developer",
      period: "2015 – 2018",
      icon: Code,
      story:
        "Where it all began — building complete web solutions from database to interface with PHP and MySQL, and witnessing the shift from jQuery to modern frameworks first-hand.",
      highlights: [
        {
          title: "PHP & MySQL",
          description:
            "Learned how servers, databases, and frontends work together — a full-picture view that still shapes my frontend decisions today.",
        },
        {
          title: "End-to-End Ownership",
          description:
            "Owned entire features from database design through API development to user interface.",
        },
        {
          title: "Transition to Modern Frontend",
          description:
            "Participated in the shift from jQuery to modern frameworks, understanding both paradigms deeply.",
        },
      ],
      stack: [
        "PHP",
        "MySQL",
        "JavaScript",
        "Bootstrap",
        "HTML",
        "CSS",
        "jQuery",
      ],
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
        className="absolute -top-16 -left-16 w-80 h-80 opacity-[0.05]"
        style={{
          background: "var(--color-teal)",
          borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
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

        {/* Timeline ledger */}
        <div className="relative">
          {/* Spine */}
          <div className="absolute left-1.5 top-3 bottom-3 w-px bg-ink/12 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {journey.map((exp, index) => {
              const Icon = exp.icon;
              const isLead = index === 0;
              const isCurrent = exp.period.includes("Present");
              return (
                <article key={index} className="relative md:pl-14">
                  {/* Spine marker */}
                  <div className="hidden md:block absolute left-0 top-1.5">
                    <span
                      className={`block rounded-full bg-teal ${
                        isLead
                          ? "w-3.5 h-3.5 ring-4 ring-teal-soft"
                          : "w-2.5 h-2.5 ml-0.5 mt-0.5"
                      }`}
                    />
                  </div>

                  {/* Meta line */}
                  <div className="flex items-center gap-3 mb-3">
                    <Icon className="w-4 h-4 text-teal shrink-0" />
                    <span className="font-mono text-xs tracking-wide text-subtle tabular-nums">
                      {exp.period}
                    </span>
                    {isCurrent && (
                      <span className="text-[10px] font-semibold uppercase tracking-widest text-teal-strong bg-teal-soft px-2 py-0.5 rounded-full">
                        Current
                      </span>
                    )}
                  </div>

                  {/* Company + role */}
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-4">
                    <h3
                      className={`font-bold tracking-tight text-ink ${
                        isLead ? "text-3xl" : "text-2xl"
                      }`}
                    >
                      {exp.company}
                    </h3>
                    <p className="text-teal-strong font-semibold text-sm">
                      {exp.role}
                    </p>
                  </div>

                  {/* Story */}
                  <p
                    className={`text-muted font-light leading-relaxed max-w-2xl mb-7 ${
                      isLead ? "text-base" : "text-sm"
                    }`}
                  >
                    {exp.story}
                  </p>

                  {/* Highlights — hairline-separated ledger rows, no cards */}
                  <dl className="border-t border-ink/10 mb-7">
                    {exp.highlights.map((h, hIdx) => (
                      <div
                        key={hIdx}
                        className="flex gap-4 py-4 border-b border-ink/10"
                      >
                        <span className="w-1.5 h-1.5 rounded-[2px] bg-teal shrink-0 mt-2" />
                        <div className="flex flex-col sm:flex-row sm:gap-4">
                          <dt className="text-sm font-semibold text-ink sm:w-52 shrink-0 mb-1 sm:mb-0">
                            {h.title}
                          </dt>
                          <dd className="text-sm text-subtle font-light leading-relaxed">
                            {h.description}
                          </dd>
                        </div>
                      </div>
                    ))}
                  </dl>

                  {/* Stack — inline mono list */}
                  <p className="font-mono text-xs text-subtle leading-relaxed mb-7">
                    {exp.stack.join("  ·  ")}
                  </p>

                  {/* Key learning — pull-quote, no side stripe */}
                  <div className="max-w-2xl">
                    <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-strong mb-2">
                      Key learning
                    </p>
                    <p className="text-base text-muted font-light italic leading-relaxed">
                      {exp.keyLearning}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
