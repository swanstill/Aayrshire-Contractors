import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function LandscapingPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-24">
        <div className="absolute inset-0">
          <Image
            src="/services/landscaping.jpg"
            alt="Landscaping and garden design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-[#0D0D0D]/70 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="max-w-3xl">
            <div className="marker-line mb-6 text-[var(--accent)]">What We Do</div>
            <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-tight tracking-tight text-white mb-6">
              Landscaping &amp; <br />
              <span className="text-gradient">Garden Design</span>
            </h1>
            <p className="text-lg lg:text-xl text-[var(--fg-2)] max-w-2xl leading-relaxed">
              Transform your outdoor space with our comprehensive landscaping
              services. From complete garden makeovers to planting schemes and
              feature lighting, we bring your vision to life with creativity
              and craftsmanship.
            </p>
            <a
              href="/#quote"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold mt-8"
            >
              Get a Free Quote <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-[80px] bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="marker-line mb-6">What We Offer</div>
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl leading-tight tracking-tight text-[var(--fg)] mb-6">
                Complete Garden <br />
                <span className="text-gradient">Transformations</span>
              </h2>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                We specialise in creating beautiful, functional outdoor spaces
                that reflect your personal style and enhance your property. Our
                experienced team handles everything from initial design through
                to final planting, ensuring a seamless experience from start to
                finish.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Whether you are looking for a complete garden makeover, a
                low-maintenance artificial grass lawn, or bespoke planting
                schemes, we have the expertise to deliver outstanding results
                that stand the test of time.
              </p>
            </div>
            <div className="img-zoom rounded-2xl overflow-hidden shadow-xl shadow-black/30">
              <Image
                src="/projects/project-3.jpg"
                alt="Garden transformation"
                width={700}
                height={500}
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[80px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="marker-line justify-center mb-6">Our Services</div>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl leading-tight tracking-tight text-[var(--fg)] mb-5">
              Everything You Need for Your <span className="text-gradient">Outdoor Space</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-seedling",
                title: "Garden Design &amp; Planting",
                desc: "Bespoke planting schemes, shrub borders, and seasonal displays tailored to your style and location.",
              },
              {
                icon: "fa-tree",
                title: "Turfing &amp; Artificial Grass",
                desc: "Natural turf installation or premium artificial grass for a lush, green lawn all year round with zero maintenance.",
              },
              {
                icon: "fa-border-all",
                title: "Fencing &amp; Boundaries",
                desc: "Timber fencing, panel replacement, and boundary treatments for privacy and security.",
              },
              {
                icon: "fa-couch",
                title: "Decking &amp; Patios",
                desc: "Timber and composite decking solutions that create the perfect spot for outdoor relaxation and entertaining.",
              },
              {
                icon: "fa-lightbulb",
                title: "Feature Lighting",
                desc: "Ambient garden lighting, pathway illumination, and accent lights to showcase your garden after dark.",
              },
              {
                icon: "fa-water",
                title: "Drainage &amp; Groundwork",
                desc: "Land drainage solutions, soil preparation, and ground levelling to ensure a solid foundation.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="card-hover p-8 rounded-2xl border border-[var(--line)] bg-[var(--bg-2)]"
              >
                <div className="icon-circle mb-5">
                  <i className={`fa-solid ${service.icon}`}></i>
                </div>
                <h3
                  className="font-display font-bold text-lg text-[var(--fg)] mb-3"
                  dangerouslySetInnerHTML={{ __html: service.title }}
                />
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-[80px] bg-[var(--bg-2)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="marker-line justify-center mb-6">How It Works</div>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl leading-tight tracking-tight text-[var(--fg)] mb-5">
              From Vision to <span className="text-gradient">Reality</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Our straightforward process ensures you know exactly what to expect
              at every stage.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Consultation",
                desc: "We visit your property, discuss your ideas, and assess the space to understand your vision.",
              },
              {
                step: "02",
                title: "Design &amp; Quote",
                desc: "We create a detailed design plan and provide a transparent, no-obligation quotation.",
              },
              {
                step: "03",
                title: "Expert Installation",
                desc: "Our skilled team carries out the work with minimal disruption and maximum attention to detail.",
              },
              {
                step: "04",
                title: "Finishing Touches",
                desc: "We tidy up, review the work with you, and ensure you are completely satisfied.",
              },
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl lg:text-6xl font-display font-black text-[var(--accent)] opacity-30 mb-4">
                  {step.step}
                </div>
                <h3
                  className="font-display font-bold text-lg text-[var(--fg)] mb-3"
                  dangerouslySetInnerHTML={{ __html: step.title }}
                />
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[80px] relative overflow-hidden">
        <div className="glow-soft absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="marker-line justify-center mb-6">Get Started</div>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl leading-tight tracking-tight text-[var(--fg)] mb-5">
            Ready to Transform Your <span className="text-gradient">Garden</span>?
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto mb-8">
            Contact us today for a free, no-obligation consultation and
            quotation. Let us bring your outdoor vision to life.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/#quote"
              className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold"
            >
              Request a Free Quote <i className="fa-solid fa-arrow-right text-xs"></i>
            </a>
            <a
              href="tel:07427009786"
              className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold"
            >
              <i className="fa-solid fa-phone"></i> 07427 009786
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
