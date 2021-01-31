import React from "react";
import MovieCard from './MovieCard.js';
import MovieDetails from './MovieDetails.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import axios from 'axios';
import MovieTop from './MovieTop.js';
import MovieSearch from './MovieSearch.js';
import './MovieList.css';
export default class MovieList extends React.Component{
	constructor(props) {
    super(props);
	
	this.state ={
		loading: true,
		movie: null,
		nav1: null,
        nav2: null,
	}}
	
	async componentDidMount(){
		const url = `${this.props.url}`;
		const response = await fetch(url);
		const data = await response.json();
		this.setState({movie: data.results,loading: false});
		this.setState({
      nav1: this.slider1,
      nav2: this.slider2
       });
	}
	render() {

    return (
      <div>
      {this.state.loading
		  ?
		  <div> Loading </div>
		  :
		  <>
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
           
          <div style={{zIndex:1}}>
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
    </>
		  }
      </div>
    );
  }
}
