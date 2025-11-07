import { useEffect, useRef, useState, type CSSProperties, type RefObject } from "react";

type UseRevealAnimationOptions = {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
  delay?: number;
};

type UseRevealAnimationReturn<T extends HTMLElement> = {
  ref: RefObject<T | null>;
  isVisible: boolean;
  style: CSSProperties | undefined;
};

/**
 * Lightweight intersection observer wrapper for scroll-triggered reveal animations.
 */
export function useRevealAnimation<T extends HTMLElement>(
  { threshold = 0.2, rootMargin = "0px 0px -60px 0px", once = true, delay = 0 }: UseRevealAnimationOptions = {}
): UseRevealAnimationReturn<T> {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) {
      return;
    }

    if (typeof window === "undefined" || typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.disconnect();
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, once]);

  const sharedDelay = delay > 0 ? { animationDelay: `${delay}ms`, transitionDelay: `${delay}ms` } : undefined;

  return {
    ref,
    isVisible,
    style: sharedDelay,
  };
}
