import styled from 'styled-components'

const NavStyle = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    background-color: rgba(149, 176, 113, 0.6);
`

const HomeButton = styled.section`  
    display: inline-block;
    margin: auto;
    padding: 10px;
    transition: 0.3s;
    ${'' /* &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    } */}
`

const CartButton = styled.section`
    display: inline-block;
    margin: auto;
    right: 0px;
    top: 19px;
    padding: 10px;
    transition: 0.3s;
    ${'' /* &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    } */}
`

export {NavStyle, HomeButton, CartButton}