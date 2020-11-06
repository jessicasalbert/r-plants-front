import styled from 'styled-components'

const Page = styled.section`
    margin: 10px;

`



const Details = styled.section`
    
    h1 {
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:400,900|Roboto');
        color: rgba(57, 54, 38, 1);
        font-family: 'Montserrat', sans-serif;
        font-size: 3.5em;
        display: inline-block;

    }
    h2 {
        color: rgba(100, 114, 97, 1);
        font-size: 2em;
    }
  
    margin: auto;
    text-align: center;
    
    }
`

const TopDetails = styled.section`
    width: 100vw;
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    align-content: flex-start;
    margin: auto;

`

const Photo = styled.section`
    img {
        width: 50vw;
        border: 1px solid rgba(100, 114, 97, 1)
    };
    margin: auto;
    align-content: center;
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