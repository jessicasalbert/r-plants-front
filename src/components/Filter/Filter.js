import React, { Component } from 'react'

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
            <div onClick={this.props.filter}>
                <p>Pet-Friendly:</p>
                <img alt="pet friendliness" src={this.state.clicked ? "https://svgsilh.com/svg/155322.svg": "https://www.svgrepo.com/show/133518/pet-friendly.svg"}/>
            </div>
        )
    }
}

export default Filter
