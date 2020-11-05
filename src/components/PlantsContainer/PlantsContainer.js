import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import Plant from '../Plant/Plant'
import PlantContainerStyle from './PlantContainerStyle'

export class PlantsContainer extends Component {

    renderPlants = () => {
        let plants = this.props.plants
        return plants.map(plant => <Plant plant={plant} addToCart={this.props.addToCart} key={plant.id}/>)
    }

    render() {
        // when to render plants
            // right time to render the "index" == /plants

        //when to render a single plant
            // "show" ==/plants/:id
        return (
            <PlantContainerStyle>
                {this.renderPlants()}
            </PlantContainerStyle>
        )
    }
}

export default PlantsContainer
