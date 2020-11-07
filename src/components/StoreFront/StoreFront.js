import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import PlantsContainer from '../PlantsContainer/PlantsContainer'
import NavBar from '../NavBar/NavBar'
import Welcome from "../Welcome/Welcome"
import Footer from '../Footer/Footer'

export class StoreFront extends Component {


    render() {
        return (
            <section className="footerpage">
                <Welcome />
                <PlantsContainer />
                <Footer />
            </section>
        )
    }
}

export default StoreFront
