import React , {useEffect, useState} from 'react';
// import './App.css';
import cutletText from '../homeSnippets/cutletText'
import {Cutlet} from '../components'
import AOS from 'aos';
import 'aos/dist/aos.css';

 

export function CutletContainer() {
    useEffect(() => {
        AOS.init({duration: 1500, delay: 500});
    }, [])
  return (
      <Cutlet.Container>
        {cutletText.map((item) => (
        <Cutlet key={item.id} direction={item.direction} >
          <Cutlet.Pane>
            <Cutlet.Title data-aos="fade-up">{item.title}</Cutlet.Title>
            <Cutlet.SubTitle data-aos="fade-up">{item.subTitle}</Cutlet.SubTitle>
          </Cutlet.Pane> 
          <Cutlet.Pane>
           <Cutlet.Image data-aos="flip-up" src={item.image} alt={item.alt} />
          </Cutlet.Pane>
        </Cutlet>
        ))}  
      </Cutlet.Container>
  );
}


