import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      "AI Health Assistant": "AI Health Assistant",
      "Your Question": "Your Question",
      "AI Response": "AI Response",
      "Was this helpful?": "Was this helpful?",
      "Quick Topics": "Quick Topics",
      "Change Language": "Change Language",
      "Pregnancy Care": "Pregnancy Care",
      "Child Health": "Child Health",
      "Common Illnesses": "Common Illnesses",
      "Nutrition": "Nutrition",
      // Add more translations as needed
    }
  },
  hi: {
    translation: {
      "AI Health Assistant": "एआई स्वास्थ्य सहायक",
      "Your Question": "आपका प्रश्न",
      "AI Response": "एआई प्रतिक्रिया",
      "Was this helpful?": "क्या यह सहायक था?",
      "Quick Topics": "त्वरित विषय",
      "Change Language": "भाषा बदलें",
      "Pregnancy Care": "गर्भावस्था देखभाल",
      "Child Health": "बाल स्वास्थ्य",
      "Common Illnesses": "सामान्य बीमारियाँ",
      "Nutrition": "पोषण",
      // Add more translations as needed
    }
  },
  kn: {
    translation: {
      "AI Health Assistant": "ಎಐ ಆರೋಗ್ಯ ಸಹಾಯಕ",
      "Your Question": "ನಿಮ್ಮ ಪ್ರಶ್ನೆ",
      "AI Response": "ಎಐ ಪ್ರತಿಕ್ರಿಯೆ",
      "Was this helpful?": "ಇದು ಸಹಾಯಕವಾಗಿತ್ತಾ?",
      "Quick Topics": "ತ್ವರಿತ ವಿಷಯಗಳು",
      "Change Language": "ಭಾಷೆ ಬದಲಾಯಿಸಿ",
      "Pregnancy Care": "ಗರ್ಭಧಾರಣೆಯ ಆರೈಕೆ",
      "Child Health": "ಮಕ್ಕಳ ಆರೋಗ್ಯ",
      "Common Illnesses": "ಸಾಮಾನ್ಯ ರೋಗಗಳು",
      "Nutrition": "ಪೋಷಣೆ",
      // Add more translations as needed
    }
  },
  // Add more languages here
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // default language
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
