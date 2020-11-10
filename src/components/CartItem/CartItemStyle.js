import styled from 'styled-components'

const CartCard = styled.section`
    margin-left: 5vw;
    padding-top: 2.5vh;
    margin-bottom: 2.5vh;
    border-radius: 10px;
    padding: 10px;
    width: 75vw;
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    flex-direction: column row;
`

const CartImage = styled.img`
    max-width: 100px;
    margin: 0;
`

const CartText = styled.p`
    text-align: center;
`

export {CartCard, CartImage, CartText}