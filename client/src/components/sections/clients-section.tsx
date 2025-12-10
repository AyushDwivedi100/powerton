import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  getTestimonials,
  getClientLogos,
} from "@/data/constants";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";

export default function ClientsSection() {
  const { t, i18n } = useTranslation(["pages", "common"]);
  const testimonials = getTestimonials(t);
  const clientLogos = getClientLogos(t);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [triggerAnimation, setTriggerAnimation] = useState(0);
  const [entryDirection, setEntryDirection] = useState<"left" | "right">(
    "right"
  );
  const [exitDirection, setExitDirection] = useState<"left" | "right">("right");

  // Check if current language is Arabic (RTL)
  const isRTL = i18n.language === "ar";

  // Auto-slide functionality for testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      try {
        setExitDirection("left"); // Auto-play: current exits LEFT
        setTimeout(() => {
          setEntryDirection("right");
          setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          );
          setTriggerAnimation((prev) => prev + 1);
        }, 10);
      } catch (error) {
        console.log("Testimonial auto-slide handled gracefully:", error);
        clearInterval(interval);
      }
    }, 5000); // Change testimonial every 5 seconds

    return () => {
      try {
        clearInterval(interval);
      } catch (error) {
        console.log("Clearing testimonial interval handled gracefully:", error);
      }
    };
  }, [isAutoPlaying]);

  // Pure CSS-based infinite scroll - no JavaScript state updates
  const [isHovered, setIsHovered] = useState(false);

  const goToPrevious = useCallback(() => {
    setIsAutoPlaying(false); // Stop autoplay immediately
    const newIndex =
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1;
    setExitDirection("right"); // Current review should exit RIGHT (opposite of left arrow)
    setTimeout(() => {
      setEntryDirection("left"); // New review enters from LEFT
      setCurrentIndex(newIndex);
      setTriggerAnimation((prev) => prev + 1);
    }, 10);
    // Resume auto-play after 8 seconds
    setTimeout(() => {
      try {
        setIsAutoPlaying(true);
      } catch (error) {
        console.log(
          "Previous button auto-play resume handled gracefully:",
          error
        );
      }
    }, 8000);
  }, [currentIndex, testimonials.length]);

  const goToNext = useCallback(() => {
    setIsAutoPlaying(false); // Stop autoplay immediately
    const newIndex =
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1;
    setExitDirection("left"); // Current review should exit LEFT (opposite of right arrow)
    setTimeout(() => {
      setEntryDirection("right"); // New review enters from RIGHT
      setCurrentIndex(newIndex);
      setTriggerAnimation((prev) => prev + 1);
    }, 10);
    // Resume auto-play after 8 seconds
    setTimeout(() => {
      try {
        setIsAutoPlaying(true);
      } catch (error) {
        console.log("Next button auto-play resume handled gracefully:", error);
      }
    }, 8000);
  }, [currentIndex, testimonials.length]);

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-background" role="main">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <span className="text-secondary font-semibold text-lg">
            {t("pages:home.clients.label")}
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mt-3 sm:mt-4 mb-4 sm:mb-6">
            {t("pages:home.clients.title")}
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-2 sm:px-0">
            {t("pages:home.clients.description")}
          </p>
        </div>

        {/* Client Logos Slideshow - Pure CSS infinite scroll */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <div
            className="relative overflow-hidden bg-muted rounded-lg border border-border py-4 md:py-6 lg:py-8"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div
              className={`flex ${
                isRTL
                  ? "animate-infinite-scroll-rtl"
                  : "animate-infinite-scroll"
              } ${isHovered ? "paused" : ""}`}
              style={{
                width: `${clientLogos.length * 2 * 182}px`, // Double width for seamless loop (182px per card)
              }}
            >
              {/* Render clients twice for seamless infinite loop */}
              {[...clientLogos, ...clientLogos].map((client, index) => (
                <div
                  key={`${client.id}-${Math.floor(
                    index / clientLogos.length
                  )}`}
                  className="flex-shrink-0 bg-white dark:bg-white rounded-lg border border-border p-3 md:p-4 lg:p-5 flex items-center justify-center hover:shadow-lg transition-all duration-300 mx-2 md:mx-3 lg:mx-4"
                  style={{
                    width: "150px",
                    minWidth: "150px",
                  }}
                >
                  <div className="text-center w-full">
                    <img
                      src={client.logo}
                      alt={`ID-820-${index}: ${t(
                        `common:clients.${client.id}`,
                        client.name
                      )} company logo`}
                      className="w-full h-12 md:h-14 lg:h-16 object-contain mb-1"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = client.fallback;
                      }}
                    />
                    <span className="text-xs md:text-xs lg:text-sm font-medium text-gray-700 dark:text-gray-700 block text-center">
                      {t(`common:clients.${client.id}`, client.name)}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Responsive gradient overlays */}
            <div className="absolute top-0 left-0 w-8 md:w-12 lg:w-16 h-full bg-gradient-to-r from-muted to-transparent pointer-events-none z-10"></div>
            <div className="absolute top-0 right-0 w-8 md:w-12 lg:w-16 h-full bg-gradient-to-l from-muted to-transparent pointer-events-none z-10"></div>
          </div>
        </div>

        {/* Testimonials Carousel Section */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 sm:mb-8">
            {t("pages:home.clients.testimonialsTitle")}
          </h3>
        </div>

        <div className="relative max-w-4xl mx-auto px-2 sm:px-4">
          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-card hover:bg-muted border-border shadow-lg"
            aria-label={t("common:aria.previousTestimonial")}
            data-testid="button-previous-testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-card hover:bg-muted border-border shadow-lg"
            aria-label={t("common:aria.nextTestimonial")}
            data-testid="button-next-testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>

          {/* Testimonial Display */}
          <div className="px-8 sm:px-10 md:px-12 py-3 sm:py-4">
            <div className="min-h-[240px] sm:min-h-[280px] md:min-h-[320px] flex items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`testimonial-${currentIndex}-${triggerAnimation}`}
                  initial={{
                    opacity: 0,
                    x: entryDirection === "left" ? -120 : 120,
                  }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{
                    opacity: 0,
                    x: exitDirection === "left" ? -120 : 120,
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="w-full"
                >
                  <Card className="bg-gradient-to-br from-muted/50 to-muted border border-border shadow-lg">
                    <CardContent className="p-4 sm:p-6 md:p-8 lg:p-12">
                      <div className="text-center">
                        {/* Rating Stars */}
                        <div className="flex justify-center items-center mb-6">
                          <div className="flex text-secondary">
                            {[...Array(testimonials[currentIndex].rating)].map(
                              (_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 fill-current"
                                  aria-hidden="true"
                                />
                              )
                            )}
                          </div>
                        </div>

                        {/* Testimonial Text */}
                        <blockquote className="text-sm sm:text-base md:text-lg lg:text-xl text-foreground mb-6 sm:mb-8 italic leading-relaxed min-h-[50px] sm:min-h-[60px] md:min-h-[80px] flex items-center justify-center">
                          "{testimonials[currentIndex].comment}"
                        </blockquote>

                        {/* Client Info */}
                        <div className="flex items-center justify-center">
                          <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center text-white font-semibold mr-4">
                            <span className="text-lg">
                              {testimonials[currentIndex].initials}
                            </span>
                          </div>
                          <div className="text-left">
                            <div className="font-bold text-foreground text-lg">
                              {testimonials[currentIndex].name}
                            </div>
                            <div className="text-muted-foreground">
                              {testimonials[currentIndex].location}
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Pagination Dots */}
          <div className={`flex justify-center mt-8 gap-2`}>
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  
                  if (index > currentIndex) {
                    setExitDirection("left");
                    setTimeout(() => {
                      setEntryDirection("right");
                      setCurrentIndex(index);
                      setTriggerAnimation((prev) => prev + 1);
                    }, 10);
                  } else if (index < currentIndex) {
                    setExitDirection("right");
                    setTimeout(() => {
                      setEntryDirection("left");
                      setCurrentIndex(index);
                      setTriggerAnimation((prev) => prev + 1);
                    }, 10);
                  }
                  
                  setTimeout(() => {
                    try {
                      setIsAutoPlaying(true);
                    } catch (error) {
                      console.log(
                        "Pagination dot auto-play resume handled gracefully:",
                        error
                      );
                    }
                  }, 8000);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-muted hover:bg-muted/80"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                data-testid={`dot-testimonial-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
