import React, { useState } from 'react';
import { authMethods } from '../firebase/authmethods';
export const firebaseAuth = React.createContext();
const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState([]);
  const [tokens, setTokens] = useState(null);
  function handleSignUp() {
    console.log('handlesignUp');
    authMethods.SignUp(inputs.email, inputs.password, setErrors, setTokens);
    console.log(errors, tokens);
  }

  function handleSignin() {
    console.log('handleSignIn');
    authMethods.signin(inputs.email, inputs.password, setErrors, setTokens);
    console.log(setTokens, setErrors);
  }

  function handleSignout() {
    authMethods.signOut();
  }

  return (
    <firebaseAuth.Provider
      value={{
        handleSignUp,
        handleSignin,
        inputs,
        setInputs,
        errors,
        tokens,
        handleSignout,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
