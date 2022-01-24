import { initializeApp } from "firebase/app";
import firebase from 'firebase/app';
import { getAuth } from 'firebase/auth';
// import { getFirestore } from '@firebase/firestore';
// require('dotenv').config();

const firebaseConfig = {
  // apiKey: process.env.API_KEY,
  // apiKey: process.env.API_KEY,
  // authDomain: process.env.AUTH_DOMAIN,
  // projectId: process.env.PROJECT_ID,
  // storageBucket: process.env.STORAGE_BUCKET,
  // messagingSenderId: process.env.MESSAGING_SENDER_ID,
  // appId: process.env.APP_ID,
  // measurementId: process.env.MEASUREMENT_ID


  
};

const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;