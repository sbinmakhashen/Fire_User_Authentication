import './App.css';
import Raect, { useContext } from 'react';
import { firebaseAuth } from './provider/AuthProvider';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';

function App() {
  const { handleSignUp } = useContext(firebaseAuth);
  return (
    <>
      <Switch>
        <Route exact path='/' component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
