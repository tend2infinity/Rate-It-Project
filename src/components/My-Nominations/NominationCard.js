import React from 'react';
import Button from '@material-ui/core/Button';

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
		console.log(data);
		this.setState({image: data.poster_path,loading: false, title:data.title});
}

NominationToggle()
{
 this.setState({nominated:!(this.state.nominated)});
 console.log(this.state.nominated);	
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
