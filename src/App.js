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

class App extends React.Component {
  state = {
    cart: [],
    user: null,
    plants: null,
    cartTotal: 0
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
      fetch("http://localhost:3000/api/v1/profile", options)
      .then(res=>res.json())
      .then(data=> this.setState({ user: data.user}))
    } else {
      this.props.history.push("/signup")
    }
    this.setState( () => (
      { cart: localCart ? localCart : [] ,
      cartTotal: cartTotal ? cartTotal : 0}
      ))
    
    fetch(`http://localhost:3000/api/v1/items`)
    .then(res => res.json())
    .then(res => this.setState({plants: res}))
    .catch(console.log)
  
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

    fetch("http://localhost:3000/api/v1/users", options)
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
    fetch("http://localhost:3000/api/v1/login", options)
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
        body: JSON.stringify({plant: newPlant})
    }

    fetch("http://localhost:3000/api/v1/plants", options)
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
    this.setState( (prev) => ({
      cartTotal: Math.round((prev.cartTotal + ((parseFloat(item.price[size]) * parseFloat(quantity))) + Number.EPSILON) * 100) / 100
    }))
    let index = this.state.cart.findIndex( cartItem => cartItem.size === size && cartItem.id === item.id)
    if (index === -1) {
      this.setState((prev) => ({
        cart: [...prev.cart, item]
      }), () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart))
        localStorage.setItem("total", JSON.stringify(this.state.cartTotal))
      })
    } else {
      const newCart = [...this.state.cart]
      newCart[index].quantity = parseInt(newCart[index].quantity) + parseInt(item.quantity)
      this.setState(() => ({
        cart: newCart
      }), () => {
        localStorage.setItem("cart", JSON.stringify(this.state.cart))
        localStorage.setItem("total", JSON.stringify(this.state.cartTotal))
      })
    }
    

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
      <div>
        <NavBar user={this.state.user} cart={this.state.cart} logoutHandler={this.logoutHandler}/>
        <Switch>
          <Route path="/plants" render={() => (<PlantsContainer addToCart={this.addToCart}/>)}/>
          <Route path="/cart" render={() => (<Cart cart={this.state.cart} total={this.state.cartTotal} />)}/>
          <Route path="/signup" render={() => (<SignUp submitHandler={this.signupHandler}/>)}/>
          <Route path="/login" render={() => (<Login submitHandler={this.loginHandler}/>)}/>
          <Route path="/profile" render={() => (<Profile user={this.state.user} /> )}/>
          <Route path="/newplant" render={() => (<NewPlant submitHandler={this.addPlantHandler}/>)}/>
          <Route path="/" render={() => (<Welcome plants={this.state.plants}/ > )}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
