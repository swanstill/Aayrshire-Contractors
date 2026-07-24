const items = [
  "BLOCK PAVING",
  "RESIN DRIVEWAYS",
  "PATIOS",
  "LANDSCAPING",
  "FENCING",
];

export default function Marquee() {
  return (
    <section className="py-8 border-y border-[var(--line)] bg-[var(--bg-3)] overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap">
        {[...Array(2)].map((_, groupIdx) => (
          <div key={groupIdx} className="flex items-center gap-12 px-6">
            {items.map((item, i) => (
              <span key={`${groupIdx}-${i}`} className="flex items-center gap-12">
                <span className="font-display font-extrabold text-3xl text-[#333333]">
                  {item}
                </span>
                <i className="fa-solid fa-asterisk text-[var(--accent)]"></i>
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
