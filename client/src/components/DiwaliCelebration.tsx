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

  // Generate firecracker particles
  const firecrackers = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    delay: Math.random() * 0.5,
    x: Math.random() * 100,
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
    <div className="fixed inset-0 z-[9999] pointer-events-none">
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
              y: [-100, -400, -500],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 2,
              delay: cracker.delay,
              ease: "easeOut",
            }}
          >
            {/* Firecracker burst effect */}
            <div
              className="w-3 h-3 rounded-full blur-sm"
              style={{
                backgroundColor: cracker.color,
                boxShadow: `0 0 20px ${cracker.color}, 0 0 40px ${cracker.color}`,
              }}
            />
            
            {/* Trail effect */}
            <motion.div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-20"
              style={{
                background: `linear-gradient(to bottom, ${cracker.color}, transparent)`,
                filter: "blur(2px)",
              }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: [0, 1, 0] }}
              transition={{ duration: 1.5, delay: cracker.delay }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Happy Diwali Message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full px-4"
            initial={{ scale: 0, opacity: 0, rotate: -180 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0, opacity: 0, rotate: 180 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <div className="relative inline-block">
              {/* Glow effect behind text */}
              <div className="absolute inset-0 blur-3xl bg-gradient-to-r from-orange-500 via-yellow-500 to-red-500 opacity-50 animate-pulse" />
              
              {/* Main text */}
              <h1
                className="relative text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-orange-400 via-yellow-300 to-red-400 bg-clip-text text-transparent whitespace-nowrap"
                style={{
                  textShadow: "0 0 30px rgba(255, 165, 0, 0.8), 0 0 60px rgba(255, 215, 0, 0.6)",
                  fontFamily: "'Playfair Display', serif",
                }}
              >
                Happy Diwali
              </h1>
              
              {/* Decorative diya icons */}
              <div className="flex justify-center gap-8 mt-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl"
                >
                  🪔
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="text-4xl"
                >
                  ✨
                </motion.div>
                <motion.div
                  animate={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-4xl"
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
