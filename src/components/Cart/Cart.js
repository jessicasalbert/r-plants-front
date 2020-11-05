import React, { Component } from 'react'

export class Cart extends Component {

    renderCart = () => {
        return this.props.cart.map(item => <h1>{item.name}</h1>)
    }
    render() {
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}

export default Cart
