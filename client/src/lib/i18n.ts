import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

const languages = [
  { code: 'en', name: 'English', nativeName: 'English' },
  { code: 'zh', name: 'Chinese (Mandarin)', nativeName: '中文' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी' },
  { code: 'es', name: 'Spanish', nativeName: 'Español' },
  { code: 'ar', name: 'Arabic', nativeName: 'العربية' },
  { code: 'fr', name: 'French', nativeName: 'Français' },
  { code: 'pt', name: 'Portuguese', nativeName: 'Português' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский' },
  { code: 'sw', name: 'Swahili', nativeName: 'Kiswahili' },
  { code: 'ha', name: 'Hausa', nativeName: 'Hausa' }
];

// Available language codes for quick lookup
const availableLanguages = languages.map(lang => lang.code);

// Enhanced language detection function
export const detectLanguage = (): string => {
  // Check if there's a manually selected language in localStorage (highest priority)
  const storedLanguage = localStorage.getItem('i18nextLng');
  if (storedLanguage && storedLanguage !== 'undefined' && availableLanguages.includes(storedLanguage)) {
    return storedLanguage;
  }

  // Check browser language preferences (navigator.languages)
  if (typeof navigator !== 'undefined' && navigator.languages) {
    for (const browserLang of navigator.languages) {
      // Extract language code (e.g., 'en-US' -> 'en')
      const langCode = browserLang.split('-')[0];
      if (availableLanguages.includes(langCode)) {
        return langCode;
      }
    }
  }

  // Fallback to primary language if available
  if (typeof navigator !== 'undefined' && navigator.language) {
    const langCode = navigator.language.split('-')[0];
    if (availableLanguages.includes(langCode)) {
      return langCode;
    }
  }

  // Final fallback to English
  return 'en';
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: false, // Completely disable fallback to prevent English showing
    lng: detectLanguage(), // Use our custom detection logic
    debug: import.meta.env.DEV, // Console logging only in development
    
    // Supported languages - all available languages
    supportedLngs: ['en', 'hi', 'zh', 'es', 'ar', 'fr', 'pt', 'ru', 'sw', 'ha'],
    
    // Language detection options - prioritize browser language detection
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng',
      checkWhitelist: true, // Only use supported languages
      excludeCacheFor: ['cimode'] // Don't cache dev mode
    },

    // Backend configuration for loading translations
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      addPath: '/locales/add/{{lng}}/{{ns}}'
    },

    // Interpolation options
    interpolation: {
      escapeValue: false, // React already handles XSS
      formatSeparator: ',',
      format: function(value: any, format: any, lng: any) {
        if (format === 'currency') {
          const currencyMap: Record<string, string> = {
            'en': 'USD',
            'zh': 'CNY',
            'hi': 'INR',
            'es': 'EUR',
            'ar': 'USD',
            'fr': 'EUR',
            'pt': 'EUR',
            'ru': 'RUB',
            'sw': 'USD',
            'ha': 'USD'
          };
          return new Intl.NumberFormat(lng, {
            style: 'currency',
            currency: currencyMap[lng || 'en'] || 'USD'
          }).format(value);
        }
        if (format === 'number') {
          return new Intl.NumberFormat(lng).format(value);
        }
        return value;
      }
    },

    // Namespace configuration
    ns: ['common', 'navigation', 'pages', 'services', 'products', 'forms'],
    defaultNS: 'common',

    // React i18next options
    react: {
      bindI18n: 'languageChanged',
      bindI18nStore: '',
      transEmptyNodeValue: '',
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'em'],
      useSuspense: false
    },

    // Return translation key when missing - never fallback to English
    returnEmptyString: false,
    returnNull: false,
    returnObjects: false,
    returnedObjectHandler: false,
    saveMissing: false,
    
    // Custom missing key handler to return the key itself
    missingKeyHandler: (lng: string[], ns: string, key: string, fallbackValue: string) => {
      return key; // Return the translation key itself instead of fallback
    },
    
    // Disable parsing missing key handler to prevent fallback
    parseMissingKeyHandler: false,

    // Resources loading strategy
    partialBundledLanguages: true
  });

// RTL language configuration
const rtlLanguages = ['ar'];

// Function to check if a language is RTL
export const isRTL = (language: string): boolean => {
  return rtlLanguages.includes(language);
};

// Function to update document direction based on language
export const updateDocumentDirection = (language: string) => {
  const isRtl = isRTL(language);
  document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
  document.documentElement.lang = language;
};

// Set up language change handler
i18n.on('languageChanged', (lng) => {
  updateDocumentDirection(lng);
});

export { languages };
export default i18n;