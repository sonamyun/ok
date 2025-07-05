// dashboard-translation.js

const dashboardTranslations = {
    en: {
        // Sidebar
        sidebarHome: "Home",
        sidebarChat: "Chat with AI", // Changed key for consistency
        sidebarSettings: "Settings",
        sidebarIntegrations: "Integrations",
        sidebarSecurity: "Security",
        userLogout: "Logout", // Also used in header dropdown

        // Header
        dashboardTitle: "Swastha AI Dashboard",
        globalSearchPlaceholder: "Global Search...",
        langEnglish: "English",
        langNepali: "Nepali",
        userProfile: "Profile", // Also used in header dropdown

        // Dashboard Content - User Stats
        userStatsHeading: "User Stats",
        emailLabel: "Email",
        authTypeLabel: "Auth Type",
        totalUsersLabel: "Total Users",
        activeUsersLabel: "Active Users Today", // More specific

        // Dashboard Content - Medical Trends
        medicalTrendsHeading: "Medical Trends",
        medicalTrendsParagraph: "Recent health-related insights and updates. Stay informed about the latest in healthcare.",
        trendFlu: "Increased flu cases reported in Bagmati Province.",
        trendDiabetes: "New guidelines for diabetes management published.",
        trendTelemedicine: "Telemedicine adoption growing.",
        readMore: "Read More",

        // Dashboard Content - Quick Actions
        quickActionsHeading: "Quick Actions",
        actionAskHelp: "Ask Help",
        actionLocate: "Locate",
        actionAskDoctor: "Ask Doctor",
        okButton: "OK", // Used in popups

        // Dashboard Content - Calendar
        calendarHeading: "Appointments",

        // Dashboard Content - Key Performance Indicators (KPIs)
        kpiHeading: "Key Health Indicators",
        kpiWeight: "Weight:",
        kpiHeartRate: "Heart Rate:",
        kpiBloodPressure: "BP:",
        kpiSleep: "Sleep:",
        editKpiButton: "Edit KPIs",

        // Chat with Swastha AI Panel
        chatHeading: "Chat with Swastha AI",
        chatInputPlaceholder: "Describe your medical symptoms (e.g., I have a headache and feel dizzy)...",
        chatInitialResponse: "Type your symptoms above to get assistance.", // Initial text in chat
        sendButton: "Send",
        smartSuggestionsText: "Smart suggestions: \"Meditation Helps decrease your stress\"",
        exportChatButton: "Export Chat (PDF)",

        // Settings Panel
        settingsHeading: "Settings",
        settingsTabGeneral: "General",
        settingsTabProfile: "Profile",
        settingsTabNotifications: "Notifications",
        generalSettingsHeading: "General Settings",
        languageSettingLabel: "Language:",
        themeSettingLabel: "Theme:",
        lightThemeButton: "Light",
        darkThemeButton: "Dark",
        profileSettingsHeading: "Profile Settings",
        profileNameLabel: "Name:",
        profileEmailLabel: "Email:",
        editProfileButton: "Edit Profile",
        notificationSettingsHeading: "Notification Settings",
        enableEmailNotifications: "Enable Email Notifications",
        enablePushNotifications: "Enable Push Notifications",
        saveChangesButton: "Save Changes",

        // Security Panel
        securityHeading: "Security",
        twoFactorAuthHeading: "Two-Factor Authentication",
        twoFactorAuthDescription: "Add an extra layer of security to your account.",
        enableButton: "Enable",
        changePasswordHeading: "Change Password",
        changePasswordDescription: "Update your password regularly for better security.",
        changePasswordButton: "Change Password",

        // Integrations Panel
        integrationsHeading: "Integrations",
        googleFitHeading: "Google Fit",
        googleFitDescription: "Connect your Google Fit account to sync health data.",
        appleHealthHeading: "Apple Health",
        appleHealthDescription: "Connect your Apple Health account to sync health data.",
        connectButton: "Connect",

        // Membership Popup
        membershipPopupHeading: "Membership Required",
        membershipPopupText: "Access to a doctor consultation requires a premium membership. Please upgrade your account.",

        // Resource Links (assuming these are buttons)
        whoLink: "WHO Official Site",
        cdcLink: "CDC Official Site",
        nhsLink: "NHS Health A-Z",

        // Login/Registration Page (index.html specific, if used here)
        createAccount: "Create Account",
        namePlaceholder: "Name",
        emailPlaceholder: "Email",
        passwordPlaceholder: "Password",
        signUpButton: "Sign Up",
        welcomeBackHeading: "Welcome Back!",
        welcomeBackParagraph: "Please enter your credentials to continue to Swastha AI",
        signInButton: "Sign In",
        namasteHeading: "Namaste!",
        namasteParagraph: "Enter your personal details and chat with your Swastha AI",
        enterEmailPlaceholder: "Enter your email",
        sendResetLinkButton: "Send Reset Link",
        loginButton: "Login", // Assuming this is the login form button
        // Popup messages (from firebase-auth.js)
        loginFailed: "Login failed:",
        signupFailed: "Signup failed:",
        passwordResetSuccess: "Password reset email sent!",
        passwordResetFailed: "Password reset failed:",
        emailRequired: "Please enter your email.",
        accountCreated: "Account created! Redirecting to dashboard...",
    },
    ne: {
        // Sidebar
        sidebarHome: "गृह",
        sidebarChat: "एआईसँग कुराकानी", // Updated Nepali translation for new key
        sidebarSettings: "सेटिङहरू",
        sidebarIntegrations: "एकीकरणहरू",
        sidebarSecurity: "सुरक्षा",
        userLogout: "लगआउट",

        // Header
        dashboardTitle: "स्वस्थ एआई ड्यासबोर्ड",
        globalSearchPlaceholder: "विश्वव्यापी खोज...",
        langEnglish: "अंग्रेजी",
        langNepali: "नेपाली",
        userProfile: "प्रोफाइल",

        // Dashboard Content - User Stats
        userStatsHeading: "प्रयोगकर्ता तथ्याङ्क",
        emailLabel: "इमेल", // Added Nepali translation
        authTypeLabel: "प्रमाणीकरण प्रकार", // Added Nepali translation
        totalUsersLabel: "कुल प्रयोगकर्ताहरू", // Added Nepali translation
        activeUsersLabel: "आजका सक्रिय प्रयोगकर्ताहरू", // Added Nepali translation

        // Dashboard Content - Medical Trends
        medicalTrendsHeading: "चिकित्सा प्रवृतिहरू",
        medicalTrendsParagraph: "हालका स्वास्थ्य-सम्बन्धित अन्तर्दृष्टि र अपडेटहरू। स्वास्थ्य सेवामा नवीनतम बारे सूचित रहनुहोस्।",
        trendFlu: "बागमती प्रदेशमा फ्लूका बिरामी बढेको रिपोर्ट।",
        trendDiabetes: "मधुमेह व्यवस्थापनका लागि नयाँ दिशानिर्देशहरू प्रकाशित।",
        trendTelemedicine: "टेलिमेडिसिन अपनाउने क्रम बढ्दै।",
        readMore: "थप पढ्नुहोस्",

        // Dashboard Content - Quick Actions
        quickActionsHeading: "द्रुत कार्यहरू",
        actionAskHelp: "मद्दत सोध्नुहोस्",
        actionLocate: "पत्ता लगाउनुहोस्",
        actionAskDoctor: "डाक्टर सोध्नुहोस्",
        okButton: "ठीक छ",

        // Dashboard Content - Calendar
        calendarHeading: "अपोइन्टमेन्टहरू",

        // Dashboard Content - Key Performance Indicators (KPIs)
        kpiHeading: "मुख्य स्वास्थ्य सूचकहरू",
        kpiWeight: "वजन:",
        kpiHeartRate: "मुटुको गति:",
        kpiBloodPressure: "रक्तचाप:",
        kpiSleep: "निद्रा:",
        editKpiButton: "KPIs सम्पादन गर्नुहोस्",

        // Chat with Swastha AI Panel
        chatHeading: "स्वस्थ एआईसँग कुराकानी गर्नुहोस्",
        chatInputPlaceholder: "आफ्नो मेडिकल लक्षणहरू वर्णन गर्नुहोस् (उदाहरणका लागि, मलाई टाउको दुखेको छ र चक्कर लागेको छ)...",
        chatInitialResponse: "सहायताका लागि माथि आफ्ना लक्षणहरू टाइप गर्नुहोस्।",
        sendButton: "पठाउनुहोस्",
        smartSuggestionsText: "स्मार्ट सुझावहरू: \"ध्यानले तनाव कम गर्न मद्दत गर्छ\"",
        exportChatButton: "च्याट निर्यात गर्नुहोस् (PDF)",

        // Settings Panel
        settingsHeading: "सेटिङहरू",
        settingsTabGeneral: "सामान्य",
        settingsTabProfile: "प्रोफाइल",
        settingsTabNotifications: "सूचनाहरू",
        generalSettingsHeading: "सामान्य सेटिङहरू",
        languageSettingLabel: "भाषा:",
        themeSettingLabel: "थिम:",
        lightThemeButton: "लाइट",
        darkThemeButton: "गाढा",
        profileSettingsHeading: "प्रोफाइल सेटिङहरू",
        profileNameLabel: "नाम:",
        profileEmailLabel: "इमेल:",
        editProfileButton: "प्रोफाइल सम्पादन गर्नुहोस्",
        notificationSettingsHeading: "सूचना सेटिङहरू",
        enableEmailNotifications: "इमेल सूचनाहरू सक्षम पार्नुहोस्",
        enablePushNotifications: "पुश सूचनाहरू सक्षम पार्नुहोस्",
        saveChangesButton: "परिवर्तनहरू बचत गर्नुहोस्",

        // Security Panel
        securityHeading: "सुरक्षा",
        twoFactorAuthHeading: "दुई-कारक प्रमाणीकरण",
        twoFactorAuthDescription: "आफ्नो खातामा सुरक्षाको अतिरिक्त तह थप्नुहोस्।",
        enableButton: "सक्षम पार्नुहोस्",
        changePasswordHeading: "पासवर्ड परिवर्तन गर्नुहोस्",
        changePasswordDescription: "राम्रो सुरक्षाका लागि आफ्नो पासवर्ड नियमित रूपमा अपडेट गर्नुहोस्।",
        changePasswordButton: "पासवर्ड परिवर्तन गर्नुहोस्",

        // Integrations Panel
        integrationsHeading: "एकीकरणहरू",
        googleFitHeading: "गुगल फिट",
        googleFitDescription: "स्वास्थ्य डेटा सिङ्क गर्न आफ्नो गुगल फिट खाता जडान गर्नुहोस्।",
        appleHealthHeading: "एप्पल स्वास्थ्य",
        appleHealthDescription: "स्वास्थ्य डेटा सिङ्क गर्न आफ्नो एप्पल स्वास्थ्य खाता जडान गर्नुहोस्।",
        connectButton: "जडान गर्नुहोस्",

        // Membership Popup
        membershipPopupHeading: "सदस्यता आवश्यक छ",
        membershipPopupText: "डाक्टर परामर्शमा पहुँचका लागि प्रिमियम सदस्यता आवश्यक छ। कृपया आफ्नो खाता अपग्रेड गर्नुहोस्।",

        // Resource Links
        whoLink: "डब्ल्यूएचओ आधिकारिक साइट",
        cdcLink: "सीडीसी आधिकारिक साइट",
        nhsLink: "एनएचएस स्वास्थ्य ए-जेड",

        // Login/Registration Page (index.html specific, if used here)
        createAccount: "खाता सिर्जना गर्नुहोस्",
        namePlaceholder: "नाम",
        emailPlaceholder: "इमेल",
        passwordPlaceholder: "पासवर्ड",
        signUpButton: "साइन अप गर्नुहोस्",
        welcomeBackHeading: "फेरि स्वागत छ!",
        welcomeBackParagraph: "स्वस्थ एआईमा जारी राख्न कृपया आफ्नो प्रमाणहरू प्रविष्ट गर्नुहोस्",
        signInButton: "साइन इन गर्नुहोस्",
        namasteHeading: "नमस्ते!",
        namasteParagraph: "आफ्नो व्यक्तिगत विवरण प्रविष्ट गर्नुहोस् र आफ्नो स्वस्थ एआईसँग कुराकानी गर्नुहोस्",
        enterEmailPlaceholder: "आफ्नो इमेल प्रविष्ट गर्नुहोस्",
        sendResetLinkButton: "रिसेट लिङ्क पठाउनुहोस्",
        loginButton: "लगइन",
        // Popup messages (from firebase-auth.js)
        loginFailed: "लगइन असफल भयो:",
        signupFailed: "साइनअप असफल भयो:",
        passwordResetSuccess: "पासवर्ड रिसेट इमेल पठाइयो!",
        passwordResetFailed: "पासवर्ड रिसेट असफल भयो:",
        emailRequired: "कृपया आफ्नो इमेल प्रविष्ट गर्नुहोस्।",
        accountCreated: "खाता सिर्जना भयो! ड्यासबोर्डमा रिडाइरेक्ट गर्दै...",
    }
};

