import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function DiwaliCelebration() {
  const [show, setShow] = useState(true);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    // Show the message after firecrackers animation starts
    const messageTimer = setTimeout(() => {
      setShowMessage(true);
    }, 1000);

    // Hide everything after 5 seconds
    const hideTimer = setTimeout(() => {
      setShow(false);
    }, 5000);

    return () => {
      clearTimeout(messageTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  // Generate firecracker particles - responsive based on screen
  const getFirecrackerCount = () => {
    if (typeof window === 'undefined') return 15;
    const width = window.innerWidth;
    if (width < 640) return 12; // Mobile
    if (width < 1024) return 15; // Tablet
    return 20; // Desktop
  };

  const firecrackers = Array.from({ length: getFirecrackerCount() }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.5,
    x: 10 + Math.random() * 80, // Keep within 10-90% to avoid edges
    color: [
      "#FFD700", // Gold
      "#FF6B35", // Orange-Red
      "#F7931E", // Orange
      "#FFC300", // Yellow
      "#FF1744", // Red
      "#E040FB", // Purple
      "#00E676", // Green
    ][Math.floor(Math.random() * 7)],
  }));

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[9999] pointer-events-none overflow-hidden">
      {/* Firecrackers Animation */}
      <AnimatePresence>
        {firecrackers.map((cracker) => (
          <motion.div
            key={cracker.id}
            className="absolute"
            style={{
              left: `${cracker.x}%`,
              bottom: 0,
            }}
            initial={{ y: 0, opacity: 0, scale: 0 }}
            animate={{
              y: [-50, -250, -350], // Reduced for mobile screens
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              delay: cracker.delay,
              ease: "easeOut",
            }}
          >
            {/* Firecracker burst effect - responsive size */}
            <div
              className="w-2 h-2 sm:w-3 sm:h-3 rounded-full blur-sm"
              style={{
                backgroundColor: cracker.color,
                boxShadow: `0 0 15px ${cracker.color}, 0 0 30px ${cracker.color}`,
              }}
            />
            
            {/* Trail effect */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-12 sm:h-20"
              style={{
                background: `linear-gradient(to bottom, ${cracker.color}, transparent)`,
                filter: "blur(1px)",
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: cracker.delay }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Happy Diwali Message - Perfectly Centered */}
      <AnimatePresence>
        {showMessage && (
          <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none px-4">
            <motion.div
              className="text-center max-w-full"
              initial={{ scale: 0, opacity: 0, rotate: -180 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0, opacity: 0, rotate: 180 }}
              transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
            >
              <div className="relative">
                {/* Glow effect behind text */}
                <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 opacity-50 animate-pulse" />
                
                {/* Main text - Responsive sizing */}
                <h1
                  className="relative text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-orange-400 via-yellow-300 to-red-400 bg-clip-text text-transparent px-4"
                  style={{
                    textShadow: "0 0 30px rgba(255, 165, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)",
                    fontFamily: "'Playfair Display', serif",
                  }}
                >
                  Happy Diwali
                </h1>
                
                {/* Decorative diya icons */}
                <div className="flex justify-center gap-4 sm:gap-6 md:gap-8 mt-4">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl sm:text-3xl md:text-4xl"
                  >
                    🪔
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="text-2xl sm:text-3xl md:text-4xl"
                  >
                    ✨
                  </motion.div>
                  <motion.div
                    animate={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-2xl sm:text-3xl md:text-4xl"
                  >
                    🪔
                  </motion.div>
                </div>

                {/* Sparkle effects */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      scale: [0, 1, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Ambient glow overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-radial from-orange-500/10 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 4 }}
      />
    </div>
  );
}
