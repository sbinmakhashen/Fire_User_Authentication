import React, { useState } from 'react';
import authMethods from '../firebase/authmethods';
export const firebaseAuth = React.createContext();
const AuthProvider = (props) => {
  const [inputs, setInputs] = useState({ email: '', password: '' });
  const [tokens, setTokens] = useState(null);
  const [errors, setErrors] = useState([]);
  function handleSignUp() {
    return authMethods.signUp();
  }

  return (
    <firebaseAuth.Provider value={{ handleSignUp }}>
      {props.children}
    </firebaseAuth.Provider>
  );
};

export default AuthProvider;
