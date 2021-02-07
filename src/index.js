import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Link,  hashHistory} from 'react-router';
import './index.css';
import App from './App';
import Main from './views/main';


ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/"> </Route>
      <Route path=""></Route>
    </Switch>
  </Router>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

