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
      "Pregnancy Care Tips": "Pregnancy Care Tips",
      "Take prenatal vitamins regularly": "Take prenatal vitamins regularly",
      "Maintain a healthy diet": "Maintain a healthy diet",
      "Get regular exercise": "Get regular exercise",
      "Attend all prenatal checkups": "Attend all prenatal checkups",
      "Get adequate rest": "Get adequate rest",
      "Stay hydrated": "Stay hydrated",
      "Child Health Tips": "Child Health Tips",
      "Regular health checkups": "Regular health checkups",
      "Maintain vaccination schedule": "Maintain vaccination schedule",
      "Balanced nutrition": "Balanced nutrition",
      "Regular exercise": "Regular exercise",
      "Adequate sleep": "Adequate sleep",
      "Good hygiene practices": "Good hygiene practices",
      "Healthy Eating Tips": "Healthy Eating Tips",
      "Eat a variety of foods to ensure you get all the necessary nutrients": "Eat a variety of foods to ensure you get all the necessary nutrients",
      "Include plenty of fruits and vegetables in your diet": "Include plenty of fruits and vegetables in your diet",
      "Stay hydrated by drinking enough water throughout the day": "Stay hydrated by drinking enough water throughout the day",
      "Limit your intake of sugary drinks and snacks": "Limit your intake of sugary drinks and snacks",
      "Choose whole grains over refined grains": "Choose whole grains over refined grains",
      "Include lean proteins such as fish, chicken, and legumes": "Include lean proteins such as fish, chicken, and legumes",
      "Avoid excessive salt and processed foods": "Avoid excessive salt and processed foods",
      "Symptoms": "Symptoms",
      "Common symptoms include fever, cough, fatigue, and body ache.": "Common symptoms include fever, cough, fatigue, and body ache.",
      "Prevention": "Prevention",
      "Preventive measures include regular hand washing, wearing masks in crowded places, and avoiding close contact with sick individuals.": "Preventive measures include regular hand washing, wearing masks in crowded places, and avoiding close contact with sick individuals.",
      "Treatment": "Treatment",
      "Treatment may include rest, hydration, over-the-counter medications, and, in severe cases, professional medical care.": "Treatment may include rest, hydration, over-the-counter medications, and, in severe cases, professional medical care.",
      "When to See a Doctor": "When to See a Doctor",
      "If symptoms worsen or persist beyond a few days, it is advisable to consult a healthcare provider immediately.": "If symptoms worsen or persist beyond a few days, it is advisable to consult a healthcare provider immediately.",
      "Back to Home": "Back to Home"
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
      "Pregnancy Care Tips": "गर्भावस्था देखभाल के सुझाव",
      "Take prenatal vitamins regularly": "नियमित रूप से प्रीनेटल विटामिन लें",
      "Maintain a healthy diet": "स्वस्थ आहार बनाए रखें",
      "Get regular exercise": "नियमित व्यायाम करें",
      "Attend all prenatal checkups": "सभी प्रीनेटल चेकअप में जाएं",
      "Get adequate rest": "पर्याप्त आराम करें",
      "Stay hydrated": "हाइड्रेटेड रहें",
      "Child Health Tips": "बाल स्वास्थ्य के सुझाव",
      "Regular health checkups": "नियमित स्वास्थ्य जांच",
      "Maintain vaccination schedule": "टीकाकरण अनुसूची बनाए रखें",
      "Balanced nutrition": "संतुलित पोषण",
      "Regular exercise": "नियमित व्यायाम",
      "Adequate sleep": "पर्याप्त नींद",
      "Good hygiene practices": "अच्छी स्वच्छता प्रथाएं",
      "Healthy Eating Tips": "स्वस्थ भोजन के टिप्स",
      "Eat a variety of foods to ensure you get all the necessary nutrients": "सभी आवश्यक पोषक तत्व प्राप्त करने के लिए विभिन्न प्रकार के खाद्य पदार्थ खाएं।",
      "Include plenty of fruits and vegetables in your diet": "अपने आहार में बहुत सारे फल और सब्जियाँ शामिल करें।",
      "Stay hydrated by drinking enough water throughout the day": "दिन भर में पर्याप्त पानी पीकर हाइड्रेटेड रहें।",
      "Limit your intake of sugary drinks and snacks": "मीठे पेय और स्नैक्स का सेवन सीमित करें।",
      "Choose whole grains over refined grains": "परिष्कृत अनाज की तुलना में साबुत अनाज चुनें।",
      "Include lean proteins such as fish, chicken, and legumes": "मछली, चिकन और फलियों जैसे दुबले प्रोटीन शामिल करें।",
      "Avoid excessive salt and processed foods": "अत्यधिक नमक और प्रसंस्कृत खाद्य पदार्थों से बचें।",
      "Symptoms": "लक्षण",
      "Common symptoms include fever, cough, fatigue, and body ache.": "सामान्य लक्षणों में बुखार, खांसी, थकान और बदन दर्द शामिल हैं।",
      "Prevention": "रोकथाम",
      "Preventive measures include regular hand washing, wearing masks in crowded places, and avoiding close contact with sick individuals.": "नियमित हाथ धोने, भीड़ भरे स्थानों में मास्क पहनने तथा बीमार लोगों से दूरी बनाए रखने जैसी रोकथाम की विधियाँ अपनाएँ।",
      "Treatment": "उपचार",
      "Treatment may include rest, hydration, over-the-counter medications, and, in severe cases, professional medical care.": "उपचार में आराम, हाइड्रेशन, बिना प्रिस्क्रिप्शन के मिलने वाली दवाइयाँ और गंभीर मामलों में पेशेवर चिकित्सा शामिल हो सकती है।",
      "When to See a Doctor": "डॉक्टर को कब देखें",
      "If symptoms worsen or persist beyond a few days, it is advisable to consult a healthcare provider immediately.": "यदि लक्षण कुछ दिनों से अधिक बिगड़ते या बने रहते हैं तो तुरंत स्वास्थ्य सेवा प्रदाता से परामर्श करें।",
      "Back to Home": "होम पर वापस जाएँ"
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
      "Pregnancy Care Tips": "ಗರ್ಭಧಾರಣೆ ಆರೈಕೆ ಸಲಹೆಗಳು",
      "Take prenatal vitamins regularly": "ನಿಯಮಿತವಾಗಿ ಪ್ರಸವಪೂರ್ವ ವಿಟಮಿನ್‌ಗಳನ್ನು ತೆಗೆದುಕೊಳ್ಳಿ",
      "Maintain a healthy diet": "ಆರೋಗ್ಯಕರ ಆಹಾರವನ್ನು ಕಾಪಾಡಿಕೊಳ್ಳಿ",
      "Get regular exercise": "ನಿಯಮಿತ ವ್ಯಾಯಾಮ ಮಾಡಿ",
      "Attend all prenatal checkups": "ಎಲ್ಲಾ ಪ್ರಸವಪೂರ್ವ ತಪಾಸಣೆಗಳಿಗೆ ಹಾಜರಾಗಿ",
      "Get adequate rest": "ಸಾಕಷ್ಟು ವಿಶ್ರಾಂತಿ ಪಡೆಯಿರಿ",
      "Stay hydrated": "ಹೈಡ್ರೇಟೆಡ್ ಆಗಿರಿ",
      "Child Health Tips": "ಮಕ್ಕಳ ಆರೋಗ್ಯ ಸಲಹೆಗಳು",
      "Regular health checkups": "ನಿಯಮಿತ ಆರೋಗ್ಯ ತಪಾಸಣೆಗಳು",
      "Maintain vaccination schedule": "ಲಸಿಕೆ ವೇಳಾಪಟ್ಟಿಯನ್ನು ನಿರ್ವಹಿಸಿ",
      "Balanced nutrition": "ಸಮತೋಲಿತ ಪೋಷಣೆ",
      "Regular exercise": "ನಿಯಮಿತ ವ್ಯಾಯಾಮ",
      "Adequate sleep": "ಸಾಕಷ್ಟು ನಿದ್ರೆ",
      "Good hygiene practices": "ಉತ್ತಮ ನೈರ್ಮಲ್ಯ ಅಭ್ಯಾಸಗಳು",
      "Healthy Eating Tips": "ಆರೋಗ್ಯಕರ ಆಹಾರದ ಸಲಹೆಗಳು",
      "Eat a variety of foods to ensure you get all the necessary nutrients": "ಅಗತ್ಯವಿರುವ ಎಲ್ಲಾ ಪೋಷಕಾಂಶಗಳನ್ನು ಪಡೆಯಲು ವಿವಿಧ ಆಹಾರಗಳನ್ನು ತಿನ್ನಿ.",
      "Include plenty of fruits and vegetables in your diet": "ನಿಮ್ಮ ಆಹಾರದಲ್ಲಿ ಸಾಕಷ್ಟು ಹಣ್ಣುಗಳು ಮತ್ತು ತರಕಾರಿಗಳನ್ನು ಸೇರಿಸಿ.",
      "Stay hydrated by drinking enough water throughout the day": "ದಿನದಾದ್ಯಂತ ಸಾಕಷ್ಟು ನೀರು ಕುಡಿಯುವ ಮೂಲಕ ಹೈಡ್ರೇಟೆಡ್ ಆಗಿರಿ.",
      "Limit your intake of sugary drinks and snacks": "ಸಕ್ಕರೆ ಪಾನೀಯಗಳು ಮತ್ತು ತಿಂಡಿಗಳ ಸೇವನೆಯನ್ನು ಮಿತಿಗೊಳಿಸಿ.",
      "Choose whole grains over refined grains": "ಶುದ್ಧಗೊಳಿಸಿದ ಧಾನ್ಯಗಳ ಬದಲು ಸಂಪೂರ್ಣ ಧಾನ್ಯಗಳನ್ನು ಆಯ್ಕೆಮಾಡಿ.",
      "Include lean proteins such as fish, chicken, and legumes": "ಮೀನು, ಕೋಳಿ ಮತ್ತು ಬೇಳೆಕಾಳುಗಳಂತೆ ದುಬಾರಿ ಪ್ರೋಟೀನನ್ನು ಸೇರಿಸಿ.",
      "Avoid excessive salt and processed foods": "ಅತಿಯಾದ ಉಪ್ಪು ಮತ್ತು ಸಂಸ್ಕರಿಸಿದ ಆಹಾರವನ್ನು ತಪ್ಪಿಸಿ.",
      "Symptoms": "ಲಕ್ಷಣಗಳು",
      "Common symptoms include fever, cough, fatigue, and body ache.": "ಸಾಮಾನ್ಯ ಲಕ್ಷಣಗಳಲ್ಲಿ ಜ್ವರ, ಕೆಮ್ಮು, ದಣಿವು ಮತ್ತು ದೇಹದ ನೋವು ಸೇರಿವೆ.",
      "Prevention": "ತಡೆಗಟ್ಟುವಿಕೆ",
      "Preventive measures include regular hand washing, wearing masks in crowded places, and avoiding close contact with sick individuals.": "ನಿಯಮಿತ ಕೈ ತೊಳೆದುವುದು, ಜನಸಮೂಹಗಳಲ್ಲಿ ಮಾಸ್ಕ್ ಧರಿಸುವುದು ಮತ್ತು ರೋಗಿಗಳೊಂದಿಗೆ ದೂರವಿದ್ದು ತಡೆಗಟ್ಟುವ ಕ್ರಮಗಳಲ್ಲಿ ಸೇರಿವೆ.",
      "Treatment": "ಚಿಕಿತ್ಸೆ",
      "Treatment may include rest, hydration, over-the-counter medications, and, in severe cases, professional medical care.": "ವಿಶ್ರಾಂತಿ, ಹೈಡ್ರೇಶನ್, ಔಷಧೀಯ ದವಾಖಾನೆಯ ಬಳಕೆ ಮತ್ತು ತೀವ್ರವಾದಲ್ಲಿ ವೃತ್ತಿಪರ ಚಿಕಿತ್ಸೆಯನ್ನೂ ಒಳಗೊಂಡಿರಬಹುದು.",
      "When to See a Doctor": "ಡಾಕ್ಟರ್ ಅವರ ಭೇಟಿ ಯಾವಾಗ 해야", 
      "If symptoms worsen or persist beyond a few days, it is advisable to consult a healthcare provider immediately.": "ಲಕ್ಷಣಗಳು ಒಂದು-ಎಲ್ಲಾ ದಿನಗಳಿಗಿಂತ ಹೆಚ್ಚು ಮುಂದುವರೆದರೆ ಅಥವಾ ತೀವ್ರವಾದರೆ, ಕೂಡಲೇ ವೈದ್ಯರನ್ನು ಸಂಪರ್ಕಿಸಿ.",
      "Back to Home": "ಮನೆಗೆ ಹಿಂತಿರುಗಿ"
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
