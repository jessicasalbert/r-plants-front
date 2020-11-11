import styled from 'styled-components'

const Background = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    min-height: 100%;
    width: 100vw;
    z-index: 0;
    background-image: url("https://i.ibb.co/BVLGr4Z/Final-40.png");
    background-attachment: fixed;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100vw;
    @media screen and (max-width: 700px) {
        background-size: 100vh;
        }
    }
`

const Page = styled.section`
    position: relative;
    background-color: rgba(255, 255, 255, 0.5);
    left: 15vw;
    transition: 0.3s;
    max-width: 70vw;
    min-height: 100vh;
    align-items: center;
`


const AddtoCart = styled.button`
    color: #fff;
    font-size: 1rem;
    text-decoration: none;
    background: rgba(147, 141, 123, 1);
    padding: 15px;
    border-radius: 10px;
    display: inline-block;
    border: none;
    outline: none;
    transition: all 0.4s ease 0s;
    cursor: pointer;

    &:active {
        background: rgba(57, 54, 38, 1);
        letter-spacing: 0.5px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }
    &:hover {
        color: rgba(57, 54, 38, 1);
        background: rgba(181, 181, 161, 1);
    }
    @media (max-width: 1023px) {
        padding: 10px;
        margin-left: 0;
    }
`
const SelectedLabel = styled.label`
    
    display: inline-block;
    background-color: purple;
    padding: 10px 20px;
    font-family: sans-serif, Arial;
    font-size: 16px;
    border: 2px solid #444;
    border-radius: 4px;

    @media (max-width: 1023px) {
        padding: 10px;
        margin-left: 0;
    }
    @media (max-width: 412px) {
        padding: 3.5px;
        margin-left: 0;
    }

`

const UnselectedLabel = styled.label`
display: inline-block;
background-color: #ddd;
padding: 10px 20px;
font-family: sans-serif, Arial;
font-size: 16px;
border: 2px solid #444;
border-radius: 4px;
    @media (max-width: 1023px) {
        padding: 10px;
        margin-left: 0;
    }
    @media (max-width: 412px) {
        padding: 3.5px;
        margin-left: 0;
    }
    
`



const Details = styled.section`

    input[type="radio"] {
        opacity: 0;
        position: fixed;
        width: 0;
    }
        ${'' /* margin-left: 5vw; */}
        ${'' /* margin-top: 0vh; */}
        ${'' /* margin-right: auto; */}
        ${'' /* text-align: center; */}
        ${'' /* position: relative; */}

    @media (max-width: 900px) {
        margin: 0;
        align-content: center;
        width: 100%;
        height: auto;
    }
    @media (max-width: 812px) {
        align-content: center;
        max-width: 50vw;
        height: auto;
    }
`

const TopDetails = styled.section`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    align-content: flex-start;
    margin: auto;
    @media (max-width: 1023px) {
        align-content: center;
        flex-direction: column;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        align-content: center;
    }

`

const Photo = styled.img`
    position: relative;
    margin: auto;
    margin-right: 5%;
    margin-left: 10%;
    margin-top: 5%;
    height: 40vh;
    border-radius: 20px;
    align-content: center;
    &:hover {
        cursor: zoom-in;
    }
    @media (max-width: 1024px) {
        margin: auto;
        ${'' /* margin-top: 5vh;
        margin-right: 0;
        margin-left: 0;
        margin-bottom: 0;
        align-content: center;
        width: 100%;
        height: auto; */}
    }
    @media (max-width: 960px) {
        align-content: center;
        width: 100%;
        height: auto;
    }
    @media (max-width: 812px) {
        align-content: center;
        max-width: 50vw;
        height: auto;
    }

`

const CareType = styled.p`
    margin-left: 1vw;
    color: rgba(57, 54, 38, 1);
    font-size: 1.5rem;
`

const Price = styled.p`
    margin-left: 1vw;
    color: rgba(57, 54, 38, 1);
    font-size: 1.5rem;
    @media (max-width: 960px) {
    margin-top: 0;
    }
    @media (max-width: 812px) {

    }
`

const Description = styled.p`
    color: rgba(57, 54, 38, 1);
    padding: 2%;
`
const BottomDetails = styled.section`
    padding: 10px;
`

const PlantHeading = styled.h1`
    color: rgba(57, 54, 38, 1);
    font-size: 3.5em;
    display: inline-block;
    padding-top: 2%;
    margin-left: 0;
    margin-top: 10vh;
    font-weight: normal;
    @media (max-width: 1024px) {
        margin-top: 0;
        font-size: 3em;
    }
    @media (max-width: 812px) {
        font-size: 2em;
    }
`

const Heading = styled.h1`
    color: rgba(57, 54, 38, 1);
    cursor: pointer;
    font-weight: normal;
    margin-top: 2vh;
    margin-left: 5vw;
    font-size: 2.5rem;
`

const CareCard = styled.section`
    background-color: rgba(255, 255, 255, 1);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    transition: 0.3s;
    max-width: 80vw;
    max-height: 100%;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

const SubHeading = styled.h2`
    font-weight: normal;
    margin-bottom: 2vh;
    color: rgba(100, 114, 97, 1);
    font-size: 2em;
    @media (max-width: 1024px) {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 1.7em;
    }
    @media (max-width: 812px) {
        font-size: 1.5em;
    }
`

const PetFriendly = styled.p`
    color: rgba(57, 54, 38, 1);
    img {
        color: rgba(57, 54, 38, 1);
        width: 25px;
        display: inline;
    }
    display: flex;
    font-size: 1.4rem;
    justify-content: center;
`

const BreadCrumbs = styled.p`
    position: fixed;
    font-size: 1.5rem;
    padding-top: 1vh;
    padding-left: 10px;
    position: absolute;
    ${'' /* @media (max-width: 812px) {
        position: absolute;
        padding-top: 50px;
        padding-left: 2vw;
    }
    @media (max-width: 768px) {
        position: absolute;
        padding-top: 6vh;
        padding-left: 2vw;
    }
    @media (max-width: 731px) {
        position: absolute;
        padding-top: 50px;
        padding-left: 2vw;
    }
    @media (max-width: 411px) {
        position: absolute;
        padding-top: 12vh;
        padding-left: 2vw;
    }
    @media (max-width: 375px) {
        position: absolute;
        padding-top: 11vh;
        padding-left: 2vw;
    } */}
`

export {TopDetails, 
        BottomDetails, 
        Page, Details, 
        Photo, 
        BreadCrumbs, 
        AddtoCart, 
        CareType, 
        Description, 
        Heading, 
        SubHeading, 
        PetFriendly,
        CareCard,
        Background,
        PlantHeading,
        SelectedLabel,
        UnselectedLabel,
        Price
}