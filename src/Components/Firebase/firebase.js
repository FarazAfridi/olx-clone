import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDYdPrBPSppB_K4rXjGIofMIYR4klMZ6ms",
  authDomain: "olx-clone-d8438.firebaseapp.com",
  databaseURL: "https://olx-clone-d8438.firebaseio.com",
  projectId: "olx-clone-d8438",
  storageBucket: "olx-clone-d8438.appspot.com",
  messagingSenderId: "764657737747",
  appId: "1:764657737747:web:986a0e59da7aa361841fe6",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.database();

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const SignInWithGoogle = () =>
  auth.signInWithPopup(googleProvider).then((user) => 
    firebaseUser(user.user.uid).set({
      username: user.user.displayName,
      email: user.user.email,
      photo: user.user.photoURL
    })
  );

const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const SignInWithFacebook = () => 
    auth.signInWithPopup(facebookProvider).then((user) => {
     firebaseUser(user.user.uid).set({
      username: user.user.displayName,
      email: user.user.email,
      photo: user.user.photoURL
    })})  

export const SignInWithEmailOnly = (email, actionCodeSettings) => {
  auth.sendSignInLinkToEmail(email, actionCodeSettings).then(user => console.log(user))
} 

export const firebaseUser = (uid) => db.ref(`user/${uid}`);

export default firebase;