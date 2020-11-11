import styled from 'styled-components'

export const SearchStyle = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const Heading = styled.h1`
    color: rgba(255, 255, 255, 0.7);
    font-size: 15vw;
    opacity: 1;
    margin-left: 13vw;
    margin-bottom: 2vh;
`

export const FilterWrapper = styled.div`
box-shadow: 8px 8px 8px -6px rgba(0,0,0,.5);
    display: relative;
    height: 100%;
    margin: auto;
    max-width: 30vw;
    background-color: rgba(255, 255, 255, 0.75);
    border-radius: 10px;
    ${'' /* flex-direction: row;
    justify-content: center;
    align-items: center; */}
    padding: 10px;
    @media (max-width: 900px) {
        max-width: 60vw;
    }
`