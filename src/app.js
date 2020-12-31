import React , {useEffect, useState} from 'react';
import {Home, Browse, Signin, Signup } from './pages'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import PrivateRoute from './handleUser/routes';

import { AuthProvider } from './context/authContext';


export function App() {
 
  return (
    
      <Router>
        <AuthProvider>
        <Switch>

        <PrivateRoute exact path="/browse" component={Browse} />

        <Route exact path="/signin" component={Signin} />
        
        <Route exact path="/signup" component={Signup} />
          
        <Route exact path="/" component={Home} />
          
        </Switch>
      </AuthProvider>
    </Router>

        /* <ProtectedRoute user={user} path="/browse" exact>
          <Browse />
          </ProtectedRoute> 

      <IsUserRedirect user={user} loggedInPath="/browse" path="/" exact>
      <Home />
      </IsUserRedirect>

      <IsUserRedirect user={user} loggedInPath="/browse" path="/signin" exact>
          <Signin />
      </IsUserRedirect>

      <IsUserRedirect user={user} loggedInPath="/browse" path="/signup" exact>
          <Signup />
      </IsUserRedirect>
       */
      
   
    
  );
}


