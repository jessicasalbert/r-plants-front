import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'
import Footer from '../Footer/Footer'

export class Cart extends Component {
    state = {
        total: 0
    }
    renderCart = () => {
        return this.props.cart.map(item => (<CartItem plant={item} />))
    }

    render() {
        console.log(this.props.cart)
        return (
            <>
                {this.renderCart()}
                <Footer />
            </>
        )
    }
}

export default Cart
