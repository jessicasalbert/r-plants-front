import styled from 'styled-components'

const NavStyle = styled.section`
    height: 10vh;
    display: flex;
    background-color: rgba(149, 176, 113, 0.6);
`

const HomeButton = styled.section`
    transition: 0.3s;
    height: 10vh;
    width: 10vh;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`

export {NavStyle, HomeButton}