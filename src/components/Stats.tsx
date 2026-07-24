import AnimatedCounter from "./AnimatedCounter";

export default function Stats() {
  return (
    <section className="border-y border-[var(--line)] bg-[var(--bg-2)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="text-center lg:text-left">
          <div className="font-display font-extrabold text-4xl lg:text-5xl text-gradient stat-num">
            <AnimatedCounter target={2500} suffix="+" />
          </div>
          <div className="text-sm text-[var(--muted)] mt-2 font-medium">
            Projects Completed
          </div>
        </div>
        <div className="text-center lg:text-left">
          <div className="font-display font-extrabold text-4xl lg:text-5xl text-gradient stat-num">
            <AnimatedCounter target={20} />
          </div>
          <div className="text-sm text-[var(--muted)] mt-2 font-medium">
            Years Experience
          </div>
        </div>
        <div className="text-center lg:text-left">
          <div className="font-display font-extrabold text-4xl lg:text-5xl text-gradient stat-num">
            <AnimatedCounter target={247} suffix="+" />
          </div>
          <div className="text-sm text-[var(--muted)] mt-2 font-medium">
            5-Star Reviews
          </div>
        </div>
        <div className="text-center lg:text-left">
          <div className="font-display font-extrabold text-4xl lg:text-5xl text-gradient stat-num">
            <AnimatedCounter target={10} />
          </div>
          <div className="text-sm text-[var(--muted)] mt-2 font-medium">
            Year Guarantee
          </div>
        </div>
      </div>
    </section>
  );
}
