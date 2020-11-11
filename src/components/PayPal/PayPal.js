import React, { Component } from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import PPstyle from './PayPalStyle'

export class PayPal extends Component {
    logHi = () => {
        console.log(this.props.purchaseHandler)
    }

    render() {
        return (
                <PPstyle><PayPalButton
                amount={this.props.amount} 
                onSuccess={this.props.purchaseHandler}/></PPstyle>
        )
    }
}

export default PayPal
