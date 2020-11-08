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

    // consolidateCart = () => {
    //     const newCart = [];
    //     for (const item of this.props.cart) {
    //         let index = newCart.findIndex( cartItem => cartItem.id === item.id && cartItem.size === item.size );
    //         if (index !== -1) {
    //             newCart[index].quantity = parseInt(newCart[index].quantity) + parseInt(item.quantity)
    //             newCart[index].price = parseFloat(newCart[index].price) + parseFloat(item.price)
    //         } else {
    //             newCart.push(item)
    //         }
    //     }
    //     return newCart
    // }

    renderCart = () => {
        return this.props.cart.map(item => (<CartItem plant={item} key={this.props.cart.indexOf(item)} />))
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
