import React, { Component } from 'react'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export class PayPal extends Component {
    render() {
        return (
            <PayPalScriptProvider options={{ "client-id": "sb" }}>
                <PayPalButtons style={{ layout: "horizontal" }} />
            </PayPalScriptProvider>
        )
    }
}

export default PayPal
