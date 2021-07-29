import React, { useContext } from 'react';
import { firebaseAuth } from '../provider/AuthProvider';
const Home = (props) => {
  const { handleSignout } = useContext(firebaseAuth);
  return (
    <div>
      Home Logged in successfully!!
      <button onClick={handleSignout}>SignOut</button>
    </div>
  );
};

export default Home;
