import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyAn63T5XufIhi5jSdLFHzVs65fJdHNopRA',
  authDomain: 'shopping-list-4523e.firebaseapp.com',
  projectId: 'shopping-list-4523e',
  storageBucket: 'shopping-list-4523e.appspot.com',
  messagingSenderId: '875803246772',
  appId: '1:875803246772:web:a7ae9b6e017d53ddb3d7e1',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
