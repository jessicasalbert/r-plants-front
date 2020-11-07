import React from 'react'
import MapCont from './Map'
import About from './About'
import LandingPhoto from './LandingPhoto'
import {WelcomeStyle, BlockStyle} from './WelcomeStyle'

export default function Welcome() {
    return (
        <WelcomeStyle>
            <BlockStyle><MapCont/></BlockStyle>
            <hr></hr>
            <BlockStyle><LandingPhoto /></BlockStyle>
            <hr></hr>
            <BlockStyle><About /></BlockStyle>
            <hr></hr>
        </WelcomeStyle>
    )
}
