import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDo4Q1lmUIHYWMTmkk07KAUOo_4L0GbgFQ",
    authDomain: "smart-care-f0ae2.firebaseapp.com",
    databaseURL: "https://smart-care-f0ae2-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "smart-care-f0ae2",
    storageBucket: "smart-care-f0ae2.firebasestorage.app",
    messagingSenderId: "389190238567",
    appId: "1:389190238567:web:0d7c0f593e2469a20eefc2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

export const fdb = getFirestore(app)