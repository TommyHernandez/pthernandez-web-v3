export function About() {
  return (
    <section id="about" className="py-28 px-6 bg-white relative overflow-hidden">
      {/* Subtle organic deco */}
      <div
        className="absolute top-[-40px] right-[-40px] w-80 h-80 opacity-[0.04]"
        style={{ background: "#C2857A", borderRadius: "50% 40% 60% 50% / 40% 60% 50% 60%" }}
      />

      <div className="max-w-5xl mx-auto">
        {/* Section eyebrow */}
        <p className="text-xs font-semibold tracking-widest uppercase text-[#78716C] mb-5">
          Who I Am
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-start mb-20">
          <div>
            <h2 className="text-5xl font-bold tracking-tight text-[#1C1917] leading-tight mb-6">
              More than just code.
            </h2>
            <p className="text-lg text-[#44403C] leading-relaxed mb-6 font-light">
              I don't just write code — I craft digital experiences. Over a decade of hands-on
              work has taught me that the best solutions live at the intersection of technical
              rigor and genuine empathy for the people using what you build.
            </p>
            <p className="text-lg text-[#44403C] leading-relaxed font-light">
              React is my superpower, but I'm fluent across Vue, Angular, PHP, and vanilla
              JavaScript. I've shipped products at scale for{" "}
              <span className="font-semibold text-[#1C1917]">Bestsecret</span>,{" "}
              <span className="font-semibold text-[#1C1917]">SEAT</span>, and enterprises
              with millions of daily users.
            </p>
          </div>

          {/* Stats column */}
          <div className="grid grid-cols-2 gap-4 pt-2">
            {[
              { value: "10+", label: "Years Experience" },
              { value: "50+", label: "Projects Delivered" },
              { value: "12+", label: "Devs Mentored" },
              { value: "4", label: "Framework Stacks" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-[#F7F4EE] rounded-2xl p-6 border border-[rgba(28,25,23,0.06)]"
              >
                <div className="text-4xl font-bold text-[#1C1917] mb-1">{stat.value}</div>
                <div className="text-sm text-[#78716C] font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy row */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            {
              color: "#D1E8E0",
              textColor: "#2D5C4F",
              heading: "React Specialist",
              body: "8 years building production React apps — from greenfield products to migrating legacy codebases. Architecture, performance, and DX are my obsession.",
            },
            {
              color: "#F5EBC2",
              textColor: "#6B5810",
              heading: "Enterprise Ready",
              body: "Worked with BestSecret and SEAT, delivering scalable solutions that handle millions of users across complex, multi-team engineering orgs.",
            },
            {
              color: "#F2DEDA",
              textColor: "#7A3D35",
              heading: "Clean Code Mindset",
              body: "I believe maintainable code outlasts clever code. No shortcuts, no accumulating debt — just clear, well-structured systems that teams can evolve.",
            },
          ].map((card) => (
            <div
              key={card.heading}
              className="bg-white rounded-2xl p-7 border border-[rgba(28,25,23,0.07)] hover:shadow-sm transition-shadow"
            >
              <div
                className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{ background: card.color, color: card.textColor }}
              >
                {card.heading}
              </div>
              <p className="text-[#44403C] text-sm leading-relaxed font-light">{card.body}</p>
            </div>
          ))}
        </div>

        {/* Quote */}
        <div className="border-l-2 border-[#5B8A7A] pl-8 py-2">
          <blockquote className="text-2xl md:text-3xl font-light text-[#1C1917] leading-snug mb-3 italic">
            "Code is poetry, but production is reality."
          </blockquote>
          <p className="text-sm text-[#78716C] font-medium tracking-wide">
            — My development philosophy
          </p>
        </div>
      </div>
    </section>
  );
}
