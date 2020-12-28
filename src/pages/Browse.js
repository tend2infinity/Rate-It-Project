import React, {useContext, useEffect , useState} from 'react';
import MovieSearch from '../components/Movie-list/MovieSearch'
import MovieList from '../components/Movie-list/MovieList'
import { FooterContainer } from '../containers/Footer';
import { HeaderContainerBrowse } from '../containers/Header-browse';
import { firebaseContext } from '../context/firebase';
import {Intro} from '../components';
import {useAuthListener} from '../hooks';


export default function Browse() {
  

 return(
      <>
      <HeaderContainerBrowse />
      <MovieList />
      <FooterContainer />
      </>
      )
}