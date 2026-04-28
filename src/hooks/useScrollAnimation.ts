import { useEffect, useRef } from "react";

/**
 * Custom hook for scroll-triggered animations.
 * Observes children with `.animate-on-scroll`, `.animate-on-scroll-left`,
 * or `.animate-on-scroll-right` classes and adds `.visible` on intersection.
 */
export function useScrollAnimation<T extends HTMLElement>(threshold = 0.1) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold }
    );

    const selectors = ".animate-on-scroll, .animate-on-scroll-left, .animate-on-scroll-right";
    ref.current?.querySelectorAll(selectors).forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
