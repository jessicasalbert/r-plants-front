import React from 'react'
import CartItem from '../CartItem/CartItem'
import Footer from '../Footer/Footer'
import {CartWrapper, CartStyle, EmptyCart, Total, SignUpLink, CheckoutLink, Heading, TotalButtonWrapper} from './CartStyle'


export default function Cart(props) {

    function renderCart() {
        return props.cart.map(item => (<CartItem deleteHandler={props.deleteHandler} plant={item} key={props.cart.indexOf(item)} />))
    }

        return (
            <>
            <CartWrapper>
                <Heading>cart</Heading>
                <CartStyle>
                    {props.cart.length > 0 
                    ?
                    <> 
                    {renderCart()}
                    {
                        props.user ? 
                        <TotalButtonWrapper>
                        <CheckoutLink to="/checkout">Proceed to checkout</CheckoutLink><Total>Total: ${props.total}</Total>
                        </TotalButtonWrapper>
                        :
                        <TotalButtonWrapper>
                        <CheckoutLink to="/checkout">Checkout as Guest</CheckoutLink>
                        <SignUpLink to="/login">Sign In</SignUpLink>
                        <Total>Total: ${props.total}</Total>
                        </TotalButtonWrapper>
                    }
                    </>
                    : 
                    <><hr></hr><EmptyCart>Your shopping cart is empty!</EmptyCart></>}
                </CartStyle>
            </CartWrapper>
            <Footer />
            </>
        )
}
