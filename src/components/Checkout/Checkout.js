import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'

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

    purchaseHandler = (e) => {

        e.preventDefault()
    
        const orderNumber = Math.round(Math.random() * 1000000).toString()
        const id = this.props.user? this.props.user.id : this.state.guestUserId
        const body = {
                    order_number: orderNumber,
                    user_id: id,
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
            for (const item of this.props.cart) {
                this.postPurchases(item, res.id)
            }
            localStorage.removeItem("cart")
            localStorage.removeItem("total")
            if (this.state.guestUserId) {
                localStorage.removeItem("token")
                this.props.clearGuestUser()
            }
            this.props.clearCart()
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
