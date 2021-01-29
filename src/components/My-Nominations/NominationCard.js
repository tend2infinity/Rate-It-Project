import React from 'react';
import Button from '@material-ui/core/Button';
<<<<<<< HEAD
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
=======
>>>>>>> 61da1fd549f85e9eab923b97f9790ae22cf072cf

export default class NominationCard extends React.Component{



	constructor(props) {
    super(props);
    this.state ={
		title: null,
		image: null,
		loading: true,
		nominated: true,
	}
}

async componentDidMount(){
		const url = `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=cd74296e33afa394a19ac0d3043856f2`;
		const response = await fetch(url);
		const data = await response.json();
<<<<<<< HEAD
		this.setState({image: data.poster_path,loading: false, title:data.title});
}

async NominationToggle()
{
 this.setState({nominated:!(this.state.nominated)});
 console.log(this.state.nominated);	
 
 
 if(this.state.nominated===false)
	{
		const userID =this.props.email;
		const movieID = this.props.id;
		const book = {
      userID,
      movieID
    };
    console.log('Movie Nomination Started')
      
      try {
  const response = await axios.post('http://localhost:3001/browse/add', book);
  toast.success("Movie Nominated!");
} catch (e) {
  console.log(`😱 Axios request failed: ${e}`);
}
	}
	
	/*Remove Nomination*/
	else
	{
		try {
	const response =
      await axios.get("http://localhost:3001/browse/remove",
          { params: {idu: this.props.email , idm:this.props.id }}
      )
      toast.error("Movie Removed");
     } catch (e) {
  console.log(`😱 Axios request failed: ${e}`);
}
	}



=======
		console.log(data);
		this.setState({image: data.poster_path,loading: false, title:data.title});
}

NominationToggle()
{
 this.setState({nominated:!(this.state.nominated)});
 console.log(this.state.nominated);	
>>>>>>> 61da1fd549f85e9eab923b97f9790ae22cf072cf
};

  
	render() {

    return (
    <div style={{textAlign:"center" , width:"25%", border:"2px solid cyan", borderRadius:"2%", background: "linear-gradient(90deg, cyan, blue)" , backgroundSize: "100% 50%" , backgroundRepeat: "no-repeat",padding: "1%", margin:"1%"}}>
    <article className="photo">
   <div style={{width:"100%", textAlign:"center"}}>
   <img src={`https://image.tmdb.org/t/p/original${this.state.image}`} style={{width:"35%"}}></img>
   </div>
   <div className="overlay-gradient-tall-dark"/>
   <section>
      <p className="text-auto-size" style={{fontSize:"2vh", fontFamily: "Cinzel"}}>{this.state.title}</p>
   </section>
   <Button variant="contained" onClick={this.NominationToggle.bind(this)} style={{background:"cyan", color: "black" , fontWeight:"bold"}} >
   {(this.state.nominated) ? "Remove" : "Nominate"}
   </Button>
   </article>
    </div>
    
    );
  }
}
