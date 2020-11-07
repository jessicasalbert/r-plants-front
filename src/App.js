import './App.css'
import React from 'react'
import { Route, Switch, withRouter } from "react-router-dom"
import StoreFront from './components/StoreFront/StoreFront'
import PlantsContainer from './components/PlantsContainer/PlantsContainer'
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import Cart from './components/Cart/Cart'
import SignUp from './components/SignUp/SignUp'
import Login from './components/Login/Login'
import Profile from './components/Profile/Profile'

class App extends React.Component {
  state = {
    cart: [],
    user: null
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
    .then(data => this.setState({ user: data.user }, () => this.props.history.push("/")))
    .catch(console.log)
  }

  addToCart = (item) => {
    this.setState((prev) => ({
      cart: [...prev.cart, item]
    }))
  }

  render() {
    
    return (
      <div>
        <NavBar user={this.state.user} cart={this.state.cart}/>
        <Switch>
          <Route path="/plants" render={() => (<PlantsContainer addToCart={this.addToCart}/>)}/>
          <Route path="/cart" render={() => (<Cart cart={this.state.cart}/>)}/>
          <Route path="/signup" render={() => (<SignUp submitHandler={this.signupHandler}/>)}/>
          <Route path="/login" render={() => (<Login submitHandler={this.loginHandler}/>)}/>
          <Route path="/profile" render={() => (<Profile user={this.state.user}/>)}/>
          <Route path="/" render={() => (<StoreFront/>)}/>
        </Switch>
      </div>
    )
  }
}

export default withRouter(App)
