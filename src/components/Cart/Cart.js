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

    // setQuant = (item, quantity) => {
    //     const index = this.state.items.findIndex( el => el.id === item.id )
    //     if (index !== -1) {

    //         const newItems = [...this.state.items]
    //         newItems[index]['quantity'] = quantity
    //         this.setState( () => ({ items: newItems} ), () => (localStorage.setItem("cart", JSON.stringify(this.state.cart))))
    //     }
        
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
