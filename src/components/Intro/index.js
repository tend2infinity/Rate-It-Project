import { FeaturedPlayList } from '@material-ui/icons';
import React from 'react';
import { Container, Title, SubTitle, Signup } from './styles/Intro';

export default function Intro({children, ...restProps}) {
    return <Container {...restProps}>{children}</Container>;
}

Intro.Title = function IntroTitle({ children, ...restProps}) {
    return <Title {...restProps}>{children}</Title>;
}
Intro.SubTitle= function IntroSubTitle({ children, ...restProps}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;  
};
Intro.Signup= function IntroSignup({ children, ...restProps}) {
  return <Signup {...restProps}> {children} </Signup>
}
