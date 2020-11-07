import React from 'react'
import MapView from './MapView'
import About from './About'
import LandingPhoto from './LandingPhoto'
import {WelcomeStyle, BlockStyle} from './WelcomeStyle'

export default function Welcome() {
    return (
        <WelcomeStyle>
            <BlockStyle><MapView /></BlockStyle>
            <hr></hr>
            <BlockStyle><LandingPhoto /></BlockStyle>
            <hr></hr>
            <BlockStyle><About /></BlockStyle>
            <hr></hr>
        </WelcomeStyle>
    )
}
