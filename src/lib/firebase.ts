// src/lib/firebase.ts
"use client";

import { initializeApp, getApps } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyCS873qmtjxYQTJoAe11ATENGSZteLgRtI",
  authDomain: "ecstatic-mhefl.firebaseapp.com",
  projectId: "ecstatic-mhefl",
  storageBucket: "ecstatic-mhefl.appspot.com",
  messagingSenderId: "698831772358",
  appId: "1:698831772358:web:7d4d42858b105269fcd5c7",
  measurementId: "G-11E029L91N"
};

// Initialize Firebase
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = (typeof window !== 'undefined') ? getMessaging(app) : undefined;
