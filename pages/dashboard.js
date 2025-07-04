// Firebase Authentication
import { auth } from "../firebase-auth.js"; // Adjusted path for the new folder structure
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Check if user is authenticated
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("email").textContent = user.email; // Changed from user-email to email
    document.getElementById("authType").textContent = user.providerData[0].providerId; // Changed from auth-type to authType
    // Example: Fetch total users from a database if available
    document.getElementById("totalUsers").textContent = "N/A (Database not connected)"; 
  } else {
    window.location.href = "../index.html"; // Redirect to login if not signed in
  }
});

// ASK HELP redirects to emergency page
function redirectHelp() {
  window.location.href = "../emergency.html"; // Adjusted path for the new folder structure
}

// LOCATE opens Google Maps with specific location
function redirectLocate() {
  const location = encodeURIComponent("hospitals near Mahalaxmi Lalitpur Cosmos College Block B");
  window.open(`https://www.google.com/maps/search/?api=1&query=${location}`, "_blank"); // Corrected Google Maps URL
}

// ASK DOCTOR opens membership modal
function askDoctor() {
  document.getElementById("membership-popup").style.display = "flex";
}

// Close membership popup
function closePopup() {
  document.getElementById("membership-popup").style.display = "none";
}

// Language selection function
function changeLanguage(lang) {
  console.log(`Language changed to: ${lang}`);
  // Implement actual language change logic here (e.g., load language-specific strings)
  // For this example, we'll just log the change.
}

// Attach these functions to the window object so they are accessible from HTML
window.redirectHelp = redirectHelp;
window.redirectLocate = redirectLocate;
window.askDoctor = askDoctor;
window.closePopup = closePopup;
window.changeLanguage = changeLanguage;

// Generic click alert for action buttons (removed as per instructions, but keeping for reference if needed)
// document.querySelectorAll(".action-button").forEach((btn) => {
//   btn.addEventListener("click", () => {
//     console.log(`${btn.textContent.trim()} clicked!`);
//   });
// });