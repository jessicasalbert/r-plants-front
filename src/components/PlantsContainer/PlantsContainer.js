import React, { Component } from 'react'
import Plant from '../Plant/Plant'
import PlantContainerStyle from './PlantContainerStyle'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import DetailedPlant from '../DetailedPlant/DetailedPlant'
//import {plants} from '../../db'

export class PlantsContainer extends Component {

    state = {
        plants: []
    }

    componentDidMount() {
        fetch(`http://localhost:3000/api/v1/items`)
        .then(res => res.json())
        .then(res => this.setState({plants: res}))
    }


    renderPlants = () => {
        let plants = this.state.plants
        return plants.map(plant => <Plant plant={plant} addToCart={this.props.addToCart} key={plant.id}/>)
    }

    render() {
        return (
            <>
                <Switch>
                    <Route path="/plants/:id" render={(routerProps) =>  {
                        let id = parseInt(routerProps.match.params.id)
                        let plant;
                        if (this.state.plants.length > 0) {
                            plant = this.state.plants.find( plant => plant.id === id)
                        }
                        return (
                            <>
                            {
                                this.state.plants.length > 0 ? 
                                <DetailedPlant key={plant.id} plant={plant} addToCart={this.props.addToCart}/> :
                                <h1>Loading</h1>
                            }
                            </>
                        )
                    }}/>
                    <Route path="/plants" render={() => {
                        return (
                        <>
                        <PlantContainerStyle>
                            {this.renderPlants()}
                        </PlantContainerStyle>
                        </>
                        )
                    }}/>
                </Switch>
            </>
        )
    }
}

export default PlantsContainer
