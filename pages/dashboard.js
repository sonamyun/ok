// pages/dashboard.js
import { auth } from "../firebase-auth.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";

// Check if user is authenticated
onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById("user-email").textContent = user.email; // For header display
    document.getElementById("email-stat").textContent = user.email; // For user stats card
    document.getElementById("authType-stat").textContent = user.providerData[0].providerId; // For user stats card
    // You can add logic here to fetch and display total users from your backend/Firestore
  } else {
    window.location.href = "../index.html"; // Redirect to login if not signed in
  }
});

// --- Event Listeners for Buttons ---

// Logout Button
document.getElementById("logout-btn").addEventListener("click", () => {
  signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href = "../index.html";
  }).catch((error) => {
    // An error happened.
    console.error("Logout Failed", error);
    alert("Logout failed. Please try again.");
  });
});

// ASK HELP redirects to emergency page
document.getElementById("ask-help").addEventListener("click", () => {
  window.location.href = "emergency.html";
});

// LOCATE opens Google Maps with specific location
document.getElementById("locate").addEventListener("click", () => {
  const location = encodeURIComponent("hospitals near Mahalaxmi Lalitpur Cosmos College Block B");
  // Corrected and safer Google Maps URL
  window.open(`https://www.google.com/maps/search/?api=1&query=${location}`, "_blank");
});

// ASK DOCTOR opens membership modal
document.getElementById("ask-doctor").addEventListener("click", () => {
  document.getElementById("membership-popup").style.display = "flex";
});

// Close membership popup
document.getElementById("close-popup-btn").addEventListener("click", () => {
  document.getElementById("membership-popup").style.display = "none";
});