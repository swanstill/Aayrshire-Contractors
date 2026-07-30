"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const galleryImages = [
  { src: "/projects/patio-gallery-1.webp", alt: "Beautiful patio paving installation" },
  { src: "/projects/patio-gallery-2.jpg", alt: "Patio outdoor living space showcase" },
  { src: "/projects/patio-gallery-3.jpg", alt: "Garden patio design and landscaping" },
];

export default function PatiosPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % galleryImages.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null
    );
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, goNext, goPrev]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

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

      {/* Project Gallery */}
      <section className="py-[80px] relative overflow-hidden">
        <div className="glow-soft absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="marker-line justify-center mb-6">Project Gallery</div>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl leading-tight tracking-tight text-[var(--fg)] mb-5">
              Our Patio &amp; Paving <span className="text-gradient">Work</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Take a closer look at some of our recent patio and paving projects.
              Click any image to view full-screen.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <button
                key={index}
                onClick={() => openLightbox(index)}
                className="img-zoom rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--bg-2)] group cursor-pointer text-left relative aspect-[4/3]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-xs text-white/80 bg-black/50 px-3 py-1.5 rounded-full backdrop-blur-sm inline-flex items-center gap-1.5">
                    <i className="fa-solid fa-expand text-[10px]"></i>
                    View
                  </span>
                </div>
              </button>
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

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 lg:top-6 lg:right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition z-10 cursor-pointer"
            aria-label="Close lightbox"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-white"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Prev */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-4 lg:left-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition z-10 cursor-pointer"
            aria-label="Previous image"
          >
            <i className="fa-solid fa-chevron-left text-white text-lg"></i>
          </button>

          {/* Image */}
          <div
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full max-w-5xl max-h-[85vh]">
              <Image
                src={galleryImages[lightboxIndex].src}
                alt={galleryImages[lightboxIndex].alt}
                fill
                className="object-contain"
                priority
                sizes="(max-width: 768px) 100vw, 80vw"
              />
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-4 lg:right-6 w-12 h-12 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition z-10 cursor-pointer"
            aria-label="Next image"
          >
            <i className="fa-solid fa-chevron-right text-white text-lg"></i>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/60 text-sm font-medium bg-black/40 px-4 py-2 rounded-full backdrop-blur-sm">
            {lightboxIndex + 1} / {galleryImages.length}
          </div>
        </div>
      )}
    </>
  );
}
