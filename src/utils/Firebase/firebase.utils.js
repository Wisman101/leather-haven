import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBHLR-TPnvu4GYTe8kylS5azGyOBoRmtC4",
  authDomain: "leather-haven-db.firebaseapp.com",
  projectId: "leather-haven-db",
  storageBucket: "leather-haven-db.appspot.com",
  messagingSenderId: "1027484019247",
  appId: "1:1027484019247:web:d13290919c607b18efb4da"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);