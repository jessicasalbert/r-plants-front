import React from 'react'
import MapView from './MapView'
import About from './About'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import {WelcomeStyle, TopWrapper, BottomWrapper, MapWrapper, StoreButton} from './WelcomeStyle'

export default function Welcome(props) {
    return (
        <WelcomeStyle>
            <TopWrapper>
                <p><span>welcome</span></p>
                {/* <h1><span>Welcome to</span></h1> */}
                {/* <h1><span>r P l a n t s</span></h1> */}
                <section className="fair-trade">
                <h3><span>Our environmentally friendly plants are grown on farms that follow</span></h3>
                <h3><span><td onClick={()=> window.open("https://www.fairtradecertified.org/", "_blank")}><b>socially responsible</b></td> practices to help better the world we share.</span></h3>
                </section>
                <Link to="/plants"><StoreButton><p className="button-text">enter</p></StoreButton></Link>
            </TopWrapper>

            <MapWrapper><MapView plants={props.plants} /></MapWrapper>

            <BottomWrapper><About /></BottomWrapper>
            <section className="footerpage"><Footer /></section>
        </WelcomeStyle>
    )
}
