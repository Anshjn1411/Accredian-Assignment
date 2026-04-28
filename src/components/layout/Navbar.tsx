"use client";

import { useState, useEffect, useCallback } from "react";
import { useTheme } from "@/components/providers/ThemeProvider";
import { NAV_ITEMS } from "@/data/navigation";

interface NavbarProps {
  onEnquireClick: () => void;
}

export default function Navbar({ onEnquireClick }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);

    const sections = NAV_ITEMS.map((item) => item.href.replace("#", ""));
    for (let i = sections.length - 1; i >= 0; i--) {
      const el = document.getElementById(sections[i]);
      if (el && el.getBoundingClientRect().top <= 100) {
        setActiveSection(sections[i]);
        break;
      }
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (href: string) => {
    setIsMobileMenuOpen(false);
    document
      .getElementById(href.replace("#", ""))
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const isActive = (href: string) =>
    activeSection === href.replace("#", "");

  return (
    <nav
      id="navbar"
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: isScrolled ? "var(--nav-scroll)" : "var(--nav-bg)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        borderBottom: isScrolled ? "1px solid var(--glass-border)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollTo("#home"); }}
            className="flex flex-col"
          >
            <span className="text-2xl md:text-[28px] font-bold text-primary-500 tracking-tight leading-none">
              accredian
            </span>
            <span className="text-[9px] t-muted tracking-wider leading-none mt-0.5">
              credentials that matter
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.label}
                onClick={() => scrollTo(item.href)}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-all duration-300 ${
                  isActive(item.href) ? "t-heading" : "t-body hover:t-heading"
                }`}
                style={
                  isActive(item.href)
                    ? { background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }
                    : {}
                }
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300"
              style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5 t-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 t-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                </svg>
              )}
            </button>

            <button
              onClick={onEnquireClick}
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-5 py-2.5 rounded-xl transition-all text-sm shadow-lg shadow-primary-500/20"
            >
              Enquire Now
            </button>

            {/* Mobile Hamburger */}
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-colors"
              style={{ background: "var(--glass-bg)" }}
              aria-label="Toggle menu"
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className={`block h-0.5 rounded-full transition-all duration-300 ${
                      i === 0 && isMobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""
                    } ${i === 1 && isMobileMenuOpen ? "opacity-0" : ""} ${
                      i === 2 && isMobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""
                    }`}
                    style={{ background: "var(--heading)" }}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="px-4 py-3 space-y-1"
          style={{
            background: "var(--nav-scroll)",
            borderTop: "1px solid var(--glass-border)",
          }}
        >
          {NAV_ITEMS.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollTo(item.href)}
              className={`block w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                isActive(item.href) ? "t-heading" : "t-body"
              }`}
              style={isActive(item.href) ? { background: "var(--glass-bg)" } : {}}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
