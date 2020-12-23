import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom';



export const Container = styled.div`
display: flex;
flex-direction : column;
border-bottom: 8px solid #222;
padding: 55px 25px;
@media (max-width: 1000px) {
    padding: 105px 30px;
}
`;

export const Title = styled.h1`
color: white;
font-family: 'Hind Siliguri', sans-serif;
max-width: 540px;
font-size: 40px;
font-weight: 700;
margin-bottom: 120px;

@media (max-width: 1000px) {
    font-size: 35px;
    max-width: 340px;
}
`;

export const SubTitle = styled.h2`
color: white;
font-family: 'Hind Siliguri', sans-serif;
font-size: 22px;
font-weight: normal;
max-width: 550px;



@media (max-width: 1000px) {
    font-size: 20px;
    max-width: 340px;
}

`;
export const Signup = styled(ReactRouterLink)`
display: block;
margin-bottom: 40px;
font-weight: 900;
margin-left: 20px;
font-family: 'Hind Siliguri', sans-serif;
background-color: #3FF6E3;
max-width: 300px;
color: black;
border: 0;
font-size: 18px;
border-radius: 5px;
padding: 18px 40px ;
cursor: pointer;
text-decoration: none;
box-sizing: border-box;
transition-duration: 0.4s;
&:hover {
    background-color: #35EABF;
    transform: scale(1.05);
}
@media (max-width: 1000px) {
    margin: 0;
}
`;