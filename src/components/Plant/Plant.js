import React, { Component } from 'react'
import {PlantStyle, PlantImage} from './PlantSyle'

export class Plant extends Component {

    localClickHandler = () => {
        this.props.addToCart(this.props.plant)
    }
    render() {
        return (
            <PlantStyle>
                {this.props.plant.name}
                <PlantImage src={this.props.plant.image}></PlantImage>
                <button onClick={this.localClickHandler}> Add to cart </button>
            </PlantStyle>
        )
    }
}

export default Plant
