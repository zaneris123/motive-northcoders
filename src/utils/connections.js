import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { firebaseConfig } from '../firebaseConfig'

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);

export const usersRef = collection(db, "users");
export const locatRef = collection(db, "locations");
export const mediaRef = collection(db, "media");
export const catRef = collection(db, "categories");
