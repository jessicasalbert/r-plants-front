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

    purchaseHandler = () => {
        //post request to /orders 
        //for each item in cart, 
            //post request to purchases 
        const orderNumber = Math.round(Math.random() * 1000000).toString()
        const body = {
                    order_number: orderNumber,
                    total: this.props.total.toString()
            }
        console.log(body)

        const options = {
            method: "POST",
            headers: {
                "content-type" : "application/json",
                accepts: "application/json",
                Authorization: `Bearer ${localStorage.getItem("token")}` 
            },
            body: JSON.stringify(body)
        }
        fetch('http://localhost:3000/api/v1/orders', options)
        .then(res => res.json())
        .then(console.log)
    }



    render() {
        return (
            <>
                <section className="footerpage">
                    {this.props.cart.length > 0 ? this.renderCart() : <h1>No items to display</h1>}
                    <h1>Total: ${this.props.total}</h1>
                    <button onClick={this.purchaseHandler}>Purchase</button>
                    <Footer />
                </section>
                
            </>
        )
    }
}

export default Cart
