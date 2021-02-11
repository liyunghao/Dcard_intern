import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, HashRouter} from 'react-router-dom';
import './index.css';
import Main from './views/main';
import Banner from './components/banner'

ReactDOM.render(
  <HashRouter>
    <Banner/>
    <Switch>
      <Route exact path="/"> <Main/> </Route>
      <Route exact path="scenicSpot"> <displayAll/> </Route>
      <Route path="scenicSpot/:cityName"> <displayCity/> </Route>
    </Switch>

  </HashRouter>,
  document.getElementById('root')
);


