import React , {useEffect, useState} from 'react';
// import './App.css';
import LeaderboardText from '../homeSnippets/LeaderboardText'
import {Leaderboard} from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

 

export function LeaderboardContainer({movieID, vote}) {
    const [title,setTitle] = useState("")
    const [image,setImage] = useState("")
    const [loading,setLoading] = useState(true)
    const [overview,setOverview] = useState("")
    
    
    useEffect(() => {
        console.log("props")
        const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=cd74296e33afa394a19ac0d3043856f2`;
        fetch(url) 
        .then(response => response.json() )
        .then((result) => {
            console.log(result)
            setImage(result.poster_path)
            setLoading(false)
            setTitle(result.title)
            setOverview(result.overview)
        }).catch(err => {
            console.log(err)
        })
        

        AOS.init({duration: 1500, delay: 500});
    }, [])
  return (
      <div>
      <Leaderboard.Container>
        <Leaderboard key={movieID} direction="row-reverse" >
          <Leaderboard.Pane>
            <Leaderboard.Title data-aos="fade-up">{title}</Leaderboard.Title>
            <Leaderboard.SubTitle data-aos="fade-up">Votes: {vote} </Leaderboard.SubTitle>
            <Leaderboard.SubTitle data-aos="fade-up">{overview}</Leaderboard.SubTitle>
          </Leaderboard.Pane> 
          <Leaderboard.Pane>
           <Leaderboard.Image data-aos="flip-up" src={`https://image.tmdb.org/t/p/original${image}`} alt={"Image is not available"} />
          </Leaderboard.Pane>
        </Leaderboard>
      </Leaderboard.Container>
      </div>
     

  );
}


