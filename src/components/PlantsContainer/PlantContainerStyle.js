import styled from 'styled-components'

const PlantContainerStyle = styled.section`
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    justify-content: center;
    align-content: flex-start;
    margin: 10px;
    padding: 10px;
    margin: 10px;
    @media (max-width: 900px) {
        flex-direction: row;
        align-content: flex-start;
    }
    @media (max-width: 800px) {
        flex-direction: column;
        align-content: center;
    }
}
`

const FilterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background-color: rgba(255, 255, 255, 0.8);
    height: 30vh;
`

export {PlantContainerStyle, FilterWrapper}