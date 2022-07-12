import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyDqykh_Utr5yAm-gaCwMGTutGU4fINtOMo",
    authDomain: "thedojosite-d5226.firebaseapp.com",
    projectId: "thedojosite-d5226",
    storageBucket: "thedojosite-d5226.appspot.com",
    messagingSenderId: "293159094981",
    appId: "1:293159094981:web:3b64c9875ab72053973eac"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

//firebase timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp, projectStorage }