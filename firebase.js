// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSp9Cd8dpg_MkLrkzibjF9mpzobU_h6K0",
  authDomain: "mini-project-aa14f.firebaseapp.com",
  projectId: "mini-project-aa14f",
  storageBucket: "mini-project-aa14f.appspot.com",
  messagingSenderId: "510479416364",
  appId: "1:510479416364:web:7dd011acf213dde232e589"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
// export const storage = getStorage(app);