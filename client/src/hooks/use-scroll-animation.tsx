import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

// Lazy initialization flag - animations only initialize after first scroll
let hasScrolled = false;
const scrollObservers: (() => void)[] = [];

// Listen for first scroll to enable animations
if (typeof window !== 'undefined') {
  const enableAnimations = () => {
    if (!hasScrolled) {
      hasScrolled = true;
      scrollObservers.forEach(callback => callback());
      scrollObservers.length = 0;
    }
  };
  
  // Listen for scroll with passive listener
  window.addEventListener('scroll', enableAnimations, { passive: true, once: true });
  
  // Also enable after 2 seconds if user hasn't scrolled (for above-fold animations)
  setTimeout(enableAnimations, 2000);
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
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (options.once !== false) {
            observer.unobserve(entry.target);
          }
        } else if (options.once === false) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.2,
        rootMargin: options.rootMargin || "0px 0px -80px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [ref, isVisible];
};

// Advanced hook for multiple elements with stagger - with lazy initialization
export const useScrollAnimations = (staggerDelay = 100) => {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    let elements: NodeListOf<Element> | null = null;

    const initializeObserver = () => {
      elements = document.querySelectorAll("[data-scroll]");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              const element = entry.target as HTMLElement;
              const animation = element.dataset.scroll;
              const delay =
                element.dataset.delay || (index * staggerDelay).toString();

              setTimeout(() => {
                try {
                  element.classList.remove('scroll-animate-hidden');
                  element.classList.add(`animate-${animation}`);
                } catch (error) {
                  console.log(
                    "Animation class addition handled gracefully:",
                    error
                  );
                }
              }, parseInt(delay) || 0);

              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.15,
          rootMargin: "0px 0px -80px 0px",
        }
      );

      elements.forEach((el) => observer!.observe(el));
    };

    // Lazy initialization - only create observer after scroll or after delay
    if (hasScrolled) {
      initializeObserver();
    } else {
      scrollObservers.push(initializeObserver);
    }

    return () => {
      if (observer && elements) {
        elements.forEach((el) => observer!.unobserve(el));
      }
    };
  }, [staggerDelay]);
};

// Framer Motion based scroll animation hook - configured to trigger only once
export const useMotionAnimation = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, {
    margin: "0px 0px -80px 0px",
    once: true, // This ensures animation triggers only once
  } as any);

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

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
  const [ref, controls] = useMotionAnimation();

  // Optimized animation variants with GPU acceleration
  const animations = {
    fadeInUp: {
      hidden: {
        opacity: 0,
        y: 40,
        willChange: "transform, opacity",
      },
      visible: {
        opacity: 1,
        y: 0,
        willChange: "auto",
        transition: {
          duration: 0.6,
          delay,
          ease: [0.21, 1.11, 0.81, 0.99],
        },
      },
    },
    fadeInDown: {
      hidden: {
        opacity: 0,
        y: -40,
        willChange: "transform, opacity",
      },
      visible: {
        opacity: 1,
        y: 0,
        willChange: "auto",
        transition: {
          duration: 0.6,
          delay,
          ease: [0.21, 1.11, 0.81, 0.99],
        },
      },
    },
    fadeInLeft: {
      hidden: {
        opacity: 0,
        x: -40,
        willChange: "transform, opacity",
      },
      visible: {
        opacity: 1,
        x: 0,
        willChange: "auto",
        transition: {
          duration: 0.6,
          delay,
          ease: [0.21, 1.11, 0.81, 0.99],
        },
      },
    },
    fadeInRight: {
      hidden: {
        opacity: 0,
        x: 40,
        willChange: "transform, opacity",
      },
      visible: {
        opacity: 1,
        x: 0,
        willChange: "auto",
        transition: {
          duration: 0.6,
          delay,
          ease: [0.21, 1.11, 0.81, 0.99],
        },
      },
    },
    scaleIn: {
      hidden: {
        opacity: 0,
        scale: 0.95,
        willChange: "transform, opacity",
      },
      visible: {
        opacity: 1,
        scale: 1,
        willChange: "auto",
        transition: {
          duration: 0.6,
          delay,
          ease: [0.21, 1.11, 0.81, 0.99],
        },
      },
    },
    slideInUp: {
      hidden: {
        opacity: 0,
        y: 60,
        willChange: "transform, opacity",
      },
      visible: {
        opacity: 1,
        y: 0,
        willChange: "auto",
        transition: {
          duration: 0.6,
          delay,
          ease: [0.21, 1.11, 0.81, 0.99],
        },
      },
    },
  };

  return (
    <motion.div
      ref={ref as any}
      initial="hidden"
      animate={controls as any}
      variants={
        animations[animation as keyof typeof animations] || animations.fadeInUp
      }
      className={className}
      style={{ transformOrigin: "center center" }}
      {...props}
    >
      {children}
    </motion.div>
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
  const [ref, controls] = useMotionAnimation();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: Math.min(stagger, 0.2),
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      willChange: "transform, opacity",
    },
    visible: {
      opacity: 1,
      y: 0,
      willChange: "auto",
      transition: {
        duration: 0.5,
        ease: [0.21, 1.11, 0.81, 0.99],
      },
    },
  };

  return (
    <motion.div
      ref={ref as any}
      initial="hidden"
      animate={controls as any}
      variants={containerVariants}
      className={className}
      {...props}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants}>{children}</motion.div>
      )}
    </motion.div>
  );
};

// Parallax scroll effect
export const useParallax = (speed = 0.5) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * speed);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return offset;
};

// Helper function to get animation class names
export const getAnimationClass = (animation: string, isVisible: boolean) => {
  if (!isVisible) return "scroll-animate-hidden";

  const animations = {
    fadeInUp: "animate-fadeInUp",
    fadeInDown: "animate-fadeInDown",
    fadeInLeft: "animate-fadeInLeft",
    fadeInRight: "animate-fadeInRight",
    scaleIn: "animate-scaleIn",
    slideInUp: "animate-slideInUp",
  };

  return (
    animations[animation as keyof typeof animations] || animations.fadeInUp
  );
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
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });
  const animationClass = getAnimationClass(animation, isVisible as boolean);
  
  const style = delay > 0 ? { animationDelay: `${delay}s` } : {};

  return (
    <div
      ref={ref as any}
      className={`${animationClass} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

// Optimized staggered animation hook
export const useStaggeredAnimation = (delay: number = 100) => {
  const [ref, isVisible] = useScrollAnimation({ threshold: 0.1 });

  // Use consistent values for smooth animations
  const optimizedTransition = 0.6;
  const optimizedDelay = Math.min(Math.max(delay, 50), 200);

  return {
    ref,
    isVisible,
    getStaggeredStyle: (index: number) => ({
      animationDelay: isVisible ? `${optimizedDelay * index}ms` : "0ms",
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "translateY(0)" : "translateY(20px)",
      transition: `all ${optimizedTransition}s cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
    }),
  };
};
