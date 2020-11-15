import React from 'react'
import MapView from './MapView'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import {WelcomeStyle, TopWrapper, MapWrapper, StoreButton} from './WelcomeStyle'

export default function Welcome(props) {
    return (
        <>
        <WelcomeStyle>
            <TopWrapper>
                <p><span>welcome</span></p>
                <div className="fair-trade">
                <h3><span>Our environmentally friendly plants are grown on farms that follow</span></h3>
                <h3><span><a href="https://www.fairtradecertified.org/" onClick={()=> window.open("https://www.fairtradecertified.org/", "_blank")}><b>socially responsible</b></a> practices to help better the world we share.</span></h3>
                </div>
                <Link to="/plants"><StoreButton><p className="button-text">enter</p></StoreButton></Link>
            </TopWrapper>
            <MapWrapper key="map"><MapView plants={props.plants} /></MapWrapper>
        </WelcomeStyle>
        <Footer />
        </>
    )
}
