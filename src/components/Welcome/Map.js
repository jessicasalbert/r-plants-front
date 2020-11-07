import React, { Component } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from 'leaflet'
import MapStyle from './MapStyle'

export class MapCont extends Component {
    render() {
        return (
            <>
                <MapStyle>
                <MapContainer center={[40.7628, -73.9800]} zoom={5}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                </MapContainer>
                </MapStyle>
            </>
        )
    }
}

export default MapCont
