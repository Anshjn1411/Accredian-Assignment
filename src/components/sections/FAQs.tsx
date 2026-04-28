"use client";
import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FAQ_CATEGORIES, FAQ_DATA } from "@/data/faqs";

interface FAQsProps { onEnquireClick: () => void; }

export default function FAQs({ onEnquireClick }: FAQsProps) {
  const [activeCategory, setActiveCategory] = useState<string>(FAQ_CATEGORIES[0]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const sectionRef = useScrollAnimation<HTMLElement>();

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setOpenIndex(0);
  };

  return (
    <section id="faqs" ref={sectionRef} className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center animate-on-scroll">
          <h2 className="section-heading">Frequently Asked <span className="t-accent">Questions</span></h2>
        </div>
        <div className="mt-12 animate-on-scroll">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Categories */}
            <div className="md:w-64 flex-shrink-0">
              <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-visible pb-2 md:pb-0">
                {FAQ_CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => handleCategoryChange(cat)}
                    className={`px-5 py-3 rounded-xl text-sm font-medium whitespace-nowrap transition-all duration-300 ${
                      activeCategory === cat
                        ? "bg-primary-500 text-white shadow-lg shadow-primary-500/30"
                        : "glass-card t-body"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Questions */}
            <div className="flex-1 space-y-4">
              {FAQ_DATA[activeCategory].map((faq, i) => (
                <div key={faq.question} className="glass-card rounded-2xl overflow-hidden">
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="font-semibold t-heading text-sm md:text-base pr-4">{faq.question}</span>
                    <svg
                      className={`w-5 h-5 t-accent flex-shrink-0 transition-transform duration-300 ${openIndex === i ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </button>
                  <div className={`overflow-hidden transition-all duration-400 ${openIndex === i ? "max-h-60" : "max-h-0"}`}>
                    <p className="px-5 pb-5 t-muted text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <button onClick={onEnquireClick} className="btn-primary">Enquire Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}
