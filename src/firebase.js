import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyCkl9-shuR68KilBxzukN1quwJwf_RmItc',
  authDomain: 'linkedin-clone-95b05.firebaseapp.com',
  projectId: 'linkedin-clone-95b05',
  storageBucket: 'linkedin-clone-95b05.appspot.com',
  messagingSenderId: '1064400230552',
  appId: '1:1064400230552:web:298894b91836b79a2498ed'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app)
// const auth = firebase.auth()

export { db, auth }
