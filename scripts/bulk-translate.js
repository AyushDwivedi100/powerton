#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// Language mappings for better translation
const languageMap = {
  'zh': 'Chinese (Simplified)',
  'hi': 'Hindi', 
  'es': 'Spanish',
  'ar': 'Arabic',
  'fr': 'French',
  'pt': 'Portuguese',
  'ru': 'Russian',
  'sw': 'Swahili',
  'ha': 'Hausa'
};

// Common translations that should remain consistent
const commonTranslations = {
  // Technical abbreviations should remain unchanged
  'PLC': 'PLC',
  'SCADA': 'SCADA', 
  'DCS': 'DCS',
  'HMI': 'HMI',
  'BLDC': 'BLDC',
  'PLCs': 'PLCs',
  'HVAC': 'HVAC',
  'IoT': 'IoT',
  'API': 'API',
  'ISA': 'ISA',
  'IEC': 'IEC',
  'ASTM': 'ASTM',
  
  // Company/brand names
  'Powerton Engineering': 'Powerton Engineering',
  'Siemens': 'Siemens',
  'Allen-Bradley': 'Allen-Bradley', 
  'Schneider': 'Schneider',
  'Noida': 'Noida',
  'Sector 6': 'Sector 6'
};

// Basic translations for common buttons/terms
const basicTranslations = {
  zh: {
    'Get Quote': '获取报价',
    'Call Now': '立即致电',
    'Email Us': '邮件联系',
    'Learn More': '了解更多',
    'View More': '查看更多',
    'Contact Us': '联系我们',
    'Download Portfolio': '下载作品集',
    'New Installation': '新安装',
    'System Upgrade': '系统升级',
    'Retrofit': '改造',
    'Maintenance': '维护',
    'Consultation': '咨询'
  },
  hi: {
    'Get Quote': 'कोटेशन प्राप्त करें',
    'Call Now': 'अभी कॉल करें',
    'Email Us': 'ईमेल करें',
    'Learn More': 'और जानें',
    'View More': 'और देखें',
    'Contact Us': 'संपर्क करें',
    'Download Portfolio': 'पोर्टफोलियो डाउनलोड करें',
    'New Installation': 'नई स्थापना',
    'System Upgrade': 'सिस्टम अपग्रेड',
    'Retrofit': 'रेट्रोफिट',
    'Maintenance': 'रखरखाव',
    'Consultation': 'परामर्श'
  },
  es: {
    'Get Quote': 'Obtener Cotización',
    'Call Now': 'Llamar Ahora',
    'Email Us': 'Enviar Email',
    'Learn More': 'Más Información',
    'View More': 'Ver Más',
    'Contact Us': 'Contáctanos',
    'Download Portfolio': 'Descargar Portafolio',
    'New Installation': 'Nueva Instalación',
    'System Upgrade': 'Actualización del Sistema',
    'Retrofit': 'Modernización',
    'Maintenance': 'Mantenimiento',
    'Consultation': 'Consultoría'
  },
  ar: {
    'Get Quote': 'احصل على عرض سعر',
    'Call Now': 'اتصل الآن',
    'Email Us': 'راسلنا',
    'Learn More': 'اعرف المزيد',
    'View More': 'عرض المزيد',
    'Contact Us': 'اتصل بنا',
    'Download Portfolio': 'تحميل المحفظة',
    'New Installation': 'تركيب جديد',
    'System Upgrade': 'ترقية النظام',
    'Retrofit': 'التحديث',
    'Maintenance': 'الصيانة',
    'Consultation': 'الاستشارة'
  },
  fr: {
    'Get Quote': 'Obtenir un Devis',
    'Call Now': 'Appeler Maintenant',
    'Email Us': 'Nous Envoyer un Email',
    'Learn More': 'En Savoir Plus',
    'View More': 'Voir Plus',
    'Contact Us': 'Nous Contacter',
    'Download Portfolio': 'Télécharger le Portfolio',
    'New Installation': 'Nouvelle Installation',
    'System Upgrade': 'Mise à Niveau du Système',
    'Retrofit': 'Modernisation',
    'Maintenance': 'Maintenance',
    'Consultation': 'Consultation'
  },
  pt: {
    'Get Quote': 'Obter Orçamento',
    'Call Now': 'Ligar Agora',
    'Email Us': 'Enviar Email',
    'Learn More': 'Saiba Mais',
    'View More': 'Ver Mais',
    'Contact Us': 'Entre em Contato',
    'Download Portfolio': 'Baixar Portfólio',
    'New Installation': 'Nova Instalação',
    'System Upgrade': 'Atualização do Sistema',
    'Retrofit': 'Modernização',
    'Maintenance': 'Manutenção',
    'Consultation': 'Consultoria'
  },
  ru: {
    'Get Quote': 'Получить Предложение',
    'Call Now': 'Позвонить Сейчас',
    'Email Us': 'Написать Email',
    'Learn More': 'Узнать Больше',
    'View More': 'Посмотреть Больше',
    'Contact Us': 'Связаться с Нами',
    'Download Portfolio': 'Скачать Портфолио',
    'New Installation': 'Новая Установка',
    'System Upgrade': 'Обновление Системы',
    'Retrofit': 'Модернизация',
    'Maintenance': 'Обслуживание',
    'Consultation': 'Консультация'
  },
  sw: {
    'Get Quote': 'Pata Bei',
    'Call Now': 'Piga Simu Sasa',
    'Email Us': 'Tuma Barua Pepe',
    'Learn More': 'Jifunze Zaidi',
    'View More': 'Ona Zaidi',
    'Contact Us': 'Wasiliana Nasi',
    'Download Portfolio': 'Pakua Portfolio',
    'New Installation': 'Usakinishaji Mpya',
    'System Upgrade': 'Kuboresha Mfumo',
    'Retrofit': 'Marekebisho',
    'Maintenance': 'Matengenezo',
    'Consultation': 'Ushauri'
  },
  ha: {
    'Get Quote': 'Samu Tsari',
    'Call Now': 'Kira Yanzu',
    'Email Us': 'Aiko Mu Email',
    'Learn More': 'Koyi Ƙari',
    'View More': 'Duba Ƙari',
    'Contact Us': 'Tuntuɓe Mu',
    'Download Portfolio': 'Sauke Portfolio',
    'New Installation': 'Sabon Girka',
    'System Upgrade': 'Haɓaka Tsarin',
    'Retrofit': 'Gyara',
    'Maintenance': 'Kulawa',
    'Consultation': 'Shawara'
  }
};

