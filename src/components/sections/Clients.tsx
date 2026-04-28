"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PARTNERS } from "@/data/clients";

export default function Clients() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  return (
    <section id="clients" ref={sectionRef} className="section-padding">
      <div className="max-w-5xl mx-auto">
        <div className="text-center animate-on-scroll">
          <h2 className="section-heading">Our Proven <span className="t-accent">Partnerships</span></h2>
          <p className="section-subheading">Successful Collaborations With the <span className="t-accent">Industry&apos;s Best</span></p>
        </div>
        <div className="animate-on-scroll mt-12">
          <div className="glass-card rounded-3xl p-6 md:p-8">
            <ul className="grid grid-cols-3 md:grid-cols-6 gap-6 md:gap-8 xl:gap-12">
              {PARTNERS.map((p) => (
                <li key={p.name} className="flex justify-center items-center p-2 sm:p-4 rounded-2xl cursor-pointer transition-all duration-300">
                  <img src={p.src} alt={p.name} className={`object-contain ${p.size} img-adapt opacity-70 hover:opacity-100 transition-opacity`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
