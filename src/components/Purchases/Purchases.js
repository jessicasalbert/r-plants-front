import React, { Component } from 'react'
import { PurchaseStyle, PurchaseTable } from './PurchasesStyle'

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
                <PurchaseStyle onClick={this.localRenderItems}>
                    <PurchaseTable>
                    <td>Order #{this.props.order.order_number} &nbsp;-&nbsp;&nbsp;</td>
                    <td>Total: ${this.props.order.total} &nbsp;-&nbsp;&nbsp;</td>
                    <td>{this.props.order.created_at}</td>
                    </PurchaseTable>
                    {this.state.clicked ? this.mapPurchasesWithHeader() : null }
                </PurchaseStyle>
        )}
}

export default Purchases
