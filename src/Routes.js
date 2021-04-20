import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Quote from './components/Quote';
import NavBar from './components/NavBar';

const Routes = () => (
  <BrowserRouter>
    <NavBar />
    <div className="container mt-2" style={{ marginTop: 40 }}>
      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/calculator"><App /></Route>
        <Route path="/quote"><Quote /></Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Routes;
