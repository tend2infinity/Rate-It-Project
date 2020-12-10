import React , {useEffect, useState} from 'react';
import {Home, Browse, Signin, Signup } from './pages'
import { BrowserRouter as Router, Route} from 'react-router-dom';


export function App() {
  return (
    <Router>
      <Route exact path="/signup">
        <Signup />
      </Route> 
      <Route exact path="/signin">
        <Signin />
      </Route>
      <Route exact path="/browse">
        <Browse />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
       
    </Router>
  );
}


