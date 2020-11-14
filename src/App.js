import './App.css'
import React from 'react'
import { Route, Switch, withRouter } from "react-router-dom"
import PlantsContainer from './components/PlantsContainer/PlantsContainer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import NewPlant from './components/NewPlant/NewPlant'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'
import Welcome from './components/Welcome/Welcome'
import Checkout from './components/Checkout/Checkout'
import Success from './components/Success/Success'

class App extends React.Component {
  state = {
    cart: [],
    user: null,
    plants: null,
    cartTotal: 0, 
    completedOrderNumber: null
  }

  componentDidMount () {
    const token = localStorage.getItem("token")
    const localCart = JSON.parse(localStorage.getItem("cart"))
    const cartTotal = JSON.parse(localStorage.getItem("total"))
    if (token) {
      const options = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}` }
        }
      fetch("https://rplants-backend.herokuapp.com/api/v1/profile", options)
      .then(res=>res.json())
      .then(data=> this.setState({ user: data.user}))
    } else {
      this.props.history.push("/")
    }
    this.setState( () => (
      { cart: localCart ? localCart : [] ,
      cartTotal: cartTotal ? cartTotal : 0}
      ))
    
    fetch(`https://rplants-backend.herokuapp.com/api/v1/items`)
    .then(res => res.json())
    .then(res => this.setState({plants: res}))
    .catch(console.log)
  }

  setLocalStorage = (newCart, newTotal) => {
    // console.log(newCart, newTotal)
    if (newCart.length === 0) {
      localStorage.removeItem("cart")
    } else {
      localStorage.setItem("cart", JSON.stringify(newCart))
    }
    if (newTotal === "0") {
      localStorage.removeItem("total")
    } else {
      localStorage.setItem("total", JSON.stringify(newTotal))
    }
  }

  deleteHandler = (id, size, quantity) => {
    const index = this.state.cart.findIndex( item => item.id === id && item.size === size)
    const item = this.state.cart[index]
    const priceToSubtract = parseFloat(item.price[item.size]) * parseFloat(item.quantity)
    const newTotal = Math.round(((parseFloat(this.state.cartTotal) - priceToSubtract) + Number.EPSILON) * 100) / 100
    const newCart = this.state.cart
    newCart.splice(index, 1)
    this.setState( () => ({
      cart: newCart,
      cartTotal: newTotal
    }), this.setLocalStorage(newCart, newTotal))
    // console.log(newCart)
    
  }

  signupHandler = userObj => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({user: userObj})
    }

    fetch("https://rplants-backend.herokuapp.com/api/v1/users", options)
    .then(resp => resp.json())
    .then(data => {
      this.setState({ user: data.user }, () => this.props.history.push("/"))
      localStorage.setItem("token", data.jwt)
    })
    .catch(console.log)
  }

  loginHandler = userInfo => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "content-type": "application/json"
      },
      body: JSON.stringify({user: userInfo})
    }
    fetch("https://rplants-backend.herokuapp.com/api/v1/login", options)
    .then(resp => resp.json())
    .then(data => {
      localStorage.setItem("token", data.jwt)
      this.setState({ user: data.user }, () => this.props.history.push("/"))
    })
    .catch(console.log)
  }

    addPlantHandler = newPlant => {
    let options = {
        method: "POST",
        headers: {
            Accept: "application/json",
            "content-type": "application/json"
        },
        body: JSON.stringify({item: newPlant})
    }

    fetch("https://rplants-backend.herokuapp.com/api/v1/items", options)
    .then(resp => resp.json())
    .then(newest => {
        this.setState({
            plants: [...this.state.plants, newest]
        })
    })
    .catch(console.log)
    }


  addToCart = (item, size, quantity) => {
    item['size'] = size
    item['quantity'] = quantity
    const newTotal = Math.round((this.state.cartTotal + ((parseFloat(item.price[size]) * parseFloat(quantity))) + Number.EPSILON) * 100) / 100
    this.setState( (prev) => ({
      cartTotal: newTotal
    }))
    // console.log(size)
    let index = this.state.cart.findIndex( cartItem => (cartItem.size === size && cartItem.id === item.id))
    // console.log(index)
    if (index === -1) {
      const newCart = [...this.state.cart, item]
      this.setState((prev) => ({
        cart: newCart
      }), () => {
        localStorage.setItem("cart", JSON.stringify(newCart))
        localStorage.setItem("total", JSON.stringify(newTotal))
      })
    } else {
      const newCart = [...this.state.cart]
      newCart[index].quantity = parseInt(newCart[index].quantity) + parseInt(item.quantity)
      this.setState(() => ({
        cart: newCart
      }), () => {
        localStorage.setItem("cart", JSON.stringify(newCart))
        localStorage.setItem("total", JSON.stringify(newTotal))
        
      })
    }
    this.props.history.push("/plants")
  }

  clearGuestUser = () => {
    this.setState({ user: null})
  }

  redirectToWelcome = () => {
    this.props.history.push("/")
  }


  redirectToSuccess = (order_number) => {
    this.setState(() => ({ 
      completedOrderNumber: order_number,
      cart: [],
      cartTotal: 0
    }), this.props.history.push("/success"))
  }

  logoutHandler = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("cart")
    localStorage.removeItem("total")
    this.props.history.push("/login")
    this.setState({ user: null, cart: [], cartTotal: 0 })
  }

  render() {
    return (
      <>
        <NavBar user={this.state.user} cart={this.state.cart} logoutHandler={this.logoutHandler}/>
        <Switch>
          <Route path="/plants" render={() => (<PlantsContainer addToCart={this.addToCart} redirectToShop={this.redirectToShop}/>)}/>
          <Route exact path="/cart" render={() => (<Cart deleteHandler={this.deleteHandler} cart={this.state.cart} total={this.state.cartTotal} user={this.state.user} />)}/>
          <Route exact path="/signup" render={() => (<SignUp submitHandler={this.signupHandler}/>)}/>
          <Route exact path="/login" render={() => (<Login submitHandler={this.loginHandler}/>)}/>
          <Route exact path="/profile" render={() => (<Profile user={this.state.user} /> )}/>
          <Route exact path="/newplant" render={() => (<NewPlant submitHandler={this.addPlantHandler}/>)}/>
          <Route exact path="/checkout" render={() => (<Checkout redirectToSuccess={this.redirectToSuccess} clearGuestUser={this.clearGuestUser} cart={this.state.cart} total={this.state.cartTotal} user={this.state.user}/>)}/>
          <Route exact path="/success" render={() => (<Success order_number={this.state.completedOrderNumber} redirectToWelcome={this.redirectToWelcome}/> )}/>
          <Route exact path="/" render={() => (<Welcome plants={this.state.plants}/> )}/>
        </Switch>
      </>
    )
  }
}

export default withRouter(App)
