"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { COURSE_SEGMENTS } from "@/data/courses";

export default function CourseSegmentation() {
  const sectionRef = useScrollAnimation<HTMLElement>();
  return (
    <section ref={sectionRef} className="py-12 sm:py-24 px-4 md:px-16 text-center">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 animate-on-scroll">
          <h2 className="section-heading">Tailored <span className="t-accent">Course Segmentation</span></h2>
          <p className="section-subheading">Explore <span className="t-accent">Custom-fit Courses</span> Designed to Address Every Professional Focus</p>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 sm:px-6 animate-on-scroll">
          {COURSE_SEGMENTS.map((seg, i) => (
            <div key={seg.title} className="glass-card rounded-2xl overflow-hidden hover:-translate-y-2 group" style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="overflow-hidden">
                <img src={seg.image} alt={seg.title} className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
              <div className="p-4 pb-6">
                <h4 className="text-xl sm:text-2xl font-semibold t-accent">{seg.title}</h4>
                <p className="t-muted mt-2 text-sm">{seg.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
