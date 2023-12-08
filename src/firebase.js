import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "@firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCTFdsNOf74GwPSYQTDPcaWshSkVVtp9h8",
    authDomain: "atyourdoorstep-a5c85.firebaseapp.com",
    databaseURL: "https://atyourdoorstep-a5c85-default-rtdb.firebaseio.com",
    projectId: "atyourdoorstep-a5c85",
    storageBucket: "atyourdoorstep-a5c85.appspot.com",
    messagingSenderId: "30450144760",
    appId: "1:30450144760:web:066963a22f44d22289320d",
    measurementId: "G-T1GNYCQN4R"
  
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);
