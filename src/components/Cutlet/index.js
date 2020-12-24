import React from 'react'
import { Inner,Container,Pane,Title,SubTitle,Image,Item  } from './styles/cutlet';




function Cutlet({ children, direction = 'row', ...restProps}) {
    return (
    <>
        <Item {...restProps}  data-aos="fade-in">
            <Inner direction={direction} >
            {children}
            </Inner>
        </Item>
        </>
    );
}
Cutlet.Container = function CutletContainer({ children , ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}
Cutlet.Pane = function CutletPane({ children , ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}
Cutlet.Title = function CutletTitle({ children , ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Cutlet.SubTitle = function CutletSubTitle({ children , ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Cutlet.Image = function CutletImage({ ...restProps}) {
    return <Image {...restProps} />;
}


export default Cutlet

/*import React from 'react';
import MovieList from '../MovieList.js';
export default function Cutlet() {
    return (
    <div>
    <MovieList/>
    </div>
        
    );
}*/
