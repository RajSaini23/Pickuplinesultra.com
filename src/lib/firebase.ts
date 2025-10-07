// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3diPhDNOTyCHJ1gsmNXT_juFypkn92aU",
  authDomain: "ecstatic-mhefl.firebaseapp.com",
  databaseURL: "https://ecstatic-mhefl-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecstatic-mhefl",
  storageBucket: "ecstatic-mhefl.appspot.com",
  messagingSenderId: "698831772358",
  appId: "1:698831772358:web:2546d7ecb924f690fcd5c7",
  measurementId: "G-Z8FFD8YPRB"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics and export it
export const analytics = isSupported().then(yes => yes ? getAnalytics(app) : null);
