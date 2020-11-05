import React, { Component } from 'react'
import PlantsContainer from '../PlantsContainer/PlantsContainer'
import NavBar from '../NavBar/NavBar'
import Welcome from "../Welcome/Welcome"
import Footer from '../Footer/Footer'

export class StoreFront extends Component {

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
                <Welcome />
                <PlantsContainer />
            </>
        )
    }
}

export default StoreFront
