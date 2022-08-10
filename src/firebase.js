import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDzFRf1nOhyMIERWJD59uQEnhaLlAAwGzI",
  authDomain: "authantication-66860.firebaseapp.com",
  projectId: "authantication-66860",
  storageBucket: "authantication-66860.appspot.com",
  messagingSenderId: "144015089004",
  appId: "1:144015089004:web:ca7b4134fde39828892749",
  measurementId: "G-Q88ENY2DKX"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
