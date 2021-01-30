import styled from 'styled-components/macro';

export const Container = styled.div`
display: flex;
padding: 40px 0px;
margin-left: 45px;
max-width: 1000px;
flex-direction: column;

`;
export const Column = styled.div`
display: flex;
flex-direction: column;
text-align: left;
`;
export const Row = styled.div`
display: grid;
grid-template-columns: repeat(auto-fill,minmax(100px,1fr));
grid-gap: 20px;


`;
export const Link = styled.div`
 margin-bottom: 20px;
 font-size: 42px;
 text-decoration: none;
 
 `;

 export const Title = styled.p`
 font-weight: bold;
 font-size: 20px;
 color: #757575;
 text-decoration: underline;
 `;

 export const Text = styled.p`
 font-size: 16px;
 font-weight: bold;
 color: #757575;
 `;
 export const Break = styled.p`
 flex-basis: 100%;
 height: 0;
 `;
 