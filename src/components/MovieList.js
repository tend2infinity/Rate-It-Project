import React from "react";
import { useEffect, useState } from "react";
import MovieCard from './MovieCard.js';
import MovieTop from './MovieTop.js';
import './MovieList.css';
import AOS from 'aos';
import "aos/dist/aos.css";
export default class MovieList extends React.Component{
	
	state ={
		loading: true,
		movie: null,
	}
	
	async componentDidMount(){
		const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=cd74296e33afa394a19ac0d3043856f2";
		const response = await fetch(url);
		const data = await response.json();
		this.setState({movie: data.results,loading: false});
	}
	render() {

    return (
      <div>
      {this.state.loading
		  ?
		  <div> Loading </div>
		  :
		  <div>
		  <MovieTop Title = {this.state.movie[14].title} Poster = {this.state.movie[14].poster_path} Overview = {this.state.movie[14].overview}/>
		  <div className="MovieList">
      {this.state.movie.map(name => (
          <MovieCard Title = {name.title} Poster = {name.poster_path} Overview = {name.overview} date = {name.release_date} />
      ))}
    </div>
		  </div>
		  }
      </div>
    );
  }
}






//"https://api.themoviedb.org/3/trending/movie/week?api_key=cd74296e33afa394a19ac0d3043856f2"
/*<div className="MovieList">
      {this.state.movie.map(name => (
          <MovieCard Title = {name.title} Poster = {name.poster_path} />
      ))}
    </div>*/
