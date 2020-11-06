import styled from 'styled-components'

const Page = styled.section`
    margin: 10px;

`



const Details = styled.section`
    h1 {
        color: red;
    }
    h2 {
        color: blue;
    }
  
    margin: auto;
    text-align: center;
`

const TopDetails = styled.section`
    border: 2px black solid;
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    align-content: flex-start;
    background-color: rgba(100, 114, 97, 0.3)
`

const Photo = styled.section`
img {
    max-width: 50vw;
};
background-color: rgba(147, 141, 123, 0.5);
`

const BottomDetails = styled.section`
    font-size: 20px;
    margin: 10px;
    padding: 10px;
  
`

const PetFriendly = styled.img`
    width: 25px
`


export {TopDetails, PetFriendly, BottomDetails, Page, Details, Photo}