// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.12.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCX2mKX9ZykcaxLnzA3NgYjaPGJRE9zyXQ",
  authDomain: "examqueue-5700691.firebaseapp.com",
  projectId: "examqueue-5700691",
  storageBucket: "examqueue-5700691.firebasestorage.app",
  messagingSenderId: "913140411769",
  appId: "1:913140411769:web:c03fc6c307874d901a53a8",
  measurementId: "G-7SRCZEM5WZ"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios
export const db = getFirestore(app);
export const auth = getAuth(app);