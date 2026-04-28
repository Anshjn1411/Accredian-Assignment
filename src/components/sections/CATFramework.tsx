"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ASSET_BASE } from "@/lib/constants";

export default function CATFramework() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  return (
    <section id="cat" ref={sectionRef} className="w-full py-12 sm:py-24 flex flex-col items-center">
      <div className="text-center mx-2 animate-on-scroll">
        <h2 className="section-heading">The <span className="t-accent">CAT Framework</span></h2>
        <p className="section-subheading">Our Proven Approach to <span className="t-accent">Learning Excellence</span></p>
      </div>
      <div className="w-full flex justify-center mt-12 sm:mt-16 animate-on-scroll px-4">
        <div className="glass-card rounded-3xl p-4 md:p-8 w-[95%] sm:w-[80%]">
          <img src={`${ASSET_BASE}/catV2.svg`} alt="CAT Framework" className="w-full h-auto rounded-xl img-adapt" />
        </div>
      </div>
    </section>
  );
}
