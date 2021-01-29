import React from 'react';
import NominationCard from './NominationCard.js';

export default class MyNominations extends React.Component{



	constructor(props) {
    super(props);
    }

  
	render() {

    return (
    <div style={{display:"flex", flexDirection:"row" , justifyContent:"center" , flexBasis: "30%" , flexWrap: "wrap"}}>
    {this.props.movie.map(name => (
          <NominationCard id = {name} email = {this.props.email}/>
      ))}
    </div>
    
    );
  }
}
