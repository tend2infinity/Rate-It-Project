import React , {useEffect, useState} from 'react';
<<<<<<< HEAD
import {Home, Browse, Signin, Signup, Nomination } from './pages'
=======
import {Home, Browse, Signin, Signup } from './pages'
>>>>>>> 61da1fd549f85e9eab923b97f9790ae22cf072cf
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {PrivateRoute} from './handleUser/routes';
import {UserRedirect} from './handleUser/routes';

import { AuthProvider } from './context/authContext';


export function App() {
 
  return (
    
      <Router>
      <AuthProvider>
        <Switch>

        <PrivateRoute exact path="/browse" component={Browse} />
<<<<<<< HEAD
        
        <PrivateRoute exact path="/mynominations" component={Nomination} />
=======
>>>>>>> 61da1fd549f85e9eab923b97f9790ae22cf072cf

        <UserRedirect exact path="/signin" component={Signin} />
        
        <UserRedirect exact path="/signup" component={Signup} />
          
        <UserRedirect exact path="/" component={Home} />
          
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


