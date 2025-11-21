import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Add js-enabled class to document for progressive enhancement
if (typeof document !== 'undefined') {
  document.documentElement.classList.add('js-enabled');
}

// Simple scroll direction detection for performance
export const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down" | null>(
    null
  );
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const updateScrollDirection = () => {
      const currentScrollY = window.scrollY;
      if (Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setScrollDirection(
          currentScrollY > lastScrollY.current ? "down" : "up"
        );
        lastScrollY.current = currentScrollY;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollDirection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollDirection;
};

// Enhanced hook with better performance and options
interface ScrollAnimationOptions {
  once?: boolean;
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const [isVisible] = useState(true);
  const ref = useRef(null);

  return [ref, isVisible];
};

// Advanced hook for multiple elements with stagger - DISABLED (no animations)
export const useScrollAnimations = (staggerDelay = 100) => {
  useEffect(() => {
    if (typeof document === 'undefined') return;
    
    const elements = document.querySelectorAll("[data-scroll]");
    
    elements.forEach((el) => {
      const element = el as HTMLElement;
      element.classList.remove('scroll-animate-hidden');
    });
  }, [staggerDelay]);
};

// Framer Motion based scroll animation hook - DISABLED (no animations)
export const useMotionAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return [ref, controls];
};

// Enhanced AnimatedSection with Framer Motion
interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: string;
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  [key: string]: any;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fadeInUp",
  className = "",
  delay = 0,
  duration = 0.8,
  stagger = 0.1,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

// Staggered list animation component
interface StaggeredListProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: number;
  [key: string]: any;
}

export const StaggeredList: React.FC<StaggeredListProps> = ({
  children,
  className = "",
  delay = 0,
  stagger = 0.1,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

// Parallax scroll effect - DISABLED (no animations)
export const useParallax = (speed = 0.5) => {
  return 0;
};

// Helper function to get animation class names - DISABLED (returns empty string)
export const getAnimationClass = (animation: string, isVisible: boolean) => {
  return "";
};

// CSS-based AnimatedSection - better performance than Framer Motion
interface CSSAnimatedSectionProps {
  children: React.ReactNode;
  animation?: string;
  className?: string;
  delay?: number;
  [key: string]: any;
}

export const CSSAnimatedSection: React.FC<CSSAnimatedSectionProps> = ({
  children,
  animation = "fadeInUp",
  className = "",
  delay = 0,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

// Optimized staggered animation hook - DISABLED (no animations)
export const useStaggeredAnimation = (delay: number = 100) => {
  const ref = useRef(null);

  return {
    ref,
    isVisible: true,
    getStaggeredStyle: (index: number) => ({
      opacity: 1,
      transform: "translateY(0)",
    }),
  };
};
