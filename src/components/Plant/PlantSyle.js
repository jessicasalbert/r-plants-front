import styled from 'styled-components'

const PlantStyle = styled.div`
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    transition: 0.3s;
    width: 175px;
    height: 175px;
    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
`   

const PlantImage = styled.img`
    max-width: 100px;
    display: block;
`

export {PlantImage, PlantStyle}
