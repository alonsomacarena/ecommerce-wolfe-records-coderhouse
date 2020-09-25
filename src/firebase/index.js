
import * as firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyC5PU5o7v8S_YtWfxRIVVNTA5MCh9ItAaY",
    authDomain: "wolfe-ecommerce-coderhouse.firebaseapp.com",
    databaseURL: "https://wolfe-ecommerce-coderhouse.firebaseio.com",
    projectId: "wolfe-ecommerce-coderhouse",
    storageBucket: "wolfe-ecommerce-coderhouse.appspot.com",
    messagingSenderId: "682912343567",
    appId: "1:682912343567:web:d2fcafe473218be14ae57a"
});

export function getFirebase(){
return app
};

export function getFirestore (){
  return firebase.firestore(app);
}