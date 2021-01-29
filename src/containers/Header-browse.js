import React,{useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {HeaderBrowse} from '../components';
import { useAuth } from "../context/authContext"
<<<<<<< HEAD
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
=======
>>>>>>> 61da1fd549f85e9eab923b97f9790ae22cf072cf



export function HeaderContainerBrowse({children}) {
    const { currentUser, logout} = useAuth()
<<<<<<< HEAD
console.log(currentUser);
=======
>>>>>>> 61da1fd549f85e9eab923b97f9790ae22cf072cf
    const history = useHistory()
    async function handleSignout (event) {
       await logout()
    //    .catch((error) => {
    //        console.log(error);
    //    })
    console.log("logged out");
    }
    return (
<<<<<<< HEAD
    <>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
/>
{/* Same as */}
<ToastContainer />
=======
>>>>>>> 61da1fd549f85e9eab923b97f9790ae22cf072cf
            <HeaderBrowse.Inner>
                <HeaderBrowse.Logo to="/" src="/pictures/logo.png" />
                {
                     <h3> {`Hii! ${currentUser.displayName}`} </h3>
                }
               
                <HeaderBrowse.Innercomp>
                
                <HeaderBrowse.Button to="/mynominations">Nominations</HeaderBrowse.Button>
                <HeaderBrowse.Button to="/leaderboard">Leaderboard</HeaderBrowse.Button>
                <HeaderBrowse.Button onClick={handleSignout} to="/">Logout</HeaderBrowse.Button>
                </HeaderBrowse.Innercomp>
                
            </HeaderBrowse.Inner> 
<<<<<<< HEAD
            </>

    )
}
=======

    )
}
>>>>>>> 61da1fd549f85e9eab923b97f9790ae22cf072cf
