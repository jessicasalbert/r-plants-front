import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

export class Profile extends Component {

    state = {
        orders: [],
        purchases: []
    }

    componentDidMount() {
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}` 
            }
        }
        fetch(`http://localhost:3000/api/v1/users/${this.props.user.id}`, options)
        .then(res => res.json())
        .then(res => (this.setState({
            orders: res.orders,
            purchases: res.purchases
        })))

    }

    renderPurchases = () => {
        console.log(this.state.purchases)
        return this.state.purchases.map( purchase => {
            return(
            <tr>
                <td>{purchase.item_id}</td>
                <td>{purchase.quantity}</td>
                <td>{purchase.size}</td>
                <td>{purchase.price}</td>
                <td>{purchase.created_at}</td>
            </tr>)
        })
    }

    render() {
        console.log(this.state)
        return (
            <>

            {this.props.user ? 
            <>
                <h1>Order History for {this.props.user.name}</h1>
                <table>
                    {this.renderPurchases()}
                </table>
            </>
            :
            <Redirect to="/login"/>}
            
            </>
        )}
}

export default Profile
