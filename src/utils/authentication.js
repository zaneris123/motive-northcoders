import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { firebaseApp, db } from './connections'
import { setDoc, doc } from 'firebase/firestore'

const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

const userRef = (uniqueUserId) => {
  return db.collection('users').doc(uniqueUserId).get()
}

export function googleAuthentionPopup() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
      const data = {
        username: result.user.displayName,
        userImg: result.user.photoURL
      }
      userRef(result.user.uid).then((result) => {
        console.log('gotten result:', result)
      })
      setDoc(doc(db, 'users', result.user.uid), data)
    })
    .catch((err) => {
      console.log(err)
    })
}
