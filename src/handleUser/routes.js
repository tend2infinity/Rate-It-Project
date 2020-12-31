import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "../context/authContext";

// export function IsUserRedirect({ user, loggedInPath, children, ...restProps}) {
//     return (
//         <Route {...restProps}
//         render = { ()=> {
//             if (!user) {
//                 return children;
//             }

//             if(user) {
//                 return (
//                     <Redirect
//                     to={{
//                         pathname: loggedInPath
//                     }}
//                     />
//                 );
//             }

//             return null;
             
//         }}
//     />
//         );
//     }

//     export function ProtectedRoute({ user, children,
//          ...restProps}){
//         return (
//             <Route
//                {...restProps}
//                render={ ({location}) => {
//                    if(user) {
//                        return children;
//                    }

//                    if(!user) {
//                        return (
//                         <Redirect
//                         to={{
//                          pathname: '',
//                          state: {from: location},
//                         }}
//                         />
//                        ); 
//                    }

//                    return null;
//                } }
//                />
//         );
//     }

export function PrivateRoute({ component: Component , ...rest }) {
    const { currentUser } = useAuth()
    console.log("it worked")
    return (
      <Route
        {...rest}
        render={props => {
          return currentUser ? <Component {...props} /> : <Redirect
           to="/" />
        }}
      />
    )
  }
export function UserRedirect({ component: Component , ...rest }) {
    const { currentUser } = useAuth()
    console.log("user redirect")
    return (
      <Route
        {...rest}
        render={props => {
          return currentUser ? <Redirect
          to="/browse" /> : <Component {...props} /> 
        }}
      />
    )
  }
    
