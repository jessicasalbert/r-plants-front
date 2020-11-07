import React, { Component } from 'react'
import {MapStyle} from './WelcomeStyle'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

export class MapView extends Component {
    render() {
        return (
            <MapStyle>
                <MapContainer center={[40.7628, -73.9800]} zoom={15}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                </MapContainer>
            </MapStyle>
        )
    }
}

export default MapView
