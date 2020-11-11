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

const Delete = styled.button`
    color: rgba(57, 54, 38, 1);
    box-shadow: 0px 8px 8px -6px rgba(0,0,0,.5);
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: none;
    background-color: rgba(147, 141, 123, 0.5);
    padding: 5px 10px;
    font-size: 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    margin: 5px;
    max-width: 100px;
    &:active {
        letter-spacing: 0.5px;
        -webkit-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        -moz-box-shadow: 0px 5px 40px -10px rgba(0,0,0,0.57);
        box-shadow: 5px 40px -10px rgba(0,0,0,0.57);
    }
    @media (max-width: 1023px) {
        padding: 10px;
        margin-left: 0;
    }
    @media (max-width: 412px) {
        padding: 3px;
        ${'' /* margin: 0; */}
    }

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

export {CartCard, Delete, CartImage, CartText, Price, Name, Quantity, Size}