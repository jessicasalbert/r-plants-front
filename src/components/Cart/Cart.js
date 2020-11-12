import React, { Component } from 'react'
import CartItem from '../CartItem/CartItem'
import Footer from '../Footer/Footer'
import {CartWrapper, CartStyle, EmptyCart, Total, SignUpLink, CheckoutLink, Heading, TotalButtonWrapper} from './CartStyle'


export class Cart extends Component {



    renderCart = () => {
        return this.props.cart.map(item => (<CartItem deleteHandler={this.props.deleteHandler} plant={item} key={this.props.cart.indexOf(item)} />))
    }


    render() {
        // console.log(this.props.user ? this.props.user.id : "none")
        return (
            <>
            <CartWrapper>
                <Heading>cart</Heading>
                <CartStyle>
                    {this.props.cart.length > 0 
                    ?
                    <> 
                    {this.renderCart()}
                    {
                        this.props.user ? 
                        <TotalButtonWrapper>
                        <CheckoutLink to="/checkout">Proceed to checkout</CheckoutLink><Total>Total: ${this.props.total}</Total>
                        </TotalButtonWrapper>
                        :
                        <TotalButtonWrapper>
                        <CheckoutLink to="/checkout">Checkout as Guest</CheckoutLink>
                        <SignUpLink to="/login">Sign In</SignUpLink>
                        <Total>Total: ${this.props.total}</Total>
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
}

export default Cart
