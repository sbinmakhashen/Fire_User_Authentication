import firebase from 'firebase';
// import firebaseConfig from './firebaseIndex';

const authMethods = {
  signUp: (email, password) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  signIn: (email, password) => {},
  signOut: (email, password) => {},
};

export default authMethods;
