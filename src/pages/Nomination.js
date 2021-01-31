import React, {useContext, useEffect , useState} from 'react';
import MyNominations from '../components/My-Nominations/MyNominations'
import { FooterContainer } from '../containers/Footer';
import { HeaderContainerBrowse } from '../containers/Header-browse';
import { firebaseContext } from '../context/firebase';
import {Intro} from '../components';
import {useAuthListener} from '../hooks';
import { useAuth } from "../context/authContext"
import axios from 'axios';


export default function Nomination() {
      const { currentUser, logout} = useAuth()
      const [movie, setMovie] = React.useState([]);
      
      useEffect(() => {
		  getList();
    }, [])
    
    async function getList(){
		var array=[];
    const response =
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/browse/list`,
          { params: {email: currentUser.email}}
      )
      response.data.map(name => (
         array.push(name.movieID)
      ));
     setMovie(array);
 }


 return(
      <>

      <HeaderContainerBrowse />
      <MyNominations movie={movie} email={currentUser.email}/>
      <FooterContainer />

      </>
      )
}
