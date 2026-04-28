"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ASSET_BASE } from "@/lib/constants";

export default function AccredianEdge() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  return (
    <section id="edge" ref={sectionRef} className="section-padding">
      <div className="max-w-6xl mx-auto">
        <div className="text-center animate-on-scroll">
          <h2 className="section-heading">The <span className="t-accent">Accredian Edge</span></h2>
          <p className="section-subheading">Key Aspects of <span className="t-accent">Our Strategic Training</span></p>
        </div>
        <div className="w-full flex justify-center items-center mt-10 mb-8 animate-on-scroll">
          <div className="glass-card rounded-3xl p-4 md:p-6 w-full">
            <img src={`${ASSET_BASE}/accredian-edge-usp-v3.svg`} alt="Accredian Edge USP" className="w-full h-auto rounded-xl img-adapt" />
          </div>
        </div>
      </div>
    </section>
  );
}
