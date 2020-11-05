import React, { Component } from 'react'
import PlantsContainer from '../PlantsContainer/PlantsContainer'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'
import {plants} from '../../db'

export class StoreFront extends Component {

    state = {
        plants: plants,
        cart: []
    }

    // componentDidMount() {
    //     fetch()
    //     .then()
    //     .then()
    //     .catch()
    // }

    render() {
        // console.log(this.state.plants)
        return (
            <>
                <PlantsContainer plants={this.state.plants} addToCart={this.props.addToCart}/>
            </>
        )
    }
}

export default StoreFront
