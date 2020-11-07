import React, { Component } from 'react'
import {CartCard, CartImage} from './CartItemStyle'

export class CartItem extends Component {
    state = {
        size: "small"
    }
    render() {
        return (
            <CartCard>
                <h4>{this.props.plant.name}</h4>
                <CartImage src={this.props.plant.image}></CartImage>
                <p>Size: {this.state.size}</p>
                <p>Price: {this.props.plant.price[this.state.size]}</p>
                <hr></hr>
            </CartCard>
        )
    }
}

export default CartItem

