import styled from 'styled-components/macro'
import { Link as ReactRouterLink } from 'react-router-dom';

export const Background = styled.div`
 display: flex;
 flex-direction: column;
 background:linear-gradient(to right, #000 30%, transparent 70%), url(${({ src }) => (src ? `/pictures/${src}.jpg` : '/pictures/header2.jpg')}) top right / cover
 no-repeat;
 
`;

export const Inner = styled.div`
display: flex;
height: 100px;
padding: 18px 5px;
margin: 0 56px;
justify-content: space-between;
align-items: center;

a{
    display: flex;    
}
@media (max-width: 1000px) {
    margin: 0 30px;
}
`;

export const Logo = styled.img`
    height: 93px;
    width: 100px;
    margin-right: 40px;
    
`;

export const Button = styled(ReactRouterLink)`
 display: block;
 font-weight: 900;
 font-family: 'Hind Siliguri', sans-serif;
 background-color: #3FF6E3;
 width: 120px;
 color: black;
 border: 0;
 font-size: 17px;
 border-radius: 3px;
 padding: 15px 33px;
 cursor: pointer;
 text-decoration: none;
 box-sizing: border-box;
 transition-duration: 0.4s;
 &:hover {
     background-color: #35EABF;
     transform: scale(1.15);
 }
 `;