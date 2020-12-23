import React from 'react';
import {CutletContainer} from '../containers/Cutlet'
import {Intro} from '../components'
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/Header';


export default function Home(){
    return (
        <>
        <HeaderContainer>
        <Intro>
            <Intro.Title>The Grand People's Choice Movie Award Show "RATE IT" is back!!</Intro.Title>
            <Intro.SubTitle> Start with hitting this signup button to get your self registered!! </Intro.SubTitle>
            <Intro.Signup to="/signup">Signup and register yourself!</Intro.Signup>
        </Intro>

        </HeaderContainer>
        <CutletContainer />
        <FooterContainer />            
        </>
    )
}
