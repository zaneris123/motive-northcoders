import { initializeApp } from 'firebase/app'
import { collection, getFirestore } from 'firebase/firestore'

export const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAdWE-2tjyP_CSputOmiYZr_pdOfEDJTW4',
  authDomain: 'motive-f10bb.firebaseapp.com',
  projectId: 'motive-f10bb'
})

export const db = getFirestore(firebaseApp)

export const usersRef = collection(db, 'users')
