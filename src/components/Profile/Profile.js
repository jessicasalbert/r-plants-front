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
            orders: res.orders
            //purchases: res.purchases
        })))
        //.then(console.log)

    }

    renderPurchases = () => {
        console.log(this.state.orders)
        return this.state.orders.map( order => {
            return(
            <tr>
                <td>{order.created_at}</td>
                <td>{order.total}</td>
                <td>{order.order_number}</td>
                <td>{order.purchases[0].item_name}</td>

            </tr>)
        })
    }

    render() {
        // console.log(this.state)
        return (
            <>

            {this.props.user ? 
            <>
                <h1>Order History for {this.props.user.name}</h1>
                <table>
                    <tr>
                        <th>Date of purchase</th>
                        <th>Total</th>
                        <th>Order #</th>
                    </tr>
                    {this.renderPurchases()}
                </table>
            </>
            :
            <Redirect to="/login"/>}
            
            </>
        )}
}

export default Profile
