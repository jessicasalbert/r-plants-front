import React, { Component } from 'react'
import {MapStyle, iconPlant} from './WelcomeStyle'
import worldGeoJSON from 'geojson-world-map';
import { coordinates } from '../../db'
import { MapContainer, GeoJSON, Marker, Popup, TileLayer } from 'react-leaflet'

class MapView extends React.Component {

    
    state = {
        active: null
    }

    setActivePlant = (plant) => {
        this.setState({ active: plant })
    }

    render() {
        return (
            <MapStyle>
                <MapContainer center={[40, -0]} zoom={1.75}>
                    <GeoJSON
                        data={worldGeoJSON}
                        style={() => ({
                            color: 'rgba(100, 114, 97, 1)',
                            weight: 0.7,
                            fillColor: "rgba(149, 176, 113, 1)",
                            fillOpacity: 0.3,
                        })}/>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'/>
                
                {coordinates.map(plant => (
                    <>
                        <Marker icon={iconPlant} key={plant.id} position={[plant.latitude, plant.longitude]}>
                        <Popup>{plant.name} <br /> Easily customizable.<br/><img src={plant.image}/></Popup></Marker>
                    </>
                ))}


                
                </MapContainer>
            </MapStyle>
        )
    }
    
}

export default MapView
