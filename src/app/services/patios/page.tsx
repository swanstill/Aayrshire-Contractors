import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PatiosPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center pt-24">
        <div className="absolute inset-0">
          <Image
            src="/services/patios.jpg"
            alt="Patio and paving installation"
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
              <span className="text-gradient">Patios &amp; Paving</span>
            </h1>
            <p className="text-lg lg:text-xl text-[var(--fg-2)] max-w-2xl leading-relaxed">
              Extend your living space outdoors with a beautifully crafted
              patio. From natural Indian sandstone to porcelain paving, we
              create outdoor rooms made for memories.
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
            <div className="order-2 lg:order-1">
              <div className="marker-line mb-6">What We Offer</div>
              <h2 className="font-display font-extrabold text-4xl lg:text-5xl leading-tight tracking-tight text-[var(--fg)] mb-6">
                Beautiful Outdoor <br />
                <span className="text-gradient">Living Spaces</span>
              </h2>
              <p className="text-[var(--muted)] leading-relaxed mb-6">
                A well-designed patio transforms your garden into an extension
                of your home. We specialise in creating stunning, durable patio
                areas that withstand the Scottish climate while looking
                beautiful all year round.
              </p>
              <p className="text-[var(--muted)] leading-relaxed">
                Using only the highest quality materials and precision
                installation techniques, we deliver patios that not only look
                fantastic but are built to last for generations.
              </p>
            </div>
            <div className="order-1 lg:order-2 img-zoom rounded-2xl overflow-hidden shadow-xl shadow-black/30">
              <Image
                src="/projects/patio-what-we-offer.jpg"
                alt="Beautiful patio outdoor living space"
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
              Premium Paving <span className="text-gradient">Solutions</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "fa-mountain",
                title: "Indian Sandstone",
                desc: "Natural riven sandstone paving in a range of colours and finishes for a timeless, rustic look.",
              },
              {
                icon: "fa-gem",
                title: "Porcelain Paving",
                desc: "Ultra-durable, low-maintenance porcelain tiles with clean lines and a contemporary finish.",
              },
              {
                icon: "fa-layer-group",
                title: "Block Paving",
                desc: "Versatile concrete block paving for driveways, paths, and patios in various patterns and colours.",
              },
              {
                icon: "fa-stairs",
                title: "Steps &amp; Retaining Walls",
                desc: "Beautifully constructed steps and retaining walls that add structure and character to your garden.",
              },
              {
                icon: "fa-ruler-combined",
                title: "Precision Levelling",
                desc: "Expert ground preparation and laser levelling for a flawless, long-lasting finish.",
              },
              {
                icon: "fa-water",
                title: "Drainage Solutions",
                desc: "Integrated drainage systems to prevent water pooling and protect your patio investment.",
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
              From Design to <span className="text-gradient">Installation</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Our proven process ensures your patio project runs smoothly from
              start to finish.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Free Site Visit",
                desc: "We visit your property to survey the area, discuss your requirements, and offer expert advice.",
              },
              {
                step: "02",
                title: "Material Selection",
                desc: "Choose from our range of premium materials with guidance on the best option for your space and budget.",
              },
              {
                step: "03",
                title: "Professional Install",
                desc: "Our experienced team prepares the ground and installs your patio to the highest standards.",
              },
              {
                step: "04",
                title: "Completion &amp; Care",
                desc: "We clean up thoroughly and provide aftercare advice so your patio stays beautiful for years.",
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
            Ready to Create Your Perfect <span className="text-gradient">Patio</span>?
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto mb-8">
            Get in touch today for a free, no-obligation quote. Let us help you
            design and build the outdoor space you have always wanted.
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
