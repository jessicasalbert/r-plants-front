import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'
import PayPal from '../PayPal/PayPal'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { CardElement } from '@stripe/react-stripe-js'
import { CheckoutContainer } from './CheckoutStyle'
import StripeCheckout from 'react-stripe-checkout';

import {CartWrapper, CartStyle } from '../Cart/CartStyle'


export class Checkout extends Component {

    state = {
        clicked : false,
        guestUserId: null
    }


    generateGuest = () => {
        const user = {
            name: "Guest",
            username: "Guest" + Math.round(Math.random() * 1000000).toString(),
            email: "Guest",
            password: "guest"
        }

        let options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "content-type": "application/json"
            },
            body: JSON.stringify({user})
        }

        fetch("http://localhost:3000/api/v1/users", options)
        .then(resp => resp.json())
        .then(data => {
            this.setState({ guestUserId: data.user.id })
            localStorage.setItem("token", data.jwt)
        })
        .catch(console.log)
        
    }

    purchaseHandler = () => {

        const orderNumber = Math.round(Math.random() * 1000000).toString()
        const id = this.props.user? this.props.user.id : this.state.guestUserId
        const body = {
                    order_number: orderNumber,
                    user_id: id,
                    total: this.props.total.toString()
            }

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
            for (const item of this.props.cart) {
                this.postPurchases(item, res.id)
            }
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
            if (this.state.guestUserId) {
                localStorage.removeItem("token")
                this.props.clearGuestUser()
            }
            
            this.props.redirectToSuccess(res.order_number)
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
        // .then(console.log)

    }

    renderCart = () => {
        return this.props.cart.map(item => (<CartItem plant={item} key={this.props.cart.indexOf(item)} />))
    }

    clickHandler = () => {
        if (!this.props.user) {
            this.generateGuest()
        }
        this.setState( (prev) => ({clicked: !prev.clicked}))
        
    }

    handleToken = (token, addresses) => {
        console.log({token, addresses})
    }


    render() {
        return (

            <CartWrapper>
            <h4>Checkout</h4>
                <CartStyle>
                    {this.renderCart()}
                    {/* <h1 >Enter Details</h1>
                    {this.state.clicked ? 
                    <form>
                        <input type="number" placeholder="Enter CC"/>
                        <input type="text" placeholder="Enter more info"/>
                        <button onClick={this.purchaseHandler}>Purchase</button>
                    </form> 
                    : null
                    }
                    <CheckoutContainer>
                    <StripeCheckout 
                    stripeKey="pk_test_51Hm4N8JoLkskNX574EcbxBPK2nXQZQfCyOskJAJFVeXS6lt8rtPgxmDG3XPhZ5m0KHuUqHLkNz8Jq4rRDrNt8scv00l8gmEYJn"
                    token={this.handleToken}
                    billingAddress
                    shippingAddress
                    amount={this.props.total * 100}
                    ComponentClass="div"
                    /> */}
                    <PayPal amount={this.props.total} purchaseHandler={this.purchaseHandler}/>
                    {/* <button onClick={this.purchaseHandler}>Purchase</button> */}
                    {/* </div> */}
                </CartStyle>
            </CartWrapper>

        )
    }
}

export default Checkout


{/* <h1 onClick={this.clickHandler}>Enter Details</h1>
{this.state.clicked ? 
<form>
    <input type="number" placeholder="Enter CC"/>
    <input type="text" placeholder="Enter more info"/>
    
    <button onClick={this.purchaseHandler}>Purchase</button>
</form> 
: null
} */}