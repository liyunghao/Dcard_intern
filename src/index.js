import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './index.css';
import Main from './views/main';
import DisplayAll from './views/displayAll'
import DisplayCity from './views/displayCity'
import Banner from './components/banner'

ReactDOM.render(
  <HashRouter>
    <Banner/>
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/scenicSpot/" component={DisplayAll}/> 
      <Route path="/scenicSpot/:city" component={DisplayCity}/> 
    </Switch>

  </HashRouter>,
  document.getElementById('root')
);


