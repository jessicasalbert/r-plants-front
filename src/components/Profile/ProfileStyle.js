import styled from 'styled-components'

export const PurchaseWrapper = styled.div`
    ${'' /* color: rgba(57, 54, 38, 1);
    position: relative;
    top: 0;
    bottom: 0;
    z-index: 0;
    background-image: url("https://i.ibb.co/BVLGr4Z/Final-40.png");
    background-attachment: fixed;
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100vw;
    @media screen and (max-width: 700px) {
        background-size: 100vh;
    } */}
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    margin: 0;
    background: url("https://i.ibb.co/BVLGr4Z/Final-40.png") center center no-repeat;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
`

export const PurchaseColumn = styled.section`
    ${'' /* display: inline-grid; */}
    position: relative;
    background-color: rgba(255, 255, 255, 0.5);
    left: 15vw;
    transition: 0.3s;
    max-width: 70vw;
    min-height: 100vh;
    align-items: center;
`

export const OrderHistory = styled.p`
    color:rgba(57, 54, 38, 1);
    padding-top: 1vh;
    padding-left: 5vw;
    padding-bottom: 2vh;
    font-size: 4rem;
    font-weight: normal;
`

export const LastOrderTitle = styled.p`
    font-size: 2rem;
    padding-left: 5vw;
    padding-bottom: 2vh;
`

export const PrevOrderTitle = styled.p`
    font-size: 2rem;
    padding-left: 5vw;
    padding-bottom: 2vh;
    padding-top: 2vh;
`

export const LastOrder = styled.section`
    margin-bottom: 4vh;
    margin-top: 0;
`

export const NoPurchases = styled.h1`
    font-size: 2rem;
    font-weight: normal;
`

export const Heading = styled.h1`
    color: rgba(255, 255, 255, 0.7);
    font-size: 15vw;
    opacity: 1;
    margin-left: 13vw;
    margin-bottom: 2vh;
`