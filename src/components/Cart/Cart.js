import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'
import Footer from '../Footer/Footer'

export class Cart extends Component {
    state = {
        items: [
            // {
            //     id:
            //     name:
            //     size: 
            //     quantity:
            // },
            // {}
        ]
    }
    renderCart = () => {
        return this.props.cart.map(item => (<CartItem key={this.props.cart.indexOf(item)} plant={item} />))
    }

    render() {
        return (
            <section className="footerpage">
                {this.props.cart.length > 0 ? this.renderCart() : <h1>No items to display</h1>}
                <Footer />
            </section>
        )
    }
}

export default Cart
