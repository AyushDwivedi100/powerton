import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";

const languages = [
  { code: "en", name: "English", nativeName: "English" },
  { code: "ja", name: "Japanese", nativeName: "日本語" },
  { code: "zh", name: "Chinese (Mandarin)", nativeName: "中文" },
  { code: "hi", name: "Hindi", nativeName: "हिन्दी" },
  { code: "es", name: "Spanish", nativeName: "Español" },
  { code: "ar", name: "Arabic", nativeName: "العربية" },
  { code: "fr", name: "French", nativeName: "Français" },
  { code: "pt", name: "Portuguese", nativeName: "Português" },
  { code: "ru", name: "Russian", nativeName: "Русский" },
  { code: "sw", name: "Swahili", nativeName: "Kiswahili" },
  { code: "ha", name: "Hausa", nativeName: "Hausa" },
];

// Available language codes for quick lookup
const availableLanguages = languages.map((lang) => lang.code);

// Enhanced language detection function
export const detectLanguage = (): string => {
  // Check if there's a manually selected language in localStorage (highest priority)
  const storedLanguage = localStorage.getItem("i18nextLng");
  if (
    storedLanguage &&
    storedLanguage !== "undefined" &&
    availableLanguages.includes(storedLanguage)
  ) {
    return storedLanguage;
  }

  // Check browser language preferences (navigator.languages)
  if (typeof navigator !== "undefined" && navigator.languages) {
    for (const browserLang of navigator.languages) {
      // Extract language code (e.g., 'en-US' -> 'en')
      const langCode = browserLang.split("-")[0];
      if (availableLanguages.includes(langCode)) {
        return langCode;
      }
    }
  }

  // Fallback to primary language if available
  if (typeof navigator !== "undefined" && navigator.language) {
    const langCode = navigator.language.split("-")[0];
    if (availableLanguages.includes(langCode)) {
      return langCode;
    }
  }

  // Final fallback to English
  return "en";
};

const initConfig = {
  fallbackLng: false as const, // Disable fallback to English - show translation keys instead
  lng: detectLanguage(), // Use our custom detection logic
  debug: import.meta.env.DEV, // Console logging only in development

  // Supported languages - all available languages
  supportedLngs: ["en", "hi", "zh", "es", "ar", "fr", "pt", "ru", "sw", "ha", "ja"],

  // Language detection options - prioritize browser language detection
  detection: {
    order: ["localStorage", "navigator", "htmlTag"],
    caches: ["localStorage"],
    lookupLocalStorage: "i18nextLng",
    checkWhitelist: true, // Only use supported languages
    excludeCacheFor: ["cimode"], // Don't cache dev mode
  },

  // Backend configuration for loading translations
  backend: {
    loadPath: `/locales/{{lng}}/{{ns}}.json`,
    addPath: "/locales/add/{{lng}}/{{ns}}",
    cache: true, // Enable caching for better performance
    allowMultiLoading: true, // Allow loading multiple namespaces for better UX
    reloadInterval: false,
  },

  // Interpolation options
  interpolation: {
    escapeValue: false, // React already handles XSS
    formatSeparator: ",",
  },

  // Namespace configuration - load core namespaces upfront for home page
  ns: [
    "common",
    "navigation",
    "pages",
    "services",
    "products",
    "forms",
  ],
  defaultNS: "common",

  // React i18next options
  react: {
    bindI18n: "languageChanged",
    bindI18nStore: "",
    transEmptyNodeValue: "",
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ["br", "strong", "i", "em"],
    useSuspense: false,
  },

  // Return translation key when missing - never fallback to English
  returnEmptyString: false,
  returnNull: false,
  returnObjects: false,
  saveMissing: false,

  // Return missing keys with namespace prefix for visibility
  appendNamespaceToMissingKey: true,

  // Resources loading strategy
  partialBundledLanguages: true,
};

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init(initConfig);

// RTL language configuration
const rtlLanguages = ["ar"];

// Function to check if a language is RTL
export const isRTL = (language: string): boolean => {
  return rtlLanguages.includes(language);
};

// Function to update document direction based on language
export const updateDocumentDirection = (language: string) => {
  const isRtl = isRTL(language);
  document.documentElement.dir = isRtl ? "rtl" : "ltr";
  document.documentElement.lang = language;
};

// Set up language change handler
i18n.on("languageChanged", (lng) => {
  updateDocumentDirection(lng);
});

// Set up missing key logging for development
i18n.on("missingKey", (lngs, namespace, key) => {
  if (import.meta.env.DEV) {
    console.error(
      `🚨 MISSING TRANSLATION: ${namespace}:${key} for languages: ${lngs.join(
        ", "
      )}`
    );
  }
});

// Set initial document direction when i18n is ready
i18n.on("initialized", () => {
  updateDocumentDirection(i18n.language);
});

// Ensure direction is set immediately if already initialized
if (i18n.isInitialized) {
  updateDocumentDirection(i18n.language);
}

export { languages };
export default i18n;
