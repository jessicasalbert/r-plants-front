import React, { Component } from 'react'
import FilterSearch from '../components/FilterSearch'
import PlantsContainer from './PlantsContainer'

export class StoreFront extends Component {
    render() {
        return (
            <div>
                <PlantsContainer />
            </div>
        )
    }
}

export default StoreFront
