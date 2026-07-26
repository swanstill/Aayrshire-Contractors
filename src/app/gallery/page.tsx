"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const images = [
  { id: "01059949-5de4-4bf0-8543-c571850b092f", alt: "Landscaping project showcase" },
  { id: "043ea79d-0bbf-4dbf-b080-08c000513efc", alt: "Garden design and landscaping" },
  { id: "0e957f01-5986-4acf-9eec-43ab7b9388a3", alt: "Outdoor patio installation" },
  { id: "554c36cf-beae-452f-a4d1-cad44ad3a0c9", alt: "Paving project" },
  { id: "708498c4-4304-43ed-a80b-53f0db7bc726", alt: "Landscaping transformation" },
  { id: "80ca0ba0-d089-4252-8ba3-e38a6de84c85", alt: "Garden makeover" },
  { id: "89c1064d-f710-47fe-bdfd-faf2938faeae", alt: "Patio and paving work" },
  { id: "8c8ee32f-512f-418d-aad0-e68b219ba668", alt: "Outdoor renovation project" },
  { id: "a4de0578-e49b-455a-9b91-983cb23ea1e9", alt: "Landscaping and garden design" },
  { id: "a86d809a-577d-44eb-a984-a031abacf8dc", alt: "Patio installation showcase" },
  { id: "b779fd9b-d4d7-47c3-90af-c9efd70dc3f3", alt: "Garden landscaping project" },
  { id: "b8612bf2-e29c-445f-850e-b85d53181459", alt: "Outdoor living space" },
  { id: "c55a75ca-4b90-41df-bb36-53ad2e99f431", alt: "Paving and patio work" },
  { id: "dccaa7dc-a274-4cdd-98f6-03e8137880b2", alt: "Garden transformation" },
  { id: "e749f994-ae42-4157-97ff-920e6363238a", alt: "Landscaping project" },
  { id: "f6b3e6ff-c547-4a21-9bd5-906c5597a505", alt: "Outdoor design and build" },
  { id: "gallery-17", alt: "Patio and landscaping project" },
];

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  const goNext = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );
  }, []);

  const goPrev = useCallback(() => {
    setLightboxIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
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
      <section className="relative min-h-[50vh] flex items-center pt-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="glow-soft absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg)]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20">
          <div className="max-w-3xl">
            <div className="marker-line mb-6 text-[var(--accent)]">Our Portfolio</div>
            <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-tight tracking-tight text-white mb-6">
              Our <span className="text-gradient">Project Gallery</span>
            </h1>
            <p className="text-lg lg:text-xl text-[var(--fg-2)] max-w-2xl leading-relaxed">
              Browse through our completed projects — from stunning patios and
              paving to full garden transformations across Ayrshire. Each project
              reflects our commitment to quality craftsmanship and beautiful design.
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-[80px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="marker-line justify-center mb-6">Our Work</div>
            <h2 className="font-display font-extrabold text-4xl lg:text-5xl leading-tight tracking-tight text-[var(--fg)] mb-5">
              Transforming Outdoor Spaces Across{" "}
              <span className="text-gradient">Ayrshire</span>
            </h2>
            <p className="text-[var(--muted)] max-w-2xl mx-auto">
              Click on any image to view it full-screen and browse through our
              complete portfolio.
            </p>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, index) => (
              <button
                key={img.id}
                onClick={() => openLightbox(index)}
                className="img-zoom w-full break-inside-avoid rounded-2xl overflow-hidden border border-[var(--line)] bg-[var(--bg-2)] group cursor-pointer text-left relative"
              >
                <Image
                  src={`/gallery/${img.id}.jpg`}
                  alt={img.alt}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700"
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

      {/* CTA */}
      <section className="py-[80px] relative overflow-hidden">
        <div className="glow-soft absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <div className="marker-line justify-center mb-6">Get Started</div>
          <h2 className="font-display font-extrabold text-4xl lg:text-5xl leading-tight tracking-tight text-[var(--fg)] mb-5">
            Ready to Transform Your <span className="text-gradient">Outdoor Space</span>?
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto mb-8">
            Get your free, no-obligation quote today. Our team is ready to bring
            your vision to life with the same quality you see in our projects.
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
                src={`/gallery/${images[lightboxIndex].id}.jpg`}
                alt={images[lightboxIndex].alt}
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
            {lightboxIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
