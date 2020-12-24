import {useState, useEffect, useContext} from 'react';

import { firebaseContext } from '../context/firebase'

export default function useAuthListener() {
   const [user, setUser] = useState(JSON.parse(sessionStorage.getItem('authUser'))
   );
   const {firebase} = useContext(firebaseContext);

   useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
        if(authUser) {
            sessionStorage.setItem('authUser', JSON.stringify(authUser));
            setUser(authUser);
        }else {
            sessionStorage.removeItem('authUser');
            setUser(null);
        } 
    });

    return () => listener();
   }, []);

   return { user };
}