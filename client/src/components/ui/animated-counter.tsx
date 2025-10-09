import { useState, useEffect, useRef } from "react";

// Reusable AnimatedCounter Component for animated counting with intersection observer
export function AnimatedCounter({
  target,
  suffix = "",
}: {
  target: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(1);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!isVisible || hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const duration = 2000; // Always 2 seconds
    const startValue = 1;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Use a linear easing for more predictable and synchronized counting
      const easeOutCubic = 1 - Math.pow(1 - progress, 2.5);

      // Calculate current count with better distribution across the timeline
      const range = target - startValue;
      const fractionalCount = startValue + range * easeOutCubic;

      // For all numbers, ensure smooth counting without early completion
      let currentCount;
      if (target < 50) {
        // For small numbers, ensure we don't reach target too early
        currentCount = Math.min(Math.floor(fractionalCount), target - 1);
        // Only show final value in the last 5% of animation
        if (progress >= 0.95) {
          currentCount = target;
        }
      } else {
        currentCount = Math.floor(fractionalCount);
      }

      setCount(Math.max(1, currentCount)); // Ensure minimum value is 1

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target); // Ensure we end at exactly the target
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, target, hasAnimated]);

  return (
    <span ref={counterRef}>
      {count}
      {suffix}
    </span>
  );
}
