import styled from 'styled-components'
import L from 'leaflet'


const WelcomeStyle = styled.h1`
    font-size: 150px;
`

const BlockStyle = styled.section`
    height: 50vh;
`

const LandingImg = styled.img`

`

const MapStyle = styled.div`
    pointer-events: none;
`

const iconPlant = new L.Icon({
    iconUrl: 'https://i.ibb.co/6FHrspB/redresize.png',
    iconSize: [39.6, 45],
    // className: 'leaflet-div-icon'
})

export {WelcomeStyle, BlockStyle, MapStyle, iconPlant, LandingImg}