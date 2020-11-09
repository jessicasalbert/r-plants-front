import React, { Component } from 'react'
import { MapStyle, iconPlant } from './WelcomeStyle'
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
        console.log(this.props.plants)
        return (
            <MapStyle>
                <MapContainer center={[30, -15]} maxZoom={3.5} minZoom={1.75}  zoom={2}>
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
                
                
                {this.props.plants ?
                this.props.plants.map(plant => (
                    <>
                        <Marker icon={iconPlant} key={plant.id} position={[plant.latitude, plant.longitude]}>
                        <Popup>{plant.name} <br/><img src={plant.image}/><br/><button>See more</button></Popup></Marker>
                    </>
                ))
                :
                <h1>Loading</h1>
            }


                
                </MapContainer>
            </MapStyle>
        )
    }
    
}

export default MapView
