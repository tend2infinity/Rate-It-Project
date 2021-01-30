import React from 'react';
import NominationCard from './NominationCard.js';

export default class MyNominations extends React.Component{



	constructor(props) {
    super(props);
    }
    

  
	render() {
    // console.log(this.props)

    return (

    <div style={{display:"flex", flexDirection:"row" , justifyContent:"center" , flexBasis: "30%" , flexWrap: "wrap"}}>
      <h1 style={{textAlign: "center" }}>The Movies nominated by you!</h1>
    {this.props.movie.map(name => (
          <NominationCard id = {name} email = {this.props.email}/>
      ))}
    </div>
    
    );
  }
}
