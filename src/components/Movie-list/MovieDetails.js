import React from 'react';
import movieTrailer from 'movie-trailer';
import './MovieDetails.css';
import { useAuth } from "../../context/authContext"
import axios from 'axios';
 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function MovieDetails(props){
	
const { currentUser, logout} = useAuth()

const [nominated, setNominated] = React.useState(false);
const [trailer, setTrailer] = React.useState(null);
const [show, setShow] = React.useState("none");

React.useEffect(() => {
		  getList();
    }, [])

async function getList(){
    const response =
      await axios.get("http://localhost:3001/browse/find",
          { params: {email: currentUser.email,id: props.id}}
      )
      setNominated(response.data);
 }


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

async function handleNomination(){
	setNominated(!(nominated));
	
	if(nominated===false)
	{
		const userID =currentUser.email;
		const movieID = props.id;
		const book = {
      userID,
      movieID
    };
    
    const response1 =
      await axios.get("http://localhost:3001/browse/list",
          { params: {email: currentUser.email}}
      )
     if(response1.data.length<5)
     {
      
      try {
  const response = await axios.post('http://localhost:3001/browse/add', book);
  toast.success("Movie Nominated!");
} catch (e) {
  console.log(`😱 Axios request failed: ${e}`);
}
	}
	else
	{
		console.log("Yes");
		toast.error("Maximum limit of 5 movies reached");
	}
}
	
	/*Remove Nomination*/
	else
	{
		try {
	const response =
      await axios.get("http://localhost:3001/browse/remove",
          { params: {idu: currentUser.email , idm:props.id }}
      )
      toast.error("Movie Removed");
     } catch (e) {
  console.log(`😱 Axios request failed: ${e}`);
}
	}
}






    return (
    <>
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
   </>
    );
}
