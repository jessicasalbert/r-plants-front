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
                Pet-Friendly: <img alt="pet friendliness" src={this.props.isFiltered ? "https://svgsilh.com/svg/155322.svg" : "https://cdn.onlinewebfonts.com/svg/img_411676.png"}/>
            </FilterStyle>
        )
    }
}

export default Filter