function translateValue(value, targetLang) {
  // Keep technical abbreviations unchanged
  for (const [key, val] of Object.entries(commonTranslations)) {
    if (value.includes(key)) {
      return value; // Keep original if contains technical terms
    }
  }
  
  // Use basic translations for common terms
  if (basicTranslations[targetLang] && basicTranslations[targetLang][value]) {
    return basicTranslations[targetLang][value];
  }
  
  // For now, return English (machine translation could be added here)
  return value;
}

function mergeFromEnglish(targetObj, englishObj, targetLang) {
  const result = { ...targetObj };
  
  for (const [key, value] of Object.entries(englishObj)) {
    if (typeof value === 'string') {
      // Add missing key or translate if it's still English
      if (!result[key] || result[key] === value) {
        result[key] = translateValue(value, targetLang);
      }
    } else if (Array.isArray(value)) {
      // Preserve arrays - don't convert to objects
      if (!result[key] || !Array.isArray(result[key])) {
        result[key] = value.map(item => 
          typeof item === 'string' ? translateValue(item, targetLang) : item
        );
      }
    } else if (typeof value === 'object' && value !== null) {
      // Recursively merge objects
      result[key] = mergeFromEnglish(result[key] || {}, value, targetLang);
    } else {
      // Copy other types as-is if missing
      if (result[key] === undefined) {
        result[key] = value;
      }
    }
  }
  
  return result;
}

function processLanguage(lang) {
  console.log(`\n📋 Processing ${lang.toUpperCase()} (${languageMap[lang]}):`);
  
  const files = ['common', 'navigation', 'pages', 'forms', 'services', 'products', 'products-data', 'data'];
  let translatedCount = 0;
  let keysAdded = 0;
  
  files.forEach(file => {
    const targetPath = `client/public/locales/${lang}/${file}.json`;
    const englishPath = `client/public/locales/en/${file}.json`;
    
    if (fs.existsSync(englishPath)) {
      const englishContent = JSON.parse(fs.readFileSync(englishPath, 'utf8'));
      const targetContent = fs.existsSync(targetPath) 
        ? JSON.parse(fs.readFileSync(targetPath, 'utf8'))
        : {};
      
      const beforeCount = countKeys(targetContent);
      const merged = mergeFromEnglish(targetContent, englishContent, lang);
      const afterCount = countKeys(merged);
      
      fs.writeFileSync(targetPath, JSON.stringify(merged, null, 2));
      console.log(`  ✅ ${file}.json: +${afterCount - beforeCount} keys`);
      keysAdded += (afterCount - beforeCount);
      translatedCount++;
    }
  });
  
  console.log(`  📊 Total keys added: ${keysAdded}`);
  return translatedCount;
}

function countKeys(obj) {
  let count = 0;
  for (const value of Object.values(obj)) {
    if (typeof value === 'string') {
      count++;
    } else if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      count += countKeys(value);
    }
  }
  return count;
}

// Main execution
console.log('🌍 Starting bulk translation of missing keys...\n');

const languages = ['zh', 'hi', 'es', 'ar', 'fr', 'pt', 'ru', 'sw', 'ha'];
let totalFiles = 0;

languages.forEach(lang => {
  totalFiles += processLanguage(lang);
});

console.log(`\n🎉 Bulk translation completed!`);
console.log(`   📄 Processed ${totalFiles} files across ${languages.length} languages`);
console.log(`   🔧 Applied basic translations for common terms`);
console.log(`   ⚙️ Preserved technical abbreviations (PLC, SCADA, DCS, HMI, BLDC)`);
console.log(`   📋 Ready for manual review and refinement\n`);