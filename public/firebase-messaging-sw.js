// Import and configure the Firebase SDK
// See: https://firebase.google.com/docs/web/messaging/js/client
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging/sw";
import { getAnalytics, isSupported } from "firebase/analytics/sw";


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


const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// Keep in mind that this customizes received notifications, and handling
// a notification is also possible (e.g. to open a specific page)
// e.g.
// self.addEventListener('notificationclick', (event) => {
//   // do stuff.
// });
//
// For more compex logic, consider using a Workbox-based service worker instead.
// For more information on Workbox, see: https://developers.google.com/web/tools/workbox/
