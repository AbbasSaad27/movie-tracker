import { initializeApp } from "firebase/app";
const firebaseConfig = {
    apiKey: "AIzaSyAARcNVTlO5rahG1iOcrGfEmRC9YlTSs3g",
    authDomain: "movie-tracker-cb38c.firebaseapp.com",
    projectId: "movie-tracker-cb38c",
    storageBucket: "movie-tracker-cb38c.appspot.com",
    messagingSenderId: "94462809388",
    appId: "1:94462809388:web:6450256f916612e8a94889",
    measurementId: "G-X06NRYZWVZ"
};

const Firebase = initializeApp(firebaseConfig)

export default Firebase;