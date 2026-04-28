"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const STEPS = [
  { num: "1", title: "Skill Gap Analysis", desc: "Assess team skill gaps and developmental needs.", iconPaths: ["M12 16v5","M16 14v7","M20 10v11","m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15","M4 18v3","M8 14v7"] },
  { num: "2", title: "Customized Training Plan", desc: "Create a tailored roadmap addressing organizational goals.", iconPaths: ["M2 3h20","M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3","m7 21 5-5 5 5"] },
  { num: "3", title: "Flexible Program Delivery", desc: "Deliver adaptable programs aligned with industry needs.", iconPaths: ["M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z","M12 17v4","M8 21h8"] },
];

export default function HowItWorks() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  return (
    <section id="how-it-works" ref={sectionRef} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="section-heading">How We <span className="t-accent">Deliver Results</span> That Matter?</h2>
          <p className="section-subheading">A Structured Three-Step Approach to <span className="t-accent">Skill Development</span></p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 px-2 sm:px-4 animate-on-scroll">
          {STEPS.map((step, i) => (
            <div key={step.num} className="relative max-w-[18rem] w-full" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="relative glass-card rounded-2xl p-4 sm:p-6 flex flex-col items-center text-center hover:-translate-y-1">
                <div className="absolute left-[-4px] sm:left-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-primary-500/60 rounded-lg" />
                <div className="absolute right-[-4px] sm:right-[-8px] top-1/2 -translate-y-1/2 w-1 sm:w-2 h-12 sm:h-36 bg-primary-500/60 rounded-lg" />
                <div className="absolute left-[10px] top-6 -translate-y-1/2 w-6 h-6 rounded-full flex justify-center items-center font-bold text-sm t-heading" style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}>{step.num}</div>
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-primary-500/80 text-white rounded-full shadow-lg shadow-primary-500/20">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {step.iconPaths.map((d, j) => <path key={j} d={d} />)}
                    {step.num === "3" && <rect x="2" y="3" width="20" height="14" rx="2" />}
                  </svg>
                </div>
                <h3 className="text-md sm:text-lg font-semibold t-heading mt-4">{step.title}</h3>
                <p className="t-muted hidden sm:block text-sm mt-2">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
