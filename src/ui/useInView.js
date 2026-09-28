import { useEffect, useRef, useState } from "react";

// One-shot visibility flag for scroll-reveal. Fires once via
// IntersectionObserver (no rAF, no per-frame work) and disconnects.
export default function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(
    typeof IntersectionObserver === "undefined",
  );

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, options ?? { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, inView];
}
