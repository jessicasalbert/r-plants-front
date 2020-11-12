import styled from 'styled-components'

const PlantContainerStyle = styled.div`
    display: flex;
    ${'' /* background-color: rgba(0,255,255,1); */}
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
    width: 100vw;
    z-index: 0;
    background-image: url("https://i.ibb.co/BVLGr4Z/Final-40.png");
    background-attachment: fixed;
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    ${'' /* background-size: 100vw; */}
    @media screen and (max-width: 700px) {
        ${'' /* background-size: 100vh; */}
    }
    
`

// const StoreWrapper = styled.div`
//     height: 100vh;
//     min-height: 500px;
//     background-image: url("https://i.ibb.co/BVLGr4Z/Final-40.png");
//     background-position: center center;
//     background-repeat: no-repeat;
//     background-attachment: fixed;
//     background-size: cover;
//     background-color: #1d3557;
// `

export {PlantContainerStyle, StoreWrapper}