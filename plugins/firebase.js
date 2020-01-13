import * as firebase from 'firebase/app'
import 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDNck22au3sClR0X4d0eir6GmTVMieIKd0",
  authDomain: "speedtest-ad07b.firebaseapp.com",
  databaseURL: "https://speedtest-ad07b.firebaseio.com",
  projectId: "speedtest-ad07b",
  storageBucket: "speedtest-ad07b.appspot.com",
  messagingSenderId: "874905382098",
  appId: "1:874905382098:web:33e9da7eb2b6afdf4e910b"
};
// Initialize Firebase

let app = null;
if (!firebase.app.length) {
  app = firebase.initializeApp(firebaseConfig);
}

export default firebase;