import React, {useContext, useEffect , useState} from 'react';
import MyNominations from '../components/My-Nominations/MyNominations'
import { FooterContainer } from '../containers/Footer';
import { HeaderContainerBrowse } from '../containers/Header-browse';
import { firebaseContext } from '../context/firebase';
import { LeaderboardOuterContainer } from '../containers/LeaderboardOuter'
import {Intro} from '../components';
import {useAuthListener} from '../hooks';
import { useAuth } from "../context/authContext"
import axios from 'axios';


export default function LeaderBoard() {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        getList();
    }, [])
    async function getList(){
		var array=[];
    const response =
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/browse/leaderboard`,
      )
      response.data.map(item=> (
         array.push(item)
      ));
      
     setMovie(array);
    
 }

     

 return(
      <>

      <HeaderContainerBrowse />
      <LeaderboardOuterContainer movie={movie}/>
      <FooterContainer />
      </>
      )
}
