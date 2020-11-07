import React, { Component } from 'react'
import {MapStyle} from './WelcomeStyle'
import worldGeoJSON from 'geojson-world-map';
import { MapContainer, GeoJSON, Marker, Popup, TileLayer } from 'react-leaflet'

export class MapView extends Component {
    render() {
        return (
            <MapStyle>
                <MapContainer center={[40.7628, -18.9800]} zoom={1.75}>
                    <GeoJSON
                        data={worldGeoJSON}
                        style={() => ({
                            color: 'rgba(100, 114, 97, 1)',
                            weight: 0.7,
                            fillColor: "rgba(149, 176, 113, 1)",
                            fillOpacity: 1,
                        })}/>
                        <Marker key="salt" position={["40.7628","-18.9800"]}/>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                </MapContainer>
            </MapStyle>
        )
    }
}

export default MapView
