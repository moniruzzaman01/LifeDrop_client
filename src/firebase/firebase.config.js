import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_LOCAL_API_KEY,
  authDomain: import.meta.env.VITE_LOCAL_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_LOCAL_PROJECT_ID,
  storageBucket: import.meta.env.VITE_LOCAL_STORAGE_BUDGET,
  messagingSenderId: import.meta.env.VITE_LOCAL_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_LOCAL_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
