"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { HERO_FEATURES, ASSET_BASE } from "@/lib/constants";

interface HeroProps {
  onEnquireClick: () => void;
}

export default function Hero({ onEnquireClick }: HeroProps) {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="animate-on-scroll-left">
            <div className="glass-card rounded-3xl p-8 md:p-10">
              <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold leading-[1.1] t-heading">
                Next-Gen
                <br />
                <span className="t-accent">Expertise</span> For
                <br />
                Your <span className="t-accent">Enterprise</span>
              </h1>

              <p className="text-base md:text-lg t-body mt-5 max-w-md">
                Cultivate high-performance
                <br />
                teams through expert learning.
              </p>

              <div className="flex flex-wrap gap-4 mt-6">
                {HERO_FEATURES.map((feature) => (
                  <div key={feature} className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/80 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-sm font-medium t-body">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button id="hero-enquire-btn" onClick={onEnquireClick} className="btn-primary">
                  Enquire Now
                </button>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-on-scroll-right hidden md:block">
            <div className="glass-card rounded-3xl p-3" style={{ background: "var(--glass-strong)" }}>
              <img
                src={`${ASSET_BASE}/corporate-big-hero-v4.webp`}
                alt="Enterprise Training"
                className="w-full h-auto rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
