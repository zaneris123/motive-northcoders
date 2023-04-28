import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { firebaseApp } from './connections'

const auth = getAuth(firebaseApp)
const provider = new GoogleAuthProvider()

export function handleClick() {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
      //   const credential = GoogleAuthProvider.credentialFromResult(result)
      //   const token = credential.accessToken
    })
    .catch((err) => {
      console.log(err)
    })
}
