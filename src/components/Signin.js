import React, { useContext } from 'react';
import { firebaseAuth } from '../provider/AuthProvider';

const Signin = () => {
  const { handleSignin, inputs, setInputs, errors } = useContext(firebaseAuth);
  console.log(handleSignin);
  function handleSubmit(e) {
    e.preventDefault();
    console.log('handleSubmit');
  }

  function handleChange(e) {
    const { name, value } = e.target;
    console.log(inputs);
    setInputs((prevInput) => ({ ...prevInput, [name]: value }));
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        name='email'
        value={inputs.email}
        placeholder='email'
      />
      <input
        onChange={handleChange}
        name='password'
        value={inputs.password}
        placeholder='password'
      />
      <button>Signin</button>
      {errors.length < 0
        ? errors.map((error) => <p className='error'>{error}</p>)
        : null}
    </form>
  );
};

export default Signin;
