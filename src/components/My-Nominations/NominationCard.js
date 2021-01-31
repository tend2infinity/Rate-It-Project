import React from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Leaderboard from '../Leaderboard'

export default class NominationCard extends React.Component{



	constructor(props) {
    super(props);
    this.state ={
		title: null,
    image: null,
    overview: null,
		loading: true,
		nominated: true,
	}
}

async componentDidMount(){
		const url = `https://api.themoviedb.org/3/movie/${this.props.id}?api_key=cd74296e33afa394a19ac0d3043856f2`;
		const response = await fetch(url);
		const data = await response.json();
		this.setState({image: data.poster_path,loading: false, title:data.title, overview:data.overview });
}

async NominationToggle()
{
 this.setState({nominated:!(this.state.nominated)});
 console.log(this.state.nominated);	
 
 
 if(this.state.nominated===false)
	{
    console.log('Movie Nomination Started')
      
      try {
  const response = 
  await axios.get(`${process.env.REACT_APP_BACKEND_URL}/browse/add`, { params: {userID: this.props.email,movieID: this.props.id}});
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
      await axios.get(`${process.env.REACT_APP_BACKEND_URL}/browse/remove`,
          { params: {idu: this.props.email , idm:this.props.id }}
      )
      toast.error("Movie Removed");
     } catch (e) {
  console.log(`😱 Axios request failed: ${e}`);
}
	}
}

  
	render() {

    return (
      <Leaderboard.Container>
      <Leaderboard direction="row-reverse" >
        <Leaderboard.Pane>
          <Leaderboard.Title data-aos="fade-up">{this.state.title}</Leaderboard.Title>
          <Leaderboard.SubTitle data-aos="fade-up">{this.state.overview}</Leaderboard.SubTitle>
          <Leaderboard.Button onClick={this.NominationToggle.bind(this)}>{(this.state.nominated) ? "Remove" : "Nominate"} </Leaderboard.Button>
        </Leaderboard.Pane> 
        <Leaderboard.Pane>
         <Leaderboard.Image data-aos="flip-up" src={`https://image.tmdb.org/t/p/original${this.state.image}`} alt={"Image is not available"} />
        </Leaderboard.Pane>
      </Leaderboard>
    </Leaderboard.Container>

  //   <div style={{textAlign:"center" , width:"25%", border:"2px solid cyan", borderRadius:"2%", background: "linear-gradient(90deg, cyan, blue)" , backgroundSize: "100% 50%" , backgroundRepeat: "no-repeat",padding: "1%", margin:"1%"}}>
  //   <article className="photo">
  //  <div style={{width:"100%", textAlign:"center"}}>
  //  <img src={`https://image.tmdb.org/t/p/original${this.state.image}`} style={{width:"35%"}}></img>
  //  </div>
  //  <div className="overlay-gradient-tall-dark"/>
  //  <section>
  //     <p className="text-auto-size" style={{fontSize:"2vh", fontFamily: "Cinzel"}}>{this.state.title}</p>
  //  </section>
  //  <Button variant="contained" onClick={this.NominationToggle.bind(this)} style={{background:"cyan", color: "black" , fontWeight:"bold"}} >
  //  {(this.state.nominated) ? "Remove" : "Nominate"}
  //  </Button>
  //  </article>
  //   </div>
    
    );
  }
}
