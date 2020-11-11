import styled from 'styled-components'

const CartWrapper = styled.div`
    h4 {
        padding-top: 1vh;
        padding-left: 5vw;
        padding-bottom: 2vh;
        font-size: 4rem;
        font-weight: normal;
    }
    position: relative;
    top: 0;
    bottom: 0;
    ${'' /* height: 100vh; */}
    z-index: 0;
    background-image: url("https://i.ibb.co/BVLGr4Z/Final-40.png");
    background-attachment: fixed;
    background-size: contain;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100vw;
    @media screen and (max-width: 700px) {
        background-size: 100vh;
        }
    }
`

const CartStyle = styled.section`
    min-height: 100vh;
`

const EmptyCart = styled.h1`
    min-height: 100vh;
`

const Total = styled.p`
    font-size: 2rem;
    margin-left: 70vw;
    @media screen and (max-width: 926px) {
        margin-left: 50vw;
    }
`

export {CartWrapper, CartStyle, EmptyCart, Total}

