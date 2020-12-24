import React from 'react';
import movieTrailer from 'movie-trailer';
import './MovieDetails.css';

export default class MovieDetails extends React.Component{
	constructor(props) {
    super(props);
    this.state ={
		trailer: null,
		image: null,
		show: "none",
	}
}

componentDidMount(){
	const path1 = "https://image.tmdb.org/t/p/original";
    const path2 = String(this.props.Poster);
    var path3 = null;
    path3 = path1.concat(path2);
	movieTrailer( String(this.props.title ))
        .then( response =>
        {
			response = response.replace("watch?v=", "embed/")
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
			response = response.replace("watch?v=", "embed/")
			this.setState({trailer: response});
		}
        )
};

closeModal()
{
	this.setState({show: "none"});
};

  
	render() {

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
    <iframe src={this.state.trailer} width="100%" height="500px"/>
    </div>

   </div>
   
   
   </div>
   
   
   <div className="right">
   <img src={`https://image.tmdb.org/t/p/original${this.props.Poster}`}></img>
   <div>{this.state.image}</div>
   </div>
   
   </div>
    );
  }
}
