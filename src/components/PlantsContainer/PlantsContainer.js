import React, { Component } from 'react'
import Plant from '../Plant/Plant'
import PlantContainerStyle from './PlantContainerStyle'

export class PlantsContainer extends Component {

    renderPlants = () => {
        let plants = this.props.plants
        return plants.map(plant => <Plant plant={plant} addToCart={this.props.addToCart} key={plant.id}/>)
    }

    render() {
        return (
            <PlantContainerStyle>
                {this.renderPlants()}
            </PlantContainerStyle>
        )
    }
}

export default PlantsContainer
