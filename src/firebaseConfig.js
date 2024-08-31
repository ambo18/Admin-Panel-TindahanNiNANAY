import firebase from 'firebase/app';
import 'firebase/firestore'; // Import other services as needed
import 'firebase/auth'; // Import Firebase Authentication

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABOtJbBOFi4QLtbzbPdK_flk5H9oA-Uqk",
  authDomain: "tindahanninanay-7f927.firebaseapp.com",
  projectId: "tindahanninanay-7f927",
  storageBucket: "tindahanninanay-7f927.appspot.com",
  messagingSenderId: "236009064965",
  appId: "1:236009064965:web:8f9302d18a9c2ba5db2a6c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase services for use in your app
export const firestore = firebase.firestore();
export const auth = firebase.auth();
