import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: 'AIzaSyD_C-nHpMhDDSTp-PlU6YQGNLUZpx-6_Ag',
  authDomain: 'quize-e6ed8.firebaseapp.com',
  projectId: 'quize-e6ed8',
  storageBucket: 'quize-e6ed8.appspot.com',
  messagingSenderId: '932962231294',
  appId: '1932962231294web1698c0854dd209aef916af',
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const imageStore = getStorage(app);
export const db = getFirestore(app);
export default firebase;
