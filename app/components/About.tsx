/* Hallmark · macrostructure: Editorial statement ledger · tone: editorial · anchor hue: teal
 * Prose statement + hairline stat strip + card-free conviction ledger. Matches the Experience
 * ledger voice — single teal accent, mono numerals, no cards / pills / shadows / hover-lift.
 */
export function About() {
  const stats = [
    { value: "10+", label: "Years shipping" },
    { value: "12", label: "Devs led & mentored" },
    { value: "5", label: "Framework stacks" },
  ];

  const convictions = [
    {
      title: "React specialist",
      body: "Eight years in production React — greenfield products through live migrations of legacy codebases. Architecture, performance, and developer experience are where I spend my attention.",
    },
    {
      title: "Enterprise scale",
      body: "Shipped for BestSecret and SEAT: solutions that stay fast and dependable under real traffic, across complex multi-team engineering orgs.",
    },
    {
      title: "Clean-code mindset",
      body: "Maintainable code outlasts clever code. No shortcuts, no accumulating debt — clear, well-structured systems a team can keep evolving.",
    },
  ];

  return (
    <section
      id="about"
      className="py-28 px-6 bg-white relative overflow-hidden"
    >
      <div
        className="absolute -top-16 -right-16 w-80 h-80 opacity-[0.05]"
        style={{
          background: "var(--color-teal)",
          borderRadius: "40% 60% 55% 45% / 55% 45% 55% 45%",
        }}
      />

      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-xs font-semibold tracking-widest uppercase text-subtle mb-5">
          Who I Am
        </p>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <h2 className="text-5xl font-bold tracking-tight text-ink leading-tight">
            More than just code.
          </h2>
          <p className="text-subtle font-light max-w-xs md:text-right">
            Frontend craft at the intersection of rigor and empathy
          </p>
        </div>

        <div className="max-w-2xl space-y-6 mb-16">
          <p className="text-lg text-muted leading-relaxed font-light">
            I don&rsquo;t just write code. I craft digital experiences. Over a
            decade of hands-on work has taught me that the best solutions live
            at the intersection of technical rigor and genuine empathy for the
            people using what you build.
          </p>
          <p className="text-lg text-muted leading-relaxed font-light">
            React is my superpower, but I&rsquo;m fluent across Vue, Angular,
            PHP, and vanilla JavaScript. I&rsquo;ve shipped products at scale
            for <span className="font-semibold text-ink">IriusRisk</span>,{" "}
            <span className="font-semibold text-ink">BestSecret</span>,{" "}
            <span className="font-semibold text-ink">SEAT</span>, and
            enterprises with millions of daily users.
          </p>
        </div>

        <dl className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-ink/10 border border-ink/10 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="bg-white py-6 px-5 flex flex-col justify-center"
            >
              <dt className="text-4xl font-bold text-ink font-mono tabular-nums leading-none mb-2">
                {stat.value}
              </dt>
              <dd className="text-sm text-subtle font-medium">{stat.label}</dd>
            </div>
          ))}
        </dl>

        <dl className="border-t border-ink/10 mb-16">
          {convictions.map((item) => (
            <div
              key={item.title}
              className="flex gap-5 py-6 border-b border-ink/10"
            >
              <span className="w-1.5 h-1.5 rounded-xs bg-teal shrink-0 mt-2.5" />
              <div className="flex flex-col sm:flex-row sm:gap-6">
                <dt className="text-base font-semibold text-ink sm:w-52 shrink-0 mb-1 sm:mb-0">
                  {item.title}
                </dt>
                <dd className="text-sm text-muted font-light leading-relaxed max-w-2xl">
                  {item.body}
                </dd>
              </div>
            </div>
          ))}
        </dl>

        <div className="max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-widest text-teal-strong mb-2">
            Development philosophy
          </p>
          <p className="text-2xl md:text-3xl text-ink font-light leading-snug italic">
            Code is poetry, but production is reality.
          </p>
        </div>
      </div>
    </section>
  );
}
