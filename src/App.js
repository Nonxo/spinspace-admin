import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './pages/auth/Login';
import Portal from './layout/Portal';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Login}/>
      <Route path="/app" component={Portal}/>
    </Switch> 
  );
}

export default App;
