/* Hallmark · macrostructure: Editorial skills ledger · tone: editorial · anchor hue: teal
 * Card-free category ledger. Subtle per-category color via a small tinted icon; proficiency
 * carried by type weight, not loud fills; static year figures in mono. No hover, no shadows.
 * Matches the Experience / About ledger voice.
 */
import {
  LuCodeXml as Code2,
  LuLayers as Layers,
  LuDatabase as Database,
  LuWrench as Wrench,
} from "react-icons/lu";

const INTENSITY_TEXT: Record<string, string> = {
  core: "text-ink font-semibold",
  regular: "text-muted",
  exploring: "text-subtle font-light",
};

const CATEGORY_ACCENT: Record<string, string> = {
  react: "var(--color-teal)",
  frameworks: "var(--color-amber)",
  backend: "var(--color-terracotta)",
  tools: "var(--color-blue)",
};

export function Skills() {
  const skillsData = {
    react: {
      title: "React Ecosystem",
      icon: Code2,
      description: "My primary expertise and passion",
      skills: [
        { name: "React", experience: "8 years", intensity: "core" },
        { name: "Next.js", experience: "5 years", intensity: "core" },
        { name: "TypeScript", experience: "6 years", intensity: "core" },
        { name: "Zustand", experience: "3 years", intensity: "regular" },
        { name: "React Query", experience: "4 years", intensity: "regular" },
      ],
    },
    frameworks: {
      title: "Other Frameworks",
      icon: Layers,
      description: "Versatile across technologies",
      skills: [
        { name: "Vue.js", experience: "4 years", intensity: "regular" },
        { name: "Angular", experience: "3 years", intensity: "regular" },
        { name: "Svelte", experience: "2 years", intensity: "exploring" },
        { name: "jQuery", experience: "7 years", intensity: "regular" },
      ],
    },
    backend: {
      title: "Backend & Full Stack",
      icon: Database,
      description: "End-to-end development",
      skills: [
        { name: "PHP", experience: "6 years", intensity: "regular" },
        { name: "Node.js", experience: "5 years", intensity: "regular" },
        { name: "Express", experience: "4 years", intensity: "regular" },
        { name: "REST APIs", experience: "8 years", intensity: "core" },
        { name: "GraphQL", experience: "3 years", intensity: "regular" },
        { name: "NestJS", experience: "1 year", intensity: "exploring" },
      ],
    },
    tools: {
      title: "Tools & DevOps",
      icon: Wrench,
      description: "Modern development workflow",
      skills: [
        { name: "Git", experience: "10 years", intensity: "core" },
        { name: "Webpack", experience: "6 years", intensity: "regular" },
        { name: "Vite", experience: "3 years", intensity: "regular" },
        { name: "Docker", experience: "4 years", intensity: "regular" },
        { name: "CI/CD", experience: "5 years", intensity: "regular" },
      ],
    },
  };

  const categories = Object.keys(skillsData) as Array<keyof typeof skillsData>;

  return (
    <section
      id="skills"
      className="py-28 px-6 bg-background relative overflow-hidden"
    >
      {/* Ambient accent — matches the other sections' treatment */}
      <div
        className="absolute bottom-[-60px] right-[-60px] w-80 h-80 opacity-[0.05]"
        style={{
          background: "var(--color-teal)",
          borderRadius: "40% 60% 70% 30% / 50% 40% 60% 50%",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-subtle mb-5">
          Technical Expertise
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 className="text-5xl font-bold tracking-tight text-ink leading-tight">
            Skills that deliver.
          </h2>
          <p className="text-subtle font-light max-w-xs md:text-right">
            A decade of mastery across the modern web stack
          </p>
        </div>

        {/* Category ledger — hairline rows, no cards */}
        <dl className="border-t border-ink/10">
          {categories.map((key) => {
            const data = skillsData[key];
            const Icon = data.icon;
            const accent = CATEGORY_ACCENT[key];
            return (
              <div
                key={key}
                className="flex flex-col sm:flex-row gap-x-8 gap-y-4 py-8 border-b border-ink/10"
              >
                <dt className="sm:w-56 shrink-0">
                  <div className="flex items-center gap-2.5">
                    <Icon
                      className="w-4 h-4 shrink-0"
                      style={{ color: accent }}
                    />
                    <h3 className="text-base font-semibold text-ink">
                      {data.title}
                    </h3>
                  </div>
                  <p className="text-xs text-subtle font-light mt-1 sm:pl-[26px]">
                    {data.description}
                  </p>
                </dt>
                <dd className="flex flex-wrap gap-x-6 gap-y-2.5 items-baseline">
                  {data.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`text-sm ${INTENSITY_TEXT[skill.intensity]}`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </dd>
              </div>
            );
          })}
        </dl>

        {/* Proficiency key — self-documenting, no interaction */}
        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2">
          <span className="text-xs font-semibold tracking-widest uppercase text-subtle">
            Proficiency
          </span>
          <span className="text-sm text-ink font-semibold">Core</span>
          <span className="text-sm text-muted">Regular</span>
          <span className="text-sm text-subtle font-light">Exploring</span>
        </div>
      </div>
    </section>
  );
}
