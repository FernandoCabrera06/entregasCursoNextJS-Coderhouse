import { initializeApp } from 'firebase/app'
import { getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAYDVA2nZ5sps5aFNHZneZQ0_-4hzNuyU4",
  authDomain: "codernext-app-51fc9.firebaseapp.com",
  projectId: "codernext-app-51fc9",
  storageBucket: "codernext-app-51fc9.appspot.com",
  messagingSenderId: "355954847648",
  appId: "1:355954847648:web:dfe3a53425dea26c22fec5"
};

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)