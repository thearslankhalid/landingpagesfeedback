import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
const firebaseConfig = {
  apiKey: 'AIzaSyAPi-6qmVKnu1HDeYT-cEYas35pivo8Cws',
  authDomain: 'lpfeed.firebaseapp.com',
  projectId: 'lpfeed',
  storageBucket: 'lpfeed.appspot.com',
  messagingSenderId: '994061121320',
  appId: '1:994061121320:web:e98f98654bab73c790821d',
  measurementId: 'G-HGW5HWV0W7',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // if already initialized, use that one
}

export default firebase
