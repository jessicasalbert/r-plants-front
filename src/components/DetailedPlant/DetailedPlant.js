import React, { Component } from 'react'

export class DetailedPlant extends Component {
    render() {
        return (
            <div>
                <h3>{this.props.plant.name}</h3>
            </div>
        )
    }
}

export default DetailedPlant
