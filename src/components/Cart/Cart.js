import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import CartWrapper from './CartStyle'


export class Cart extends Component {
    state = {
        items: [
 
        ]
    }


    renderCart = () => {
        return this.props.cart.map(item => (<CartItem plant={item} key={this.props.cart.indexOf(item)} />))
    }

    // purchaseHandler = () => {
    //     //post request to /orders 
    //     //for each item in cart, 
    //         //post request to purchases 
    //     const orderNumber = Math.round(Math.random() * 1000000).toString()
    //     const body = {
    //                 order_number: orderNumber,
    //                 user_id: this.props.user.id,
    //                 total: this.props.total.toString()
    //         }
    //     console.log(body)

    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "content-type" : "application/json",
    //             accepts: "application/json",
    //             Authorization: `Bearer ${localStorage.getItem("token")}` 
    //         },
    //         body: JSON.stringify(body)
    //     }
    //     fetch('http://localhost:3000/api/v1/orders', options)
    //     .then(res => res.json())
    //     .then(res => {
    //         //console.log(res)
    //         for (const item of this.props.cart) {
    //             this.postPurchases(item, res.id)
    //         }
    //         localStorage.removeItem("cart")
    //         localStorage.removeItem("total")
    //     })
    // }


    // postPurchases = (item, order) => {
    //     const body = {
    //         item_id: item.id,
    //         price: item.price[item.size],
    //         size: item.size,
    //         quantity: item.quantity,
    //         order_id: order
    //     }

    //     console.log(body)
    //     const options = {
    //         method: "POST",
    //         headers: {
    //             "content-type" : "application/json",
    //             accepts: "application/json",
    //             Authorization: `Bearer ${localStorage.getItem("token")}` 
    //         },
    //         body: JSON.stringify(body)
    //     }
    //     fetch('http://localhost:3000/api/v1/purchases', options)
    //     .then(res => res.json())
    //     .then(console.log)

    // }


    render() {
        console.log(this.props.user ? this.props.user.id : "none")
        return (
            <>
            <CartWrapper>
                    {this.props.cart.length > 0 

                    ?

                    <> 
                    {this.renderCart()}
                    <h1>Total: ${this.props.total}</h1>
                    {/* <button onClick={this.purchaseHandler}>Purchase</button> */}

                    {
                        this.props.user ? 
                        <Link to="/checkout">Check out</Link>
                        :
                        <>
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/checkout">Check out as guest</Link>
                        </>
                    }
                    </>

                    : 

                    <h1>No items to display</h1>}
            </CartWrapper>
            <Footer />
            </>
        )
    }
}

export default Cart
