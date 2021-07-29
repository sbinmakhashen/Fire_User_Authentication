import './App.css';
import Raect, { useContext } from 'react';
import { firebaseAuth } from './provider/AuthProvider';
import { Route, Switch } from 'react-router-dom';
import SignUp from './components/SignUp';
import Signin from './components/Signin';
import Home from './components/Home';

function App() {
  const { tokens } = useContext(firebaseAuth);
  console.log(tokens);
  return (
    <>
      <Switch>
        <Route
          exact
          path='/'
          render={() => (tokens === null ? <Signin /> : <Home />)}
        />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </>
  );
}

export default App;
