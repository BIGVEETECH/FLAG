// js/firebase.js
const firebaseConfig = {
  apiKey: "AIzaSyDtclqrh5_jHE-NWwoHCdTlPobX2axWfJA",
  authDomain: "glorious-band-attendance.firebaseapp.com",
  projectId: "glorious-band-attendance",
  storageBucket: "glorious-band-attendance.firebasestorage.app",
  messagingSenderId: "1005788266331",
  appId: "1:1005788266331:web:bbec9a675512a2bd08a47e",
  measurementId: "G-BCMJY4B7XB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Make Firestore available globally
window.db = firebase.firestore();

// Optional: expose currentEventId globally
window.currentEventId = "Band_Rehearsal_2025";