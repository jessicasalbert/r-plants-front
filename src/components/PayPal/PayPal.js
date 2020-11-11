import React, { Component } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { PayPalButton } from 'react-paypal-button-v2'
import PPstyle from './PayPalStyle'

export class PayPal extends Component {
    logHi = () => {
        console.log(this.props.purchaseHandler)
    }

    render() {
        return (
            // <PayPalScriptProvider options={{ "client-id": "sb" }}>
                <PPstyle><PayPalButton
                
                amount={this.props.amount} 
                onSuccess={this.props.purchaseHandler}/></PPstyle>
            // </PayPalScriptProvider>
        )
    }
}

export default PayPal
