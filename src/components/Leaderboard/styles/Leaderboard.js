import styled from 'styled-components/macro';

export const Item = styled.div`
display: flex;
border-bottom: 8px solid #222;
padding: 10px 5%;
color: white;
overflow: hidden;
`;

export const Inner = styled.div`
display: flex;
align-items: center;
flex-direction: ${({ direction}) => direction};
justify-content: space-between;
max-width: 1100px;
margin:auto;
width: 100%;
@media (max-width: 500px)  {
    flex-direction: column;
};
`;

export const Container = styled.div`
@media (max-width: 1000px) {
    ${Item}:last of type h2 {
        margin-bottom: 50px;
    }
}
`; 
export const Title = styled.h1`
font-size: 40px;
color: cyan;
font-family: 'Hind Siliguri', sans-serif;
line-height: 1.1;
margin-bottom: 8px;
@media (max-width: 600px) {
    font-size: 35px;
};`; 
export const SubTitle = styled.h2`
font-size: 19px;
font-weight: normal;
font-family: 'Hind Siliguri', sans-serif;
line-height: normal;
@media (max-width: 600px) {
    font-size: 18px;
};
`; 
export const Image = styled.img`
max-width: 50%;
height: auto; 
`; 
export const Pane = styled.div`
width: 50%;
text-align: center;
padding : 0 10px;
@media (max-width: 1000px) {
    width: 100%;
    padding: 0 45px;
    text-align: center;
};
`; 
export const Button = styled.button`
 display: block;
margin: auto;
 font-weight: 900;
 text-align: center;
 font-family: 'Hind Siliguri', sans-serif;
 background-color: #3FF6E3;
 width: 140px;
 color: black;

 font-size: 18px;
 border-radius: 4px;
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
