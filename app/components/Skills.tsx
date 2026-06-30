'use client';
import {
  LuCodeXml as Code2,
  LuLayers as Layers,
  LuDatabase as Database,
  LuWrench as Wrench,
} from "react-icons/lu";
import { useState } from "react";

const INTENSITY_STYLES: Record<string, { badge: string; chip: string }> = {
  core: {
    badge: "bg-teal-soft text-teal-strong",
    chip: "bg-teal-strong text-white text-base px-5 py-3 shadow-sm",
  },
  regular: {
    badge: "bg-surface-muted text-muted",
    chip: "bg-surface-muted text-muted text-sm px-4 py-2.5 border border-ink/8",
  },
  exploring: {
    badge: "bg-white text-subtle",
    chip: "bg-white text-subtle text-xs px-4 py-2 border border-ink/10",
  },
};

const CATEGORY_ACCENTS: Record<string, string> = {
  react: "var(--color-teal-soft)",
  frameworks: "var(--color-amber-soft)",
  backend: "var(--color-terracotta-soft)",
  tools: "var(--color-blue-soft)",
};

export function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

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
        { name: "Styled Components", experience: "5 years", intensity: "regular" },
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
      {/* Organic deco */}
      <div
        className="absolute bottom-[-60px] right-[-60px] w-80 h-80 opacity-[0.05]"
        style={{ background: "var(--color-teal)", borderRadius: "40% 60% 70% 30% / 50% 40% 60% 50%" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-subtle mb-5">
          Technical Expertise
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-ink leading-tight">
            Skills that deliver.
          </h2>
          <p className="text-subtle font-light max-w-xs md:text-right">
            A decade of mastery across the modern web stack
          </p>
        </div>

        {/* Categories grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {categories.map((key) => {
            const data = skillsData[key];
            const Icon = data.icon;
            const accent = CATEGORY_ACCENTS[key];
            return (
              <div
                key={key}
                className="bg-white rounded-2xl overflow-hidden border border-ink/7 hover:shadow-md transition-shadow duration-300"
              >
                {/* Card accent strip */}
                <div className="h-1.5 w-full" style={{ background: accent }} />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="p-2.5 rounded-xl"
                      style={{ background: accent }}
                    >
                      <Icon className="w-5 h-5 text-ink" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-ink">{data.title}</h3>
                      <p className="text-xs text-subtle font-light">{data.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {data.skills.map((skill) => {
                      const styles = INTENSITY_STYLES[skill.intensity];
                      return (
                        <div
                          key={skill.name}
                          className={`rounded-xl font-medium transition-all duration-200 cursor-default select-none ${styles.chip}`}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                        >
                          <div className="flex flex-col">
                            <span>{skill.name}</span>
                            {hoveredSkill === skill.name && (
                              <span className="text-xs opacity-70 mt-0.5 font-light">
                                {skill.experience}
                              </span>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div className="bg-white rounded-2xl p-6 border border-ink/7 flex flex-wrap items-center gap-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-subtle mr-2">
            Proficiency
          </p>
          {[
            { label: "Core Expertise", color: "var(--color-teal-strong)", bg: "var(--color-teal-strong)" },
            { label: "Regular", color: "var(--color-muted)", bg: "var(--color-surface-muted)" },
            { label: "Exploring", color: "var(--color-subtle)", bg: "var(--color-white)" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full border border-ink/12"
                style={{ background: item.bg }}
              />
              <span className="text-sm text-muted font-light">{item.label}</span>
            </div>
          ))}
          <span className="text-xs text-subtle font-light ml-auto italic">
            Hover a skill to see years of experience
          </span>
        </div>
      </div>
    </section>
  );
}
