import styled from 'styled-components'

const Page = styled.section`
    margin: 10px;
    font-family: sans-serif;
    color: rgba(57, 54, 38, 1);
    margin-top: 10vh;
`



const Details = styled.section`
    h1 {
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:400,900|Roboto');
        color: rgba(57, 54, 38, 1);
        font-family: 'Montserrat', sans-serif;
        font-size: 3.5em;
        display: inline-block;
        padding-top: 2%;

    }
    h2 {
        color: rgba(100, 114, 97, 1);
        font-size: 2em;
    }

    img {
        width: 25px;
        display: inline;
    }

    div {
        margin-bottom: 70%;
        display: inline;
    }

    button {
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
    }

    button:active {
        background: rgba(57, 54, 38, 1);
        letter-spacing: 0.5px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
        transition: all 0.4s ease 0s;
    }
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    position: relative;
    }

    label {
        padding-right: 10px;
        padding-top: 10px;
        padding-left: 2px;
    }

    button:hover {
        color: rgba(57, 54, 38, 1);
        background: rgba(181, 181, 161, 1);
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
    position: relative;

    img {
        width: 50vw;
        border: 1px solid rgba(100, 114, 97, 1)
    }

    img:hover {
        cursor: zoom-in;
    }

    margin: auto;
    align-content: center;
`

const BottomDetails = styled.section`
    p {
        padding: 2%;
    }

    h2 {
        padding-bottom: 4%
    }

    h5 {
        font-size: 1.5rem;
        font-family: sans-serif;
    }

    font-size: 20px;
    margin: 10px;
    padding: 10px;
    border: 1px rgba(100, 114, 97, 1) solid;
    margin-top: 10vh;
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




export {TopDetails, BottomDetails, Page, Details, Photo, BreadCrumbs}