import React , {useEffect, useState} from 'react';
// import './App.css';
import LeaderboardText from '../homeSnippets/LeaderboardText'
import LeaderboardContainer from './Leaderboard.js'
import AOS from 'aos';
import 'aos/dist/aos.css';

 

export function LeaderboardOuterContainer({movie}) {
    
  //  movie.map((item) => {
  //      console.log(item)
  //  })
    
    useEffect(() => {
        AOS.init({duration: 1500, delay: 500});
    }, [])
  return (
    <div>
       { movie.map((item) => {
         console.log(item.movieID);
        <LeaderboardContainer movieID={item.movieID} votes={item.votes} />
    })}
    </div>
    
  );
}


