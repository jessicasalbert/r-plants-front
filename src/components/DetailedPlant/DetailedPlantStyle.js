import styled from 'styled-components'

const Page = styled.section`
    

`

const Header = styled.h1`
    color: #647261;
`

const Details = styled.section`
    
`

const TopDetails = styled.section`
    border: 2px black solid;
    display: flex;
    flex-flow: row wrap;
    flex-direction: row;
    align-content: flex-start;
    background-color: rgba(100, 114, 97, 0.3)
`

const Photo = styled.section`
    background-color: rgba(147, 141, 123, 0.5);
`

const BottomDetails = styled.section`

`



export {Header, TopDetails, BottomDetails, Page, Details, Photo}