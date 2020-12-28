import React , {useEffect, useState} from 'react';
import {Home, Browse, Signin, Signup } from './pages'
import { BrowserRouter as Router, Route} from 'react-router-dom';
import { IsUserRedirect, ProtectedRoute } from './handleUser/routes';
import {useAuthListener} from './hooks';
import {useDbListener} from './hooks';


export function App() {
  const {user} = useAuthListener();
  useDbListener();
  console.log(user);
  return (
    <Router>
      
      <IsUserRedirect user={user} loggedInPath="/browse" path="/" exact>
      <Home />
      </IsUserRedirect>

      <IsUserRedirect user={user} loggedInPath="/browse" path="/signin" exact>
          <Signin />
      </IsUserRedirect>

      <IsUserRedirect user={user} loggedInPath="/browse" path="/signup" exact>
          <Signup />
      </IsUserRedirect>
      
      <ProtectedRoute user={user} path="/browse" exact>
      <Browse />
      </ProtectedRoute>
    
   
     
      
       
    </Router>
  );
}


