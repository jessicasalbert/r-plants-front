import styled from 'styled-components'

const FootStyle = styled.footer`
    height: 300px;
    background-image: url("https://i.ibb.co/0p5WkQP/Footer.png");
    position: absolute;
    background-position: top center;
    background-repeat: no-repeat;
    display: flex;
    width: 100%;
    opacity: 0.8;
    bottom: 0;
`

const FootText = styled.h3`
    text-align: center;
    position: absolute;
    right: 25%;
    left: 25%;
    bottom: 1vh;
    opacity: 0.5;
`

export {FootStyle, FootText}