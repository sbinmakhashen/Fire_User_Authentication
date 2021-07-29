import firebase from 'firebase';
// import firebaseConfig from './firebaseIndex';

export const authMethods = {
  SignUp: (email, password, setErrors, setTokens) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem('token', token);
        setTokens(window.localStorage.token);
        console.log(res);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  },
  signin: (email, password, setErrors, setTokens) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(async (res) => {
        const token = await Object.entries(res.user)[5][1].b;
        await localStorage.setItem('token', token);
        setTokens(window.localStorage.token);
        console.log(res);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
      });
  },
  signOut: (setErrors, setTokens) => {
    firebase
      .auth()
      .signOut()
      .then((res) => {
        localStorage.removeItem('token');
        setTokens(null);
      })
      .catch((err) => {
        setErrors((prev) => [...prev, err.message]);
        localStorage.removeItem('token');
        setToken(null);
        console.error(err.message);
      });
  },
};
