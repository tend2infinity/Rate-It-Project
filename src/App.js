import React , {useEffect, useState} from 'react';
// import './App.css';
import cutletText from './homeSnippets/cutletText'
import Navbar from './Navbar.js'
import Cutlet from './components/Cutlet'

function App() {
  return (
      <Cutlet.Container>
        {cutletText.map((item) => (
        <Cutlet key={item.id} direction={item.direction}>
          <Cutlet.Pane>
            <Cutlet.Title>{item.title}</Cutlet.Title>
            <Cutlet.SubTitle>{item.subTitle}</Cutlet.SubTitle>
          </Cutlet.Pane>
          <Cutlet.Pane>
           <Cutlet.Image src={item.image} alt={item.alt} />
          </Cutlet.Pane>
        </Cutlet>

        ))}  
      </Cutlet.Container>
  );
}

export default App;
