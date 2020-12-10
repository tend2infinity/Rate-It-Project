import React from "react";
import { useEffect, useState } from "react";
import MovieCard from './MovieCard.js';
import MovieTop from './MovieTop.js';
import MovieSearch from './MovieSearch.js';
import './MovieList.css';
import AOS from 'aos';
import "aos/dist/aos.css";
import SearchIcon from '@material-ui/icons/Search';
export default class MovieList extends React.Component{
	
	state ={
		showSearch: false,
		//dummy data
		movie: [
  {
    "adult": false,
    "backdrop_path": "/rvsPkUYhWZkAKMb2fnWHw5pNAjZ.jpg",
    "genre_ids": [
      35,
      10751,
      10402,
      10749
    ],
    "id": 14030,
    "original_language": "en",
    "original_title": "Hello, Dolly!",
    "overview": "Dolly Levi is a strong-willed matchmaker who travels to Yonkers, New York in order to see the miserly \"well-known unmarried half-a-millionaire\" Horace Vandergelder. In doing so, she convinces his niece, his niece's intended, and Horace's two clerks to travel to New York City.",
    "popularity": 8.968,
    "poster_path": "/aPZOt9BR3gnk1RyX924ySq81S4P.jpg",
    "release_date": "1969-12-12",
    "title": "Hello, Dolly!",
    "video": false,
    "vote_average": 7,
    "vote_count": 180
  },
  ],
		searchValue: null,
		
	}
	
	
	handleSearchInputChanges(e){
    this.setState({...this.state.movie,...this.state.showSearch,searchValue: e.target.value});
    }
	
	async callSearchFunction(e){
		e.preventDefault();
		const url = `https://api.themoviedb.org/3/search/movie?api_key=cd74296e33afa394a19ac0d3043856f2&query=${this.state.searchValue}`;
		const response = await fetch(url);
		const data = await response.json();
		console.log(url);
		this.setState({...this.state.searchValue,movie: data.results,showSearch:true});
	}
	render() {

    return (
      <>
      <form className="search">
        <input 
        onChange={this.handleSearchInputChanges.bind(this)}
          value={this.state.searchValue}
          type="text"
          className="searchbar"
        />
        <button onClick={this.callSearchFunction.bind(this)} type="submit" value="Search" className="searchbutton"><SearchIcon/></button>
      </form>
      <div style={{ display: this.state.showSearch ? "block" : "none" }}>
      <div className="down">
      Search Results for {this.state.searchValue} -
      </div>
      <div className="MovieList">
      {this.state.movie.map(name => (
          <MovieCard Title = {name.title} Poster = {name.poster_path} Overview = {name.overview} date = {name.release_date} id={name.id} />
      ))}
    </div>
      </div>
      </>
    );
  }
}










































/*import React, { useState } from "react";


const MovieSearch = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  var movie = {};
  
  const handleSearchInputChanges = (e) => {
    setSearchValue(e.target.value);
  }

  const resetInputField = () => {
    setSearchValue("");
    setShowSearch(false);
  }

  const callSearchFunction = (e) => {
	 e.preventDefault()
    const url = `https://api.themoviedb.org/3/search/movie?api_key=cd74296e33afa394a19ac0d3043856f2&query=${searchValue}`;
    fetch(url)
    .then(res => res.json())
    .then(
        (result) => {
          movie = result;
          setShowSearch(true);
          console.log(movie);
          console.log(showSearch);
          console.log(result);
        },
        (error) => {
          console.log("Error!!");
        }
      )
  }

  return (
  <>
      <form className="search">
        <input
          value={searchValue}
          onChange={handleSearchInputChanges}
          type="text"
        />
        <input onClick={callSearchFunction} type="submit" value="SEARCH" />
      </form>
      <div style={{ display: showSearch ? "block" : "none" }}>Hello!!{String(showSearch)}{JSON.stringify(movie)}</div>
      </>
    );
}

export default MovieSearch;*/
