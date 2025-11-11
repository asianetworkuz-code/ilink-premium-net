import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'uz' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  uz: {
    // Header
    'nav.home': 'Bosh sahifa',
    'nav.about': 'Biz haqimizda',
    'nav.services': 'Xizmatlar',
    'nav.tariffs': 'Tariflar',
    'nav.contacts': 'Kontaktlar',
    'nav.cabinet': 'Kabinet',
    
    // Hero
    'hero.title': 'Inovatsion AI yordamchi',
    'hero.subtitle': '24/7 siz bilan birga',
    'hero.cta': 'Foydalanish',
    
    // Quick Actions
    'quick.internet': 'Internet tariflari',
    'quick.cabinet': 'Shaxsiy kabinet',
    'quick.tv': 'HopHop TV',
    'quick.security': 'Kuzatuv tizimlari',
    
    // Tariffs
    'tariff.title': 'Internet Tariflari',
    'tariff.speed': 'Internetga ulanish tezligi',
    'tariff.phone': 'IP-telefoniya uchun abonent to\'lovi',
    'tariff.traffic': 'Trafikka kiritilgan limit',
    'tariff.unlimited': 'Cheksiz',
    'tariff.connect': 'Ulanish',
    'tariff.compare': 'Ko\'proq',
    'tariff.perMonth': 'so\'m/oyiga',
    'tariff.premium': 'Premium',
    'tariff.gold': 'Gold',
    'tariff.platinum': 'Platinum',
    'tariff.businessx': 'Business X',
    'tariff.negotiable': 'Kelishuv',
    
    // Services
    'services.title': 'Xizmatlar',
    'services.internet': 'Internet xizmatlari',
    'services.internetDesc': 'Yuqori tezlikdagi internet ulanishi',
    'services.cabinet': 'Shaxsiy kabinet & Telegram bot',
    'services.cabinetDesc': 'Onlayn boshqaruv va to\'lovlar',
    'services.tv': 'HopHop.TV — 110+ kanal',
    'services.tvDesc': 'Premium televideniye xizmati',
    'services.security': 'Kuzatuv tizimlari (IP kamera)',
    'services.securityDesc': 'Professional video kuzatuv',
    'services.business': 'Biznes yechimlari',
    'services.businessDesc': 'VPN, SLA, Static IP',
    'services.support': 'Qo\'llab-quvvatlash 24/7',
    'services.supportDesc': 'Kunlik texnik yordam',
    
    // Contact
    'contact.title': 'Kontaktlar',
    'contact.address': 'Manzil',
    'contact.phone': 'Telefon',
    'contact.email': 'Elektron pochta',
    
    // Footer
    'footer.description': 'Zamonaviy telekommunikatsiya xizmatlari',
    'footer.legal': 'Huquqiy',
    'footer.offer': 'Ommaviy oferta',
    'footer.privacy': 'Maxfiylik siyosati',
    
    // About
    'about.title': 'Biz haqimizda',
    'about.subtitle': 'iLink by Asia Network — zamonaviy telekommunikatsiya kompaniyasi',
    
    // Pages
    'pages.services': 'Xizmatlar',
    'pages.tariffs': 'Tariflar',
  },
  ru: {
    // Header
    'nav.home': 'Главная',
    'nav.about': 'О нас',
    'nav.services': 'Услуги',
    'nav.tariffs': 'Тарифы',
    'nav.contacts': 'Контакты',
    'nav.cabinet': 'Кабинет',
    
    // Hero
    'hero.title': 'Инновационный AI-помощник',
    'hero.subtitle': 'всегда с вами 24/7',
    'hero.cta': 'Использовать',
    
    // Quick Actions
    'quick.internet': 'Тарифы интернета',
    'quick.cabinet': 'Личный кабинет',
    'quick.tv': 'HopHop TV',
    'quick.security': 'Видеонаблюдение',
    
    // Tariffs
    'tariff.title': 'Тарифы интернета',
    'tariff.speed': 'Скорость подключения',
    'tariff.phone': 'Абонентская плата IP-телефонии',
    'tariff.traffic': 'Лимит трафика',
    'tariff.unlimited': 'Безлимит',
    'tariff.connect': 'Подключиться',
    'tariff.compare': 'Подробнее',
    'tariff.perMonth': 'сум/мес',
    'tariff.premium': 'Premium',
    'tariff.gold': 'Gold',
    'tariff.platinum': 'Platinum',
    'tariff.businessx': 'Business X',
    'tariff.negotiable': 'Договорная',
    
    // Services
    'services.title': 'Услуги',
    'services.internet': 'Интернет-услуги',
    'services.internetDesc': 'Высокоскоростной интернет',
    'services.cabinet': 'Личный кабинет & Telegram-бот',
    'services.cabinetDesc': 'Онлайн управление и оплата',
    'services.tv': 'HopHop.TV — 110+ каналов',
    'services.tvDesc': 'Премиум телевидение',
    'services.security': 'Видеонаблюдение',
    'services.securityDesc': 'Профессиональное видеонаблюдение',
    'services.business': 'Решения для бизнеса',
    'services.businessDesc': 'VPN, SLA, Static IP',
    'services.support': 'Поддержка 24/7',
    'services.supportDesc': 'Круглосуточная техподдержка',
    
    // Contact
    'contact.title': 'Контакты',
    'contact.address': 'Адрес',
    'contact.phone': 'Телефон',
    'contact.email': 'Эл. почта',
    
    // Footer
    'footer.description': 'Современные телекоммуникационные услуги',
    'footer.legal': 'Правовая информация',
    'footer.offer': 'Публичная оферта',
    'footer.privacy': 'Политика конфиденциальности',
    
    // About
    'about.title': 'О нас',
    'about.subtitle': 'iLink by Asia Network — современная телекоммуникационная компания',
    
    // Pages
    'pages.services': 'Услуги',
    'pages.tariffs': 'Тарифы',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('uz');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
