import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {CartCard, CartImage, Delete, CartText, Price, Name, Quantity, Size} from './CartItemStyle'

export class CartItem extends Component {
    state = {
        size: "small",
        quantity: 1
    }


    localDeleteHandler = () => {
        this.props.deleteHandler(this.props.plant.id, this.props.plant.size, this.props.plant.quantity)
    }
    

    render() {
        return (
            <CartCard>
                <NavLink to={`/plants/${this.props.plant.id}`}><CartImage src={this.props.plant.image}></CartImage></NavLink>
                <CartText>
                <NavLink to={`/plants/${this.props.plant.id}`}><Name>{this.props.plant.name}</Name></NavLink>
                    <Size>Size: {this.props.plant.size[0].toUpperCase() + this.props.plant.size.slice(1)}</Size>
                    <Quantity>Quantity: {this.props.plant.quantity}</Quantity>
                    <Price>Price: ${this.props.plant.price[this.props.plant.size] * this.props.plant.quantity}</Price>
                    <Delete onClick={this.localDeleteHandler}> Delete </Delete>
                
                </CartText>
            </CartCard>
        )
    }
}

export default CartItem

