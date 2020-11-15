import React from 'react'
import { PayPalButton } from 'react-paypal-button-v2'
import PPstyle from './PayPalStyle'

export default function PayPal(props) {
        let color = {
            color: "silver"
        }
    
        return (
                <PPstyle><PayPalButton
                style={color}
                amount={props.amount} 
                onSuccess={props.purchaseHandler}
                />
                </PPstyle>
        )
}
