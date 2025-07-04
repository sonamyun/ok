// dashboard-translation.js

const dashboardTranslations = {
    en: {
        // Sidebar
        sidebarHome: "Home",
        sidebarSettings: "Settings",
        sidebarIntegrations: "Integrations",
        sidebarSecurity: "Security",

        // Header
        dashboardTitle: "Swastha AI Dashboard",
        globalSearchPlaceholder: "Global Search...",
        langEnglish: "English",
        langNepali: "Nepali",
        userProfile: "Profile",
        userLogout: "Logout",

        // Dashboard Content - User Stats
        userStatsHeading: "User Stats",
        emailLabel: "Email",
        authTypeLabel: "Auth Type",
        totalUsersLabel: "Total Users",
        activeUsersLabel: "Active Users",

        // Dashboard Content - Medical Trends
        medicalTrendsHeading: "Medical Trends",
        medicalTrendsParagraph: "Recent health-related insights and updates. Stay informed about the latest in healthcare.",
        trendFlu: "Increased flu cases reported in Bagmati Province.",
        trendDiabetes: "New guidelines for diabetes management published.",
        trendTelemedicine: "Telemedicine adoption growing.",

        // Dashboard Content - Quick Actions
        quickActionsHeading: "Quick Actions",
        actionAskHelp: "Ask Help",
        actionLocate: "Locate",
        actionAskDoctor: "Ask Doctor",

        // Dashboard Content - Chat with Swastha AI
        chatHeading: "Chat with Swastha AI",
        chatInputPlaceholder: "Describe your medical symptoms (e.g., I have a headache and feel dizzy)...",
        sendButton: "Send",
        chatInitialResponse: "Swastha AI: Type your symptoms above to get assistance.",
        smartSuggestionsText: "Smart suggestions: \"Your traffic is 20% lower than usual on Wednesdays.\"",
        exportChatButton: "Export Chat (PDF)",
        youLabel: "You", // Added for chat responses
        swasthaAILabel: "Swastha AI", // Added for chat responses
        processingRequest: "Processing your request...", // Added for chat responses
        aiResponseHeadacheDizzy: "Thank you for providing your symptoms. Based on \"headache and dizziness\", it could be due to various reasons like dehydration, stress, or even a migraine. If symptoms persist or worsen, please consult a medical professional directly.", // Added for chat responses
        pleaseTypeSymptoms: "Please type your symptoms to get assistance.", // Added for chat responses

        // Dashboard Content - To-Do List
        todoListHeading: "To-Do List",
        todoCheckup: "Schedule annual check-up",
        todoRecipes: "Research healthy recipes",
        todoExercise: "Exercise for 30 minutes",

        // Dashboard Content - Calendar
        calendarHeading: "Calendar",
        calendarToday: "Today",
        calendarNoEvents: "No special events.",
        calendarUpcoming: "Upcoming",
        calendarDentalAppointment: "Dental appointment (July 10).",

        // Dashboard Content - Notifications
        notificationsHeading: "Notifications",
        notificationMessage: "New message from Dr. Sharma.",
        notificationReminder: "Reminder: Take medication at 8 PM.",

        // Dashboard Content - Health Score
        healthScoreHeading: "Health Score",
        healthIndexParagraph: "Overall Health Index",

        // Settings Panel
        settingsPanelHeading: "Settings",
        tabUserPrefs: "User Preferences",
        tabAccountSettings: "Account Settings",
        tabCustomization: "Customization",
        tabSystemSettings: "System Settings",

        // Settings Panel - User Preferences
        userPrefsSubheading: "User Preferences",
        themeLabel: "Theme:",
        themeLight: "Light",
        themeDark: "Dark",
        themeAuto: "Auto",
        emailNotificationsLabel: "Email Notifications:",
        smsNotificationsLabel: "SMS Notifications:",
        timeZoneLabel: "Time Zone:",
        timezoneKathmandu: "Kathmandu (GMT+05:45)",
        timezoneNewYork: "New York (EST)",
        dataRefreshRateLabel: "Data Refresh Rate:",
        refreshAuto: "Automatic",
        refreshManual: "Manual",
        savePrefsButton: "Save Preferences",

        // Settings Panel - Account Settings
        accountSettingsSubheading: "Account Settings",
        profileNameLabel: "Name:",
        profileEmailLabel: "Email:",
        passwordSecurityLabel: "Password & Security:",
        changePasswordButton: "Change Password",
        enable2FAButton: "Enable 2FA",
        privacyControlsLabel: "Privacy Controls:",
        manageDataSharingButton: "Manage Data Sharing",
        saveAccountSettingsButton: "Save Account Settings",

        // Settings Panel - Customization
        customizationSubheading: "Customization",
        widgetLayoutLabel: "Widget Layout:",
        dragDropEditorButton: "Drag & Drop Editor",
        defaultLandingPageLabel: "Default Landing Page:",
        landingHome: "Home Dashboard",
        landingChat: "Chat with AI",
        landingTrends: "Medical Trends",
        saveCustomizationsButton: "Save Customizations",

        // Settings Panel - System Settings
        systemSettingsSubheading: "System Settings",
        rolePermissionsLabel: "Role & Permissions:",
        adminAccessRequired: "Admin access required.",
        backupRestoreLabel: "Backup & Restore:",
        createBackupButton: "Create Backup",
        restoreBackupButton: "Restore from Backup",
        versionInfoLabel: "Version Info:",
        versionNumber: "v1.0.0 (Build 20250705)", // This will be hardcoded, or dynamically updated from JS

        // Integrations Panel
        integrationsPanelHeading: "Integrations",
        integrationsParagraph: "Connect Swastha AI with your favorite third-party applications.",
        googleAnalyticsHeading: "Google Analytics",
        googleAnalyticsDesc: "Connect to view your website traffic data.",
        stripeHeading: "Stripe (Payments)",
        stripeDesc: "Integrate for payment processing.",
        slackTeamsHeading: "Slack / Teams",
        slackTeamsDesc: "Receive notifications and alerts directly.",
        connectButton: "Connect", // Reused for all connect buttons

        // Security Panel
        securityPanelHeading: "Security & Access",
        securityParagraph: "Manage security settings and review access logs.",
        auditLogsHeading: "Audit Logs",
        auditLogsDesc: "Review all system activities and changes.",
        viewLogsButton: "View Logs",
        sessionManagementHeading: "Session Management",
        sessionManagementDesc: "See active sessions and log out devices.",
        manageSessionsButton: "Manage Sessions",
        userRolesHeading: "User Roles",
        userRolesDesc: "Define and manage user roles and permissions.",
        manageRolesButton: "Manage Roles",

        // Membership Popup
        membershipRequiredHeading: "Membership Required",
        membershipRequiredParagraph: "Please upgrade your membership to access this feature.",
        closeButton: "Close",

        // Alerts/Dynamic Messages
        logoutFailed: "Failed to logout",
        settingsSavedPrefix: "Settings saved for ",
        settingsSavedSuffix: "!",
        UserPreferences: "User Preferences", // Category name for alert
        AccountSettings: "Account Settings", // Category name for alert
        Customization: "Customization", // Category name for alert
    },
    ne: {
        // Sidebar
        sidebarHome: "गृहपृष्ठ",
        sidebarSettings: "सेटिङ्स",
        sidebarIntegrations: "एकीकरणहरू",
        sidebarSecurity: "सुरक्षा",

        // Header
        dashboardTitle: "स्वस्थ एआई (AI) ड्यासबोर्ड",
        globalSearchPlaceholder: "विश्वव्यापी खोज...",
        langEnglish: "अंग्रेजी",
        langNepali: "नेपाली",
        userProfile: "प्रोफाइल",
        userLogout: "लगआउट",

        // Dashboard Content - User Stats
        userStatsHeading: "प्रयोगकर्ता तथ्याङ्क",
        emailLabel: "ईमेल",
        authTypeLabel: "प्रमाणीकरण प्रकार",
        totalUsersLabel: "कुल प्रयोगकर्ताहरू",
        activeUsersLabel: "सक्रिय प्रयोगकर्ताहरू",

        // Dashboard Content - Medical Trends
        medicalTrendsHeading: "चिकित्सा प्रवृत्तिहरू",
        medicalTrendsParagraph: "भर्खरका स्वास्थ्य-सम्बन्धित अन्तर्दृष्टि र अपडेटहरू। स्वास्थ्य सेवामा नवीनतम बारे सूचित रहनुहोस्।",
        trendFlu: "बागमती प्रदेशमा फ्लूका केसहरू बढेको रिपोर्ट।",
        trendDiabetes: "मधुमेह व्यवस्थापनका लागि नयाँ दिशानिर्देशहरू प्रकाशित।",
        trendTelemedicine: "टेलिमेडिसिन अपनाउने क्रम बढ्दै।",

        // Dashboard Content - Quick Actions
        quickActionsHeading: "द्रुत कार्यहरू",
        actionAskHelp: "मद्दत माग्नुहोस्",
        actionLocate: "स्थान पत्ता लगाउनुहोस्",
        actionAskDoctor: "डाक्टरलाई सोध्नुहोस्",

        // Dashboard Content - Chat with Swastha AI
        chatHeading: "स्वस्थ एआई (AI) सँग कुरा गर्नुहोस्",
        chatInputPlaceholder: "आफ्नो चिकित्सा लक्षणहरू वर्णन गर्नुहोस् (उदाहरणका लागि, मलाई टाउको दुखेको छ र चक्कर लागेको छ)...",
        sendButton: "पठाउनुहोस्",
        chatInitialResponse: "स्वस्थ एआई (AI): सहायता प्राप्त गर्न माथि आफ्नो लक्षणहरू टाइप गर्नुहोस्।",
        smartSuggestionsText: "स्मार्ट सुझावहरू: \"बुधबार तपाईंको ट्राफिक सामान्य भन्दा २०% कम छ।\"",
        exportChatButton: "कुराकानी निर्यात गर्नुहोस् (PDF)",
        youLabel: "तपाईं",
        swasthaAILabel: "स्वस्थ एआई (AI)",
        processingRequest: "तपाईंको अनुरोध प्रक्रिया गर्दैछ...",
        aiResponseHeadacheDizzy: "तपाईंको लक्षणहरू प्रदान गर्नुभएकोमा धन्यवाद। 'टाउको दुखेको र चक्कर लागेको' आधारमा, यो निर्जलीकरण, तनाव, वा माइग्रेन जस्ता विभिन्न कारणले हुन सक्छ। यदि लक्षणहरू जारी रहे वा बिग्रिएमा, कृपया सिधै चिकित्सकसँग परामर्श गर्नुहोस्।",
        pleaseTypeSymptoms: "सहायता प्राप्त गर्न कृपया आफ्नो लक्षणहरू टाइप गर्नुहोस्।",

        // Dashboard Content - To-Do List
        todoListHeading: "गर्नुपर्ने कार्यहरूको सूची",
        todoCheckup: "वार्षिक जाँचको तालिका बनाउनुहोस्",
        todoRecipes: "स्वस्थ व्यञ्जनहरू अनुसन्धान गर्नुहोस्",
        todoExercise: "३० मिनेट व्यायाम गर्नुहोस्",

        // Dashboard Content - Calendar
        calendarHeading: "क्यालेन्डर",
        calendarToday: "आज",
        calendarNoEvents: "कुनै विशेष घटनाहरू छैनन्।",
        calendarUpcoming: "आगामी",
        calendarDentalAppointment: "दाँतको अपोइन्टमेन्ट (जुलाई १०)।",

        // Dashboard Content - Notifications
        notificationsHeading: "सूचनाहरू",
        notificationMessage: "डा. शर्माबाट नयाँ सन्देश।",
        notificationReminder: "रिमाइन्डर: बेलुका ८ बजे औषधि लिनुहोस्।",

        // Dashboard Content - Health Score
        healthScoreHeading: "स्वास्थ्य स्कोर",
        healthIndexParagraph: "समग्र स्वास्थ्य सूचकांक",

        // Settings Panel
        settingsPanelHeading: "सेटिङ्स",
        tabUserPrefs: "प्रयोगकर्ता प्राथमिकताहरू",
        tabAccountSettings: "खाता सेटिङ्स",
        tabCustomization: "अनुकूलन",
        tabSystemSettings: "प्रणाली सेटिङ्स",

        // Settings Panel - User Preferences
        userPrefsSubheading: "प्रयोगकर्ता प्राथमिकताहरू",
        themeLabel: "थिम:",
        themeLight: "हल्का",
        themeDark: "गाढा",
        themeAuto: "स्वतः",
        emailNotificationsLabel: "ईमेल सूचनाहरू:",
        smsNotificationsLabel: "एसएमएस सूचनाहरू:",
        timeZoneLabel: "समय क्षेत्र:",
        timezoneKathmandu: "काठमाडौं (GMT+०५:४५)",
        timezoneNewYork: "न्यु योर्क (EST)",
        dataRefreshRateLabel: "डाटा रिफ्रेस दर:",
        refreshAuto: "स्वचालित",
        refreshManual: "म्यानुअल",
        savePrefsButton: "प्राथमिकताहरू बचत गर्नुहोस्",

        // Settings Panel - Account Settings
        accountSettingsSubheading: "खाता सेटिङ्स",
        profileNameLabel: "नाम:",
        profileEmailLabel: "ईमेल:",
        passwordSecurityLabel: "पासवर्ड र सुरक्षा:",
        changePasswordButton: "पासवर्ड परिवर्तन गर्नुहोस्",
        enable2FAButton: "२एफए (2FA) सक्षम गर्नुहोस्",
        privacyControlsLabel: "गोपनीयता नियन्त्रणहरू:",
        manageDataSharingButton: "डाटा साझेदारी व्यवस्थापन गर्नुहोस्",
        saveAccountSettingsButton: "खाता सेटिङ्स बचत गर्नुहोस्",

        // Settings Panel - Customization
        customizationSubheading: "अनुकूलन",
        widgetLayoutLabel: "विजेट लेआउट:",
        dragDropEditorButton: "तान्नुहोस् र छोड्नुहोस् सम्पादक",
        defaultLandingPageLabel: "पूर्वनिर्धारित ल्यान्डिङ पृष्ठ:",
        landingHome: "गृह ड्यासबोर्ड",
        landingChat: "एआई (AI) सँग कुरा गर्नुहोस्",
        landingTrends: "चिकित्सा प्रवृत्तिहरू",
        saveCustomizationsButton: "अनुकूलनहरू बचत गर्नुहोस्",

        // Settings Panel - System Settings
        systemSettingsSubheading: "प्रणाली सेटिङ्स",
        rolePermissionsLabel: "भूमिका र अनुमतिहरू:",
        adminAccessRequired: "प्रशासक पहुँच आवश्यक छ।",
        backupRestoreLabel: "ब्याकअप र पुनर्स्थापना:",
        createBackupButton: "ब्याकअप सिर्जना गर्नुहोस्",
        restoreBackupButton: "ब्याकअपबाट पुनर्स्थापना गर्नुहोस्",
        versionInfoLabel: "संस्करण जानकारी:",
        versionNumber: "v१.०.० (बिल्ड २०२५०७०५)",

        // Integrations Panel
        integrationsPanelHeading: "एकीकरणहरू",
        integrationsParagraph: "स्वस्थ एआई (AI) लाई आफ्नो मनपर्ने तेस्रो-पक्षीय अनुप्रयोगहरूसँग जोड्नुहोस्।",
        googleAnalyticsHeading: "गुगल एनालिटिक्स",
        googleAnalyticsDesc: "आफ्नो वेबसाइट ट्राफिक डाटा हेर्न जोड्नुहोस्।",
        stripeHeading: "स्ट्राइप (भुक्तानीहरू)",
        stripeDesc: "भुक्तानी प्रक्रियाको लागि एकीकृत गर्नुहोस्।",
        slackTeamsHeading: "स्ल्याक / टिम्स",
        slackTeamsDesc: "सीधै सूचनाहरू र अलर्टहरू प्राप्त गर्नुहोस्।",
        connectButton: "जोड्नुहोस्",

        // Security Panel
        securityPanelHeading: "सुरक्षा र पहुँच",
        securityParagraph: "सुरक्षा सेटिङ्स व्यवस्थापन गर्नुहोस् र पहुँच लगहरू समीक्षा गर्नुहोस्।",
        auditLogsHeading: "अडिट लगहरू",
        auditLogsDesc: "सबै प्रणाली गतिविधिहरू र परिवर्तनहरू समीक्षा गर्नुहोस्।",
        viewLogsButton: "लगहरू हेर्नुहोस्",
        sessionManagementHeading: "सत्र व्यवस्थापन",
        sessionManagementDesc: "सक्रिय सत्रहरू हेर्नुहोस् र उपकरणहरू लगआउट गर्नुहोस्।",
        userRolesHeading: "प्रयोगकर्ता भूमिका",
        userRolesDesc: "प्रयोगकर्ता भूमिका र अनुमतिहरू परिभाषित र व्यवस्थापन गर्नुहोस्।",
        manageRolesButton: "भूमिका व्यवस्थापन गर्नुहोस्",

        // Membership Popup
        membershipRequiredHeading: "सदस्यता आवश्यक छ",
        membershipRequiredParagraph: "यो सुविधा पहुँच गर्न कृपया आफ्नो सदस्यता अपग्रेड गर्नुहोस्।",
        closeButton: "बन्द गर्नुहोस्",

        // Alerts/Dynamic Messages
        logoutFailed: "लगआउट असफल भयो",
        settingsSavedPrefix: "सेटिङ्स बचत गरियो ",
        settingsSavedSuffix: "!",
        UserPreferences: "प्रयोगकर्ता प्राथमिकताहरू",
        AccountSettings: "खाता सेटिङ्स",
        Customization: "अनुकूलन",
    }
};

let currentDashboardLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Initialize with stored language or English

function getTranslation(key) {
    return dashboardTranslations[currentDashboardLanguage][key] || dashboardTranslations.en[key] || key;
}

function setLanguage(lang) {
    currentDashboardLanguage = lang;
    localStorage.setItem('selectedLanguage', lang); // Save preference

    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        if (element.tagName === 'INPUT' && element.hasAttribute('placeholder')) {
            element.setAttribute('placeholder', getTranslation(key));
        } else {
            element.textContent = getTranslation(key);
        }
    });

    // Handle special cases for options in select elements that have data-key
    document.querySelectorAll('select[data-key="langSelect"] option').forEach(option => {
        const key = option.getAttribute('data-key');
        option.textContent = getTranslation(key);
    });
    document.querySelectorAll('#theme-select option').forEach(option => {
        const key = option.getAttribute('data-key');
        option.textContent = getTranslation(key);
    });
     document.querySelectorAll('#time-zone-select option').forEach(option => {
        const key = option.getAttribute('data-key');
        option.textContent = getTranslation(key);
    });
    document.querySelectorAll('#data-refresh-rate option').forEach(option => {
        const key = option.getAttribute('data-key');
        option.textContent = getTranslation(key);
    });
    document.querySelectorAll('#default-landing-page option').forEach(option => {
        const key = option.getAttribute('data-key');
        option.textContent = getTranslation(key);
    });


    // Ensure the dropdown itself shows the currently active language
    const langSelect = document.getElementById('language-select');
    if (langSelect) {
        langSelect.value = lang;
    }

    // Update dynamic text that might not have a data-key directly, like some parts of the chat response
    // Or elements whose content is built dynamically by JS
    // This part requires careful mapping to ensure all dynamic texts are handled.
    // For the chat response:
    // If it's already showing the initial message, update it
    const chatResponseDiv = document.querySelector('.chatbox .response');
    if (chatResponseDiv && chatResponseDiv.textContent.includes('Type your symptoms above')) { // Check if it's the initial message
        chatResponseDiv.textContent = getTranslation('swasthaAILabel') + ": " + getTranslation('chatInitialResponse');
    }

    // Update user email and auth type if they are loaded later
    // These are typically populated by dashboard.js, but if they are visible when language changes,
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
window.updatePopupContent = updatePopupContent; // Expose this function for the popup