import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Purchases from '../../components/Purchases/Purchases'
import {PurchaseWrapper, OrderHistory, LastOrderTitle, LastOrder, NoPurchases, Heading, PurchaseColumn, PrevOrderTitle} from './ProfileStyle'
import Footer from '../Footer/Footer'

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
        fetch(`http://rplants-backend.herokuapp.com/api/v1/users/${this.props.user.id}`, options)
        .then(res => res.json())
        .then(res => (this.setState({
            orders: res.orders.reverse(),
            // purchases: res.purchases
        })))
        .catch(console.log)
    }


    renderPurchases = () => {
        return this.state.orders.slice(1).map( order =>  <Purchases key={order.id} order={order} />)
    }
    
    renderLatestPurchase = () => {
        return <Purchases className="latest-order" order={this.state.orders[0]}/>
    }

    render() {
        // console.log(this.state.orders.length)
        return (
            <>

            {this.props.user ? 
            <>
            <PurchaseWrapper>
            <Heading>profile</Heading>
            <PurchaseColumn>
                {this.state.orders.length > 0 ? 
                <>
                <OrderHistory>Order History for {this.props.user.name}</OrderHistory>
                <LastOrderTitle>Your latest purchase...</LastOrderTitle>
                <LastOrder>{this.renderLatestPurchase()}</LastOrder>
                <hr/>
                <PrevOrderTitle>Previous orders:</PrevOrderTitle>
                </>
                : 
                <NoPurchases>You haven't made any purchases yet!</NoPurchases>
                }
                    {this.renderPurchases()}
                </PurchaseColumn>
            </PurchaseWrapper>
            <Footer />
            </>
            :
            <Redirect to="/login"/>}
            
            </>
        )}
}

export default Profile
