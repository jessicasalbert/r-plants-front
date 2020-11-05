import React, { Component } from 'react'
import {PlantStyle, PlantImage} from './PlantSyle'

export class Plant extends Component {
    render() {
        return (
            <PlantStyle>
                {this.props.plant.name}
                <PlantImage src={this.props.plant.image}></PlantImage>
            </PlantStyle>
        )
    }
}

export default Plant
