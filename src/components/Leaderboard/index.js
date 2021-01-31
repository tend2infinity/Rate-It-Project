import React from 'react'
import { Inner,Container,Pane,Title,SubTitle,Image,Item,Button  } from './styles/Leaderboard.js';

function Leaderboard({ children, direction = 'row', ...restProps}) {
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
Leaderboard.Container = function LeaderboardContainer({ children , ...restProps}) {
    return <Container {...restProps}>{children}</Container>
}
Leaderboard.Pane = function LeaderboardPane({ children , ...restProps}) {
    return <Pane {...restProps}>{children}</Pane>
}
Leaderboard.Title = function LeaderboardTitle({ children , ...restProps}) {
    return <Title {...restProps}>{children}</Title>
}
Leaderboard.SubTitle = function LeaderboardSubTitle({ children , ...restProps}) {
    return <SubTitle {...restProps}>{children}</SubTitle>
}
Leaderboard.Image = function LeaderboardImage({ ...restProps}) {
    return <Image {...restProps} />;
}
Leaderboard.Button = function HeaderButton({ children, ...restProps}){
    return <Button {...restProps}>{children} </Button>
}


export default Leaderboard

/*import React from 'react';
import MovieList from '../MovieList.js';
export default function Cutlet() {
    return (
    <div>
    <MovieList/>
    </div>
        
    );
}*/
