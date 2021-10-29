import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCsNWQINgIvoC39QtE7wXYETA5U8BkRDY",
  authDomain: "coder-rj-tienda-tecnologia.firebaseapp.com",
  projectId: "coder-rj-tienda-tecnologia",
  storageBucket: "coder-rj-tienda-tecnologia.appspot.com",
  messagingSenderId: "885084831081",
  appId: "1:885084831081:web:50fea0665c26247970d1f8"
};

const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () => {
    return firebase.firestore(app)
}