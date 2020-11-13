import styled from 'styled-components'

const FootStyle = styled.footer`
    height: 300px;
    background-image: url("https://i.ibb.co/KD1Lg4r/Footer.webp");
    position: relative;
    background-position: top center;
    background-repeat: no-repeat;
    display: flex;
    width: 100%;
    opacity: 0.7;
`

const FootText = styled.p`
    text-align: center;
    position: absolute;
    right: 25%;
    left: 25%;
    bottom: 1vh;
    opacity: 0.5;
`

export {FootStyle, FootText}