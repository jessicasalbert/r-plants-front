import React, { Component } from 'react'
import Plant from '../Plant/Plant'
import FilterSearch from '../FilterSearch/FilterSearch'
import {FilterWrapper, PlantContainerStyle, StoreWrapper} from './PlantContainerStyle'
import { Route, Switch } from "react-router-dom"
import DetailedPlant from '../DetailedPlant/DetailedPlant'
import Footer from '../Footer/Footer'

export class PlantsContainer extends Component {

    state = {
        plants: [],
        filter: false,
        search: ""
    }


    componentDidMount() {
        fetch(`http://localhost:3000/api/v1/items`)
        .then(res => res.json())
        .then(res => this.setState({plants: res}))
        .catch(console.log)
    }

    filterPlants = () => {
        let plants = this.state.plants
        if (this.state.filter) {
            plants = plants.filter( plant => plant.pet_friendly === true).filter(plant => plant.name.toLowerCase().includes(this.state.search.toLowerCase()))
        } else {
            plants = plants.filter(plant => plant.name.toLowerCase().includes(this.state.search.toLowerCase()))
        }
        return plants
    }

    filterClickHandler = () => {
        this.setState( (prev) => ({ filter: !prev.filter}))
    }


    renderPlants = () => {
        return this.filterPlants().map(plant => <Plant plant={plant} addToCart={this.props.addToCart} key={plant.id}/>)
    }

    searchHandler = (search) => {
        this.setState( {search: search})
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
                        <StoreWrapper>
                            <h1>Home ~ Houseplants</h1>
                            <FilterWrapper>
                                <FilterSearch filter={this.filterClickHandler} search={this.searchHandler}/>
                            </FilterWrapper>
                            <PlantContainerStyle>
                                {this.renderPlants()}
                            </PlantContainerStyle>
                        </StoreWrapper>
                        <Footer />
                        </>
                        )
                    }}/>
                </Switch>
            </>
        )
    }
}

export default PlantsContainer
