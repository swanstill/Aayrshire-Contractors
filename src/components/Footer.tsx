import Image from "next/image";

export default function Footer() {
  return (
    <footer id="contact" className="py-16 lg:py-20 bg-[var(--bg-3)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-4">
            <a href="#" className="flex items-center gap-3 mb-5">
              <Image
                src="https://z-cdn-media.chatglm.cn/files/a88b650a-6903-4392-918b-42d4e36484af.jpg?auth_key=1884723959-bcde81dd40334b41a960e1c90e971a95-0-e5a09e18619a38a90eba9b161828ebde"
                alt="Ayrshire Contractors Logo"
                width={96}
                height={96}
                className="h-24 w-auto rounded-lg object-contain shadow-sm"
              />
            </a>
            <p className="text-sm text-[var(--muted)] leading-relaxed mb-6 max-w-sm">
              Ayrshire Contractors is a family run business based in
              Kilmarnock, covering all of Ayrshire offering free quotations
              and advice.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition"
            >
              <i className="fa-brands fa-facebook-f"></i>
              Follow us on Facebook
            </a>
          </div>

          <div className="lg:col-span-4">
            <h5 className="font-display font-bold text-sm uppercase tracking-widest mb-5 text-[var(--fg)]">
              Quick Links
            </h5>
            <ul className="space-y-3 text-sm text-[var(--muted)]">
              <li>
                <a href="#" className="hover:text-[var(--accent)] transition">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--accent)] transition"
                >
                  Landscaping
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-[var(--accent)] transition"
                >
                  Patios
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-[var(--accent)] transition"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-4">
            <h5 className="font-display font-bold text-sm uppercase tracking-widest mb-5 text-[var(--fg)]">
              Get In Touch
            </h5>
            <div className="space-y-3 text-sm">
              <a
                href="tel:08001234567"
                className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--accent)] transition"
              >
                <i className="fa-solid fa-phone text-[var(--accent)] w-4"></i>
                07427 009786
              </a>
              <a
                href="mailto:ayrshirecontractors@gmail.com"
                className="flex items-center gap-3 text-[var(--muted)] hover:text-[var(--accent)] transition"
              >
                <i className="fa-solid fa-envelope text-[var(--accent)] w-4"></i>
                ayrshirecontractors@gmail.com
              </a>
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <i className="fa-solid fa-location-dot text-[var(--accent)] w-4"></i>
                Unit 7, Ayr Business Park, KA7 3FS
              </div>
              <div className="flex items-center gap-3 text-[var(--muted)]">
                <i className="fa-solid fa-clock text-[var(--accent)] w-4"></i>
                Mon–Sat: 7:30am – 6:00pm
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--line-strong)] flex flex-wrap items-center justify-between gap-4 text-xs text-[var(--muted)]">
          <div>© 2026 Ayrshire Contractors. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--accent)] transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[var(--accent)] transition">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[var(--accent)] transition">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
