import React, { Component } from 'react'
import PlantStyle from './PlantSyle'

export class Plant extends Component {
    render() {
        return (
            <PlantStyle>
                {this.props.plant.name}
            </PlantStyle>
        )
    }
}

export default Plant
