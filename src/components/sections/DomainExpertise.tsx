"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { DOMAINS } from "@/data/domains";
import type { Domain } from "@/types";

export default function DomainExpertise() {
  const sectionRef = useScrollAnimation<HTMLElement>();

  const DomainCard = ({ domain, index }: { domain: Domain; index: number }) => (
    <div
      className="glass-card rounded-2xl p-6 flex flex-col items-center text-center hover:-translate-y-1 cursor-pointer group"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <svg className="w-10 h-10 t-accent group-hover:scale-110 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d={domain.iconPath} />
      </svg>
      <p className="text-sm font-medium t-body mt-3">{domain.title}</p>
    </div>
  );

  return (
    <section ref={sectionRef} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center animate-on-scroll">
          <h2 className="section-heading">Our <span className="t-accent">Domain Expertise</span></h2>
          <p className="section-subheading"><span className="t-accent">Specialized Programs</span> Designed to Fuel Innovation</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 mt-10 max-w-3xl mx-auto animate-on-scroll">
          {DOMAINS.slice(0, 3).map((d, i) => <DomainCard key={d.title} domain={d} index={i} />)}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-5 mt-3 sm:mt-5 max-w-3xl mx-auto animate-on-scroll">
          {DOMAINS.slice(3, 6).map((d, i) => <DomainCard key={d.title} domain={d} index={i + 3} />)}
        </div>
        <div className="flex justify-center mt-3 sm:mt-5 animate-on-scroll">
          <div className="w-full sm:w-[calc(33.33%-0.83rem)] max-w-[250px]">
            <DomainCard domain={DOMAINS[6]} index={6} />
          </div>
        </div>
      </div>
    </section>
  );
}
