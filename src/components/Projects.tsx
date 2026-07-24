import Image from "next/image";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="py-[50px] bg-[var(--bg-3)] relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
            <div className="max-w-2xl">
              <div className="marker-line mb-6">Recent Projects</div>
              <h2 className="font-display font-extrabold text-4xl lg:text-6xl leading-tight tracking-tight text-[var(--fg)]">
                Work We&apos;re Proud Of
              </h2>
            </div>
            <a
              href="#quote"
              className="btn-ghost px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2"
            >
              Start Your Project <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-12 gap-5">
          {/* Large */}
          <div className="md:col-span-7 project-card h-[460px]">
            <Image
              src="/projects/project-1.jpg"
              alt="Modern driveway"
              width={900}
              height={460}
              className="w-full h-full object-cover"
            />
            <div className="overlay"></div>
            <div className="absolute bottom-0 left-0 p-8 z-10">
              <div className="text-xs tracking-widest text-[var(--accent)] mb-2 uppercase font-semibold">
                Driveway · Manchester
              </div>
              <h3 className="font-display font-bold text-2xl lg:text-3xl text-white">
                Contemporary Resin Frontage
              </h3>
              <p className="text-sm text-[var(--fg-2)] mt-2 max-w-md">
                A complete transformation featuring resin bound surfacing with
                new edging and drainage.
              </p>
            </div>
          </div>

          {/* Small column */}
          <div className="md:col-span-5 grid grid-cols-1 gap-5">
            <div className="project-card h-[217px]">
              <Image
                src="/projects/project-2.jpg"
                alt="Patio project"
                width={600}
                height={217}
                className="w-full h-full object-cover"
              />
              <div className="overlay"></div>
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <div className="text-xs tracking-widest text-[var(--accent)] mb-1 uppercase font-semibold">
                  Patio
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  Sandstone Patio
                </h3>
              </div>
            </div>
            <div className="project-card h-[217px]">
              <Image
                src="/projects/project-3.jpg"
                alt="Garden project"
                width={600}
                height={217}
                className="w-full h-full object-cover"
              />
              <div className="overlay"></div>
              <div className="absolute bottom-0 left-0 p-6 z-10">
                <div className="text-xs tracking-widest text-[var(--accent)] mb-1 uppercase font-semibold">
                  Landscaping
                </div>
                <h3 className="font-display font-bold text-lg text-white">
                  Garden Makeover
                </h3>
              </div>
            </div>
          </div>

          {/* Bottom row */}
          <div className="md:col-span-4 project-card h-[300px]">
            <Image
              src="/projects/project-4.jpg"
              alt="Block paving"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="overlay"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <div className="text-xs tracking-widest text-[var(--accent)] mb-1 uppercase font-semibold">
                Block Paving
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                Herringbone Drive
              </h3>
            </div>
          </div>
          <div className="md:col-span-4 project-card h-[300px]">
            <Image
              src="/projects/project-5.jpg"
              alt="Fencing"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="overlay"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <div className="text-xs tracking-widest text-[var(--accent)] mb-1 uppercase font-semibold">
                Fencing
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                Cedar Hit &amp; Miss
              </h3>
            </div>
          </div>
          <div className="md:col-span-4 project-card h-[300px]">
            <Image
              src="/projects/project-6.jpg"
              alt="Paving"
              width={600}
              height={300}
              className="w-full h-full object-cover"
            />
            <div className="overlay"></div>
            <div className="absolute bottom-0 left-0 p-6 z-10">
              <div className="text-xs tracking-widest text-[var(--accent)] mb-1 uppercase font-semibold">
                Porcelain
              </div>
              <h3 className="font-display font-bold text-lg text-white">
                Outdoor Living
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
