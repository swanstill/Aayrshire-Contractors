import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[75vh] flex items-center overflow-hidden">
      {/* Full background image */}
      <Image
        src="/hero-image.webp"
        alt="Landscaping and patio installation"
        fill
        className="object-cover"
        priority
      />

      {/* Dark overlay gradient — darker on left for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Subtle gold overlay glow */}
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-[#c6ac79]/5 blur-[120px]" />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-[#c6ac79]/60 via-[#c6ac79]/20 to-transparent" />

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10 w-full pt-44 pb-20 lg:pt-36 lg:pb-16">
        <div className="max-w-2xl">
          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="w-8 h-[2px] bg-[#c6ac79]" />
            <span className="text-xs tracking-[0.2em] uppercase text-[#c6ac79] font-semibold">
              Landscaping · Patios · Specialists
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display font-extrabold text-[36px] sm:text-[44px] lg:text-[60px] leading-[1.1] tracking-tight mb-5">
            <span className="text-white">
              From Vision to Reality —
            </span>
            <span className="text-[#c6ac79]"> Stunning Landscaping.</span>
          </h1>

          {/* Text */}
          <p className="text-base lg:text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
            Ayrshire Contractors is a family run business based in Kilmarnock,
            covering all of Ayrshire offering free quotations and advice.
            From bespoke garden designs to stunning patios — we bring your
            vision to life.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12">
            <a
              href="#quote"
              className="btn-primary px-8 py-4 rounded-full font-semibold flex items-center gap-2.5 text-[15px]"
            >
              Get a Free Quote
              <i className="fa-solid fa-arrow-right" />
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-[15px] text-white border border-white/20 bg-white/5 hover:bg-white/10 hover:border-[#c6ac79] transition-all backdrop-blur-sm"
            >
              <i className="fa-regular fa-circle-play" />
              View Our Work
            </a>
          </div>

          {/* Trust */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-6">
            {/* Stars */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa-solid fa-star text-[#F59E0B] text-sm" />
                ))}
              </div>
              <div className="text-sm shrink-0">
                <div className="font-semibold text-white whitespace-nowrap">5.0 Review on Bark &amp; Facebook</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-white/15" />
            {/* Shield */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <i className="fa-solid fa-shield-halved text-[#c6ac79] text-sm" />
              </div>
              <div className="text-sm">
                <div className="font-semibold text-white">Fully Insured</div>
                <div className="text-xs text-white/60">10-Year Guarantee</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