// Get current language from localStorage or default to 'en'
const currentDashboardLanguage = localStorage.getItem('dashboardLanguage') || 'en';

// Function to get translation for a given key
function getTranslation(key) {
    return dashboardTranslations[currentDashboardLanguage][key] || key; // Fallback to key if translation not found
}

// Function to set language and update all data-key elements
function setLanguage(lang) {
    localStorage.setItem('dashboardLanguage', lang);
    currentDashboardLanguage = lang; // Update the global variable

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.dataset.key;
        element.textContent = getTranslation(key);

        // Special handling for placeholder text if the element is an input
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            element.setAttribute('placeholder', getTranslation(key));
        }
    });

    // Handle dynamic content that might not have data-key attributes
    // e.g., Medical Trends dynamic heading and paragraph
    const medicalTrendsHeadingDynamic = document.getElementById('medical-trends-heading-dynamic');
    if (medicalTrendsHeadingDynamic) {
        // This is now handled by the updateMedicalTrend function in dashboard.html's script
        // However, if the entire list of articles should be translated instantly on language change,
        // you would need to re-run the `updateMedicalTrend` or a similar function here.
        // For now, it updates on its own interval based on the hardcoded list.
        // To properly translate the trend content dynamically, the `medicalNewsArticles`
        // array would also need to be part of the `dashboardTranslations` object.
    }

    // Update popup content if needed after language changes,
    // they'll need to be refreshed if their initial 'Loading...' state is translated.
    // For now, we assume user-email and authType-stat are populated by the backend/Firebase,
    // so only their labels are translated.
}

// Function to update popup content (e.g., membership popup)
function updatePopupContent(popupId, messageKeys) {
    const popup = document.getElementById(popupId);
    if (!popup) return;

    if (messageKeys.heading) {
        const headingElement = popup.querySelector('h3');
        if (headingElement) headingElement.textContent = getTranslation(messageKeys.heading);
    }
    if (messageKeys.paragraph) {
        const paragraphElement = popup.querySelector('p');
        if (paragraphElement) paragraphElement.textContent = getTranslation(messageKeys.paragraph);
    }
    if (messageKeys.button) {
        const buttonElement = popup.querySelector('button');
        if (buttonElement) buttonElement.textContent = getTranslation(messageKeys.button);
    }
}


// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentDashboardLanguage); // Apply the language initially
});

// Expose getTranslation and setLanguage to the global scope if dashboard.js needs them
// Or use module imports if both are modules
window.getTranslation = getTranslation;
window.setLanguage = setLanguage;
window.updatePopupContent = updatePopupContent; // Expose this function