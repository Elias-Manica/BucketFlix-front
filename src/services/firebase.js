import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWFUeHOax4dlNQhnpm6BmGntllRf4cACo",
  authDomain: "netflinston-49169.firebaseapp.com",
  projectId: "netflinston-49169",
  storageBucket: "netflinston-49169.appspot.com",
  messagingSenderId: "1059254745188",
  appId: "1:1059254745188:web:295193b245769d19f00771",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  const result = signInWithPopup(auth, provider);
  return result;
};
