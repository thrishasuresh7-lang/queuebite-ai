import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvPMKFOnHAhHey4VN9pagJiomwjqXbPk0",
  authDomain: "queuebite-ai.firebaseapp.com",
  projectId: "queuebite-ai",
  storageBucket: "queuebite-ai.firebasestorage.app",
  messagingSenderId: "1057642001454",
  appId: "1:1057642001454:web:014a0047cdc38f615adbbf",
  measurementId: "G-MYTNTTP2F6",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);