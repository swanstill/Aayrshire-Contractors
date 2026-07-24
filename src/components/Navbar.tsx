"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[#0D0D0D] border-b border-white/5 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 lg:px-10 py-3 lg:py-4 flex items-center justify-between gap-1 lg:gap-2">
        {/* Logo */}
        <a href="#" className="flex items-center group max-w-[140px] lg:max-w-none shrink-0 min-w-0">
          <img
            src="https://z-cdn-media.chatglm.cn/files/a88b650a-6903-4392-918b-42d4e36484af.jpg?auth_key=1884723959-bcde81dd40334b41a960e1c90e971a95-0-e5a09e18619a38a90eba9b161828ebde"
            alt="Ayrshire Contractors Logo"
            className="h-14 lg:h-20 w-auto rounded-lg shadow-sm block max-w-full"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-9 text-sm font-medium text-[var(--fg)]">
          <a href="#" className="hover:text-[var(--accent)] transition">
            Home
          </a>
          <a href="#services" className="hover:text-[var(--accent)] transition">
            Landscaping
          </a>
          <a href="#services" className="hover:text-[var(--accent)] transition">
            Patios
          </a>
          <a href="#contact" className="hover:text-[var(--accent)] transition">
            Contact
          </a>
        </div>

        {/* Right */}
        <div className="flex items-center gap-1.5 lg:gap-3 min-w-0 shrink-0">
          <a
            href="tel:08001234567"
            className="hidden lg:flex items-center gap-2 text-sm font-medium hover:text-[var(--accent)] transition"
          >
            <i className="fa-solid fa-phone-volume text-[var(--accent)]"></i>
            <span>07427 009786</span>
          </a>
          <a
            href="#quote"
            className="btn-primary px-3 lg:px-5 py-2 lg:py-2.5 rounded-full text-xs lg:text-sm font-semibold flex items-center gap-1 lg:gap-2"
          >
            Get a free quote
            <i className="fa-solid fa-arrow-right text-[10px] lg:text-xs"></i>
          </a>
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1 p-1.5 rounded-lg hover:bg-white/5 transition cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[2px] bg-[var(--fg)] transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[var(--fg)] transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-[var(--fg)] transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 lg:hidden ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeMenu}
        />
        {/* Drawer */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0D0D0D] border-l border-[var(--line)] shadow-2xl transition-transform duration-300 ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close button inside drawer */}
          <button
            onClick={closeMenu}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/5 transition cursor-pointer"
            aria-label="Close menu"
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
              className="text-[var(--fg)]"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <div className="flex flex-col py-20 px-8 gap-2">
            <a
              href="#"
              onClick={closeMenu}
              className="text-lg font-medium text-[var(--fg)] hover:text-[var(--accent)] transition py-3 px-4 rounded-xl hover:bg-white/5"
            >
              Home
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="text-lg font-medium text-[var(--fg)] hover:text-[var(--accent)] transition py-3 px-4 rounded-xl hover:bg-white/5"
            >
              Landscaping
            </a>
            <a
              href="#services"
              onClick={closeMenu}
              className="text-lg font-medium text-[var(--fg)] hover:text-[var(--accent)] transition py-3 px-4 rounded-xl hover:bg-white/5"
            >
              Patios
            </a>
            <a
              href="#contact"
              onClick={closeMenu}
              className="text-lg font-medium text-[var(--fg)] hover:text-[var(--accent)] transition py-3 px-4 rounded-xl hover:bg-white/5"
            >
              Contact
            </a>
            <div className="border-t border-[var(--line)] my-6" />
            <a
              href="tel:07427009786"
              onClick={closeMenu}
              className="flex items-center gap-3 text-base text-[var(--fg)] hover:text-[var(--accent)] transition py-3 px-4 rounded-xl hover:bg-white/5"
            >
              <i className="fa-solid fa-phone-volume text-[var(--accent)]" />
              07427 009786
            </a>
            <a
              href="#quote"
              onClick={closeMenu}
              className="btn-primary text-center px-5 py-3 rounded-full text-sm font-semibold mt-4"
            >
              Get a Free Quote
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
