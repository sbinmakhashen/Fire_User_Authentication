import React, { useContext } from 'react';
import { firebaseAuth } from '../provider/AuthProvider';

const SignUp = () => {
  const { handleSignUp } = useContext(firebaseAuth);
  return (
    <form>
      <inputs />
      <button>SignUp</button>
    </form>
  );
};

export default SignUp;
