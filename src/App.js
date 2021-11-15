import React from 'react';
import { Router, Route, Switch} from "react-router-dom";
import { createBrowserHistory } from "history";
import './App.css';


import LoginPage from './views/LoginPage/LoginPage.js';

var hist = createBrowserHistory();
function App() {
  return (
    <Router history={hist}>
      <Switch>         
       
        <Route path="/" component={LoginPage} />
        
      </Switch>
    </Router>
  );
}

export default App;
