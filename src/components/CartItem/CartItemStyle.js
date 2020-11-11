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

const CartText = styled.div`
    display: flex;
    margin: auto;
    margin-left: 2.5vw;
    margin-right: 2.5vw;
    justify-content: space-between;
    position: relative;
    width: 100vw;
    @media screen and (max-width: 926px) {
        display: flex;
        flex-direction: column;
    }
`

const Price = styled.p`
    font-size: 1.2rem;
    ${'' /* align-self: flex-end; */}
`

const Quantity = styled.p`
    font-size: 1.2rem;
`

const Size = styled.p`
    font-size: 1.2rem;
`

const Name = styled.p`
    font-size: 1.8rem;
`

export {CartCard, CartImage, CartText, Price, Name, Quantity, Size}