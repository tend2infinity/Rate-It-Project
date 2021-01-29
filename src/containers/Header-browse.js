import React,{useState, useContext, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import {HeaderBrowse} from '../components';
import { useAuth } from "../context/authContext"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export function HeaderContainerBrowse({children}) {
    const { currentUser, logout} = useAuth()
    const history = useHistory()
    async function handleSignout (event) {
       await logout()
    //    .catch((error) => {
    //        console.log(error);
    //    })
    console.log("logged out");
    }
    return (
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
            </>

    )
}
