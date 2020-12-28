import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom';



export const Inner = styled.div`
display: flex;
height: 100px;
padding: 10px 5px;
margin: 0 30px;
align-items: center;

@media (max-width: 1000px) {
    margin: 0 30px;
}
`;

export const Innercomp = styled.div`
display: flex;
justify-content: flex-end;
margin-left: 50%;
margin-right: 10%;
align-items: center;
@media (max-width: 1100px) {
    margin: 0 30%;
}

`;




export const Logo = styled.img`
    height: 93px;
    
    margin-right: 40px;
    
`;

export const Button = styled(ReactRouterLink)`
 display: block;
 margin-right: 20px;
 font-weight: 900;
 text-align: center;
 font-family: 'Hind Siliguri', sans-serif;
 background-color: #3FF6E3;
 width: 140px;
 color: black;

 font-size: 18px;
 border-radius: 3px;
 padding: 15px 23px;
 cursor: pointer;
 text-decoration: none;
 box-sizing: border-box;
 transition-duration: 0.4s;
 &:hover {
     background-color: #35EABF;
     transform: scale(1.12);
 }
 `;