// languages.js

const translations = {
  "en": {
    "title": "Swastha AI",
    "createAccount": "Create Account",
    "namePlaceholder": "Name",
    "emailPlaceholder": "Email",
    "passwordPlaceholder": "Password",
    "signUp": "Sign Up",
    "signIn": "Sign In",
    "forgotPassword": "Forgot your password?",
    "welcomeBack": "Welcome Back!",
    "welcomeBackMsg": "Please enter your credentials to continue to Swastha AI",
    "namaste": "Namaste!",
    "namasteMsg": "Enter your personal details and chat with your Swastha AI",
    "resetPasswordPrompt": "Enter your email",
    "sendResetLink": "Send Reset Link",
    "dashboardTitle": "Swastha AI Dashboard",
    "logout": "Logout",
    "userStats": "User Stats",
    "emailLabel": "Email:",
    "authTypeLabel": "Auth Type:",
    "loading": "Loading...",
    "medicalTrends": "Medical Trends",
    "trendsMsg": "Recent health-related insights and updates.",
    "askHelp": "Ask Help",
    "locate": "Locate",
    "askDoctor": "Ask Doctor",
    "symptomsPlaceholder": "Describe your medical symptoms...",
    "submit": "Submit",
    "aiResponse": "Swastha AI: Sorry, the AI could not respond properly.",
    "membershipTitle": "Doctor Consultation",
    "membershipMsg": "This feature requires a premium membership. Please contact support to upgrade your plan.",
    "close": "Close",
    "emergencyTitle": "🚨 Emergency Medical Helplines",
    "ambulance": "Ambulance:",
    "covidHelpline": "COVID Helpline:",
    "lalitpurHospital": "Lalitpur District Hospital:",
    "patanHospital": "Patan Hospital Emergency:"
  },
  "ne": {
    "title": "स्वस्थ एआई",
    "createAccount": "खाता बनाउनुहोस्",
    "namePlaceholder": "नाम",
    "emailPlaceholder": "इमेल",
    "passwordPlaceholder": "पासवर्ड",
    "signUp": "साइन अप",
    "signIn": "साइन इन",
    "forgotPassword": "पासवर्ड भुल्नु भयो?",
    "welcomeBack": "फेरि स्वागत छ!",
    "welcomeBackMsg": "स्वस्थ एआईमा जारी राख्न कृपया आफ्नो प्रमाणहरू प्रविष्ट गर्नुहोस्",
    "namaste": "नमस्ते!",
    "namasteMsg": "आफ्नो व्यक्तिगत विवरणहरू प्रविष्ट गर्नुहोस् र आफ्नो स्वस्थ एआईसँग च्याट गर्नुहोस्",
    "resetPasswordPrompt": "आफ्नो इमेल प्रविष्ट गर्नुहोस्",
    "sendResetLink": "रिसेट लिङ्क पठाउनुहोस्",
    "dashboardTitle": "स्वस्थ एआई ड्यासबोर्ड",
    "logout": "लगआउट",
    "userStats": "प्रयोगकर्ता तथ्याङ्क",
    "emailLabel": "इमेल:",
    "authTypeLabel": "प्रमाणीकरण प्रकार:",
    "loading": "लोड हुँदै...",
    "medicalTrends": "चिकित्सा प्रवृत्ति",
    "trendsMsg": "भर्खरको स्वास्थ्य-सम्बन्धित अन्तरदृष्टि र अद्यावधिकहरू।",
    "askHelp": "मद्दत माग्नुहोस्",
    "locate": " पत्ता लगाउनुहोस्",
    "askDoctor": "डाक्टरलाई सोध्नुहोस्",
    "symptomsPlaceholder": "आफ्नो चिकित्सा लक्षण वर्णन गर्नुहोस्...",
    "submit": "पेश गर्नुहोस्",
    "aiResponse": "स्वस्थ एआई: माफ गर्नुहोस्, एआईले राम्रोसँग प्रतिक्रिया दिन सकेन।",
    "membershipTitle": "डाक्टर परामर्श",
    "membershipMsg": "यो सुविधाको लागि प्रिमियम सदस्यता आवश्यक छ। कृपया आफ्नो योजना अपग्रेड गर्न समर्थनलाई सम्पर्क गर्नुहोस्।",
    "close": "बन्द गर्नुहोस्",
    "emergencyTitle": "🚨 आपतकालीन मेडिकल हेल्पलाइनहरू",
    "ambulance": "एम्बुलेन्स:",
    "covidHelpline": "कोभिड हेल्पलाइन:",
    "lalitpurHospital": "ललितपुर जिल्ला अस्पताल:",
    "patanHospital": "पाटन अस्पताल आपतकालीन:"
  }
};

// --- Language Switcher Logic ---
function setLanguage(lang) {
  localStorage.setItem('language', lang);
  const langData = translations[lang];

  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    if (langData[key]) {
      if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
        element.placeholder = langData[key];
      } else {
        element.textContent = langData[key];
      }
    }
  });

  // Update page title
  const titleKey = document.body.getAttribute('data-page-title');
  if (titleKey && langData[titleKey]) {
      document.title = langData[titleKey];
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const langSelector = document.getElementById('language-selector');
  const savedLang = localStorage.getItem('language') || 'en';

  if (langSelector) {
    langSelector.value = savedLang;
    langSelector.addEventListener('change', (e) => setLanguage(e.target.value));
  }
  
  // Apply the language on initial load
  setLanguage(savedLang);
});