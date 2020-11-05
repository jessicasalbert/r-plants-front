import React, { Component } from 'react'
import PlantsContainer from '../PlantsContainer/PlantsContainer'
import NavBar from '../NavBar/NavBar'
import Footer from '../Footer/Footer'

export class StoreFront extends Component {

    state = {
        plants: []
    }

    componentDidMount() {

    }

    render() {
        return (
            <>
                <NavBar />
                <PlantsContainer />
                <Footer />
            </>
        )
    }
}

export default StoreFront
