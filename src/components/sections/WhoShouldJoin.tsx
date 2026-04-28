"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AUDIENCES } from "@/data/audiences";
import { ASSET_BASE } from "@/lib/constants";

export default function WhoShouldJoin() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  return (
    <section ref={sectionRef} className="py-12 sm:py-20 px-4 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">
        <div className="animate-on-scroll">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="md:w-2/5 flex flex-col justify-between">
                <div>
                  <h4 className="text-lg sm:text-xl font-medium t-body">Who Should Join?</h4>
                  <h2 className="text-2xl md:text-[40px] leading-tight capitalize mt-2 font-semibold t-heading">Strategic Skill Enhancement</h2>
                </div>
                <div className="w-[250px] md:w-[300px] mt-6 hidden md:block">
                  <img src={`${ASSET_BASE}/imagehuman.png`} alt="Illustration" className="w-full h-auto drop-shadow-2xl" />
                </div>
              </div>
              <div className="md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-5">
                {AUDIENCES.map((item) => (
                  <div key={item.title} className="glass-card rounded-2xl p-5 group">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-all duration-300" style={{ background: "var(--glass-bg)", border: "1px solid var(--glass-border)" }}>
                      <svg className="w-6 h-6 t-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d={item.iconPath} />
                      </svg>
                    </div>
                    <h3 className="t-heading font-bold text-base mb-1">{item.title}</h3>
                    <p className="t-muted text-sm leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
