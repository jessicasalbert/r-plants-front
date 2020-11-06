import React, { Component } from 'react'

export class Cart extends Component {
    renderCart = () => {
    return this.props.cart.map(item => (
    <>
    <h1>{item.name}</h1>
    <p>image</p>
    <p>Price</p>
    <select></select>
    <hr></hr>
    </>
    ))
    }
    render() {
        return (
            <div>
                {this.renderCart()}
                <button>buy</button>
            </div>
        )
    }
}

export default Cart
