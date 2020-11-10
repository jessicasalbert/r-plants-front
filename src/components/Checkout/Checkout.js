import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'

export class Checkout extends Component {

    state = {
        clicked : false
    }

    purchaseHandler = (e) => {
        //post request to /orders 
        //for each item in cart, 
            //post request to purchases 
        e.preventDefault()
        const orderNumber = Math.round(Math.random() * 1000000).toString()
        const body = {
                    order_number: orderNumber,
                    user_id: this.props.user.id,
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
        .then(res => {
            //console.log(res)
            for (const item of this.props.cart) {
                this.postPurchases(item, res.id)
            }
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
        })
    }


    postPurchases = (item, order) => {
        const body = {
            item_id: item.id,
            price: item.price[item.size],
            size: item.size,
            quantity: item.quantity,
            order_id: order
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
        fetch('http://localhost:3000/api/v1/purchases', options)
        .then(res => res.json())
        .then(console.log)

    }

    renderCart = () => {
        return this.props.cart.map(item => (<CartItem plant={item} key={this.props.cart.indexOf(item)} />))
    }

    clickHandler = () => {
        this.setState( (prev) => ({clicked: !prev.clicked}))
    }


    render() {
        return (
            <>
                {this.renderCart()}
                <h1 onClick={this.clickHandler}>Enter Details</h1>
                {this.state.clicked ? 
                <form>
                    <input type="number" placeholder="Enter CC"/>
                    <input type="text" placeholder="Enter more info"/>
                    <button onClick={this.purchaseHandler}>Purchase</button>
                </form> 
                : null
                }
            </>
        )
    }
}

export default Checkout
