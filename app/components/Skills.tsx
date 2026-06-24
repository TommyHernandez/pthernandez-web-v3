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
    badge: "bg-[#D1E8E0] text-[#2D5C4F]",
    chip: "bg-[#2D5C4F] text-white text-base px-5 py-3 shadow-sm",
  },
  regular: {
    badge: "bg-[#EDE9E0] text-[#44403C]",
    chip: "bg-[#EDE9E0] text-[#44403C] text-sm px-4 py-2.5 border border-[rgba(28,25,23,0.08)]",
  },
  exploring: {
    badge: "bg-white text-[#78716C]",
    chip: "bg-white text-[#78716C] text-xs px-4 py-2 border border-[rgba(28,25,23,0.1)]",
  },
};

const CATEGORY_ACCENTS: Record<string, string> = {
  react: "#D1E8E0",
  frameworks: "#F5EBC2",
  backend: "#F2DEDA",
  tools: "#D4E3EF",
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
      className="py-28 px-6 bg-[#F7F4EE] relative overflow-hidden"
    >
      {/* Organic deco */}
      <div
        className="absolute bottom-[-60px] right-[-60px] w-80 h-80 opacity-[0.05]"
        style={{ background: "#5B8A7A", borderRadius: "40% 60% 70% 30% / 50% 40% 60% 50%" }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-5">
          Technical Expertise
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <h2 className="text-5xl font-bold tracking-tight text-[#1C1917] leading-tight">
            Skills that deliver.
          </h2>
          <p className="text-[#78716C] font-light max-w-xs md:text-right">
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
                className="bg-white rounded-2xl overflow-hidden border border-[rgba(28,25,23,0.07)] hover:shadow-md transition-shadow duration-300"
              >
                {/* Card accent strip */}
                <div className="h-1.5 w-full" style={{ background: accent }} />
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="p-2.5 rounded-xl"
                      style={{ background: accent }}
                    >
                      <Icon className="w-5 h-5 text-[#1C1917]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[#1C1917]">{data.title}</h3>
                      <p className="text-xs text-[#78716C] font-light">{data.description}</p>
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
        <div className="bg-white rounded-2xl p-6 border border-[rgba(28,25,23,0.07)] flex flex-wrap items-center gap-6">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mr-2">
            Proficiency
          </p>
          {[
            { label: "Core Expertise", color: "#2D5C4F", bg: "#2D5C4F" },
            { label: "Regular", color: "#44403C", bg: "#EDE9E0" },
            { label: "Exploring", color: "#78716C", bg: "#FFFFFF" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full border border-[rgba(28,25,23,0.12)]"
                style={{ background: item.bg }}
              />
              <span className="text-sm text-[#44403C] font-light">{item.label}</span>
            </div>
          ))}
          <span className="text-xs text-[#78716C] font-light ml-auto italic">
            Hover a skill to see years of experience
          </span>
        </div>
      </div>
    </section>
  );
}
