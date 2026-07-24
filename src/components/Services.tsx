import Image from "next/image";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="services" className="py-[50px] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <div className="marker-line mb-6">What We Do</div>
            <h2 className="font-display font-extrabold text-4xl lg:text-6xl leading-tight tracking-tight mb-5 text-[var(--fg)]">
              Complete Outdoor
              <br />
              Transformations
            </h2>
            <p className="text-lg text-[var(--muted)]">
              From bespoke landscaping to luxury patios — we handle every
              aspect of your outdoor space with precision and pride.
            </p>
          </div>
        </Reveal>

        {/* Service 1 - Landscaping */}
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-circle">
                  <i className="fa-solid fa-seedling"></i>
                </div>
                <div className="text-xs tracking-[0.2em] text-[var(--muted)] uppercase font-semibold">
                  01 — Landscaping
                </div>
              </div>
              <h3 className="font-display font-extrabold text-3xl lg:text-4xl mb-5 leading-tight text-[var(--fg)]">
                Landscaping &amp; Garden Design
              </h3>
              <p className="text-[var(--muted)] mb-6 leading-relaxed">
                Transform your outdoor space with our comprehensive landscaping
                services. From complete garden makeovers to planting schemes and
                feature lighting, we bring your vision to life with creativity
                and craftsmanship.
              </p>
              <ul className="space-y-3 mb-7">
                <li className="flex items-center gap-3 text-sm text-[var(--fg-2)]">
                  <i className="fa-solid fa-check text-[var(--accent)]"></i> Garden
                  design &amp; planting schemes
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--fg-2)]">
                  <i className="fa-solid fa-check text-[var(--accent)]"></i> Turfing,
                  artificial grass &amp; borders
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--fg-2)]">
                  <i className="fa-solid fa-check text-[var(--accent)]"></i> Fencing,
                  decking &amp; feature lighting
                </li>
              </ul>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold text-sm hover:gap-3 transition-all"
              >
                Request a Quote <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
            <div className="order-1 lg:order-2 img-zoom rounded-2xl overflow-hidden shadow-xl shadow-black/30">
              <Image
                src="/services/landscaping.jpg"
                alt="Landscaping and garden design"
                width={800}
                height={420}
                className="w-full h-[420px] object-cover"
              />
            </div>
          </div>
        </Reveal>

        {/* Service 2 - Patios */}
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="img-zoom rounded-2xl overflow-hidden shadow-xl shadow-black/30">
              <Image
                src="https://images.unsplash.com/photo-1592595896551-12b371d546d5?w=800&q=80"
                alt="Patio installation"
                width={800}
                height={420}
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="icon-circle">
                  <i className="fa-solid fa-mountain-sun"></i>
                </div>
                <div className="text-xs tracking-[0.2em] text-[var(--muted)] uppercase font-semibold">
                  02 — Patios
                </div>
              </div>
              <h3 className="font-display font-extrabold text-3xl lg:text-4xl mb-5 leading-tight text-[var(--fg)]">
                Patios &amp; Paving
              </h3>
              <p className="text-[var(--muted)] mb-6 leading-relaxed">
                Extend your living space outdoors with a beautifully crafted
                patio. From natural Indian sandstone to porcelain paving, we
                create outdoor rooms made for memories.
              </p>
              <ul className="space-y-3 mb-7">
                <li className="flex items-center gap-3 text-sm text-[var(--fg-2)]">
                  <i className="fa-solid fa-check text-[var(--accent)]"></i> Indian
                  sandstone &amp; porcelain paving
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--fg-2)]">
                  <i className="fa-solid fa-check text-[var(--accent)]"></i> Step
                  &amp; retaining wall features
                </li>
                <li className="flex items-center gap-3 text-sm text-[var(--fg-2)]">
                  <i className="fa-solid fa-check text-[var(--accent)]"></i> Precision
                  levelling &amp; drainage
                </li>
              </ul>
              <a
                href="#quote"
                className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold text-sm hover:gap-3 transition-all"
              >
                Request a Quote <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
