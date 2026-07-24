import Reveal from "./Reveal";

const steps = [
  {
    num: "01",
    title: "Free Consultation",
    desc: "We visit your property, listen to your ideas, and assess the site — completely free of charge.",
  },
  {
    num: "02",
    title: "Detailed Quote",
    desc: "Receive a transparent, itemised quote with no hidden costs — usually within 48 hours.",
  },
  {
    num: "03",
    title: "Expert Installation",
    desc: "Our master installers get to work, keeping you informed at every stage of the project.",
  },
  {
    num: "04",
    title: "Final Reveal",
    desc: "We hand over your transformed space — backed by our 10-year workmanship guarantee.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="py-[50px] bg-[var(--bg-2)] border-y border-[var(--line)]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div
              className="marker-line mb-6 justify-center"
              style={{ display: "inline-flex" }}
            >
              How It Works
            </div>
            <h2 className="font-display font-extrabold text-4xl lg:text-6xl leading-tight tracking-tight mb-5 text-[var(--fg)]">
              A Simple, Stress-Free Process
            </h2>
            <p className="text-[var(--muted)]">
              From first call to final handshake — here&apos;s how we bring
              your outdoor vision to life.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <Reveal key={step.num}>
              <div
                className={`relative ${
                  i < steps.length - 1 ? "step-line" : ""
                }`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#b09860] to-[#8a7a50] flex items-center justify-center text-2xl font-display font-extrabold mb-6 text-white shadow-lg shadow-amber-900/20">
                  {step.num}
                </div>
                <h4 className="font-display font-bold text-xl mb-3 text-[var(--fg)]">
                  {step.title}
                </h4>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
