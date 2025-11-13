// Frontend-only configuration
// This project is now pure React frontend with no backend dependencies

export const FRONTEND_CONFIG = {
  // Project mode - always frontend-only
  mode: "frontend-only" as const,

  // Forms configuration
  forms: {
    // Use EmailJS for direct email sending (no backend needed)
    provider: "emailjs" as const,
    emailJsConfig: {
      serviceId: "service_powerton", // This will be your EmailJS service ID
      templateIds: {
        contact: "template_contact", // EmailJS template for contact form
        quote: "template_quote", // EmailJS template for quote form
      },
      publicKey: "your_emailjs_public_key", // This will be your EmailJS public key
    },
    fallbackEmail: "info@powertonengineering.com",
    fallbackPhone: "+91-94627-71662",
    fallbackPhoneSecondary: "+91-82997-27291",
  },

  // Company information (static data - actual values come from translations)
  company: {
    name: "Powerton Engineering Pvt. Ltd.",
    email: "info@powertonengineering.com",
    phone: "+91-94627-71662 / +91-82997-27291",
    website: "https://powertonengineering.in",
    logo: "https://powertonengineering.in/assets/img/logo-new.jpg",
  },
};

// Helper function to check if EmailJS is configured
export const canSubmitForms = () => {
  const config = FRONTEND_CONFIG.forms.emailJsConfig;
  return !!(
    config.serviceId &&
    config.publicKey &&
    config.templateIds.contact &&
    config.templateIds.quote
  );
};

// Helper function to get EmailJS configuration
export const getEmailJsConfig = () => {
  return FRONTEND_CONFIG.forms.emailJsConfig;
};
