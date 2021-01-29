 import React from "react";
import { useEffect, useState } from "react";
import MovieDetails from './MovieDetails.js';
import MovieCard from './MovieCard.js';
import SearchIcon from '@material-ui/icons/Search';
import './MovieList.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
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
		nav1: null,
        nav2: null,
		
	}
	
	
	handleSearchInputChanges(e){
    this.setState({...this.state.movie,...this.state.showSearch,searchValue: e.target.value});
    }
	
	async callSearchFunction(e){
		e.preventDefault();
		if(this.state.searchValue!=null)
		{
		const url = `https://api.themoviedb.org/3/search/movie?api_key=cd74296e33afa394a19ac0d3043856f2&query=${this.state.searchValue}`;
		const response = await fetch(url);
		const data = await response.json();
		this.setState({...this.state.searchValue,movie: data.results,showSearch:true});
		this.setState({
      nav1: this.slider1,
      nav2: this.slider2
       });
       }
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
      
      <Slider
          asNavFor={this.state.nav2}
          ref={slider => (this.slider1 = slider)}
          arrows={true}
          fade={true}
           >
           {this.state.movie.map(name => (
          <MovieDetails title = {name.title} Poster = {name.poster_path} Overview = {name.overview} date = {name.release_date} id={name.id} />
      ))}
      
           </Slider>
           
          <div style={{zIndex:2}}>
		  		  <Slider
          asNavFor={this.state.nav1}
          ref={slider => (this.slider2 = slider)}
          slidesToShow={11}
          swipeToSlide={true}
          focusOnSelect={true}
          arrows={true}
          lazyLoad={true}
          responsive={[{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]}
          >
          
      {this.state.movie.map(name => (
          <MovieCard Title = {name.title} Poster = {name.poster_path} Overview = {name.overview} date = {name.release_date} id={name.id} />
      ))}
      
    </Slider>
    </div>
    <div style={{ display: this.state.showSearch ? "none" : "block" }}>
    <img src="https://www.pinclipart.com/picdir/middle/522-5225314_transparent-detective-pikachu-png-clipart.png"/>
    </div>
      </div>
      </>
    );
  }
}
