import React from 'react'
import MapView from './MapView'
import About from './About'
import LandingPhoto from './LandingPhoto'
import {WelcomeStyle, BlockStyle} from './WelcomeStyle'

export default function Welcome(props) {
    return (
        <WelcomeStyle>
            <BlockStyle></BlockStyle>
            <hr></hr>
            <BlockStyle><MapView plants={props.plants} /></BlockStyle>
            <hr></hr>
            <BlockStyle></BlockStyle>
            <hr></hr>
        </WelcomeStyle>
    )
}
