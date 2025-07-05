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
// Function to get translations (assuming getTranslation is available from dashboard-translation.js)
// Make sure dashboard-translation.js is loaded before dashboard.js in your HTML if using this.
// window.getTranslation is expected to be exposed globally by dashboard-translation.js.

// --- Chat with Swastha AI Logic ---

// Function to send message to the backend and get AI response
window.sendMessage = async function() {
  const chatInput = document.getElementById('chat-input');
  const responseDiv = document.querySelector('#chat-panel .response'); // Make sure your chat panel has a div with class 'response'
  const message = chatInput.value.trim();

  if (message) {
    // Display user's message immediately and a processing message
    responseDiv.textContent = `${window.getTranslation('youLabel') || 'You'}: ${message}\n${window.getTranslation('swasthaAILabel') || 'Swastha AI'}: ${window.getTranslation('processingRequest') || 'Processing your request...'}`;
    chatInput.value = ''; // Clear input field

    try {
      // Send message to your backend server (Express app running on port 3000)
      // The URL '/api/chat' assumes your dashboard.html is served by your Express server.
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
      });

      if (!response.ok) {
        console.log(response)
        // If the server response is not OK (e.g., 400, 500)
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // Display AI's response
      responseDiv.textContent = `${window.getTranslation('youLabel') || 'You'}: ${message}\n${window.getTranslation('swasthaAILabel') || 'Swastha AI'}: ${data.reply}`;

    } catch (error) {
      console.error('Error sending message to backend or processing AI response:', error);
      // Display an error message to the user
      responseDiv.textContent = `${window.getTranslation('swasthaAILabel') || 'Swastha AI'}: ${window.getTranslation('errorMessage') || 'Sorry, something went wrong. Please try again.'}`;
    }
  } else {
    // If the input is empty
    responseDiv.textContent = `${window.getTranslation('swasthaAILabel') || 'Swastha AI'}: ${window.getTranslation('pleaseTypeSymptoms') || 'Please type your symptoms or query.'}`;
  }
};

// Add event listener for the send button
document.getElementById('send-chat-btn').addEventListener('click', window.sendMessage);

// Add event listener for Enter key in the chat input
document.getElementById('chat-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    e.preventDefault(); // Prevent new line in input field
    window.sendMessage();
  }
});

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