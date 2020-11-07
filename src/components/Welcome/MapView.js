import React, { Component } from 'react'
import {MapStyle} from './WelcomeStyle'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export class MapView extends Component {
    render() {
        return (
            <MapStyle>
                <MapContainer></MapContainer>
            </MapStyle>
        )
    }
}

export default MapView
