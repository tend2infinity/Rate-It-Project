import React from 'react';
import movieTrailer from 'movie-trailer';
import './MovieDetails.css';
import YouTube from 'react-youtube';

export default class MovieDetails extends React.Component{
	constructor(props) {
    super(props);
    this.state ={
		trailer: null,
		image: null,
		show: "none",
	}
}

YouTubeGetID(url){
  var ID = '';
  url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
  if(url[2] !== undefined) {
    ID = url[2].split(/[^0-9a-z_\-]/i);
    ID = ID[0];
  }
  else {
    ID = url;
  }
    return ID;
};

componentDidMount(){
	const path1 = "https://image.tmdb.org/t/p/original";
    const path2 = String(this.props.Poster);
    var path3 = null;
    path3 = path1.concat(path2);
	movieTrailer( String(this.props.title ))
        .then( response =>
        {
			response = this.YouTubeGetID(response);
			this.setState({trailer: response})
			this.setState({image: path3})
		}
	)
};

showModal()
{
	this.setState({show: "block"});
	movieTrailer( this.props.title )
        .then( response =>
        {
			response = this.YouTubeGetID(response);
			this.setState({trailer: response});
		}
        )
};

closeModal()
{
	this.setState({trailer: ""});
	this.setState({show: "none"});
};

  
	render() {
		
		
const opts = {
      height: '400',
      width: '800',
      playerVars: {
        autoplay: 0,
      },
    };

    return (
    <div className="outer" style = {{backgroundImage: `url(https://image.tmdb.org/t/p/original${this.props.Poster})`}}>
    
    <div className="left">
    
    <h1>{this.props.title}</h1>
    
    <h2><b>Date of Release: </b>{this.props.date}</h2>
    
    <br></br>
    
    <h2><b>Storyline: </b><br></br>{this.props.Overview}</h2>
    
    <button id="myBtn" className="trailer-button"  onClick={this.showModal.bind(this)}>Watch Trailer</button>
    <div id="myModal" className="modal" style={{display: this.state.show}}>
    
    <div className="modal-content">
    <span className="close" onClick={this.closeModal.bind(this)}>&times;</span>
    <YouTube videoId={this.state.trailer} opts={opts}/>
    </div>

   </div>
   
   
   </div>
   
   
   <div className="right">
   <img src={`https://image.tmdb.org/t/p/original${this.props.Poster}`}></img>
   </div>
   
   </div>
    );
  }
}
