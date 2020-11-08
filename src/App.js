import './App.css'
import React from 'react'
import { Route, Switch, withRouter } from "react-router-dom"
import StoreFront from './components/StoreFront/StoreFront'
import PlantsContainer from './components/PlantsContainer/PlantsContainer'
import NavBar from './components/NavBar/NavBar'
import NavBar2 from './components/NavBar/NavBar2'
import Cart from './components/Cart/Cart'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

class App extends React.Component {
  state = {
    cart: [],
    user: null,
    plants: null
  }

  componentDidMount () {
    const token = localStorage.getItem("token")
    const localCart = JSON.parse(localStorage.getItem("cart"))
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
    this.setState( () => ({ cart: localCart ? localCart : [] }))
    
   
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
    .then(data => this.setState({ user: data.user }, () => this.props.history.push("/")))
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

  addToCart = (item, size) => {
    item['size'] = size
    this.setState((prev) => ({
      cart: [...prev.cart, item]
    }), () => {localStorage.setItem("cart", JSON.stringify(this.state.cart))})

  }

  logoutHandler = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("cart")
    this.props.history.push("/login")
    this.setState({ user: null, cart: [] })
  }

  render() {
    console.log(this.state.plants)
    return (
      <div>
        <NavBar2 user={this.state.user} cart={this.state.cart} logoutHandler={this.logoutHandler}/>
        <Switch>
          <Route path="/plants" render={() => (<PlantsContainer addToCart={this.addToCart}/>)}/>
          <Route path="/cart" render={() => (<Cart cart={this.state.cart}/>)}/>
          <Route path="/signup" render={() => (<SignUp submitHandler={this.signupHandler}/>)}/>
          <Route path="/login" render={() => (<Login submitHandler={this.loginHandler}/>)}/>
          <Route path="/profile" render={() => (<Profile user={this.state.user} /> )}/>
          <Route path="/" render={() => (<StoreFront plants={this.state.plants}/ >)}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
