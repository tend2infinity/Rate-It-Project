import React from 'react';
import movieTrailer from 'movie-trailer';
import './MovieDetails.css';

export default function MovieDetails(props){

const [nominated, setNominated] = React.useState(false);
const [trailer, setTrailer] = React.useState(null);
const [show, setShow] = React.useState("none");




const showModal = () => 
{
	setShow("block");
	movieTrailer( props.title )
        .then( response =>
        {
			response = response.replace("watch?v=", "embed/")
			setTrailer(response);
		}
        )
};

const closeModal = () => 
{
	setTrailer("");
	setShow("none");
};

const handleNomination = () => 
{
	setNominated(!(nominated));
};






    return (
    <div className="outer" style = {{backgroundImage: `url(https://image.tmdb.org/t/p/original${props.Poster})`}}>
    
    <div className="left">
    
    <h1>{props.title}</h1>
    
    <h2><b>Date of Release: </b>{props.date}</h2>
    
    <br></br>
    
    <h2><b>Storyline: </b><br></br>{props.Overview}</h2>
    <div className = "box">
    
    <button id="myBtn" className="trailer-button"  onClick={showModal}>Watch Trailer</button>
    
    <button id="myBtn" className="trailer-button"  onClick={handleNomination}>{(nominated)?"Remove":"Nominate"}</button>
    </div>
    
    <div id="myModal" className="modal" style={{display: show}}>
    
    <div className="modal-content">
    <span className="close" onClick={closeModal}>&times;</span>
    <iframe src={trailer} width="100%" height="500px"/>
    </div>

   </div>
   
   
   </div>
   
   
   <div className="right">
   <img src={`https://image.tmdb.org/t/p/original${props.Poster}`}></img>
   </div>
   
   </div>
    );
}
