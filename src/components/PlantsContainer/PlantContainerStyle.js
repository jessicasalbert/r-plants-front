import styled from 'styled-components'

const PlantContainerStyle = styled.div`
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    justify-content: center;
    align-content: flex-start;
    padding: 10px;
    height: 100%;
    margin-top: 4vh;
    @media (max-width: 900px) {
        margin-top: 4vh;
        flex-direction: row;
        align-content: flex-start;
    }
    @media (max-width: 800px) {
        margin-top: 4vh;
        flex-direction: column;
        align-content: center;
    }
}
`

const StoreWrapper = styled.div`
    position: relative;
    top: 0;
    bottom: 0;
    min-height: 100vh;
    width: 100%;
    z-index: 0;
    background-image: url("https://i.ibb.co/K0Ww3rX/Final-40.webp");
    background-attachment: fixed;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: 100vw;
    @media screen and (max-width: 1024px) {
        background-image: url("https://i.ibb.co/VH4pFYg/background40.webp");
        background-repeat: repeat;
    }
`

export {PlantContainerStyle, StoreWrapper}