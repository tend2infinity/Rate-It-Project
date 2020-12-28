import React,{useState, useContext, useEffect} from 'react';
import {HeaderBrowse} from '../components';
import { firebaseContext } from '../context/firebase';
import {useAuthListener} from '../hooks';

export function HeaderContainerBrowse({children}) {
    const {user} = useAuthListener();
    const { firebase } = useContext(firebaseContext);
    function handleSignout (event) {
        firebase.auth()
        .signOut().then(() => {
            console.log("logged out");
        })
    }
    return (
            <HeaderBrowse.Inner>
                <HeaderBrowse.Logo to="/" src="/pictures/logo.png" />
                {
                     <h3> {`Hii! ${user.displayName}`} </h3>
                }
               
                <HeaderBrowse.Innercomp>
                
                <HeaderBrowse.Button to="/mynominations">Nominations</HeaderBrowse.Button>
                <HeaderBrowse.Button to="/leaderboard">Leaderboard</HeaderBrowse.Button>
                <HeaderBrowse.Button onClick={handleSignout} to="/">Logout</HeaderBrowse.Button>
                </HeaderBrowse.Innercomp>
                
            </HeaderBrowse.Inner> 

    )
}