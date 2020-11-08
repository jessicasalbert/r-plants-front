import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'
import Footer from '../Footer/Footer'

export class Cart extends Component {
    state = {
        items: [
 
        ]
    }


    renderCart = () => {
        return this.props.cart.map(item => (<CartItem plant={item} key={this.props.cart.indexOf(item)} />))
    }

    // calculateTotal = () => {
    //     this.props.
    // }

    render() {
        return (
            <>
                <section className="footerpage">
                    {this.props.cart.length > 0 ? this.renderCart() : <h1>No items to display</h1>}
                    {/* <h2>Total: ${this.sta}</h2> */}
                    <h1>Total: ${this.props.total}</h1>
                    <button>Purchase</button>
                    <Footer />
                </section>
                
            </>
        )
    }
}

export default Cart
