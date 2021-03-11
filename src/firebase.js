import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyByV51-CQTkynwID-9D7nA3Vdj4f096oIk",
    authDomain: "e-commerce-authentication.firebaseapp.com",
    projectId: "e-commerce-authentication",
    storageBucket: "e-commerce-authentication.appspot.com",
    messagingSenderId: "463071383139",
    appId: "1:463071383139:web:ffde55c3e579ceb0a4f256"
})

export const auth = app.auth()
export default app