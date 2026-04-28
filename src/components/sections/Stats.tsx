"use client";

import { useState, useEffect, useRef } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { STATS } from "@/data/stats";

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let current = 0;
          const increment = target / 125;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  return (
    <section id="stats" ref={sectionRef} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center animate-on-scroll">
          <h2 className="section-heading">
            Our <span className="t-accent">Track Record</span>
          </h2>
          <p className="section-subheading">
            The Numbers Behind <span className="t-accent">Our Success</span>
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 md:mt-16">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className="animate-on-scroll text-center"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="glass-card rounded-2xl p-6 hover:-translate-y-1">
                <div
                  className="inline-flex items-center justify-center px-5 py-2 rounded-full mb-4"
                  style={{ border: "1px solid var(--glass-border)" }}
                >
                  <span className="text-xl md:text-2xl font-bold t-accent">
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </span>
                </div>
                <p className="t-muted text-xs sm:text-sm leading-relaxed capitalize">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
