import React, { Component, Suspense, lazy } from 'react';
import { PlantContainerStyle, StoreWrapper} from './PlantContainerStyle'
import { Route, Switch } from "react-router-dom"
const Plant = lazy(() => import('../Plant/Plant'));
const FilterSearch = lazy(() => import('../FilterSearch/FilterSearch'));
const DetailedPlant = lazy(() => import('../DetailedPlant/DetailedPlant'));
const Footer = lazy(() => import('../Footer/Footer'));

export class PlantsContainer extends Component {

    state = {
        plants: [],
        filter: false,
        search: ""
    }

    clearFilterSearch = () => {
        this.setState(() => ({filter: false, search: ""}))
    }

    componentDidMount() {
        fetch(`https://rplants-backend.herokuapp.com/api/v1/items`)
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
        return this.filterPlants().map(plant => <Plant plant={plant} key={plant.id} redirectToShop={this.props.redirectToShop} addToCart={this.props.addToCart}/>)
    }

    searchHandler = (search) => {
        this.setState( {search: search})
    }

    render() {
        return (
            <>
            <Suspense fallback={<div>Loading...</div>}>
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
                                <DetailedPlant clearFilterSearch={this.clearFilterSearch} key={plant.id} plant={plant} addToCart={this.props.addToCart}/> :
                                <h1>Loading</h1>
                            }
                            </>
                        )
                    }}/>
                    <Route path="/plants" render={() => {
                        return (
                        <>
                        <StoreWrapper>
                            <FilterSearch filter={this.filterClickHandler} searchTerm={this.state.search} isFiltered={this.state.filter} search={this.searchHandler}/>
                            <PlantContainerStyle>
                                {this.renderPlants()}
                            </PlantContainerStyle>
                        </StoreWrapper>
                        <Footer />
                        </>
                        )
                    }}/>
                    </Switch>
                </Suspense>
            </>
        )
    }
}

export default PlantsContainer
