import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Purchases from '../../components/Purchases/Purchases'
import {PurchaseWrapper} from './ProfileStyle'

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
            orders: res.orders.reverse(),
            // purchases: res.purchases
        })))
        .catch(console.log)
    }


    renderPurchases = () => {
        return this.state.orders.slice(1).map( order =>  <Purchases order={order} />)
    }
    
    renderLatestPurchase = () => {

    }

    render() {
        console.log(this.state.orders.length)
        return (
            <>

            {this.props.user ? 
            <PurchaseWrapper>
                <h1>Order History for {this.props.user.name}</h1>

                {this.state.orders.length > 0 ? 
                <>
                <h2>Latest purchase...</h2>
                <Purchases order={this.state.orders[0]}/>
                </>
                : <h2>No orders to show</h2>
                }
                <hr/>
                <table>  
                {this.renderPurchases()}
                </table>
            </PurchaseWrapper>
            :
            <Redirect to="/login"/>}
            
            </>
        )}
}

export default Profile
