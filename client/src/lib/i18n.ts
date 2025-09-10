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

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: false, // No fallback language - show keys when missing
    lng: 'zh', // Set Chinese as default to avoid English loading
    debug: import.meta.env.DEV, // Console logging only in development
    
    // Supported languages - Chinese first, no English prioritization
    supportedLngs: ['zh', 'hi', 'es', 'ar', 'fr', 'pt', 'ru', 'sw', 'ha', 'en'],
    
    // Language detection options - prioritize localStorage
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
      lookupLocalStorage: 'i18nextLng'
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
    missingKeyHandler: false,

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