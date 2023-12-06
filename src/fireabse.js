import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBw14mnLtC725ZQDAuB5-bIEE5jQj2HKQM",
  authDomain: "slack-clone-19d86.firebaseapp.com",
  projectId: "slack-clone-19d86",
  storageBucket: "slack-clone-19d86.appspot.com",
  messagingSenderId: "131266113423",
  appId: "1:131266113423:web:8594d4e7ddaffd3c31e5fa",
  measurementId: "G-B48CB6J30L"
};

const firebaseApp = initializeApp(firebaseConfig);
const DB = getFirestore(firebaseApp);
const auth = getAuth();

const provider = new GoogleAuthProvider();

export { auth, provider };
export default DB;