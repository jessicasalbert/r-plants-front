import styled from 'styled-components'

const CartWrapper = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    ${'' /* height: 100vh; */}
    z-index: 0;
    background-image: url("https://i.ibb.co/Gd9hVxM/Final-2.png");
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

export {CartWrapper, CartStyle, EmptyCart}

