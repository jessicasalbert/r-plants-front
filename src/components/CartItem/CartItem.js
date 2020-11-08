import React, { Component } from 'react'
import {CartCard, CartImage} from './CartItemStyle'

export class CartItem extends Component {
    state = {
        size: "small",
        quantity: 1
    }

    

    updateQuantity = (e) => {
        let quantity = e.target.value
        if (quantity > 50) {
            quantity = 50
        }
        this.setState({ quantity: e.target.value})
    }

    render() {
        return (
            <CartCard>
                <h4>{this.props.plant.name}</h4>
                <CartImage src={this.props.plant.image}></CartImage>
                <p>Size: {this.props.plant.size[0].toUpperCase() + this.props.plant.size.slice(1)}</p>
                <p>Quantity: {this.props.plant.quantity}</p>
                <p>Price: ${this.props.plant.price[this.props.plant.size] * this.props.plant.quantity}</p>


                <hr></hr>
            </CartCard>
        )
    }
}

export default CartItem

