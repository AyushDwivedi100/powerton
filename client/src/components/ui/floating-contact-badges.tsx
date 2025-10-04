import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import justDialQRImage from "@assets/downloaded_images/justdial-qr-logo.png";

// WhatsApp Logo SVG Component
const WhatsAppLogo = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.516" />
  </svg>
);

// Just Dial Logo Component - Using full badge space with cropped logo
const JustDialLogo = () => (
  <div
    className="w-14 h-14 rounded-full flex items-center justify-center overflow-hidden inset-0"
    style={{
      backgroundImage: `url(${justDialQRImage})`,
      backgroundSize: "200px 200px", // Scale up more to crop center logo for full badge
      backgroundPosition: "center center", // Center the logo
      backgroundRepeat: "no-repeat",
    }}
  >
    {/* Clean overlay for logo on white background */}
    <div className="w-full h-full bg-transparent" />
  </div>
);

export default function FloatingContactBadges() {
  const { t } = useTranslation("common");
  
  const handleWhatsAppClick = () => {
    const phoneNumber = "919462771662";
    const message = t("ui.messages.whatsappGreeting");
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleJustDialClick = () => {
    window.open("https://jsdl.in/DT-23ETWWE2VJP", "_blank");
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Badge */}
      <motion.button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors relative"
        data-testid="button-whatsapp-contact"
        whileHover={{
          scale: 1.4,
          rotate: 0,
          y: 0,
          boxShadow:
            "0 25px 60px rgba(34, 197, 94, 0.8), 0 0 0 2px rgba(34, 197, 94, 0.4), 0 0 50px rgba(34, 197, 94, 0.7), inset 0 2px 0 rgba(255, 255, 255, 0.4)",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        animate={{
          scale: [1, 1.08, 1.02, 1.08, 1],
          y: [0, -3, 0, -2, 0],
          boxShadow: [
            "0 8px 25px rgba(34, 197, 94, 0.4), 0 0 0 1px rgba(34, 197, 94, 0.1), 0 0 20px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
            "0 15px 40px rgba(34, 197, 94, 0.6), 0 0 0 1px rgba(34, 197, 94, 0.2), 0 0 35px rgba(34, 197, 94, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
            "0 12px 35px rgba(34, 197, 94, 0.5), 0 0 0 1px rgba(34, 197, 94, 0.15), 0 0 28px rgba(34, 197, 94, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.25)",
            "0 18px 45px rgba(34, 197, 94, 0.7), 0 0 0 1px rgba(34, 197, 94, 0.25), 0 0 40px rgba(34, 197, 94, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.35)",
            "0 8px 25px rgba(34, 197, 94, 0.4), 0 0 0 1px rgba(34, 197, 94, 0.1), 0 0 20px rgba(34, 197, 94, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
          ],
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: [0.4, 0.0, 0.2, 1],
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        aria-label={t("ui.ariaLabels.contactWhatsApp")}
        style={{
          filter: "drop-shadow(0 0 8px rgba(34, 197, 94, 0.4))",
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <WhatsAppLogo />
        </motion.div>
      </motion.button>

      {/* Just Dial Badge */}
      <motion.button
        onClick={handleJustDialClick}
        className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center text-white transition-colors relative"
        data-testid="button-justdial-contact"
        whileHover={{
          scale: 1.4,
          rotate: 0,
          y: 0,
          boxShadow:
            "0 25px 60px rgba(255, 255, 255, 0.9), 0 0 0 2px rgba(200, 200, 200, 0.4), 0 0 50px rgba(240, 240, 240, 0.9), inset 0 2px 0 rgba(255, 255, 255, 1)",
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        animate={{
          scale: [1, 1.08, 1.02, 1.08, 1],
          y: [0, -3, 0, -2, 0],
          boxShadow: [
            "0 8px 25px rgba(255, 255, 255, 0.5), 0 0 0 1px rgba(200, 200, 200, 0.2), 0 0 20px rgba(240, 240, 240, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
            "0 15px 40px rgba(255, 255, 255, 0.7), 0 0 0 1px rgba(200, 200, 200, 0.3), 0 0 35px rgba(240, 240, 240, 0.8), inset 0 1px 0 rgba(255, 255, 255, 1)",
            "0 12px 35px rgba(255, 255, 255, 0.6), 0 0 0 1px rgba(200, 200, 200, 0.25), 0 0 28px rgba(240, 240, 240, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.95)",
            "0 18px 45px rgba(255, 255, 255, 0.8), 0 0 0 1px rgba(200, 200, 200, 0.35), 0 0 40px rgba(240, 240, 240, 0.9), inset 0 1px 0 rgba(255, 255, 255, 1)",
            "0 8px 25px rgba(255, 255, 255, 0.5), 0 0 0 1px rgba(200, 200, 200, 0.2), 0 0 20px rgba(240, 240, 240, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.9)",
          ],
        }}
        whileTap={{ scale: 0.95 }}
        transition={{
          duration: 3.5,
          repeat: Infinity,
          ease: [0.4, 0.0, 0.2, 1],
          times: [0, 0.2, 0.5, 0.8, 1],
        }}
        aria-label={t("ui.ariaLabels.contactJustDial")}
        style={{
          filter: "drop-shadow(0 0 8px rgba(255, 255, 255, 0.6))",
        }}
      >
        <motion.div
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.3 },
          }}
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        >
          <JustDialLogo />
        </motion.div>
      </motion.button>
    </div>
  );
}
