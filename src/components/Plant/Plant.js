import React, { Component } from 'react'
import {PlantStyle, PlantImage} from './PlantSyle'
import { NavLink } from 'react-router-dom';

export class Plant extends Component {

    localClickHandler = () => {
        this.props.addToCart(this.props.plant)
    }
    render() {
        return (
            <>
            <PlantStyle>
            <NavLink to={`/plants/${this.props.plant.id}`}>{this.props.plant.name}</NavLink>
                <PlantImage src={this.props.plant.image}></PlantImage>
                <button onClick={this.localClickHandler}> Add to cart </button>
            </PlantStyle>
            </>
        )
    }
}

export default Plant
