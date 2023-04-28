import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
import { firebaseConfig } from '../firebaseConfig'

export const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
