import React from 'react';
import NominationCard from './NominationCard.js';

export default class MyNominations extends React.Component{



	constructor(props) {
    super(props);
<<<<<<< HEAD
    }
=======
}
>>>>>>> 61da1fd549f85e9eab923b97f9790ae22cf072cf

  
	render() {

    return (
    <div style={{display:"flex", flexDirection:"row" , justifyContent:"center" , flexBasis: "30%" , flexWrap: "wrap"}}>
    {this.props.movie.map(name => (
<<<<<<< HEAD
          <NominationCard id = {name} email = {this.props.email}/>
=======
          <NominationCard id = {name}/>
>>>>>>> 61da1fd549f85e9eab923b97f9790ae22cf072cf
      ))}
    </div>
    
    );
  }
}
