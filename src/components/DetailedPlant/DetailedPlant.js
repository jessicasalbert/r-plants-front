import React, { Component } from 'react'
import {Header, Section} from './DetailedPlantStyle'

export class DetailedPlant extends Component {
    localClickHandler = () => {
        this.props.addToCart(this.props.plant)
    }
    render() {
        return (
            <Section>
                <Header>{this.props.plant.name}</Header>
                <img src={this.props.plant.image}/>
                <button onClick={this.localClickHandler}> Add to cart </button>
            </Section>
        )
    }
}

export default DetailedPlant
