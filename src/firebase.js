// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjC_EozNfOcgkaxDsEsG5nyzrQ9OXLqXM",
  authDomain: "netflix-react-d682b.firebaseapp.com",
  projectId: "netflix-react-d682b",
  storageBucket: "netflix-react-d682b.appspot.com",
  messagingSenderId: "925801643051",
  appId: "1:925801643051:web:a33a5df40a807d55b2fe6e",
  measurementId: "G-2V2P5NCK7N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);