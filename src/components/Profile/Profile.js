import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Purchases from '../../components/Purchases/Purchases'

export class Profile extends Component {

    state = {
        orders: [],
        purchases: [],
        clicked: null
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
            // purchases: res.purchases
        })))
        //.then(console.log)
    }


    renderPurchases = () => {
        console.log(this.state.orders)
        return this.state.orders.map( order =>  <Purchases order={order} />)
    }

    render() {
        // console.log(this.state)
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
