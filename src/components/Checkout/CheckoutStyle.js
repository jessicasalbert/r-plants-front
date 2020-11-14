import styled from 'styled-components'

const CheckoutContainer = styled.section`
    display: flex;
`

const Heading = styled.h1`
    color: rgba(255, 255, 255, 1);
    font-size: 15vw;
    opacity: 1;
    margin-left: 13vw;
    margin-bottom: 2vh;
`

const Total = styled.p`
    color:rgba(57, 54, 38, 1);
    font-size: 2rem;
    ${'' /* position: relative; */}
    margin-left: 50vw;
    @media screen and (max-width: 926px) {
        ${'' /* margin-left: 50vw; */}
    }
`

export {CheckoutContainer, Heading, Total}