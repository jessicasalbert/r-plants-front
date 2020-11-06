import styled from 'styled-components'

const PlantStyle = styled.div`
    h3 {
        font-size: 100%;
    }
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    transition: 0.3s;
    max-width: 20vw;
    max-height: 100%;

    @media (max-width: 900px) {
        h3 {
            font-size: 100%;
        }
        max-width: 26vw;
        max-height: 100%;
    }
    @media (max-width: 800px) {
            h3 {
            font-size: 100%;
        }
        max-width: 50vw;
        max-height: 100%;
    }

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`   
const PlantImage = styled.img`
    max-height: 100%;
    max-width: 100%;
    display: block;
}
`

export {PlantImage, PlantStyle}
