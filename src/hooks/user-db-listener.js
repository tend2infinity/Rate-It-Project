import { useEffect, useState, useContext} from 'react';
import { firebaseContext} from '../context/firebase';
import useAuthListener from './user-auth-listener';
export default function useDbListener(target) {
    const {user} = useAuthListener();
    const {firebase}= useContext(firebaseContext);
    const [nominated, setNominated] = useState(0);
    useEffect(() => {
        if(user){
        const setDatabase =
        firebase
        .firestore()
        .collection('users').doc(user.uid).set({
            nominated: nominated
        })
        return () => {
            setDatabase()
        }
        }
      
    }, [])
    
}