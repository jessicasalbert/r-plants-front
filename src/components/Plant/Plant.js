import React, { Component } from 'react'
import {PlantStyle, PlantImage} from './PlantSyle'
import { NavLink } from 'react-router-dom';

export class Plant extends Component {

    
    render() {
        return (
            <>
            <PlantStyle>
            <NavLink to={`/plants/${this.props.plant.id}`}>{this.props.plant.name}</NavLink>
                <PlantImage src={this.props.plant.image}></PlantImage>
            </PlantStyle>
            </>
        )
    }
}

export default Plant
