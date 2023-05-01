import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { firebaseApp, db } from './connections'
import { setDoc, doc, getDoc } from 'firebase/firestore'

const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

export async function googleAuthenticationPopup() {
  return signInWithPopup(auth, provider)
    .then(async ({ user }) => {
      const data = {
        userID: user.uid,
        username: user.displayName,
        userImg: user.photoURL,
        providerID: user.providerId
      }

      const usersSnapshot = await getDoc(doc(db, 'users', user.uid))

      if (usersSnapshot.exists()) {
        return usersSnapshot.data()
      } else {
        return setDoc(doc(db, 'users', user.uid), { ...data, createdAt: new Date() }).then(() => {
          return { ...data, createdAt: new Date() }
        })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
