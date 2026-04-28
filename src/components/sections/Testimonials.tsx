"use client";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { TESTIMONIALS } from "@/data/testimonials";
import type { Testimonial } from "@/types";

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="glass-card rounded-2xl p-6 flex flex-col justify-start items-start min-h-[220px] h-full">
      <div className="h-14 mb-4 flex items-center">
        <div className="glass-card rounded-xl p-2">
          <img loading="lazy" className="h-10 w-10 object-contain img-adapt" src={testimonial.logo} alt={testimonial.company} />
        </div>
      </div>
      <p className="t-body text-base font-light leading-relaxed">&ldquo;{testimonial.quote}&rdquo;</p>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  const [slide, setSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const totalSlides = isMobile ? TESTIMONIALS.length : 2;

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % totalSlides), 5000);
    return () => clearInterval(t);
  }, [totalSlides]);

  return (
    <section id="testimonials" ref={sectionRef} className="w-full py-12 sm:py-20 flex flex-col items-center px-4">
      <div className="text-center mb-8 sm:mb-10 animate-on-scroll">
        <h2 className="section-heading">Testimonials from <span className="t-accent">Our Partners</span></h2>
        <p className="section-subheading">What <span className="t-accent">Our Clients</span> Are Saying</p>
      </div>
      <div className="w-full max-w-5xl animate-on-scroll">
        <div className="overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${slide * 100}%)` }}>
            {isMobile ? (
              /* Mobile: 1 card per slide */
              TESTIMONIALS.map((t) => (
                <div key={t.company} className="w-full flex-shrink-0 px-1">
                  <TestimonialCard testimonial={t} />
                </div>
              ))
            ) : (
              /* Desktop: 2 cards per slide */
              <>
                <div className="w-full flex-shrink-0 flex gap-4 px-1">
                  {TESTIMONIALS.slice(0, 2).map((t) => (
                    <div key={t.company} className="flex-1 min-w-0"><TestimonialCard testimonial={t} /></div>
                  ))}
                </div>
                <div className="w-full flex-shrink-0 flex gap-4 px-1">
                  <div className="flex-1 max-w-[50%]"><TestimonialCard testimonial={TESTIMONIALS[2]} /></div>
                  <div className="flex-1" />
                </div>
              </>
            )}
          </div>
        </div>
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`h-3 rounded-full transition-all duration-300 ${slide === i ? "bg-primary-500 w-8" : "w-3"}`}
              style={slide !== i ? { background: "var(--glass-bg)", border: "1px solid var(--glass-border)" } : {}}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
