import React from 'react'
import { MapStyle, iconPlant } from './WelcomeStyle'
import worldGeoJSON from 'geojson-world-map';
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
                {this.props.plants 
                ?
                this.props.plants.map(plant => (
                    <React.Fragment key={plant.id}>
                        <Marker icon={iconPlant} position={[plant.latitude, plant.longitude]}>
                        <Popup>{plant.name} <br/><img alt={plant.name} src={plant.image}/><br/></Popup></Marker>
                    </React.Fragment>
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
