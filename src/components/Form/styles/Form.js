import styled from 'styled-components/macro'
import {Link as ReactRouterLink} from 'react-router-dom'

export const Container = styled.div`
display: flex;
flex-direction: column;
min-height: 660px;
box-sizing: border-box;
width: 100%;
max-width: 450px;
padding: 60px 68px 40px;
margin-bottom: 100px;
`;

export const Error = styled.div`
background: #eb365a;
font-family: 'Hind Siliguri', sans-serif;
border-radius: 4px;
margin: 0 0 16px;
color: black;
padding: 15px 20px;
font-size: 15px;
font-weight: 900;
`;

export const Title = styled.h1`
color: #fff;
font-weight: bold;
margin-bottom: 28px;

`;

export const SubTitle = styled.p`
color: #737373;
font-size: 16px;
font-weight: 500;
`;



export const Link = styled(ReactRouterLink)`
color: white;
text-decoration: none;
&:hover{
    text-decoration: underline;
}
`;

export const Input = styled.input`
background: #333;
font-family: 'Hind Siliguri', sans-serif;
border-radius: 4px;
border : 0;
color: white;
height: 50px;
line-height: 50px;
padding: 5px 20px;
margin-bottom: 20px;

&:last-of-type {
    margin-bottom: 30px;
}

`;

export const Submit = styled.button`
background: #3FF6E3;
border-radius: 4px;
font-size: 16px;
font-weight: bold;
margin: 24px 0 12px;
padding: 16px;
border: 0;
color: black;
cursor: pointer;

&:disabled {
    opacity: 0.5;
}
`;

export const Base = styled.form`
display: flex;
flex-direction: column;
max-width: 450px;
width: 100%;

`;
