import styled from 'styled-components/macro';

export const Item = styled.div`
display: flex;
border-bottom: 8px solid #222;
padding: 50px 5%;
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
@media (max-width: 1000px)  {
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
font-family: 'Hind Siliguri', sans-serif;
line-height: 1.1;
margin-bottom: 8px;
@media (max-width: 600px) {
    font-size: 35px;
};`; 
export const SubTitle = styled.h2`
font-size: 20px;
font-weight: normal;
font-family: 'Hind Siliguri', sans-serif;
line-height: normal;
@media (max-width: 600px) {
    font-size: 18px;
};
`; 
export const Image = styled.img`
max-width: 100%;
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
