import React, {useContext, useEffect , useState} from 'react';
import MovieSearch from '../components/Movie-list/MovieSearch'
import MovieList from '../components/Movie-list/MovieList'
import MyNominations from '../components/My-Nominations/MyNominations'
import { FooterContainer } from '../containers/Footer';
import { HeaderContainerBrowse } from '../containers/Header-browse';
import { firebaseContext } from '../context/firebase';
import {Intro} from '../components';
import {useAuthListener} from '../hooks';
import { useAuth } from "../context/authContext"
import axios from 'axios';



export default function Browse() {

 return(
      <>

      <HeaderContainerBrowse />
      <MovieSearch/>
      <h1 style={{color:"#44C8B6"  , fontFamily: "Cinzel" , padding: "1%"}}>Trending</h1>
      <MovieList url = "https://api.themoviedb.org/3/discover/movie?api_key=cd74296e33afa394a19ac0d3043856f2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1" />
      <h1 style={{color:"#44C8B6"  , fontFamily: "Cinzel" , padding: "1%"}}>Romance</h1>
      <MovieList url = "https://api.themoviedb.org/3/discover/movie?api_key=cd74296e33afa394a19ac0d3043856f2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=10749" />
      <h1 style={{color:"#44C8B6"  , fontFamily: "Cinzel" , padding: "1%"}}>Action</h1>
      <MovieList url = "https://api.themoviedb.org/3/discover/movie?api_key=cd74296e33afa394a19ac0d3043856f2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28" />
      <h1 style={{color:"#44C8B6"  , fontFamily: "Cinzel" , padding: "1%"}}>Animation</h1>
      <MovieList url = "https://api.themoviedb.org/3/discover/movie?api_key=cd74296e33afa394a19ac0d3043856f2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=12" />
      <FooterContainer />
      </>
      )
}
