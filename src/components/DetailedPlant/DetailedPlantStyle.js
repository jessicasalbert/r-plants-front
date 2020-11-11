import styled from 'styled-components'

const Background = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    min-height: 100vh;
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
    ${'' /* display: inline-grid; */}
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
    padding: 20px;
    border-radius: 8px;
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
`

const Details = styled.section`
    margin-left: 5vw;
    margin-top: 0vh;
    margin-right: auto;
    text-align: center;
    position: relative;
    }
    label {
        padding-right: 10px;
        padding-top: 10px;
        padding-left: 2px;
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

const Photo = styled.img`
    position: relative;
    margin-top: 5vh;
    margin-left: 5vh;
    margin-right: 0;
    width: 30vw;
    border-radius: 20px;
    align-content: center;
    &:hover {
        cursor: zoom-in;
    }

`

const CareType = styled.p`
    font-size: 1.5rem;
`

const Description = styled.p`
    padding: 2%;
`
const BottomDetails = styled.section`
    margin: 10px;
    padding: 10px;
    margin-top: 10vh;
`

const PlantHeading = styled.h1`
    color: rgba(57, 54, 38, 1);
    font-size: 3.5em;
    display: inline-block;
    padding-top: 2%;
    margin-left: 0;
    margin-top: 10vh;
    font-weight: normal;
`

const Heading = styled.h1`
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

    @media (max-width: 900px) {
        max-width: 26vw;
        max-height: 100%;
    }
    @media (max-width: 800px) {
        max-width: 50vw;
        max-height: 100%;
    }

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

const SubHeading = styled.h2`
    font-weight: normal;
    margin-bottom: 2vh;
    color: rgba(100, 114, 97, 1);
    font-size: 2em;
`

const PetFriendly = styled.p`
    img {
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
        PlantHeading
}