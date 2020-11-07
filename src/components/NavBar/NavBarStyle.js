import styled from 'styled-components'

const NavStyle = styled.header`
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 999;
    font-size: 1.2rem;
    background-color: rgba(149, 176, 113, 0.6);
`

const NavContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    max-width: 1500px;
`

const HomeButton = styled.section`  
    display: inline-block;
    padding: 19px;
    transition: 0.3s;
    position: absolute;
    top: 0;
    left: 0;
    ${'' /* &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    } */}
`

const MenuButton = styled.section`  
    display: inline-block;
    padding: 10px;
    transition: 0.3s;
    ${'' /* &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    } */}
`

const CartButton = styled.section`
    right: 0px;
    top: 19px;
    padding: 10px;
    transition: 0.3s;
    ${'' /* &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    } */}
`

export {NavStyle, HomeButton, CartButton, NavContainer, MenuButton}