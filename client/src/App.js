import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import "./App.scss";
import { Trending } from './pages';
import { Header } from './components';

function App() {
  return (
    <Router>
      <h1>Brainstation 4D ShutterStock</h1>
      <Header/>
      <Switch>
        <Route exact path='/' render={(props) => 
          <Trending {...props} />} 
        />
      </Switch>
    </Router>
  );
}

export default App;
