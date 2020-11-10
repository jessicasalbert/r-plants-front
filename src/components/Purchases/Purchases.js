import React, { Component } from 'react'
import { PurchasesStyle } from './PurchasesStyle'

export class Purchases extends Component {

    state={
        clicked: false
    }

    localRenderItems = () => {
        this.setState((prev) => ({ clicked: !prev.clicked}))
    }

    mapPurchasesWithHeader = () => {
        return(
            <>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th>Size</th>
                    <th>Price</th>
                </tr>
                {this.mapPurchases()}
            </>
        )
    }

    mapPurchases = () => {
        
        return this.props.order.purchases.map( purchase => {
            return (
                <tr>
                    <td>{purchase.item_name}</td>
                    <td> {purchase.quantity}</td>
                    <td>{purchase.size}</td>
                    <td>${purchase.price} ea</td>
                </tr>
            )
        })
    }
    render() {
        return(
            
            <PurchasesStyle onClick={this.localRenderItems}>
                <tr className="order">
                <td>{this.props.order.order_number} |</td>
                <td>{this.props.order.total} |</td>
                <td>{this.props.order.created_at}</td>
                </tr>
                {this.state.clicked ? this.mapPurchasesWithHeader() : null }

            </PurchasesStyle>
            
        )}
}

export default Purchases
