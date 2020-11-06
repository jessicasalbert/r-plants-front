import React, { Component } from 'react'
import {PlantStyle, PlantImage} from './PlantSyle'
import { NavLink } from 'react-router-dom';

export class Plant extends Component {

    
    render() {
        return (
            <NavLink to={`/plants/${this.props.plant.id}`}>
            <PlantStyle>
                <h3>{this.props.plant.name}</h3>
                <PlantImage src={this.props.plant.image}></PlantImage>
            </PlantStyle>
            </NavLink>
        )
    }
}

export default Plant
