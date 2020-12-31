// import {useState, useEffect, useContext} from 'react';

// import { firebaseContext } from '../context/firebase'

// export default function useAuthListener() {
//    const [user, setUser] = useState();
//    const {firebase} = useContext(firebaseContext);

//    useEffect(() => {
         
//     const listener = firebase.auth().onAuthStateChanged((authUser) => {
//         if(authUser) {
//             setUser(authUser);
//         }else {
//             setUser(null);
//         } 
//     });

//     return () => listener();
//    }, []);

//    return { user };
// }