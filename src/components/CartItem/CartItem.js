import React, { Component } from 'react'
import {CartCard, CartImage} from './CartItemStyle'

export class CartItem extends Component {
    state = {
        size: "small"
    }
    render() {
        console.log(this.props.plant)
        return (
            <CartCard>
                <h4>{this.props.plant.name}</h4>
                <CartImage src={this.props.plant.image}></CartImage>
                <p>Size: {this.props.plant.size[0].toUpperCase() + this.props.plant.size.slice(1)}</p>
                <p>Price: ${this.props.plant.price[this.props.plant.size]}</p>
                <hr></hr>
            </CartCard>
        )
    }
}

export default CartItem

