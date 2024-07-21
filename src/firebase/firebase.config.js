// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const env = await import.meta.env;


// process.env = {...process.env, ...loadEnv(mode, process.cwd())};
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// console.log(import.meta.env);
export const firebaseConfig = {
  // apiKey: "AIzaSyBplgkVpWbrAxdYGIH1_OkqWmEPf2tnf3w",
  // authDomain:"book-inventory-managemen-817b3.firebaseapp.com", 
  // projectId:"book-inventory-managemen-817b3",
  // storageBucket: "book-inventory-managemen-817b3.appspot.com",
  // messagingSenderId: "707036146177",
  // appId: "1:707036146177:web:6e2a2a2f93b2dcf0e22e00"

  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
