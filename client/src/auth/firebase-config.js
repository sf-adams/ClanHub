import {initializeApp} from "firebase/app";
import { getAuth } from 'firebase/auth';

// Firebase details being read from .env file
const firebaseConfig =  {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

// This variable initialises the connection between FBase and Project
const app = initializeApp(firebaseConfig);

// The auth variable creates an authentication instance of app
export const auth = getAuth(app);