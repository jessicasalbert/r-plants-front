import React, { Component } from 'react'
import {PlantStyle, PlantImage, Title} from './PlantSyle'
import { NavLink } from 'react-router-dom';

export class Plant extends Component {

    
    render() {
        return (
            <NavLink to={`/plants/${this.props.plant.id}`}>
            <PlantStyle>
                <PlantImage onMouseOver={e => e.target.src = this.props.plant.image2} onMouseOut={e => e.target.src = this.props.plant.image} src={this.props.plant.image}></PlantImage>
                <Title>{this.props.plant.name}</Title>
            </PlantStyle>
            </NavLink>
        )
    }
}

export default Plant
