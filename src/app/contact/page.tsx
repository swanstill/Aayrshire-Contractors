import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
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
            <div className="marker-line mb-6 text-[var(--accent)]">Get in Touch</div>
            <h1 className="font-display font-extrabold text-5xl lg:text-7xl leading-tight tracking-tight text-white mb-6">
              Let&apos;s Talk About Your <br />
              <span className="text-gradient">Outdoor Project</span>
            </h1>
            <p className="text-lg lg:text-xl text-[var(--fg-2)] max-w-2xl leading-relaxed">
              Whether you have a clear vision or need some inspiration, our team
              is here to help. Get in touch for a free consultation and
              no-obligation quote.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="tel:07427009786"
                className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold"
              >
                <i className="fa-solid fa-phone"></i> 07427 009786
              </a>
              <a
                href="mailto:ayrshirecontractors@gmail.com"
                className="btn-ghost inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold"
              >
                <i className="fa-solid fa-envelope"></i> Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form & Details */}
      <section className="py-[80px]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="marker-line mb-6">Send Us a Message</div>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl leading-tight tracking-tight text-[var(--fg)] mb-8">
                Ready for a <span className="text-gradient">Free Quote</span>?
              </h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="John Smith"
                      className="form-input"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="form-input"
                      required
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="07427 009786"
                      className="form-input"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[var(--fg)] mb-2">
                      Service Interested In
                    </label>
                    <select className="form-input appearance-none">
                      <option value="">Select a service...</option>
                      <option value="landscaping">Landscaping &amp; Garden Design</option>
                      <option value="patios">Patios &amp; Paving</option>
                      <option value="both">Both Services</option>
                      <option value="other">Something Else</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--fg)] mb-2">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project — the more detail the better!"
                    rows={5}
                    className="form-input resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full text-sm font-semibold"
                >
                  Send Message <i className="fa-solid fa-paper-plane text-xs"></i>
                </button>
              </form>
            </div>

            {/* Details */}
            <div className="lg:col-span-2 space-y-6">
              <div className="marker-line mb-6">Contact Information</div>
              <h2 className="font-display font-extrabold text-3xl lg:text-4xl leading-tight tracking-tight text-[var(--fg)] mb-8">
                Here&apos;s How to <span className="text-gradient">Reach Us</span>
              </h2>

              {/* Phone */}
              <a
                href="tel:07427009786"
                className="card-hover flex items-start gap-5 p-6 rounded-2xl border border-[var(--line)] bg-[var(--bg-2)] group"
              >
                <div className="icon-circle shrink-0">
                  <i className="fa-solid fa-phone"></i>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[var(--fg)] mb-1">
                    Phone
                  </h3>
                  <p className="text-sm text-[var(--muted)] group-hover:text-[var(--accent)] transition">
                    07427 009786
                  </p>
                  <p className="text-xs text-[var(--muted-2)] mt-1">
                    Mon–Sat: 7:30am – 6:00pm
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:ayrshirecontractors@gmail.com"
                className="card-hover flex items-start gap-5 p-6 rounded-2xl border border-[var(--line)] bg-[var(--bg-2)] group"
              >
                <div className="icon-circle shrink-0">
                  <i className="fa-solid fa-envelope"></i>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[var(--fg)] mb-1">
                    Email
                  </h3>
                  <p className="text-sm text-[var(--muted)] group-hover:text-[var(--accent)] transition break-all">
                    ayrshirecontractors@gmail.com
                  </p>
                  <p className="text-xs text-[var(--muted-2)] mt-1">
                    We aim to respond within 24 hours
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="card-hover flex items-start gap-5 p-6 rounded-2xl border border-[var(--line)] bg-[var(--bg-2)]">
                <div className="icon-circle shrink-0">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[var(--fg)] mb-1">
                    Address
                  </h3>
                  <p className="text-sm text-[var(--muted)]">
                    Unit 7, Ayr Business Park
                  </p>
                  <p className="text-sm text-[var(--muted)]">Ayr, KA7 3FS</p>
                </div>
              </div>

              {/* Hours */}
              <div className="card-hover flex items-start gap-5 p-6 rounded-2xl border border-[var(--line)] bg-[var(--bg-2)]">
                <div className="icon-circle shrink-0">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div>
                  <h3 className="font-display font-bold text-[var(--fg)] mb-1">
                    Business Hours
                  </h3>
                  <div className="text-sm text-[var(--muted)] space-y-1">
                    <p>Monday – Saturday: 7:30am – 6:00pm</p>
                    <p>Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="relative h-[400px] lg:h-[450px] overflow-hidden">
        <div className="absolute inset-0 bg-[var(--bg-2)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17911.34893660615!2d-4.6326!3d55.4587!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488842a5b8a1b6b5%3A0x8e5b5e5f5e5b5e5f!2sAyr%2C%20UK!5e0!3m2!1sen!2suk!4v1"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.3)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ayrshire Contractors Location"
          />
        </div>
        <div className="absolute inset-0 pointer-events-none" />
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
            your vision to life.
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
