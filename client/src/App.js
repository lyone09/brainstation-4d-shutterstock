import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import "./App.scss";
import Trending from './pages/Trending/Trending';
import { Header } from './components';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' render={(props) => 
          <Trending {...props} />} 
        />
      </Switch>
    </Router>
  );
}

export default App;
