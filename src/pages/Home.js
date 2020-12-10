import React from 'react';
import {CutletContainer} from '../containers/Cutlet'
import { FooterContainer } from '../containers/Footer';
import { HeaderContainer } from '../containers/Header';

export default function Home(){
    return (
        <>
        <HeaderContainer>
        <CutletContainer />
        <FooterContainer />
        </HeaderContainer>
            
        </>
    )
}
