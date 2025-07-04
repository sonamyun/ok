// translation.js

const translations = {
    en: {
        createAccount: "Create Account",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        signUpButton: "Sign Up",
        signInHeading: "Sign in",
        forgotPassword: "Forgot your password?",
        signInButton: "Sign In",
        welcomeBackHeading: "Welcome Back!",
        welcomeBackParagraph: "Please enter your credentials to continue to Swastha AI",
        namasteHeading: "Namaste!",
        namasteParagraph: "Enter your personal details and chat with your Swastha AI",
        enterEmailPlaceholder: "Enter your email",
        sendResetLinkButton: "Send Reset Link",
        okButton: "OK",
        registrationSuccess: "Registration successful!",
        loginSuccess: "Login successful!",
        resetPasswordSent: "Password reset link sent to your email.",
        invalidCredentials: "Invalid email or password.",
        genericError: "Something went wrong. Please try again.",
        emailInUseError: "This email is already in use.",
        invalidEmailError: "Invalid email format.",
        weakPasswordError: "Password should be at least 6 characters.",
        enterEmailForReset: "Please enter your email to reset password.",
        userNotFoundForReset: "No user found with this email.",
        // Add any other English strings that might appear dynamically (e.g., success/error messages not tied to data-key)
    },
    ne: {
        createAccount: "खाता खोल्नुहोस्",
        namePlaceholder: "नाम",
        emailPlaceholder: "ईमेल",
        passwordPlaceholder: "पासवर्ड",
        signUpButton: "साइन अप गर्नुहोस्",
        signInHeading: "साइन इन गर्नुहोस्",
        forgotPassword: "पासवर्ड भुल्नुभयो?",
        signInButton: "साइन इन गर्नुहोस्",
        welcomeBackHeading: "फेरि स्वागत छ!",
        welcomeBackParagraph: "स्वस्थ एआई (AI) मा जारी राख्न कृपया आफ्नो प्रमाणहरू प्रविष्ट गर्नुहोस्",
        namasteHeading: "नमस्ते!",
        namasteParagraph: "आफ्नो व्यक्तिगत विवरणहरू प्रविष्ट गर्नुहोस् र आफ्नो स्वस्थ एआई (AI) सँग कुरा गर्नुहोस्",
        enterEmailPlaceholder: "आफ्नो ईमेल प्रविष्ट गर्नुहोस्",
        sendResetLinkButton: "रिसेट लिंक पठाउनुहोस्",
        okButton: "ठीक छ",
        registrationSuccess: "दर्ता सफल भयो!",
        loginSuccess: "लगइन सफल भयो!",
        resetPasswordSent: "पासवर्ड रिसेट लिंक तपाईंको ईमेलमा पठाइएको छ।",
        invalidCredentials: "अमान्य ईमेल वा पासवर्ड।",
        genericError: "केही त्रुटि भयो। कृपया पुन: प्रयास गर्नुहोस्।",
        emailInUseError: "यो ईमेल पहिले नै प्रयोगमा छ।",
        invalidEmailError: "अमान्य ईमेल ढाँचा।",
        weakPasswordError: "पासवर्ड कम्तिमा ६ अक्षरको हुनुपर्छ।",
        enterEmailForReset: "पासवर्ड रिसेट गर्न कृपया आफ्नो ईमेल प्रविष्ट गर्नुहोस्।",
        userNotFoundForReset: "यो ईमेलसँग सम्बन्धित कुनै प्रयोगकर्ता फेला परेन।",
        // Add any other Nepali strings for dynamic messages
    }
};

let currentLanguage = 'en'; // Default language

function setLanguage(lang) {
    currentLanguage = lang;

    // Update text content for elements with data-key
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
                element.setAttribute('placeholder', translations[lang][key]);
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });

    // Update the selected option in the dropdown
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = lang;
    }

    // Store the selected language in localStorage
    localStorage.setItem('selectedLanguage', lang);
}

// Function to update the popup messages based on the current language
function updatePopupMessage(popupId, messageKey) {
    const messageElement = document.getElementById(popupId === 'success-popup' ? 'success-message' : 'error-message');
    if (messageElement && translations[currentLanguage] && translations[currentLanguage][messageKey]) {
        messageElement.textContent = translations[currentLanguage][messageKey];
    } else {
        // Fallback to English or a default if translation not found
        messageElement.textContent = translations['en'][messageKey] || messageKey; // Use key as fallback
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if there's a stored language preference, otherwise default to 'en'
    const storedLang = localStorage.getItem('selectedLanguage');
    setLanguage(storedLang || 'en');
});