import styled from 'styled-components'

const PlantStyle = styled.div`
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    transition: 0.3s;
    max-width: 20vw;
    max-height: 100%;

    @media (max-width: 900px) {
        max-width: 26vw;
        max-height: 100%;
    }
    @media (max-width: 800px) {
        max-width: 50vw;
        max-height: 100%;
    }

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`   
const PlantImage = styled.img`
    background: none;
    max-height: 100%;
    max-width: 100%;
    display: block;
}
`

const Title = styled.h3`
    font-size: 100%;
    text-align: center;
`

export {PlantImage, PlantStyle, Title}
