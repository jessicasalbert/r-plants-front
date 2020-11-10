import React, { Component } from 'react'
import FilterStyle from './FilterStyle'

export class Filter extends Component {

    state = {
        clicked: false
    }

    //need to fix
    localClickHandler = () => {
        this.setState((prev) => ({ clicked: !prev.clicked}, this.props.filter()))
        
    }

    

    render() {
        return (
            <FilterStyle onClick={this.props.filter}>
                Pet-Friendly: <img alt="pet friendliness" src={this.state.clicked ? "https://svgsilh.com/svg/155322.svg" : "https://www.svgrepo.com/show/133518/pet-friendly.svg"}/>
            </FilterStyle>
        )
    }
}

export default Filter
